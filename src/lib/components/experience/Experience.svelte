<script>
  import { experiences } from "$lib/constants/experience";
</script>

<section class="px-10 flex flex-col mt-15 h-fit gap-10 w-full" id="experience">
  <p class="text-1xl font-semibold tracking-tight">EXPERIENCE</p>
  <div class="flex gap-10 flex-col">
    {#each experiences as exp}
      <div class="flex flex-col gap-3">
        <p class="text-sm leading-relaxed">{exp.timeline}</p>
        <a
          href={exp.src}
          class="flex items-center gap-1 font-bold hover:text-blue-400 transition-colors duration-300 group"
        >
          {exp.title} ↗
        </a>
        <!-- <p class="text-1xl leading-relaxed font-bold">{exp.title}</p> -->
        <p class="text-sm leading-relaxed">{exp.description}</p>
        <div class="flex flex-wrap gap-2">
          {#each exp.stack as stack}
            <div
              class="flex items-center p-3 h-2 rounded-3xl text-sm text-white bg-gray-900 hover:scale-105"
            >
              {stack}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
