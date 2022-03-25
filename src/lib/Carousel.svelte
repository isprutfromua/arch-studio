<script>
	import Banner from "$lib/Banner.svelte";
	import { browser } from "$app/env";
	import { slides } from "../data/homepage";
	let carouselWrapper;

	$: slideIndexes = [...Array(slides.length).keys()];
	$: activeSlide = 0;

	function scrollTo(slideIndex) {
		const scrollSettings = {
			top: 0,
			left: slideIndex * carouselWrapper.clientWidth,
			behavior: "smooth",
		};
		carouselWrapper.scrollTo(scrollSettings);
		activeSlide = slideIndex;
	}

	if (!browser) {
		const SLIDING_DELAY = 3000;
		setInterval(() => {
			scrollTo(++activeSlide % slides.length);
		}, SLIDING_DELAY);
	}
</script>

<div class="xl:relative">
	<div class="flex overflow-hidden " bind:this={carouselWrapper}>
		{#each slides as { title, description, image }}
			<div class="flex-shrink-0 w-full">
				<Banner
					bannerText={title}
					bannerDescription={description}
					bannerCtaLink="/portfolio"
					bannerCtaText="See Our Portfolio"
					bannerStyle="large"
					--banner-image="url({image})"
				/>
			</div>
		{/each}
	</div>

	<div class="hidden" xl="flex absolute -left-20 bottom-0">
		{#each slideIndexes as slideIndex}
			<button
				class="flex font-bold outline-none h-20 transition ease-in-out w-20 items-center justify-center 
				{slideIndex == activeSlide
					? 'text-white bg-dark'
					: 'text-grey-53 bg-white hover:bg-grey-95'}"
				on:click={scrollTo(slideIndex)}>0{slideIndex + 1}</button
			>
		{/each}
	</div>
</div>
