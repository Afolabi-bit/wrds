import DictionaryIcon from "../../public/assets/images/logo.svg";
import Moon from "../../public/assets/images/icon-moon.svg";
import ArrowDown from "../../public/assets/images/icon-arrow-down.svg";
import FontSelector from "../utilities/FontSelector";
import ToggleTheme from "../utilities/ToggleTheme";
import InputBar from "../utilities/InputBar";

const Header = () => {
	return (
		<header className="py-[24px] md:pt-[58px] md:pb-[43px]  ">
			<div className="flex justify-between mb-[24px] h-[32px] md:h-[32px] md:mb-[51px] ">
				<img
					className="w-[28.05px] h-full md:h-[32px]"
					src={DictionaryIcon}
					alt="Dictionary Icon"
				/>
				<div className="flex items-center w-[203px] h-full md:h-[32px]  md:w-[253px] ">
					<FontSelector />
					<ToggleTheme />
				</div>
			</div>
			<InputBar />
		</header>
	);
};

export default Header;
