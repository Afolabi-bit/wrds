import Border from "../../public/assets/images/border.svg";
import Moon from "../../public/assets/images/icon-moon.svg";

const ToggleTheme = () => {
	return (
		<div className="flex justify-between gap-[19px] items-center h-full ">
			<img
				className="h-[32px] w-[1px]"
				src={Border}
				alt="dividing line"
			/>
			<button className="group w-[71.99px] h-full flex gap-[12px]">
				<span className="inline-block relative h-[20px] w-[40px] rounded-[10px] bg-white4 transition group-hover:bg-myPurple ">
					<span className="absolute w-[14px] h-[14px] top-[3px] left-[3px] bg-white1 rounded-[50%] "></span>
				</span>
				<img
					className="h-[20px] w-[19.99px]"
					src={Moon}
					alt="Moon icon"
				/>
			</button>
		</div>
	);
};

export default ToggleTheme;
