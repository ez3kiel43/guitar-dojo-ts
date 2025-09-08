'use client';

import RenderSymbols from './DrawChord';

type ChordTemplateProps = {
	clickFn: (e: React.MouseEvent<SVGSVGElement>) => void;
	chordData: number[];
};

export default function ChordTemplate({
	clickFn,
	chordData,
}: ChordTemplateProps) {
	return (
		<svg
			id="template"
			data-name="template"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 240 360"
			className="w-4/5 mx-auto my-2 h-full"
			onClick={clickFn}
		>
			<line
				x1="20"
				y1="36"
				x2="224"
				y2="36"
				fill="none"
				stroke="#223146"
				strokeWidth="8"
			/>
			<line
				x1="20"
				y1="98"
				x2="224"
				y2="98"
				fill="none"
				stroke="#223146"
				strokeWidth="4"
			/>
			<line
				x1="20"
				y1="158"
				x2="224"
				y2="158"
				fill="none"
				stroke="#223146"
				strokeWidth="4"
			/>
			<line
				x1="20"
				y1="218"
				x2="224"
				y2="218"
				fill="none"
				stroke="#223146"
				strokeWidth="4"
			/>
			<line
				x1="20"
				y1="278"
				x2="224"
				y2="278"
				fill="none"
				stroke="#223146"
				strokeWidth="4"
			/>
			<line
				x1="20"
				y1="338"
				x2="224"
				y2="338"
				fill="none"
				stroke="#223146"
				strokeWidth="4"
			/>
			<line
				x1="182"
				y1="38"
				x2="182"
				y2="356"
				fill="none"
				stroke="#223146"
			/>
			<line
				x1="222"
				y1="38"
				x2="222"
				y2="356"
				fill="none"
				stroke="#223146"
			/>
			<line
				x1="102"
				y1="38"
				x2="102"
				y2="356"
				fill="none"
				stroke="#223146"
			/>
			<line
				x1="62"
				y1="38"
				x2="62"
				y2="356"
				fill="none"
				stroke="#223146"
			/>
			<line
				x1="22"
				y1="38"
				x2="22"
				y2="356"
				fill="none"
				stroke="#223146"
			/>
			<line
				x1="142"
				y1="38"
				x2="142"
				y2="356"
				fill="none"
				stroke="#223146"
			/>
			<RenderSymbols strings={chordData} />
		</svg>
	);
}
