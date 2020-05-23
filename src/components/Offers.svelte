<script>
  import Offersitem from "./Offersitem.svelte";

  export let offers = [];
  // export let title = "";
</script>

<style>
  .Offers {
    padding-left: 20px;
  }

  /* .Offers h1 {
    text-align: center;
  } */
  .Offers-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2em;
  }
</style>

<div class="Offers">
  <!-- <h1>{title}</h1> -->
  <div class="Offers-container">
    {#each offers as item}
      <Offersitem {...item} />
    {:else}
      <p>Loading...</p>
    {/each}
  </div>
</div>
