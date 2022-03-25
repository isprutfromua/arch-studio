<script>
	import Marker from "$lib/Marker.svelte";
</script>

<div class="bg-cover bg-center h-367px map relative sm:h-560px">
	<div
		class="bottom-32 left-0 marker absolute sm:bottom-45 lg:bottom-51 lg:left-86"
	>
		<Marker />
	</div>
	<div class="top-21 right-2 marker absolute sm:top-37 lg:top-51 lg:right-86">
		<Marker />
	</div>
</div>

<style>
	.map {
		background-image: url("/contact/map.webp");
	}
</style>
