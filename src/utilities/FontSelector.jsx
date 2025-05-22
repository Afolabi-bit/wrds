import { useContext, useState } from "react";
import AppContext from "../store/AppContext";
import ArrowDown from "../../public/assets/images/icon-arrow-down.svg";

const FontSelector = () => {
	const { fontStyle, changeFont } = useContext(AppContext);

	const [openSelect, setOpenSelect] = useState(false);

	function handleOpenselect() {
		setOpenSelect((openSelect) => !openSelect);
	}
	return (
		<div className="mr-[16px] text-right w-[98px] h-full relative">
			<button
				onClick={handleOpenselect}
				className="flex w-full justify-end"
			>
				<span
					className={`font-[700] not-italic text-[14px] leading-[24px] text-black3 dark:text-white1 mr-[9px] ${
						fontStyle === "Sans Serif"
							? "font-interBold"
							: fontStyle === "Serif"
							? "font-loraBold"
							: "font-inconsolataBold"
					} `}
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
				style={{
					boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.1)",
				}}
				className={`w-[116px] h-[95px] pl-[13px] py-[10px] bg-white1 absolute top-[32px] right-[0px] z-50 rounded-[13px] ${
					openSelect ? "flex" : "hidden"
				} flex-col justify-between gap-[1px] `}
			>
				<button
					onClick={() => {
						handleOpenselect();
						changeFont("Sans Serif");
					}}
					className="font-interBold w-full text-left text-[14px] hover:text-myPurple "
				>
					Sans Serif
				</button>
				<button
					onClick={() => {
						handleOpenselect();
						changeFont("Serif");
					}}
					className="font-loraBold w-full text-left text-[14px] hover:text-myPurple"
				>
					Serif
				</button>
				<button
					onClick={() => {
						handleOpenselect();
						changeFont("Mono");
					}}
					className="font-inconsolataBold w-full text-left text-[14px] hover:text-myPurple"
				>
					Mono
				</button>
			</div>
		</div>
	);
};

export default FontSelector;
