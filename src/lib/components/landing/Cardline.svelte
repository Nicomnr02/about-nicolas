<script lang="ts">
  import { person } from "$lib/constants/person";
  import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
</script>

<div class="mt-10 flex flex-col h-1/4 text-white">
  <div class="flex justify-center items-center mt-10 gap-4 h-1/6 w-full">
    <div class="flex justify-base items-center">
      <Avatar class="size-20 sm:size-25 md:size-25 lg:size-25">
        <AvatarImage src={person.avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
    <div class="mt-15 flex flex-col justify-center text-left w-60">
      <h3 class="font-bold text-2xl text-white text-col w-60">
        {person.name}
      </h3>
      <p class="text-white">{person.title}</p>
      <p class="text-white">{person.description}</p>
      <div class="mt-5 flex justify-end gap-2 text-white">
        {#each person.social_medias as { ref, svg }}
          <a
            rel="noopener noreferrer"
            href={ref}
            target="_blank"
            style="--size:{500}px"
          >
            <div class="w-10 h-10">{@html svg}</div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
