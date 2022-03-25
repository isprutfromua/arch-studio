<script>
	import LinkedInIcon from "./LinkedInIcon.svelte";
	import TwitterIcon from "./TwitterIcon.svelte";

	export let leaderImage = "";
	export let leaderName = "";
	export let leaderPosition = "";
</script>

<div class="leader-item lg:relative">
	<img src={leaderImage} alt={leaderName} />
	<p class="font-bold mt-6">{leaderName}</p>
	<p class="mb-2">{leaderPosition}</p>
	<div
		class="flex transition-opacity transition gap-x-6 duration-300 links items-center lg:bg-black/50 lg:opacity-0 lg:top-0 lg:right-0 lg:left-0 lg:absolute lg:justify-center"
	>
		<a href="https://twitter.com" aria-label="Go to {leaderName} twitter">
			<TwitterIcon />
		</a>
		<a href="https://linkedin.com" aria-label="Go to {leaderName} linkedin">
			<LinkedInIcon />
		</a>
	</div>
</div>

<style>
	@media (min-width: 1024px) {
		.links {
			aspect-ratio: calc(350 / 320);
		}

		.leader-item:hover .links {
			opacity: 1;
		}
	}
</style>
