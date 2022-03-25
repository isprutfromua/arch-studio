<script>
	import Office from "../lib/Office.svelte";
	import Title from "$lib/Title.svelte";
	import Content from "$lib/Content.svelte";
	import Map from "$lib/Map.svelte";
	import Input from "$lib/Input.svelte";
	import Textarea from "$lib/Textarea.svelte";
	import ArrowIcon from "$lib/ArrowIcon.svelte";

	import {
		welcomeSection,
		contactsSection,
		connectSection,
	} from "../data/contact";
</script>

<!-- About -->
<div
	class="flex flex-col-reverse welcome-banner relative sm:container sm:flex-row sm:mx-auto sm:mb-50 sm:min-h-720px sm:items-end <sm:mb-18 after:content-DEFAULT"
	after="h-15rem sm:h-720px w-full lg:w-635px sm:absolute bg-cover bg-no-repeat overflow-hidden left-0 bottom-0 -z-1 bg-bottom"
>
	<div
		class="bg-white relative sm:ml-auto sm:w-lg sm:pt-22 <sm:px-8 lg:w-screen-sm lg:pt-40"
		after="<sm:content-DEFAULT bg-white absolute w-11/12 h-11 left-0 top-1 transform -translate-y-full"
	>
		<div
			class=" transform -translate-y-1/2 absolute sm:top-0 sm:right-0 lg:-left-50"
		>
			<Title titleText={welcomeSection.title} />
		</div>
		<div
			class="pt-35px relative sm:ml-14 sm:pt-17 lg:(max-w-md ml-48 box-content) "
			before="hidden sm:block content-DEFAULT bg-grey-82 h-1px w-16 absolute left-0 top-0"
		>
			<Content
				contentHead={welcomeSection.head}
				contentText={welcomeSection.text}
			/>
		</div>
	</div>
</div>
<!-- Contacts -->
<div
	class="mb-18 sm:container sm:mx-auto sm:mb-50 <sm:px-8 lg:flex lg:gap-7 lg:justify-start lg:items-start"
>
	<div
		class="flex flex-col pt-16 relative lg:max-w-21.87rem"
		before="content-DEFAULT bg-grey-82 h-1px w-16 absolute left-0 top-0"
	>
		<Content contentHead={contactsSection.head} />
	</div>
	<ul
		class="flex flex-col text-grey-40 gap-y-10 lg:flex-row lg:flex-grow lg:pt-16 lg:gap-x-30px lg:justify-between"
	>
		{#each contactsSection.offices as office}
			<li class=" @md:flex @md:items-center @md:justify-between ">
				<Office
					officeAddress={office.address}
					officeName={office.name}
					officePhone={office.phone}
					officeMail={office.mail}
				/>
				<div class="link">
					<button class="flex font-bold text-dark items-center">
						<span> View on Map </span>
						<div class="ml-6">
							<ArrowIcon fill="#1B1D23" />
						</div>
					</button>
				</div>
			</li>
		{/each}
	</ul>
</div>

<!-- map -->
<div class="mb-18 sm:container sm:mx-auto sm:mb-50 ">
	<Map />
</div>

<!-- form -->
<div
	class="container mx-auto mb-18 sm:mb-50 <sm:px-8 lg:flex lg:gap-7 lg:justify-start lg:items-start"
>
	<div class="flex flex-col lg:w-full lg:max-w-21.87rem">
		<Content contentHead={connectSection.head} />
	</div>
	<div class="w-full">
		<form action="#" method="get" class="flex flex-col">
			<Input inputPlaceholder="Name" />
			<div class="mb-4" />
			<Input inputPlaceholder="Email" />
			<div class="mb-4" />
			<Textarea inputPlaceholder="Message" />
			<button
				type="submit"
				class="outline-transparent h-20 p-0 w-20 btn self-end box-content"
			>
				<ArrowIcon />
			</button>
		</form>
	</div>
</div>

<style>
	.welcome-banner::after {
		background-image: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0.5),
				rgba(0, 0, 0, 0.5)
			),
			url("/contact/phone.png");
	}
</style>
