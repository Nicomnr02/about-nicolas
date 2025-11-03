<script lang="ts">
  import { projects } from "$lib/constants/project";

  let preview: string | null;
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
              class="flex items-center p-3 h-2 rounded-3xl text-sm text-white bg-gray-900 hover:scale-105"
            >
              {stack}
            </div>
          {/each}
        </div>
        {#if project.image}
          <button onclick={() => (preview = project.image)}>
            <img
              src={project.image}
              alt=""
              class="w-1/2 transition-colors duration-300 hover:scale-105"
            />
          </button>
        {/if}
      </div>
    {/each}
  </div>
</section>

{#if preview}
  <button onclick={() => (preview = null)}>
    <div
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    >
      <img
        src={preview}
        alt="Full preview"
        class="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
      />
    </div>
  </button>
{/if}
