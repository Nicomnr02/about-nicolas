<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- <style>
		* {
			outline: 1px dashed rgba(0, 0, 0, 0.25);
		}
	</style> -->
</svelte:head>

{@render children?.()}
