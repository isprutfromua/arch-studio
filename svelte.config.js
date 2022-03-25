import adapter from "@sveltejs/adapter-static";
import { windi } from "svelte-windicss-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		windi({
			configPath: "windi.config.js",
		}),
	],
	kit: {
		adapter: adapter({
			pages: "public",
			assets: "public",
		}),
		prerender: {
			default: true,
		},
	},
};

export default config;
