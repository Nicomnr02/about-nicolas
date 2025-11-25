<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/person/nicomnr.png";
	import { keywords } from "$lib/constants/seo";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="keywords" content={keywords} />
	<title>Nicolas Manurung — Software Engineer</title>
	<meta
		name="description"
		content="Portfolio Nicolas Raja Oloan Manurung, Software Engineer"
	/>
	<!-- <style>
		* {
			outline: 1px dashed rgba(0, 0, 0, 0.25);
		}
	</style> -->
</svelte:head>

{@render children?.()}
