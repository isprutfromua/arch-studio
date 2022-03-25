<script context="module">
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
	import "@fontsource/spartan/700.css";
	import "@fontsource/spartan/500.css";

	import Navigation from "$lib/Navigation.svelte";
	import Footer from "$lib/Footer.svelte";

	import { fly, fade } from "svelte/transition";
	import { onMount } from "svelte";
	import Observer from "$lib/Observer.svelte";

	let visible = false;
	onMount(() => (visible = true));

	export let url = "";
</script>

{#if visible}
	<Navigation {url} />
{/if}

{#if visible}
	<div
		class="min-h-min-100vh w-full grid grid-rows-1 grid-cols-1 anim-container"
	>
		{#key url}
			<div
				in:fly={{ y: 10, duration: 500, delay: 1000, opacity: 0 }}
				out:fade={{ duration: 500 }}
			>
				<slot />
			</div>
		{/key}
	</div>

	<Footer />
{/if}

<style windi:preflights:global windi:safelist:global>
	.anim-container > * {
		grid-row: 1;
		grid-column: 1;
	}

	:global(html) {
		scroll-behavior: smooth;
	}
</style>
