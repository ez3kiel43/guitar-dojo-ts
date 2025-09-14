'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import { signup } from '../actions/signup';
import { toast } from 'react-toastify';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const data: { success: boolean; user: User | null } = await signup(
			email,
			password
		);

		if (data.success === true) {
			router.push('/login');
			toast.warn('Please verify your email before logging in');
		}
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
				Sign Up
			</button>
		</form>
	);
}
