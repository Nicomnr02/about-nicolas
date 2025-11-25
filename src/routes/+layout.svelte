<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/person/nicomnr.png";
	import { keywords } from "$lib/constants/seo";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="keywords" content={keywords} />
	<meta name="google-site-verification" content={keywords} />
	<!-- <style>
		* {
			outline: 1px dashed rgba(0, 0, 0, 0.25);
		}
	</style> -->
</svelte:head>

{@render children?.()}
