<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { projects } from "$lib/constants/project";
</script>

<div class="flex flex-col gap-25 items-center h-screen w-full text-white">
  <div class="flex flex-col justify-center px-10">
    <p class="mt-15 text-2xl font-bold tracking-tight">Projects</p>
    <p class="text-sm mt-5 leading-relaxed">
      Here are my awesome Projects that already launched. Those projects covered
      over 2+ companies business and 1 volunteered program.
    </p>
  </div>
  <div class="flex flex-col items-center justify-center w-full">
    <Carousel.Root
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="horizontal"
      class="w-full max-w-xs h-[280px]"
    >
      <Carousel.Content class="mt-1 h-[300px]">
        {#each projects as project, i (i)}
          <Carousel.Item class="pt-1 ">
            <div class="p-1">
              <Card.Root
                class="h-[250px] bg-white shadow-lg rounded-3xl p-10 hover:bg-cyan-950
               transition duration-300"
              >
                <Card.Content class="flex items-center justify-center p-3 ">
                  <div class="flex flex-col">
                    <div>{@html project.svg}</div>
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
    <p class="text-sm mt-5 leading-relaxed">Scroll ke kanan ➜</p>
  </div>
</div>
