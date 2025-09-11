'use client';
import { useState } from 'react';
import ChordTemplate from '../components/ChordTemplate';
import Info from '../assets/data/chords.json';
import SelectionMenu from '../components/ChordSelection';

export interface ChordTypes {
	cName: string;
	strings: number[];
	fret: number;
}

export default function Home() {
	const [chords, setChords] = useState<ChordTypes[]>([
		{ cName: 'A', strings: [-1, 0, 2, 2, 2, 0], fret: 0 },
		{ cName: 'Am', strings: [-1, 0, 2, 2, 1, 0], fret: 0 },
		{ cName: 'Asus', strings: [-1, 0, 2, 2, 3, 0], fret: 0 },
	]);
	const [currentChord, setCurrentChord] = useState<number>(0);

	const changeChord = (e: React.MouseEvent<HTMLButtonElement>) => {
		const index = chords.findIndex(c => {
			return e.currentTarget.textContent == c.cName;
		});
		setCurrentChord(index);
	};

	const changeFamily = (letter: string) => {
		const tempArr: ChordTypes[] = [];

		Info.map(c => {
			if (c.cName[0] === letter.toUpperCase()) {
				tempArr.push(c);
			}
		});

		setCurrentChord(0);

		setChords(tempArr);
	};

	return (
		<div className="w-full h-full">
			<h2 className="text-center text-3xl font-serif text-navy">
				{chords[currentChord].cName}
			</h2>
			<div className="h-3/5">
				<ChordTemplate
					clickFn={() => {}}
					chordData={chords[currentChord].strings}
				/>
			</div>
			<div className="h-1/5">
				<SelectionMenu
					data={chords}
					boxClickFn={changeChord}
					changeFn={changeFamily}
				/>
			</div>
		</div>
	);
}
