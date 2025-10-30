<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { projects } from "$lib/constants/project";
</script>

<section
  class="mt-5 flex flex-col gap-10 items-center lg:h-1/2 w-full"
  id="project"
>
  <div class="flex flex-col justify-center px-10">
    <p class="text-2xl font-bold tracking-tight">Projects</p>
    <p class="text-sm mt-5 leading-relaxed">
      Here are my projects that already launched and used by 200+ active users.
      Those projects are covered over 2 companies business and 3 volunteered
      program.
    </p>
  </div>
  <div class="flex flex-col items-center justify-center w-4/5">
    <Carousel.Root
      opts={{
        align: "start",
        loop: true,
        skipSnaps: false,
      }}
      orientation="horizontal"
      class="w-full h-[280px] "
    >
      <Carousel.Content class="mt-1 h-[300px] ">
        {#each projects as project, i (i)}
          <Carousel.Item class="pt-1">
            <div class="p-1 flex justify-center">
              <Card.Root
                class="flex justify-center items-center w-80 h-[250px]  inset-5 hover:bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.5),transparent_80%)] backdrop-blur-0 border border-black/60 rounded-2xl transition duration-500 hover:backdrop-blur-md hover:bg-black hover:-translate-y-1"
              >
                <Card.Content
                  class="flex flex-col items-center justify-center p-3 "
                >
                  <div class="flex flex-col justify-center items-center">
                    {#if project.image}
                      <img src={project.image} alt="" class="w-1/2" />
                    {:else}
                      {@html project.svg}
                    {/if}
                  </div>
                </Card.Content>
              </Card.Root>
            </div>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <!-- <Carousel.Previous />
      <Carousel.Next /> -->
    </Carousel.Root>
    <p class="text-sm mt-5 leading-relaxed flex items-center gap-1">
      Scroll to the right
      <span class="inline-block text-blue-500 animate-pulse">➜</span>
    </p>
  </div>
</section>
