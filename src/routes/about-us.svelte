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
	class="flex flex-col-reverse welcome-banner relative sm:container sm:flex-row sm:mx-auto sm:mb-50 sm:min-h-720px sm:items-end <sm:mb-18 after:content-DEFAULT"
	after="h-15rem sm:h-720px w-full lg:w-635px sm:absolute bg-cover bg-no-repeat overflow-hidden left-0 bottom-0 -z-1 bg-bottom"
>
	<div
		class="bg-white relative sm:ml-auto sm:w-lg sm:pt-22 <sm:px-8 lg:w-screen-sm lg:pt-40"
		after="<sm:content-DEFAULT bg-white absolute w-11/12 h-11 left-0 top-1 transform -translate-y-full"
	>
		<div
			class=" transform -translate-y-1/2 absolute sm:top-0 sm:right-0 lg:-left-6"
		>
			<Title titleText={welcomeSection.title} />
		</div>
		<div
			class="pt-35px relative sm:ml-14 sm:pt-17 lg:(max-w-md ml-48 box-content) "
			before="hidden sm:block content-DEFAULT bg-grey-82 h-1px w-16 absolute left-0 top-0"
		>
			<Content
				contentHead={welcomeSection.head}
				contentText={welcomeSection.text}
			/>
		</div>
	</div>
</div>
<!-- Heritage -->
<div
	class="flex mb-18 justify-between sm:container sm:mx-auto sm:mb-50 <sm:px-8 lg:gap-32 "
>
	<div
		class="flex flex-col pt-16 relative lg:max-w-27.87rem"
		before="content-DEFAULT bg-grey-82 h-1px w-16 absolute left-0 top-0"
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
