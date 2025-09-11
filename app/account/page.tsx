import { Logout } from './actions';

export default function AccountPage() {
	return (
		<>
			<p>
				<b>Email:</b> myemail@mail.com
			</p>
			<button
				className="border-maroon text-maroon border-4 rounded py-2 px-4 text-xl"
				onClick={Logout}
			>
				Logout
			</button>
		</>
	);
}
