'use client';

import { supabaseBrowserClient } from '../utils/supabaseBrowserClient';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export async function login(email: string, password: string) {
	const router = useRouter();

	const { data, error } =
		await supabaseBrowserClient.auth.signInWithPassword({
			email,
			password,
		});

	if (error) {
		toast.error(error.message || 'Login failed');
		return false;
	}

	if (data.session?.user) {
		// save session info for toast deduping if needed
		localStorage.setItem('lastSession', data.session.user.id);

		toast.success(`Welcome back, ${data.session.user.email}!`);

		// redirect after toast
		router.push('/learn');
		return true;
	}

	return false;
}
