'use client';
import SaveChord from '../components/SaveChordForm';
import { useState } from 'react';
import ChordTemplate from '../components/ChordTemplate';

export default function AddChords() {
	const [strings, setStrings] = useState<number[]>([0, 0, 0, 0, 0, 0]);

	// define return type of click position
	type ClickPos = { x: number; y: number };

	const getClickPos = (e: React.MouseEvent<SVGSVGElement>): ClickPos => {
		const svg = e.currentTarget.closest('svg');
		if (!svg) return { x: 0, y: 0 };

		const rect = svg.getBoundingClientRect();

		const click = { x: e.clientX, y: e.clientY };

		const ratioX = (rect.right - rect.left) / 240;
		const ratioY = (rect.bottom - rect.top) / 360;

		const string = Math.floor((click.x - rect.left) / ratioX / 40);
		const fret = Math.round((click.y - rect.top) / ratioY / 60);

		return { x: string, y: fret };
	};

	const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
		const coords = getClickPos(e);

		setStrings(prevStrings => {
			const newStrings = [...prevStrings];

			if (coords.y === 0) {
				newStrings[coords.x] = newStrings[coords.x] === 0 ? -1 : 0;
			} else {
				newStrings[coords.x] = coords.y;
			}

			return newStrings;
		});
	};

	return (
		<>
			<section className="my-4 h-full w-full mx-auto">
				<div className="h-3/5">
					<ChordTemplate
						clickFn={handleClick}
						chordData={strings}
					/>
				</div>
				<div className="h-2/5">
					<SaveChord />
				</div>
			</section>
		</>
	);
}
