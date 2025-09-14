'use client';
import { useEffect, useState } from 'react';
import LogoutBtn from '../components/LogoutBtn';
import { supabaseBrowserClient } from '../utils/supabaseBrowserClient';
import { User } from '@supabase/supabase-js';

export default function AccountPage() {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		async function getUserInfo() {
			const {
				data: { user },
			} = await supabaseBrowserClient.auth.getUser();

			setUser(user || null); // set the actual user object
		}

		getUserInfo();
	}, []); // run only once on mount

	return (
		<div className="flex flex-col justify-between h-full">
			<div className="h-1/2 flex flex-col gap-12">
				<p className="text-lg text-navy">
					<b>Email:</b> {user?.email}
				</p>
				<LogoutBtn />
			</div>
			<div className="h-1/2 flex flex-col gap-4">
				<button className="text-white bg-maroon  rounded-lg py-2 px-4 text-xl">
					Delete Account
				</button>
			</div>
		</div>
	);
}
