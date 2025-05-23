import { useContext, useRef, useState } from "react";
import Search from "../../public/assets/images/icon-search.svg";
import AppContext from "../store/AppContext";

const InputBar = () => {
	const inputRef = useRef();
	const { handleSearchString, fontStyle } = useContext(AppContext);
	const [isEmpty, setIsEmpty] = useState(null);

	function handleSubmit(e) {
		setIsEmpty(false);
		e.preventDefault();

		if (inputRef.current.value.trim() === "") {
			setIsEmpty(true);
			return;
		}

		handleSearchString(inputRef.current.value.trim());
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full h-[48px] rounded-[16px] bg-white2 dark:bg-black2 relative md:h-[64px]  "
		>
			<input
				autoComplete="off"
				className={` w-full h-full bg-transparent text-[16px] leading-[19px] text-black3 dark:text-white1 font-[700] placeholder:text-black3 placeholder:text-[16px] dark:placeholder:text-white1 placeholder:font-[700] px-[24px] focus:outline
					${
						fontStyle === "Sans Serif"
							? "font-interBold"
							: fontStyle === "Serif"
							? "font-loraBold"
							: "font-inconsolataBold"
					}
					${
						isEmpty
							? " border border-myRed outline-none"
							: "focus:outline-myPurple"
					} rounded-[16px] md:placeholder:text-[20px] md:text-[20px] `}
				type="text"
				name="word"
				id="word"
				placeholder="Search a word"
				ref={inputRef}
			/>
			<img
				className="absolute w-[15.55px] h-[15.55px] top-[50%] translate-y-[-50%] right-[16px] "
				src={Search}
				alt="search icon"
			/>
			{isEmpty && (
				<p className="absolute left-0 top-[50px] text-myRed text-[14px] leading-[18px] md:top-[70px] ">
					Whoops, can't be empty
				</p>
			)}
		</form>
	);
};

export default InputBar;
