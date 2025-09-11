import ChordBox from './ChordBox';

import { ChordTypes } from '../learn/page';

interface selectionMenuTypes {
	data: ChordTypes[];
	boxClickFn: (e: React.MouseEvent<HTMLButtonElement>) => void;
	changeFn: (arg0: string) => void;
}

export default function SelectionMenu({
	data,
	boxClickFn,
	changeFn,
}: selectionMenuTypes) {
	return (
		<section className="h-56">
			<label
				htmlFor="chord-selection"
				className="font-serif text-navy text-xl block"
			>
				Chord Family:
			</label>
			<select
				id="chord-selection"
				name="chord-selection"
				className="bg-sand text-navy w-2/5 h-8 my-2 font-serif text-lg"
				onChange={e => {
					changeFn(e.target.value);
				}}
			>
				<option value={'a'}>A</option>
				<option value={'b'}>B</option>
				<option value={'c'}>C</option>
				<option value={'d'}>D</option>
				<option value={'e'}>E</option>
				<option value={'f'}>F</option>
				<option value={'g'}>G</option>
			</select>
			<article className="flex w-full gap-1 overflow-x-auto">
				{data.map((chord, i) => {
					return (
						<ChordBox
							chordName={chord.cName}
							clickFn={boxClickFn}
							key={`${chord.cName}_${i}`}
						/>
					);
				})}
			</article>
		</section>
	);
}
