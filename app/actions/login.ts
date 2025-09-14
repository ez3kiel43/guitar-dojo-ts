'use client';

import { supabaseBrowserClient } from '../utils/supabaseBrowserClient';
import { toast } from 'react-toastify';

export async function login(email: string, password: string) {
	const { data, error } =
		await supabaseBrowserClient.auth.signInWithPassword({
			email,
			password,
		});

	if (error) {
		toast.error(error.message || 'Login failed');
		return { success: false, user: null };
	}

	if (data.session?.user) {
		return { success: true, user: data.session.user };
	}

	return { success: false, user: null };
}
