<script>
	import { checkMedia } from "../stores/media";
	import { fly } from "svelte/transition";
	$: mobile = checkMedia("sm");

	import Tile from "$lib/Tile.svelte";
	import Button from "$lib/Button.svelte";

	import { featureTiles } from "../data/homepage";
</script>

<div class="flex justify-between items-center">
	<h2
		class="font-bold text-dark leading-tight text-2.5rem -tracking-2px sm:leading-none sm:text-h2"
	>
		Featured
	</h2>
	{#if !$mobile}
		<Button buttonLink="/portfolio" />
	{/if}
</div>
<div class="mt-12 grid gap-7 sm:mt-21 lg:mt-16 lg:grid-flow-col lg:gap-8 ">
	{#each featureTiles as { name, image }, index}
		<Tile
			tileName={name}
			tileImage={image}
			--tile-number={index + 1}
			tileCtaLink="/portfolio"
			tileCtaText="View All Projects"
		/>
	{/each}
</div>

<div class="mt-6 grid">
	{#if $mobile}
		<Button buttonLink="/portfolio" />
	{/if}
</div>
