import type { Metadata } from 'next';
import { Solway } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Logo from './assets/img/logo.svg';

const solway = Solway({
	variable: '--font-solway',
	subsets: ['latin'],
	weight: '400',
});

const Metadata = {
	title: 'Guitar Dojo',
	description: 'A training app for all your guitar needs',
	icons: {
		icon: '/favicon.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{' '}
			<body className={`${solway.variable} antialiased bg-white`}>
				<main>{children}</main>
				<footer className="bg-navy h-20 fixed bottom-0 w-screen">
					<Image src={Logo} alt="Guitar Dojo" />
					<AppMenu />
				</footer>
			</body>
		</html>
	);
}
