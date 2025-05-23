/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				black1: "#050505",
				black2: "#1f1f1f",
				black3: "#2d2d2d",
				black4: "#3a3a3a",
				white1: "#ffffff",
				white2: "#f4f4f4",
				white3: "#e9e9e9",
				white4: "#757575",
				myPurple: "#a445ed",
				myRed: "#ff5252",
			},
			fontFamily: {
				interBold: ["interBold", "sans-serif"],
				interRegular: ["interRegular", "sans-serif"],
				loraBold: ["loraBold", "serif"],
				loraItalic: ["loraItalic", "serif"],
				loraRegular: ["loraRegular", "serif"],
				inconsolataBold: ["inconsolataBold", "mono"],
				inconsolataRegular: ["inconsolataRegular", "mono"],
			},
		},
		container: {
			center: true,
			screens: {
				sm: "327px",
				md: "689px",
				lg: "737px",
			},
		},
	},
	plugins: [],
};
