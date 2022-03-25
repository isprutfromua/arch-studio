<script>
	import Tile from "$lib/Tile.svelte";
	import { fly } from "svelte/transition";
	import { portfolio } from "../data/portfolio";
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<div class="container mx-auto mb-18 sm:mb-50 <sm:flex <sm:flex-col <sm:px-8">
	<div class="grid gap-7 lg:auto-rows-fr lg:gap-8 lg:grid-cols-3">
		{#each portfolio as { name, date, image }, index}
			<div
				transition:fly={{
					y: 100,
					opacity: 0,
					duration: 500,
					delay: (index + 1) * 150,
				}}
			>
				<Tile
					tileName={name}
					tileDate={date}
					tileImage={image}
					tileNumbers={false}
				/>
			</div>
		{/each}
	</div>
</div>
