<script>
	export let url = "";
</script>

<a
	href="/portfolio"
	sveltekit:prefetch
	class:active={url.pathname === "/portfolio"}
	class="hover:text-dark focus:text-dark ">Portfolio</a
>
<a
	href="/about"
	sveltekit:prefetch
	class:active={url.pathname === "/about"}
	class="hover:text-dark focus:text-dark">About Us</a
>
<a
	href="/contact"
	sveltekit:prefetch
	class:active={url.pathname === "/contact"}
	class="hover:text-dark focus:text-dark">Contact</a
>

<style>
	.active {
		@apply text-dark;
	}
</style>
