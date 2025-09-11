'use server';

import { redirect } from 'next/navigation';
import { createClient } from '../lib/utils/server';

export async function Logout() {
	const supabase = await createClient();

	supabase.auth.signOut();
	redirect('/');
}
