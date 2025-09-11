'use client';

import { useState } from 'react';
import { login } from '../actions/login';

export default async function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await login(email, password);
	};
	return (
		<form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder="Email"
				required
				className="border-navy border-2 rounded-sm h-8 text-navy text-xl p-2"
			/>
			<label htmlFor="password">Password:</label>
			<input
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder="Password"
				required
				className="border-navy border-2 rounded-sm h-8 text-navy text-xl p-2"
			/>
			<button
				className="my-3 border-navy border-2 rounded-md text-navy p-2 font-serif bg-sand w-3/5"
				type="submit"
			>
				Log in
			</button>
		</form>
	);
}
