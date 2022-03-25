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

<div class="mb-18 sm:container sm:mx-auto xl:mb-50 ">
	<Carousel />
</div>

<div
	class="welcome-banner sm:container sm:mx-auto sm:mb-50 <sm:mt-18 <sm:mb-25 <sm:px-8 xl:relative xl:after:content-DEFAULT"
	after="h-568px w-350px absolute bg-cover bg-no-repeat overflow-hidden right-0 bottom-0 -z-1 bg-bottom"
>
	<Title titleText={welcomeSection.title} />
	<div
		class="<sm:pt-17 <sm:relative xl:(max-w-md pl-48 box-content) "
		before="<sm:block hidden content-DEFAULT bg-grey-82 h-1px w-16 absolute left-0 top-0"
	>
		<Content
			contentHead={welcomeSection.head}
			contentText={welcomeSection.text}
		/>
	</div>
</div>

<div class="mb-18 sm:mb-50">
	<Banner
		bannerText="Small team,<br>big ideas"
		bannerCtaText="About Us"
		bannerCtaLink="/about"
		--banner-image="url(home/water.png)"
	/>
</div>

<Features />

<style>
	.welcome-banner::after {
		background-image: url("home/welcome-to.jpg");
	}
</style>
