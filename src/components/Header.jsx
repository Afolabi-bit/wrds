import DictionaryIcon from "../../public/assets/images/logo.svg";
import Moon from "../../public/assets/images/icon-moon.svg";
import ArrowDown from "../../public/assets/images/icon-arrow-down.svg";
import FontSelector from "../utilities/FontSelector";
import ToggleTheme from "../utilities/ToggleTheme";
import InputBar from "../utilities/InputBar";

const Header = () => {
	return (
		<header className="py-[24px]">
			<div className="flex justify-between mb-[24px] h-[32px] ">
				<img
					className="w-[28.05px] h-full"
					src={DictionaryIcon}
					alt="Dictionary Icon"
				/>
				<div className="flex items-center w-[203px] h-full ">
					<FontSelector />
					<ToggleTheme />
				</div>
			</div>
			<InputBar />
		</header>
	);
};

export default Header;
