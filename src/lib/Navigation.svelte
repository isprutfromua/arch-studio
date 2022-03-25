<script>
	import BurgerButton from "$lib/BurgerButton.svelte";

	import Menu from "$lib/Menu.svelte";
	import Logo from "$lib/Logo.svelte";

	import { fly, fade } from "svelte/transition";
	import { sineIn, sineOut } from "svelte/easing";
	import { afterUpdate, onMount } from "svelte";

	import { checkMedia } from "../stores/media";
	$: mobile = checkMedia("sm");

	export let url = "";

	let isHomepage;
	let active = false;

	afterUpdate(() => {
		const activeLink = document.querySelector("a.active");
		if (activeLink) {
			const { offsetLeft, clientWidth } = activeLink;
			const position = offsetLeft + clientWidth / 2 - 12 + "px";

			activeLink.parentElement.style.setProperty("--position", position);
			isHomepage = false;
		} else {
			isHomepage = true;
		}
	});

	let y;
	const HEADER_HEIGHT = 96;
	const HEADER_MAX_PADDING = 32;
	const HEADER_MIN_PADDING = 16;
	const MULTIPLIER = HEADER_MAX_PADDING / HEADER_MIN_PADDING / HEADER_HEIGHT;

	$: padding =
		$mobile && y <= HEADER_HEIGHT
			? HEADER_MAX_PADDING - y * MULTIPLIER
			: HEADER_MIN_PADDING;
	$: pageName = url.pathname.replace("/", "").replace("-", " ") || "Home";

	const toggleMenu = () => (active = !active);
</script>

<svelte:window bind:scrollY={y} />

<div
	data-page={pageName}
	style={$mobile ? `padding: ${padding}px` : ""}
	class="bg-white flex py-14 nav-wrapper items-center header-wrapper sticky relative sm:container sm:mx-auto <sm:p-8"
	before="text-grey-82 flex absolute bg-no-repeat pt-38 write-vertical-left -left-14 lg:-left-24 top-0 leading-4 text-15px tracking-1em uppercase content-[attr(data-page)] whitespace-nowrap"
>
	<Logo />
	<BurgerButton {active} on:click={toggleMenu} />

	{#if $mobile && active}
		<div
			in:fly={{ x: 500, duration: 300, easing: sineIn }}
			out:fly={{ x: 500, duration: 300, easing: sineOut }}
			on:click={toggleMenu}
			class="font-bold bg-grey-95 top-full min-w-343px p-12 right-0 z-10 absolute"
		>
			<nav
				class="{isHomepage
					? 'after:opacity-0'
					: ''} flex sm:flex-row sm:gap-x-12 sm:relative <sm:flex-col <sm:gap-y-8 lg:gap-x-14 after:transition after:-bottom-2 after:block after:absolute after:content-DEFAULT after:w-6 after:h-1px after:bg-dark after:left-0 after:transition after:transform after:translate-x-$position"
			>
				<Menu {url} />
			</nav>
		</div>
	{/if}
	{#if !$mobile}
		<div class="font-bold ml-19 text-15px text-grey-53 lg:ml-23">
			<nav
				class="{isHomepage
					? 'after:opacity-0'
					: ''} flex sm:flex-row sm:gap-x-12 sm:relative <sm:flex-col <sm:gap-y-8 lg:gap-x-14 after:transition after:-bottom-2 after:block after:absolute after:content-DEFAULT after:w-6 after:h-1px after:bg-dark after:left-0 after:transition after:transform after:translate-x-$position"
			>
				<Menu {url} />
			</nav>
		</div>
	{/if}
</div>

<style>
	@media screen and (max-width: 767.9px) {
		.sticky {
			@apply w-full p-4 top-0 left-0 z-10 duration-300 sticky;
		}

		.header-wrapper {
			transition-property: padding;
		}
	}

	.nav-wrapper::before {
		background-image: linear-gradient(#c8ccd8, #c8ccd8);
		background-size: 1px 104px;
		background-position: top center;
		animation: pager-appear 1.5s backwards;
	}

	@keyframes pager-appear {
		0% {
			background-size: 0 0;
			color: transparent;
		}

		80% {
			color: transparent;
		}
	}
</style>
