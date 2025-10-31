<script lang="ts">
  import AboutMe from "./AboutMe.svelte";
  import Cardline from "./Cardline.svelte";
</script>

<section class="flex flex-row justify-center h-2/3 w-full" id="landing">
  <div class="flex flex-col">
    <Cardline />
    <AboutMe />
    <br />
    <!-- <hr class="border-t-2 border-black my-6 w-3/5 mx-auto" /> -->
  </div>
</section>
