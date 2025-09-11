import type { Metadata } from 'next';
import { Solway } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Logo from './assets/img/logo.svg';
import AppHeader from './components/AppHeader';
import AppMenu from './components/AppMenu';
import { AuthListener } from './auth/AuthListener';
import { ToastContainer } from 'react-toastify';
import { createClient } from './utils/server';
import { cookies } from 'next/headers';

export const solway = Solway({ weight: '400' });

export const metadata: Metadata = {
	title: 'Guitar Dojo',
	description: 'A training app for all your guitar needs',
	icons: {
		icon: './favicon.svg',
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const supabase = await createClient();

	const {
		data: { session },
	} = await supabase.auth.getSession();
	return (
		<html lang="en">
			<body
				className={`${solway.className} antialiased bg-white w-dvw h-dvh flex flex-col`}
			>
				<AppHeader />
				<main className="w-full h-full p-2 pb-24">
					{children}

					<AuthListener serverSession={session} />
				</main>
				<footer className="bg-navy h-20 w-screen fixed bottom-0">
					<Image
						src={Logo}
						alt="Guitar Dojo"
						className="h-full w-1/2"
						priority
					/>
					<AppMenu />
				</footer>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</body>
		</html>
	);
}
