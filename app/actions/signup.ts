'use client';

import { supabaseBrowserClient } from '../utils/supabaseBrowserClient';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export async function signup(email: string, password: string) {
	const router = useRouter();

	const { data, error } = await supabaseBrowserClient.auth.signUp({
		email,
		password,
	});

	if (error) {
		toast.error(
			error.message || 'Something went wrong. Please try again'
		);
		return false;
	}

	if (data.user) {
		// Optional: save session for toast deduping
		if (data.session?.user) {
			localStorage.setItem('lastSession', data.session.user.id);
		}

		toast.success('Signup successful! Welcome!');
		router.push('/learn'); // redirect after toast
		return true;
	}

	return false;
}
