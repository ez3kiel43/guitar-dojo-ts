import { deleteAccount, logout } from './actions';
import { createClient } from '../utils/server';
import LogoutBtn from './LogoutBtn';

export default async function AccountPage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div className="flex flex-col justify-between h-full">
			<div className="h-1/2 flex flex-col gap-12">
				<p className="text-lg text-navy">
					<b>Email:</b> {user?.email}
				</p>
				<LogoutBtn />
			</div>
			<div className="h-1/2 flex flex-col gap-4">
				<button
					className="text-white bg-maroon  rounded-lg py-2 px-4 text-xl"
					onClick={deleteAccount}
				>
					Delete Account
				</button>
			</div>
		</div>
	);
}
