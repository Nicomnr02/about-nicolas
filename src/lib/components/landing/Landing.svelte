<script lang="ts">
  import AboutMe from "./AboutMe.svelte";
  import Cardline from "./Cardline.svelte";
</script>

<div
  class="flex flex-row justify-center h-screen bg-[url(./lib/assets/landing-bg.svg)]"
>
  <div class="flex flex-col">
    <Cardline />
    <AboutMe />
  </div>
</div>
