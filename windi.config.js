import { defineConfig } from "windicss/helpers";
import defaultTheme from "windicss/defaultTheme";

export default defineConfig({
	attributify: true,
	theme: {
		fontFamily: {
			sans: ["Spartan", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			fontSize: {
				h2: "56px",
			},
			colors: {
				dark: "rgb(27, 29, 35)",
				grey: {
					40: "rgb(96, 99, 109)",
					53: "rgb(125, 130, 143)",
					82: "rgb(200, 204, 216)",
					95: "rgb(238, 239, 244)",
				},
				red: "rgb(223, 86, 86)",
			},
			container: {
				screens: {
					sm: "573px",
					md: "842px",
					xl: "1110px",
				},
			},
		},
	},
	shortcuts: {
		btn: "inline-flex bg-dark text-15px text-white font-bold py-6 px-8 transition duration-300 hover:bg-grey-40 justify-center items-center",
		h1: "font-bold tracking-tight text-grey-95 text-7.5rem leading-38 hidden sm:block lg:text-12.5rem lg:leading-10rem",
		h2: "font-bold text-dark mb-7 tracking-tight  text-2.5rem sm:mb-14 sm:text-3.5rem",
	},
});
