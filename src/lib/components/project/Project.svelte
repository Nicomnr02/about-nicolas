<script lang="ts">
  import { projects } from "$lib/constants/project";
</script>

<section class="px-10 flex flex-col gap-5 w-full h-fit" id="project">
  <p class="text-1xl font-semibold tracking-tight">PROJECTS</p>
  <div class="flex flex-col gap-15">
    {#each projects as project}
      <div class="flex flex-col gap-5">
        <a
          href={project.src}
          class="flex items-center gap-1 font-bold hover:text-blue-400 transition-colors duration-300 group"
        >
          {project.title}
        </a>

        <p class="text-sm leading-relaxed">{project.description}</p>
        <div class="flex gap-3 flex-wrap">
          {#each project.stack as stack}
            <div
              class="flex items-center p-3 h-2 rounded-3xl text-sm text-white bg-gray-900"
            >
              {stack}
            </div>
          {/each}
        </div>
        {#if project.image}
          <img src={project.image} alt="" class="w-1/2" />
        {/if}
      </div>
    {/each}
  </div>
</section>
