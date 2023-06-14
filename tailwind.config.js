/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Popins: ["Poppins", "sans-serif"],
				Vollokorn: ["Vollkorn", "serif"],
			},
			colors: {
				Primary: "#8fb4ff",
				Secondary: "#ebf1ff",
				Accent: "#010809",
				Bg: "#f2f2f2",
				"Clr-base": "#808080",
			},
		},
	},
	plugins: [],
};
