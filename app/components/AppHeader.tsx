'use client';

import { usePathname } from 'next/navigation';

export default function AppHeader() {
	const pathname = usePathname();

	const getHeaderText = () => {
		switch (pathname) {
			case '/add':
				return 'Add a Chord';
			case '/time':
				return 'Time Trial';
			case '/account':
				return 'Account Info';
			default:
				return 'Learn Chords';
		}
	};

	return (
		<header className="bg-sand h-12 font-serif w-screen text-navy p-4">
			<h2 className="text-xl">{getHeaderText()}</h2>
		</header>
	);
}
