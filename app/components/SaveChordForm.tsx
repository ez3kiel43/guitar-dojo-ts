export default function SaveChord() {
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
			}}
			className="md:w-2/5"
		>
			<label
				htmlFor="chord_name"
				className="flex flex-col w-9/12 mt-2 text-navy"
			>
				Chord Name:
				<input
					type="text"
					name="chord_name"
					id="chord_name"
					className="my-3 border-navy border-2 rounded-md w-full"
					required
				/>
			</label>
			<label
				htmlFor="fret_num"
				className="flex flex-col justify-start w-9/12 mt-2 text-navy"
			>
				Fret:
				<input
					type="number"
					min={0}
					max={10}
					name="fret_num"
					id="fret_num"
					className="my-3 border-navy border-2 rounded-md w-1/4"
				/>
			</label>
			<input
				type="submit"
				value={'Save Chord'}
				className="my-3 border-navy border-2 rounded-md text-navy p-2 font-serif bg-sand"
			/>
		</form>
	);
}
