'use client';

import { supabaseBrowserClient } from '../utils/supabaseBrowserClient';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
	const router = useRouter();

	const handleLogout = async () => {
		await supabaseBrowserClient.auth.signOut();
		localStorage.removeItem('lastSession');
		toast.info('You have logged out');
		router.push('/login'); // or wherever you want
	};

	return (
		<button
			className="text-white bg-maroon rounded-lg py-2 px-4 text-xl"
			onClick={handleLogout}
		>
			Logout
		</button>
	);
}
