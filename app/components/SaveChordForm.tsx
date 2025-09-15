export default function SaveChord() {
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
			}}
			className="md:w-2/5"
		>
			<div className="flex justify-between items-end">
				<label
					htmlFor="chord_family"
					className="font-serif text-navy block w-2/5"
				>
					Chord Family:
					<select
						name="chord_family"
						id="chord_family"
						className="bg-sand text-navy w-full h-8 my-2 font-serif text-lg"
					>
						<option value="A">A</option>
						<option value="B">B</option>
						<option value="C">C</option>
						<option value="D">D</option>
						<option value="E">E</option>
						<option value="F">F</option>
						<option value="G">G</option>
					</select>
				</label>
				<label
					htmlFor="chord_name"
					className="flex flex-col w-1/4 mt-2 text-navy"
				>
					Chord Suffix:
					<input
						type="text"
						name="chord_name"
						id="chord_name"
						className="my-3 border-navy border-2 rounded-md w-full"
					/>
				</label>

				<label
					htmlFor="fret_num"
					className="flex flex-col justify-start mt-2 text-navy"
				>
					Fret:
					<input
						type="number"
						min={0}
						max={12}
						name="fret_num"
						id="fret_num"
						className="my-3 border-navy border-2 rounded-md w-full"
					/>
				</label>
			</div>
			<input
				type="submit"
				value={'Save Chord'}
				className="my-6 border-navy border-2 rounded-md text-navy p-2 font-serif bg-sand w-2/3"
			/>
		</form>
	);
}
