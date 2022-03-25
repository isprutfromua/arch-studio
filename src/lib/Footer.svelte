<script>
	import Logo from "$lib/Logo.svelte";
	import Menu from "$lib/Menu.svelte";
	import Button from "$lib/Button.svelte";
</script>

<footer class="mt-18 sm:mt-50 lg:container lg:mx-auto">
	<div
		class="bg-no-repeat flex flex-col pb-12 gap-y-8 items-center footer-bg md:(flex-row pb-0 gap-y-0 gap-x-8) "
	>
		<div
			class="bg-dark flex h-30 text-white  w-30  items-center justify-center xl:(w-50 h-50) "
		>
			<Logo />
		</div>
		<div
			class="flex flex-col font-bold  text-center text-grey-53 gap-y-8 md:(flex-row gap-y-0 gap-x-8 mr-auto) md:gap-x-14 "
		>
			<Menu />
		</div>
		<Button buttonText="See Our Portfolio" />
	</div>
</footer>

<style>
	@media (max-width: 767.9px) {
		.footer-bg {
			--footer-bg: hsla(224, 23%, 94%, 1);

			background-image: linear-gradient(
				to top,
				var(--footer-bg),
				var(--footer-bg)
			);
			background-size: 100% calc(100% - 60px);
			background-position-y: bottom;
		}
	}

	@media (min-width: 768px) {
		.footer-bg {
			--footer-bg: hsla(224, 23%, 94%, 1);

			background-image: linear-gradient(
				var(--footer-bg),
				var(--footer-bg)
			);
			background-size: 85% 100%;
		}
	}
</style>
