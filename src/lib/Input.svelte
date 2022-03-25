<script>
	import { fly } from "svelte/transition";
	export let inputPlaceholder = "";

	let value = "";
	let inputChanged = false;

	$: isEmpty = value.length == 0;
	$: isInvalid = inputChanged && isEmpty;
	$: isValid = inputChanged && !isEmpty;
</script>

<label class="w-full relative">
	<input
		bind:value
		on:focus={() => {
			inputChanged = true;
		}}
		minlength="3"
		required
		placeholder={inputPlaceholder}
		class=" font-bold outline-none border-b-1 text-black text-xl tracking-tight w-full py-6 px-8 appearance-none focus:placeholder-transparent border-dark placeholder-grey-82 {isInvalid
			? 'border-red placeholder-red text-red'
			: ''} {isValid ? 'borde-b-3' : ''}"
	/>
	{#if isInvalid}
		<span
			transition:fly={{ duration: 300, x: 10, opacity: 0 }}
			class="font-bold text-red transition-opacity right-4 bottom-4 absolute"
		>
			Can’t be empty
		</span>
	{/if}
</label>
