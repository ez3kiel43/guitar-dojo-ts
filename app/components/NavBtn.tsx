import Link from 'next/link';

interface NavbtnProps {
	title: string;
	closed: boolean;
	delay: number;
	closeFn: () => void;
	path: string;
}

export default function NavBtn({
	title,
	closed,
	delay,
	closeFn,
	path,
}: NavbtnProps) {
	return (
		<Link
			href={`/${path}`}
			onClick={closeFn}
			className={` relative bg-sand text-navy rounded-3xl w-48 h-8 text-right px-4 transition-all duration-150 ${
				!closed ? `-right-64` : ` right-0`
			}`}
			style={{ transitionDelay: `${delay * 50}ms` }}
		>
			<button className="h-full">{title}</button>
		</Link>
	);
}
