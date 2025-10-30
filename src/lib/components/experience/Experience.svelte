<script>
  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
  } from "svelte-vertical-timeline";

  import { experiences } from "$lib/constants/experience";
</script>

<section
  class="mt-5 lg:mt-15 h-screen lg:h-fit flex flex-col gap-10 items-center w-full"
  id="experience"
>
  <p class="text-2xl font-bold tracking-tight">Experiences</p>
  <Timeline position="left" style={"border-radius: 2%;"}>
    {#each experiences as experience, i}
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          <div class="flex flex-wrap gap-2 animate-fade-in">
            {#each experience.systems as system}
              <span
                class="bg-linear-to-r from-cyan-500/30 to-blue-600/30
               border border-cyan-400/30
               px-3 py-1 rounded-bl-sm text-xs
               backdrop-blur-sm shadow-sm shadow-cyan-500/10
               transition-all duration-300
               hover:scale-105 hover:shadow-cyan-400/30 hover:border-cyan-400/60 hover: hover:from-cyan-500/60 hover:to-blue-600/60"
              >
                {system}
              </span>
            {/each}
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={"background-color: //#region ;"} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h3 class={i == 0 ? "font-extrabold" : "font-medium"}>
            {experience.company}
          </h3>
          <p
            class={i == 0
              ? "font-light text-sm mb-10"
              : "font-extralight text-sm mb-10"}
          >
            {experience.time}
          </p>
        </TimelineContent>
      </TimelineItem>
    {/each}
  </Timeline>
</section>
