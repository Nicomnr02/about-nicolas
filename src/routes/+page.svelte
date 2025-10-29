<script>
  import Experience from "./../lib/components/experience/Experience.svelte";
  import Project from "$lib/components/project/Project.svelte";
  import Landing from "$lib/components/landing/Landing.svelte";
</script>

<section class="flex flex-col bg-[url(./lib/assets/landing-bg.svg)]">
  <Landing></Landing>
  <Project></Project>
  <Experience></Experience>
</section>
