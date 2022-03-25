<script>
	export let url = "";
</script>

<a
	href="/portfolio"
	class:active={url.pathname === "/portfolio"}
	class="hover:text-dark focus:text-dark ">Portfolio</a
>
<a
	href="/about-us"
	class:active={url.pathname === "/about-us"}
	class="hover:text-dark focus:text-dark">About Us</a
>
<a
	href="/contact"
	class:active={url.pathname === "/contact"}
	class="hover:text-dark focus:text-dark">Contact</a
>

<style>
	.active {
		@apply text-dark;
	}
</style>
