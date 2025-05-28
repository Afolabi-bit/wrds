import { useContext, useRef } from "react";
import AppContext from "../store/AppContext";
import PlaySoundIcon from "/assets/images/icon-play.svg";
import Source from "/assets/images/icon-new-window.svg";
import WordMeaning from "../utilities/WordMeaning";
import NotFound from "./NotFound";

const SearchResult = () => {
	const { data, fontStyle, error } = useContext(AppContext);

	const audioRef = useRef();

	const word = data[0];

	const firstAudio = word?.phonetics.find((p) => p.audio.trim() !== "").audio;

	return (
		<>
			{word?.word && !error.code && (
				<section className="w-full h-full">
					<div className="w-full h-[68px] flex justify-between items-center md:h-[114px]  ">
						<div className="flex flex-col justify-between h-full">
							<h1
								className={`${
									fontStyle === "Sans Serif"
										? "font-interBold"
										: fontStyle === "Serif"
										? "font-loraBold"
										: "font-inconsolataBold"
								} text-[32px] leading-[32px] text-black3 dark:text-white1 md:text-[64px] md:leading-[77px] lg:leading-[82px] `}
							>
								{word?.word}
							</h1>
							<p className="font-normal text-[18px] leading-[24px] text-myPurple md:text-[24px] md:leading-[29px] ">
								{word?.phonetic}
							</p>
						</div>
						<div className="w-[48px] h-[48px] md:w-[75px] md:h-[75px] ">
							<button
								onClick={() => {
									audioRef.current.play();
								}}
								className="w-full h-full outline-none"
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
					<footer className="border-t border-white3 pt-[24px] mt-[30px] pb-[85px] mb:pb-[118px] md:flex md:gap-[20px] ">
						<p className="font-normal text-[14px] leading-[17px] underline text-white4 mb-[8px] lg:leading-[18px]  ">
							Source
						</p>
						<a
							href={`${word?.sourceUrls[0]}`}
							target="_blank"
							className="flex"
						>
							<span className="text-[14px] leading-[17px] underline text-black3 dark:text-white1 mr-[15px] md:mr-[10px] lg:leading-[18px] ">
								{word?.sourceUrls[0]}
							</span>
							<img
								className="w-[12px] h-[12px] md:translate-y-[3px]"
								src={Source}
								alt="Open new tab"
							/>
						</a>
					</footer>
				</section>
			)}
			{error.code && <NotFound />}
		</>
	);
};

export default SearchResult;
