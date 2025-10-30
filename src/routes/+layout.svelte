<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
	:global(body) {
		/* color: #f1f1f1;
		background-color: #121212;
		font-family: system-ui, sans-serif; */
	}
</style>
