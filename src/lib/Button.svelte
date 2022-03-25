<script>
	import ArrowIcon from "./ArrowIcon.svelte";

	export let buttonLink = "/portfolio";
	export let buttonText = "See all";
</script>

<a href={buttonLink} class="btn" aria-label={buttonText}>
	<span>{buttonText}</span>
	<ArrowIcon />
</a>
