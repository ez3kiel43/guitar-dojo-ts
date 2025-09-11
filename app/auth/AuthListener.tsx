'use client';

import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { supabaseBrowserClient } from '../utils/browserClient';

interface AuthListenerProps {
	serverSession?: any; // session passed from SSR if available
}

export function AuthListener({ serverSession }: AuthListenerProps) {
	useEffect(() => {
		console.log(serverSession);
		// --- Check server session on load ---
		if (serverSession) {
			const lastSession = localStorage.getItem('lastSession');

			if (lastSession !== serverSession.user.id) {
				// First time seeing this session
				toast.success(`Welcome back, ${serverSession.user.email}!`);
				localStorage.setItem('lastSession', serverSession.user.id);
			}
		}
	}, [serverSession]);

	return null;
}
