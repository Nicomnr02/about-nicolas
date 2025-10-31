<script lang="ts">
  import { projects } from "$lib/constants/project";
</script>

<div class="px-10 flex flex-col gap-5 w-full h-fit">
  <p class="text-1xl font-semibold tracking-tight">PROJECTS</p>
  <div class="flex flex-col gap-15">
    {#each projects as project}
      <div class="flex flex-col gap-5">
        <a
          href={project.src}
          class="flex items-center gap-1 font-bold hover:text-blue-400 transition-colors duration-300 group"
        >
          {project.title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 inline-block transition-transform duration-300 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 19l14-14M5 5h14v14"
            />
          </svg>
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
</div>
