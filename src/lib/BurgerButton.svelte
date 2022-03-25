<script>
	export let active = false;
</script>

<button
	class="ml-auto outline-transparent h-17px transition w-6 duration-500 relative sm:hidden"
	type="button"
	class:open={active}
	on:click
>
	<span
		class="bg-dark h-3px w-full opacity-100 transform transition-transform top-0 left-0 duration-200 block absolute"
	/>
	<span
		class="bg-dark h-3px w-full opacity-100 transform transition top-7px left-0 duration-200 block absolute"
	/>
	<span
		class="bg-dark h-3px w-full opacity-100 transform transition-transform top-14px left-0 duration-200 block absolute"
	/>
</button>

<style>
	button {
		-webkit-tap-highlight-color: transparent;
	}

	.open span:nth-child(1) {
		@apply top-7px rotate-135;
	}

	.open span:nth-child(2) {
		@apply opacity-0  scale-x-0;
	}

	.open span:nth-child(3) {
		@apply top-7px -rotate-135;
	}
</style>
