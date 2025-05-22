import { useContext } from "react";
import Header from "./components/Header";
import AppContext from "./store/AppContext";
import SearchResult from "./components/SearchResult";

function App() {
	const { fontStyle } = useContext(AppContext);
	return (
		<main
			className={`$bg-white1 px-[24px]
        dark:bg-black1
        ${
					fontStyle === "Sans Serif"
						? "font-interRegular"
						: fontStyle === "Serif"
						? "font-loraRegular"
						: "font-inconsolataRegular"
				}`}
		>
			<div className="container">
				<Header></Header>
				<SearchResult />
			</div>
		</main>
	);
}

export default App;
