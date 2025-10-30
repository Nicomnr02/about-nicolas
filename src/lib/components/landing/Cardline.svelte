<script lang="ts">
  import { person } from "$lib/constants/person";
  import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
</script>

<div class="mt-10 flex flex-col h-1/4">
  <div class="ml-10 flex gap-5 justify-start mt-10 h-2/3 w-full">
    <div class="flex justify-base items-center">
      <Avatar class="size-20">
        <AvatarImage src={person.avatar} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>

    <div class="flex flex-col items-start text-left w-60">
      <h3 class="font-bold text-2xl text-black text-col w-60">
        {person.name}
      </h3>
      <p class="">{person.title}</p>
      <p class="">{person.description}</p>
      <div class="mt-5 ml-auto flex gap-2 items-end">
        {#each person.social_medias as { ref, svg }}
          <a
            rel="noopener noreferrer"
            href={ref}
            target="_blank"
            style="--size:{500}px"
          >
            <div class="w-10 h-10 bg-black flex items-center rounded-full p-2">
              {@html svg}
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
