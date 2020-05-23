<script>
  import Card from "./Card.svelte";

  export let categories = [];
  // export let title = "";
</script>

<style>
  .Category {
    padding-left: 20px;
    width: 100%;
  }

  .Category-container {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    grid-row-gap: 1em;
    display: grid;
    width: 100%;
  }
</style>

<article class="Category">
  <!-- <h1>{title}</h1> -->
  <div class="Category-container">
    {#each categories as category}
      <Card {...category} />
    {:else}
      <p>Loading...</p>
    {/each}
  </div>
</article>
