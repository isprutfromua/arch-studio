<script>
	export let officeName = "";
	export let officeMail = "";
	export let officeAddress = "";
	export let officePhone = "";
</script>

<div class="flex flex-col mb-4 gap-y-2 info lg:mb-8">
	{#if officeName}
		<p class="font-bold mb-2">
			{officeName}
		</p>
	{/if}
	{#if officeMail}
		<p>
			Mail: <a href="mailto:{officeMail}">{officeMail}</a>
		</p>
	{/if}
	{#if officeAddress}
		<p>
			Address: {officeAddress}
		</p>
	{/if}
	{#if officePhone}
		<p>
			Phone: <a href="tel:+{officePhone}">{officePhone}</a>
		</p>
	{/if}
</div>
