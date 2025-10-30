<script>
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Skill from "./../lib/components/skill/Skill.svelte";
  import Experience from "./../lib/components/experience/Experience.svelte";
  import Project from "$lib/components/project/Project.svelte";
  import Landing from "$lib/components/landing/Landing.svelte";
</script>

<Sidebar></Sidebar>

<section class="flex gap-10 flex-col items-center lg:w-1/3 mx-auto">
  <Landing></Landing>
  <Project></Project>
  <Experience></Experience>
  <Skill></Skill>
</section>
