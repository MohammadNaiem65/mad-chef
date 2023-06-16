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
			animation: {
				blob: "blob 35s linear infinite alternate",
				"float-chef": "float-chef 4s linear infinite alternate",
				"float-knife": "float-knife 4s linear 1s infinite alternate",
				"float-pan": "float-knife 4s linear .5s infinite alternate",
				"float-spoon": "float-spoon 4s linear .65s infinite alternate",
			},
			keyframes: {
				blob: {
					"0%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
					"20%": { borderRadius: "73% 27% 7% 93% / 75% 68% 32% 25%" },
					"40%": { borderRadius: "20% 80% 56% 44% / 71% 18% 82% 29%" },
					"60%": { borderRadius: "57% 43% 30% 70% / 48% 53% 47% 52%" },
					"80%": { borderRadius: "25% 75% 87% 13% / 14% 19% 81% 86%" },
					"100%": { borderRadius: "81% 19% 28% 72% / 36% 60% 40% 64%" },
				},

				"float-chef": {
					"0%": { transform: "translateY(-50%)" },
					"100%": { transform: "translateY(-60%)" },
				},

				"float-knife": {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(-150%)" },
				},

				"float-pan": {
					"0%": { transform: "translateY(-80%)" },
					"100%": { transform: "translateY(-120%)" },
				},

				"float-spoon": {
					"0%": { transform: "translateY(-50%)" },
					"100%": { transform: "translateY(-80%)" },
				},
			},
		},
	},
	plugins: [],
};
