interface chordBoxTypes {
	chordName: string;
	clickFn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ChordBox({ chordName, clickFn }: chordBoxTypes) {
	return (
		<button
			onClick={clickFn}
			className="border-navy rounded-md border-4 w-16 h-12 font-serif text-navy solway text-lg"
		>
			{chordName}
		</button>
	);
}
