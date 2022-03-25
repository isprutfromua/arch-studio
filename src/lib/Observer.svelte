<script>
	import { inview } from "svelte-inview";
	import { fly } from "svelte/transition";
	let isInView;
</script>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
	on:change={({ detail }) => {
		isInView = detail.inView;
	}}
>
	{#if isInView}
		<div in:fly={{ y: 50, opacity: 0, duration: 1000 }}>
			<slot />
		</div>
	{/if}
</div>
