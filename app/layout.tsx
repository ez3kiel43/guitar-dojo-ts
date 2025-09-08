import type { Metadata } from 'next';
import { Solway } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Logo from './assets/img/logo.svg';
import AppHeader from './components/AppHeader';
import AppMenu from './components/AppMenu';

const solway = Solway({
	variable: '--font-solway',
	subsets: ['latin'],
	weight: '400',
});

export const metadata: Metadata = {
	title: 'Guitar Dojo',
	description: 'A training app for all your guitar needs',
	icons: {
		icon: './favicon.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`text-solway antialiased bg-white w-dvw h-dvh flex flex-col overflow-hidden`}
			>
				<AppHeader />
				<main className="w-full h-full p-2 pb-24">{children}</main>
				<footer className="bg-navy h-20 w-screen fixed bottom-0">
					<Image
						src={Logo}
						alt="Guitar Dojo"
						className="h-full w-1/2"
						priority
					/>
					<AppMenu />
				</footer>
			</body>
		</html>
	);
}
