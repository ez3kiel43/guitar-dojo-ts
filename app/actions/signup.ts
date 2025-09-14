'use client';

import { supabaseBrowserClient } from '../utils/supabaseBrowserClient';
import { toast } from 'react-toastify';

export async function signup(email: string, password: string) {
	const { data, error } = await supabaseBrowserClient.auth.signUp({
		email,
		password,
	});

	if (error) {
		toast.error(
			error.message || 'Something went wrong. Please try again'
		);
		return { success: false, user: null };
	}

	if (data.user) {
		// Optional: save session for toast deduping
		if (data.session?.user) {
			localStorage.setItem('lastSession', data.session.user.id);
		}

		if (data.session !== null)
			return { success: true, user: data.session.user };
	}

	return { success: false, user: null };
}
