import { readable } from "svelte/store";
import { browser } from "$app/env";

export const checkMedia = (mediaQueryString) => {
	if (!browser) return;

	const breakpoint = readable(null, (set) => {
		const breakpoints = {
			sm: window.matchMedia("(min-width: 640px)"),
			"<sm": window.matchMedia("(max-width: 639.9px)"),
			md: window.matchMedia("(min-width: 768px)"),
			"<md": window.matchMedia("(max-width: 767.9px)"),
			lg: window.matchMedia("(min-width: 1024px)"),
			"<lg": window.matchMedia("(max-width: 1023.9px)"),
			xl: window.matchMedia("(min-width: 1280px)"),
			"<xl": window.matchMedia("(max-width: 1279.9px)"),
		};

		let breakpoint = breakpoints[mediaQueryString];
		let setter = set(!breakpoint.matches);

		breakpoint.addEventListener(
			"change",
			() => (setter = set(!breakpoint.matches))
		);

		return () => {
			breakpoint.removeEventListener("change", setter);
		};
	});

	return breakpoint;
};
