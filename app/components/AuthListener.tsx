'use client';

import { useEffect } from 'react';
import { supabaseBrowserClient } from '../utils/supabaseBrowserClient';
import { toast } from 'react-toastify';

export function AuthListener() {
	useEffect(() => {
		const lastSessionId = localStorage.getItem('lastSession');

		const checkSession = async () => {
			const {
				data: { session },
			} = await supabaseBrowserClient.auth.getSession();
			if (session && lastSessionId !== session.user.id) {
				toast.success(`Welcome back, ${session.user.email}!`);
				localStorage.setItem('lastSession', session.user.id);
			}
		};

		checkSession();

		const {
			data: { subscription },
		} = supabaseBrowserClient.auth.onAuthStateChange((event, session) => {
			if (event === 'SIGNED_IN' && session) {
				toast.success(`Welcome back, ${session.user.email}!`);
				localStorage.setItem('lastSession', session.user.id);
			}
			if (event === 'SIGNED_OUT') {
				toast.info('You have logged out.');
				localStorage.removeItem('lastSession');
			}
		});

		return () => subscription.unsubscribe();
	}, []);

	return null;
}
