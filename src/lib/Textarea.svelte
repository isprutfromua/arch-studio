<script>
	import { fly } from "svelte/transition";
	export let inputPlaceholder = "";

	let value = "";
	let inputChanged = false;

	$: isEmpty = value.length == 0;
	$: isInvalid = inputChanged && isEmpty;
	$: isValid = inputChanged && !isEmpty;
</script>

<label class="flex w-full relative ">
	<textarea
		bind:value
		on:focus={() => {
			inputChanged = true;
		}}
		placeholder={inputPlaceholder}
		class="border-dark font-bold outline-none border-b-1 text-black text-xl tracking-tight px-8 pt-6 pb-18 placeholder-grey-82 leading-9 appearance-none  w-full focus:placeholder-transparent {isInvalid
			? 'border-red placeholder-red text-red'
			: ''} {isValid ? 'borde-b-3' : ''}"
		name="message"
		resize="none"
	/>

	{#if isInvalid}
		<span
			transition:fly={{ duration: 300, x: 10, opacity: 0 }}
			class="font-bold text-red transition-opacity right-4 bottom-4 absolute"
		>
			Can't be empty
		</span>
	{/if}
</label>
