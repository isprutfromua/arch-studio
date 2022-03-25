<script>
	import Button from "$lib/Button.svelte";

	export let bannerText = "";
	export let bannerDescription = "";
	export let bannerCtaText = "";
	export let bannerCtaLink = "";
	export let bannerStyle = "small";
</script>

<section
	class="bg-center bg-cover flex flex-col pl-8 justify-center items-start sm:(container mx-auto) sm:pl-14 lg:pl-48 "
	h="35rem {bannerStyle == 'large' ? 'lg:45rem' : ''}"
>
	{#if bannerStyle == "large"}
		<h1
			class="font-bold text-white leading-tight max-w-125 text-5xl -tracking-2px sm:leading-none sm:text-5rem lg:-mt-2"
		>
			{@html bannerText}
		</h1>
	{:else if bannerStyle == "small"}
		<h1
			class="font-bold text-white leading-tight text-2.5rem -tracking-2px sm:leading-none sm:text-h2"
		>
			{@html bannerText}
		</h1>
	{/if}
	{#if bannerDescription}
		<p class=" mt-3 text-white max-w-112 text-15px leading-25px">
			{@html bannerDescription}
		</p>
	{/if}
	{#if bannerCtaLink && bannerCtaText}
		<div class="mt-11">
			<Button buttonLink={bannerCtaLink} buttonText={bannerCtaText} />
		</div>
	{/if}
</section>

<style>
	section {
		background-image: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.5),
				rgba(0, 0, 0, 0.5)
			),
			var(--banner-image);
	}
</style>
