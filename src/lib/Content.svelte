<script>
	export let contentHead = "";
	export let contentText = "";
</script>

{#if contentHead}
	<h2 class="h2">
		{@html contentHead}
	</h2>
{/if}
{#if contentText}
	<div class="flex flex-col text-15px text-grey-40 leading-6 gap-y-8">
		{@html contentText}
	</div>
{/if}
