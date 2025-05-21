import { useContext } from "react";
import AppContext from "../store/AppContext";
import PlaySoundIcon from "../../public/assets/images/icon-play.svg";
import WordMeaning from "../utilities/WordMeaning";

const SearchResult = () => {
	const { data, fontStyle } = useContext(AppContext);

	const word = data[0];

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
						} text-[32px] leading-[32px] text-black3`}
					>
						{word?.word}
					</h1>
					<p className="font-normal text-[18px] leading-[24px] text-myPurple ">
						{word?.phonetic}
					</p>
				</div>
				<div className="w-[48px] h-[48px] ">
					<button className="w-full h-full ">
						<img
							className="w-full h-full "
							src={PlaySoundIcon}
							alt="play audio pronunciation"
						/>
					</button>
				</div>
			</div>
			{word?.meanings.map((meaning, index) => {
				return (
					<WordMeaning
						key={index}
						word={meaning}
					/>
				);
			})}
		</section>
	);
};

export default SearchResult;
