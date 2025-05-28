import { createContext, useEffect, useState } from "react";

const AppContext = createContext({
	fontStyle: "",
	changeFont: () => {},
	handleSearchString: () => {},
	handleDarkMode: () => {},
});
export const AppContextProvider = ({ children }) => {
	const darkValue = localStorage.getItem("isDark")
		? JSON.parse(localStorage.getItem("isDark"))
		: false;

	const defaultWord = localStorage.getItem("defaultWord")
		? localStorage.getItem("defaultWord")
		: "welcome";

	const [fontStyle, setFontStyle] = useState("Sans Serif");
	const [searchString, setSearchString] = useState(defaultWord);
	const [data, setData] = useState([]);
	const [isDark, setIsDark] = useState(darkValue);
	const [error, setError] = useState({ code: "", message: "" });

	function changeFont(font) {
		setFontStyle(font);
	}

	function handleSearchString(str) {
		setSearchString(str);
	}

	function handleDarkMode() {
		localStorage.setItem("isDark", !isDark);
		setIsDark((prev) => !prev);
	}

	useEffect(() => {
		if (!searchString) return;

		async function getWord() {
			try {
				const res = await fetch(
					`https://api.dictionaryapi.dev/api/v2/entries/en/${searchString}`,
				);

				setError({ code: "", message: "" });

				if (!res.ok) {
					// Throw an error with code and message
					throw {
						status: res.status,
						message: "Word not found in dictionary",
					};
				}

				const data = await res.json();
				setData(data);
				localStorage.setItem("defaultWord", searchString);
			} catch (err) {
				// Access custom error info
				console.error(`Error ${err.status}: ${err.message}`);
				console.log(data);
				setError({ code: err.status, msg: err.message });
			}
		}

		getWord();
	}, [searchString]);

	return (
		<AppContext
			value={{
				searchString,
				fontStyle,
				changeFont,
				handleSearchString,
				data,
				isDark,
				handleDarkMode,
				error,
			}}
		>
			{children}
		</AppContext>
	);
};

export default AppContext;
