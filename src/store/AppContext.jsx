import { createContext, useEffect, useState } from "react";

const AppContext = createContext({
	darkModeActive: null,
	fontStyle: "",
	changeFont: () => {},
	handleSearchString: () => {},
});
export const AppContextProvider = ({ children }) => {
	const [darkModeActive, setDarkModeActive] = useState(false);
	const [fontStyle, setFontStyle] = useState("Sans Serif");
	const [searchString, setSearchString] = useState("keyboard");
	const [data, setData] = useState([]);
	const [isDark, setIsDark] = useState(false);
	const [error, setError] = useState({ code: "", message: "" });

	function changeFont(font) {
		setFontStyle(font);
	}

	function handleSearchString(str) {
		setSearchString(str);
	}

	useEffect(() => {
		if (!searchString) return;

		async function getWord() {
			try {
				const res = await fetch(
					`https://api.dictionaryapi.dev/api/v2/entries/en/${searchString}`,
				);

				if (!res.ok) {
					// Throw an error with code and message
					throw {
						status: res.status,
						message: "Word not found in dictionary",
					};
				}

				const data = await res.json();
				setData(data);
			} catch (err) {
				// Access custom error info
				console.error(`Error ${err.status}: ${err.message}`);
				setError({ code: err.status, msg: err.message });
			}
		}

		getWord();
	}, [searchString]);

	return (
		<AppContext
			value={{
				darkModeActive,
				fontStyle,
				changeFont,
				handleSearchString,
				data,
				isDark,
				setIsDark,
			}}
		>
			{children}
		</AppContext>
	);
};

export default AppContext;
