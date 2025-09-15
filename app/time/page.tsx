'use client';
import { useState, useEffect } from 'react';
import SelectionMenu from '../components/ChordSelection';
import ChordBox from '../components/ChordBox';
import ChordTemplate from '../components/ChordTemplate';
import { ChordTypes } from '../page';
import Info from './../assets/data/chords.json';
import Image from 'next/image';
import Stopwatch from './../assets/img/stopwatch.svg';
import PlayIcon from './../assets/img/play_icon.svg';
import PauseIcon from './../assets/img/pause_icon.svg';
import StopIcon from './../assets/img/stop_icon.svg';

export default function TimeTrial() {
	const [list, setList] = useState<ChordTypes[]>([]);
	const [chords, setChords] = useState<ChordTypes[]>([
		{ cName: 'A', strings: [-1, 0, 2, 2, 2, 0], fret: 0 },
		{ cName: 'Am', strings: [-1, 0, 2, 2, 1, 0], fret: 0 },
		{ cName: 'Asus', strings: [-1, 0, 2, 2, 3, 0], fret: 0 },
	]);
	const [practicing, setPracticing] = useState<boolean>(false);
	const [currIndex, setCurrIndex] = useState<number>(0);
	const [timeInt, setTimeInt] = useState<number>(5000);
	const [timer, setTimer] = useState<number>(0);
	const [countdown, setCountdown] = useState<number>(0);
	const [timeLeft, setTimeLeft] = useState<number>(timeInt);
	const [order, setOrder] = useState<string | null>(null);

	useEffect(() => {
		if (!practicing) {
			setList([]);
			setChords([
				{ cName: 'A', strings: [-1, 0, 2, 2, 2, 0], fret: 0 },
				{ cName: 'Am', strings: [-1, 0, 2, 2, 1, 0], fret: 0 },
				{ cName: 'Asus', strings: [-1, 0, 2, 2, 3, 0], fret: 0 },
			]);
			setTimeInt(5000);
			setTimeLeft(0);
			setOrder(null);
		}
	}, [practicing]);

	const addToList = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (chords[0].strings != null) {
			const index = chords.findIndex(c => {
				return e.currentTarget.textContent == c.cName;
			});
			setList([...list, chords[index]]);
		} else {
			const index = Info.findIndex(c => {
				return e.currentTarget.textContent == c.cName;
			});
			setList([...list, Info[index]]);
		}
	};

	const changeFamily = (letter: string) => {
		const tempArr: ChordTypes[] = [];

		Info.map(c => {
			if (c.cName[0] === letter.toUpperCase()) {
				tempArr.push(c);
			}
		});

		setCurrIndex(0);

		setChords(tempArr);
	};

	function shuffleArray(array: ChordTypes[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1)); // Random index
			[array[i], array[j]] = [array[j], array[i]]; // Swap elements
		}
		return array;
	}

	function randomCycle() {
		setList(prevList => shuffleArray(prevList));

		setTimer(
			window.setInterval(() => {
				setCurrIndex(prevCurrIndex => {
					if (prevCurrIndex + 1 >= list.length) {
						return 0;
					} else {
						return prevCurrIndex + 1;
					}
				});
			}, timeInt)
		);
		countdownTimer();
	}

	function orderedCycle() {
		setTimer(
			window.setInterval(() => {
				setCurrIndex(prevCurrIndex => {
					return (prevCurrIndex + 1) % list.length;
				});
			}, timeInt)
		);
		countdownTimer();
	}

	function countdownTimer() {
		let timeElapsed = 0;
		setCountdown(
			window.setInterval(() => {
				setTimeLeft(timeInt - (timeElapsed % timeInt));
				timeElapsed += 50;
			}, 50)
		);
	}

	function pause() {
		clearInterval(timer);
		clearInterval(countdown);
		setTimeLeft(0);
	}

	function resume() {
		if (order === 'ordered') {
			orderedCycle();
		} else {
			randomCycle();
		}
	}

	return (
		<>
			{practicing ? (
				<>
					<section className="h-5/6 flex flex-col justify-around">
						<div className="h-3/5">
							<ChordTemplate
								chordData={list[currIndex].strings}
								clickFn={() => {}}
							/>
							<h3 className="font-serif text-navy text-center text-3xl my-2">
								{list[currIndex].cName}
							</h3>
						</div>
						<div>
							<p className="text-maroon ml-4">{`${(
								timeLeft / 1000
							).toFixed(2)}`}</p>
						</div>
						<div className="w-full flex justify-around">
							<button onClick={resume}>
								<Image alt="Play" src={PlayIcon} />
							</button>
							<button onClick={pause}>
								<Image alt="Pause" src={PauseIcon} />
							</button>
							<button
								onClick={() => {
									setPracticing(false);
									clearInterval(timer);
									clearInterval(countdown);
								}}
							>
								<Image src={StopIcon} alt="Stop" />
							</button>
						</div>
					</section>
				</>
			) : (
				<>
					<div className="md:flex md:flex-row md:flex-wrap md:gap-4 md:justify-start w-full h-full">
						<section className="md:w-2/5">
							<SelectionMenu
								data={chords}
								boxClickFn={addToList}
								changeFn={changeFamily}
							/>

							<article className="h-24 md:w-1/2">
								<h2 className="font-serif text-left text-navy text-xl w-full px-2">
									Current Selection:
								</h2>
								<div className="flex overflow-auto gap-2">
									{list.map((chord, i) => {
										return (
											<ChordBox
												chordName={
													chord.cName
												}
												clickFn={() => {}}
												key={`${chord.cName}_${i}_selection`}
											/>
										);
									})}
								</div>
							</article>
							<article className="font-serif text-navy text-xl flex flex-col">
								<label htmlFor="ordered">
									<input
										type="radio"
										name="order-select"
										id="ordered"
										className="mr-4"
										onClick={() =>
											setOrder('ordered')
										}
									/>
									<p className="inline">Ordered</p>
								</label>
								<label htmlFor="randomized">
									<input
										type="radio"
										name="order-select"
										id="randomized"
										className="mr-4"
										onClick={() =>
											setOrder('random')
										}
									/>
									<p className="inline">
										Randomized
									</p>
								</label>

								<label htmlFor="interval">
									Time Interval:
								</label>
								<select
									name="interval"
									id="interval"
									className="bg-sand text-navy w-2/5 h-8 my-2 font-serif text-lg"
									onChange={e => {
										setTimeInt(
											Number(
												e.currentTarget
													.value
											)
										);
									}}
								>
									<option value={5000}>5s</option>
									<option value={4000}>4s</option>
									<option value={3000}>3s</option>
									<option value={2000}>2s</option>
									<option value={1000}>1s</option>
									<option value={500}>0.5s</option>
									<option value={250}>0.25s</option>
									<option value={100}>0.1s</option>
								</select>
							</article>
						</section>
						<section className="md:w-1/5 flex justify-between">
							<button
								className="font-serif text-navy border-navy border-4 bg-sand text-xl rounded-md h-10 w-2/5 flex justify-around disabled:border-gray-600 disabled:text-gray-500 disabled:bg-gray-300 transition-all duration-200"
								onClick={() => {
									setPracticing(true);
									if (order === 'ordered') {
										orderedCycle();
									} else {
										randomCycle();
									}
								}}
								disabled={
									order !== null && list.length > 0
										? false
										: true
								}
							>
								Go!
								<Image
									src={Stopwatch}
									alt="stopwatch"
								/>
							</button>

							<button
								className="font-serif text-maroon border-maroon border-4 bg-white text-xl rounded-md h-10 w-2/5 ml-12 disabled:border-gray-600 disabled:text-gray-500 disabled:bg-gray-300 transition-all duration-500"
								onClick={() => {
									setList([]);
								}}
								disabled={
									list.length > 0 ? false : true
								}
							>
								Clear
							</button>
						</section>
					</div>
				</>
			)}
		</>
	);
}
