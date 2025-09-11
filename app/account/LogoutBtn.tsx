'use client';

import { toast } from 'react-toastify';
import { logout } from './actions';

const handleLogout = async () => {
	await logout();
	localStorage.removeItem('lastSession');
	toast.info('you have logged out');
};

export default function LogoutBtn() {
	return (
		<>
			<button
				className={
					'bg-navy text-white rounded-lg py-2 px-4 text-xl w-3/5'
				}
				onClick={handleLogout}
			>
				Logout
			</button>
		</>
	);
}
