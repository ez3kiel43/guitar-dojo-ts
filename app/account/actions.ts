'use server';

import { redirect } from 'next/navigation';
import { createClient } from '../utils/server';

export async function logout() {
	const supabase = await createClient();
	supabase.auth.signOut();
	redirect('/');
}

export async function deleteAccount() {}
