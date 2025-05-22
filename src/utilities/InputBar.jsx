import { useContext, useRef, useState } from "react";
import Search from "../../public/assets/images/icon-search.svg";
import AppContext from "../store/AppContext";

const InputBar = () => {
	const inputRef = useRef();
	const { handleSearchString, data } = useContext(AppContext);
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
			className="w-full h-[48px] rounded-[16px] bg-white2 dark:bg-black2 relative  "
		>
			<input
				autoComplete="off"
				className={` w-full h-full bg-transparent text-[16px] leading-[19px] text-black3 dark:text-white1 font-[700] placeholder:text-black3 placeholder:text-[16px] dark:placeholder:text-white1 placeholder:font-[700] px-[24px] focus:outline ${
					isEmpty
						? " border border-myRed outline-none"
						: "focus:outline-myPurple"
				} rounded-[16px] `}
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
				<p className="absolute left-0 top-[50px] text-myRed text-[14px] leading-[18px] ">
					Whoops, can't be empty
				</p>
			)}
		</form>
	);
};

export default InputBar;
