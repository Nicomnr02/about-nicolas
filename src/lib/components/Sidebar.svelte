<script>
  import { Menu, X } from "lucide-svelte";
  import { sidebar } from "$lib/constants/sidebar";

  export let defaultOpen = false;

  let open = defaultOpen;

  // function handleClick() {
  //   open = false;
  // }
</script>

<!-- Toggle Button -->
<button
  on:click={() => (open = !open)}
  class="fixed bottom-1/6 right-3 z-50 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition"
  aria-label="Toggle sidebar"
>
  {#if open}
    <X size="20" />
  {:else}
    <Menu size="20" />
  {/if}
</button>

{#if open}
  <nav
    class="fixed bottom-1/4 right-2 w-1/8 lg:w-11 bg-black border-t rounded-2xl flex flex-col justify-around items-center py-5 lg:py-5 h-1/3 transition-all duration-300 z-10"
  >
    {#each sidebar as sb}
      <a
        href={"#" + sb.id}
        class="text-white hover:text-yellow-300 transition"
        title={sb.label}
      >
        <svelte:component this={sb.icon} size="30" />
      </a>
    {/each}
  </nav>
{/if}
