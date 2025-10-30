<script>
  import { skillIcons } from "$lib/constants/skills";
</script>

<section id="skill">
  <div class="p-15 flex flex-col gap-10 items-center h-fit w-full">
    <p class="text-2xl font-bold tracking-tight">Skills</p>

    <h1>Language</h1>
    <div class="flex justify-center gap-5 flex-wrap">
      {#each skillIcons.language as icon}
        <img src={icon} alt="gambar" class="w-1/6" />
      {/each}
    </div>

    <h1>Framework</h1>
    <div class="flex justify-center gap-5 flex-wrap">
      {#each skillIcons.framework as icon}
        <img src={icon} alt="gambar" class="w-1/6" />
      {/each}
    </div>

    <h1>Front End</h1>
    <div class="flex justify-center gap-5 flex-wrap">
      {#each skillIcons.frontend as icon}
        <img src={icon} alt="gambar" class="w-1/6" />
      {/each}
    </div>

    <h1>Databases</h1>
    <div class="flex justify-center gap-5 flex-wrap">
      {#each skillIcons.databases as icon}
        <img src={icon} alt="gambar" class="w-1/6" />
      {/each}
    </div>

    <h1>Platforms</h1>
    <div class="flex justify-center gap-5 flex-wrap">
      {#each skillIcons.platforms as icon}
        <img src={icon} alt="gambar" class="w-1/6" />
      {/each}
    </div>
  </div>
</section>
