<script>
	import Content from "$lib/Content.svelte";

	import Carousel from "$lib/Carousel.svelte";

	import Banner from "$lib/Banner.svelte";
	import Features from "$lib/Features.svelte";
	import Observer from "$lib/Observer.svelte";

	import { inview } from "svelte-inview";
	import { fly } from "svelte/transition";
	import { welcomeSection } from "../data/homepage";
	import Title from "$lib/Title.svelte";

	let isInView;
</script>

<svelte:head>
	<title>Homepage</title>
</svelte:head>

<div class="mb-18 sm:container sm:mx-auto xl:mb-27 ">
	<Carousel />
</div>

<div
	class="welcome-banner sm:container sm:mx-auto sm:mb-50 <sm:mt-18 <sm:mb-25 <sm:px-8 xl:relative after:bg-cover after:bg-no-repeat after:bg-bottom after:h-568px after:right-0 after:bottom-0 after:w-350px after:-z-1 after:absolute after:overflow-hidden xl:after:content-DEFAULT"
>
	<Title titleText={welcomeSection.title} />
	<section
		class="<sm:pt-17 <sm:relative xl:(max-w-md pl-48 box-content) before:bg-grey-82 before:h-1px before:top-0 before:left-0 before:w-16 before:hidden before:content-DEFAULT before:absolute <sm:before:block "
	>
		<Content
			contentHead={welcomeSection.head}
			contentText={welcomeSection.text}
		/>
	</section>
</div>

<div class="mb-18 sm:mb-50">
	<Banner
		bannerText="Small team,<br>big ideas"
		bannerCtaText="About Us"
		bannerCtaLink="/about"
		--banner-image="url(/home/water.webp)"
	/>
</div>

<div class="container mx-auto mb-18 sm:mb-45 <sm:flex <sm:flex-col <sm:px-8">
	<Features />
</div>

<style>
	.welcome-banner::after {
		background-image: url("/home/welcome-to.jpg");
	}
</style>
