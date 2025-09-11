import { login, signup } from './actions';

export default async function LoginPage() {
	return (
		<form className="w-full flex flex-col gap-2">
			<label htmlFor="email">Email:</label>
			<input
				id="email"
				name="email"
				type="email"
				required
				className="border-navy border-2 rounded-sm h-8 text-navy text-xl p-2"
			/>
			<label htmlFor="password">Password:</label>
			<input
				id="password"
				name="password"
				type="password"
				required
				className="border-navy border-2 rounded-sm h-8 text-navy text-xl p-2"
			/>
			<button
				formAction={login}
				className="my-3 border-navy border-2 rounded-md text-navy p-2 font-serif bg-sand w-3/5"
			>
				Log in
			</button>
			<button
				formAction={signup}
				className="my-3 border-navy border-2 rounded-md text-navy p-2 font-serif bg-sand w-3/5"
			>
				Sign up
			</button>
		</form>
	);
}
