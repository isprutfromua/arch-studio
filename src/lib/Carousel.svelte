<script>
	import Banner from "$lib/Banner.svelte";
	import { browser } from "$app/env";

	let carouselWrapper;

	const slides = [
		{
			title: "Project <br/> Paramour",
			description:
				"Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
			image: "home/paramour.webp",
		},
		{
			title: "Seraph Station",
			description:
				"The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
			image: "home/seraph-station.webp",
		},
		{
			title: "Federal II Tower",
			description:
				"A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
			image: "home/federal-2-tower.webp",
		},
		{
			title: "Trinity Bank Tower",
			description:
				"Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
			image: "home/trinity-bank.webp",
		},
	];

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

	if (browser) {
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
