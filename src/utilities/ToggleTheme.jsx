import { useContext, useEffect, useState } from "react";
import Border from "/assets/images/border.svg";
import Moon from "/assets/images/icon-moon.svg";
import DarkMoon from "/assets/images/dark-moon.svg";
import AppContext from "../store/AppContext";

const ToggleTheme = () => {
	const { isDark, handleDarkMode } = useContext(AppContext);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDark);
	}, [isDark]);

	return (
		<div className="flex justify-between gap-[19px] items-center h-full ">
			<img
				className="h-[32px] w-[1px]"
				src={Border}
				alt="dividing line"
			/>
			<button
				onClick={handleDarkMode}
				className="group w-[71.99px] h-full flex gap-[12px] outline-none"
			>
				<span className="inline-block relative h-[20px] w-[40px] rounded-[10px] bg-white4 dark:bg-myPurple transition group-hover:bg-myPurple ">
					<span className="absolute w-[14px] h-[14px] top-[3px] left-[3px] bg-white1 rounded-[50%] "></span>
				</span>
				<img
					className="h-[20px] w-[19.99px]"
					src={`${isDark ? DarkMoon : Moon}`}
					alt="Moon icon"
				/>
			</button>
		</div>
	);
};

export default ToggleTheme;
