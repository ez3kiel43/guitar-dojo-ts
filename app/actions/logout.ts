import { redirect } from 'next/navigation';
import { supabaseBrowserClient } from '../utils/supabaseBrowserClient';

export async function logout() {
	supabaseBrowserClient.auth.signOut();
	redirect('/');
}

export async function deleteAccount() {}
