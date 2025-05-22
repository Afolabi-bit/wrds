import { useContext, useRef } from "react";
import AppContext from "../store/AppContext";
import PlaySoundIcon from "../../public/assets/images/icon-play.svg";
import Source from "../../public/assets/images/icon-new-window.svg";
import WordMeaning from "../utilities/WordMeaning";

const SearchResult = () => {
	const { data, fontStyle } = useContext(AppContext);

	const audioRef = useRef();

	const word = data[0];

	const firstAudio = word?.phonetics.find((p) => p.audio.trim() !== "").audio;

	return (
		<section className="w-full h-full">
			<div className="w-full h-[68px] flex justify-between items-center ">
				<div className="flex flex-col justify-between h-full">
					<h1
						className={`${
							fontStyle === "Sans Serif"
								? "font-interBold"
								: fontStyle === "Serif"
								? "font-loraBold"
								: "font-inconsolataBold"
						} text-[32px] leading-[32px] text-black3 dark:text-white1`}
					>
						{word?.word}
					</h1>
					<p className="font-normal text-[18px] leading-[24px] text-myPurple ">
						{word?.phonetic}
					</p>
				</div>
				<div className="w-[48px] h-[48px] ">
					<button
						onClick={() => {
							audioRef.current.play();
						}}
						className="w-full h-full "
					>
						<img
							className="w-full h-full "
							src={PlaySoundIcon}
							alt="play audio pronunciation"
						/>
					</button>
					<audio
						ref={audioRef}
						src={firstAudio}
						preload="auto"
					></audio>
				</div>
			</div>

			{/* Definitions, Synonyms, Antonyms, and Examples */}
			{word?.meanings.map((meaning, index) => {
				return (
					<WordMeaning
						key={index}
						word={meaning}
					/>
				);
			})}

			{/* Source */}
			<footer className="border-t border-white3 pt-[24px] mt-[30px] pb-[85px]">
				<p className="font-normal text-[14px] leading-[17px] underline text-white4 mb-[8px]  ">
					Source
				</p>
				<a
					href={`${word?.sourceUrls[0]}`}
					target="_blank"
					className="flex"
				>
					<span className="text-[14px] leading-[17px] underline text-black3 dark:text-white1 mr-[15px] ">
						{word?.sourceUrls[0]}
					</span>
					<img
						src={Source}
						alt="Open new tab"
					/>
				</a>
			</footer>
		</section>
	);
};

export default SearchResult;
