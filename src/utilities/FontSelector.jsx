import { useContext, useState } from "react";
import AppContext from "../store/AppContext";
import ArrowDown from "/assets/images/icon-arrow-down.svg";

const FontSelector = () => {
	const { fontStyle, changeFont } = useContext(AppContext);

	const [openSelect, setOpenSelect] = useState(false);

	function handleOpenselect() {
		setOpenSelect((openSelect) => !openSelect);
	}
	return (
		<div className="mr-[16px] text-right w-[98px] h-full relative md:w-[148px] ">
			<button
				onClick={handleOpenselect}
				className="flex w-full h-full items-center justify-end  "
			>
				<span
					className={`font-[700] not-italic text-[14px] leading-[24px] text-black3 dark:text-white1 mr-[9px] ${
						fontStyle === "Sans Serif"
							? "font-interBold"
							: fontStyle === "Serif"
							? "font-loraBold"
							: "font-inconsolataBold"
					} 
					md:text-[18px] `}
				>
					{fontStyle}
				</span>
				<img
					className="object-contain"
					src={ArrowDown}
					alt="Select icon"
				/>
			</button>

			<div
				className={`w-[116px] h-[95px] pl-[13px] py-[10px] bg-white1 absolute top-[32px] right-[0px] z-50 rounded-[13px] shadow-custom-black ${
					openSelect ? "flex" : "hidden"
				} flex-col justify-between gap-[1px] dark:shadow-custom-purple dark:bg-black2 dark:text-white1 md:w-[136px] md:h-[105px] md:p-[20px] lg:w-[183px] lg:h-[152px] lg:rounded-[16px] lg:p-[24px] `}
			>
				<button
					onClick={() => {
						handleOpenselect();
						changeFont("Sans Serif");
					}}
					className="font-interBold w-full text-left text-[14px] hover:text-myPurple lg:text-[18px] lg:leading-[24px] "
				>
					Sans Serif
				</button>
				<button
					onClick={() => {
						handleOpenselect();
						changeFont("Serif");
					}}
					className="font-loraBold w-full text-left text-[14px] hover:text-myPurple lg:text-[18px] lg:leading-[24px]"
				>
					Serif
				</button>
				<button
					onClick={() => {
						handleOpenselect();
						changeFont("Mono");
					}}
					className="font-inconsolataBold w-full text-left text-[14px] hover:text-myPurple lg:text-[18px] lg:leading-[24px]"
				>
					Mono
				</button>
			</div>
		</div>
	);
};

export default FontSelector;
