<script>
	export let tileName = "";
	export let tileImage = "";
	export let tileDate = "";
	export let tileNumbers = true;
	export let tileCtaLink = "";
	export let tileCtaText = "";
</script>

<section
	class="text-white relative before:transition before:inset-0 before:duration-300 before:content-DEFAULT before:absolute hover:before:opacity-0 after:font-bold after:opacity-50 after:transition after:top-9 after:-right-2 after:text-12.5rem after:-tracking-5px after:duration-300 after:absolute {tileNumbers
		? '<sm:after:hidden'
		: 'after:hidden'} hover:after:opacity-0"
>
	<picture>
		<source srcset={tileImage.replace("png", "webp")} type="image/webp" />
		<img
			src={tileImage}
			alt={tileName}
			class="object-cover object-center-bottom h-15rem w-full lg:h-35rem"
		/>
	</picture>
	<div class="bottom-10 left-10 absolute ">
		{#if tileName}
			<h3 class="font-bold text-lg">{tileName}</h3>
		{/if}
		{#if tileDate}
			<p class="text-15px">{tileDate}</p>
		{/if}
		{#if tileCtaLink && tileCtaText}
			<a href={tileCtaLink}>{tileCtaText}</a>
		{/if}
	</div>
</section>

<style>
	section::after {
		counter-reset: tile-number var(--tile-number, "");
		content: counter(tile-number);
	}

	section::before {
		background-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.0001) 0.01%,
			rgba(0, 0, 0, 0.5) 100%
		);
	}
</style>
