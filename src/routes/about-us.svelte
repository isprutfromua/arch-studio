<script>
	import Content from "$lib/Content.svelte";
	import Leader from "$lib/Leader.svelte";
	import Title from "$lib/Title.svelte";

	import {
		welcomeSection,
		heritageSection,
		leadersSection,
	} from "../data/about";
</script>

<svelte:head>
	<title>About us</title>
</svelte:head>

<!-- About -->
<div
	class="flex flex-col-reverse welcome-banner relative sm:container sm:flex-row sm:mx-auto sm:mb-50 sm:min-h-720px sm:items-end <sm:mb-18 after:bg-cover after:bg-no-repeat after:bg-bottom after:h-15rem after:w-full after:bottom-0 after:left-0 after:-z-1 after:content-DEFAULT after:overflow-hidden sm:after:h-720px sm:after:absolute lg:after:w-635px"
>
	<div
		class="bg-white relative sm:ml-auto sm:w-lg sm:pt-22 <sm:px-8 lg:w-screen-sm lg:pt-40 after:bg-white after:h-11 after:transform after:-translate-y-full after:top-1 after:left-0 after:w-11/12 after:absolute <sm:after:content-DEFAULT"
	>
		<div
			class=" transform -translate-y-1/2 absolute sm:top-0 sm:right-0 lg:-left-6"
		>
			<Title titleText={welcomeSection.title} />
		</div>
		<section
			class="pt-35px relative sm:ml-14 sm:pt-17 lg:(max-w-md ml-48 box-content) before:bg-grey-82 before:h-1px before:top-0 before:left-0 before:w-16 before:hidden before:content-DEFAULT before:absolute sm:before:block "
		>
			<Content
				contentHead={welcomeSection.head}
				contentText={welcomeSection.text}
			/>
		</section>
	</div>
</div>
<!-- Heritage -->
<div
	class="flex mb-18 justify-between sm:container sm:mx-auto sm:mb-50 <sm:px-8 lg:gap-32 "
>
	<div
		class="flex flex-col pt-16 relative lg:max-w-27.87rem before:bg-grey-82 before:h-1px before:top-0 before:left-0 before:w-16 before:content-DEFAULT before:absolute"
	>
		<Content
			contentHead={heritageSection.head}
			contentText={heritageSection.text}
		/>
	</div>
	<div class="flex-1 lg:max-w-33.75rem">
		<img
			src="/about/heritage.jpg"
			alt="heritage"
			class="object-cover h-36rem w-full"
		/>
	</div>
</div>

<!-- leaders -->
<section
	class="flex flex-col mb-18 sm:container sm:mx-auto sm:mb-50 <sm:px-8 lg:flex-row lg:justify-between"
>
	<h2
		class="font-bold text-dark mb-7 tracking-tight text-2.5rem sm:mr-8 sm:text-3.5rem <lg:mb-14"
	>
		{@html leadersSection.head}
	</h2>
	<ul class="list-none grid gap-x-7  gap-y-10 sm:grid-cols-2 lg:gap-y-16">
		{#each leadersSection.leaders as { name, image, position }}
			<li>
				<Leader
					leaderName={name}
					leaderImage={image}
					leaderPosition={position}
				/>
			</li>
		{/each}
	</ul>
</section>

<style>
	.welcome-banner::after {
		background-image: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.5),
				rgba(0, 0, 0, 0.5)
			),
			url("/about/laptop.webp");
	}
</style>
