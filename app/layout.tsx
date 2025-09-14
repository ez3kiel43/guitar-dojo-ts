import './globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppHeader from './components/AppHeader';
import AppMenu from './components/AppMenu';
import { AuthListener } from './components/AuthListener';
import Image from 'next/image';
import Logo from './assets/img/logo.svg';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-white w-dvw h-dvh flex flex-col overflow-hidden">
				<AppHeader />
				<main className="flex-1 p-2 pb-24">
					{children}
					<AuthListener />
					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
					/>
				</main>
				<footer className="bg-navy h-20 w-screen fixed bottom-0">
					<Image
						src={Logo}
						alt="Guitar Dojo"
						className="h-full"
					/>
					<AppMenu />
				</footer>
			</body>
		</html>
	);
}
