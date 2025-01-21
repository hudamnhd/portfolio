import type { Config } from "tailwindcss";
import { extendedTheme } from "./app/utils/extended-theme";

export default {
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: extendedTheme,
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
