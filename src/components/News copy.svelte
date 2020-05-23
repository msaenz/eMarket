<script>
  import Newsitem from "./Newsitem.svelte";

  export let news = [];
  export let title = "";
</script>

<style>
  .News {
    width: 100%;
    overflow: scroll;
    padding-left: 20px;
    position: relative;
  }
  .News h1 {
    text-align: center;
  }
  .News-container {
    transition: 450ms -webkit-transform;
    transition: 450ms transform;
    transition: 450ms transform, 450ms -webkit-transform;
    font-size: 0;
    white-space: nowrap;
    margin: 5px 0px;
    padding-bottom: 10px;
  }

  .News-container:hover {
    opacity: 0.3;
  }

  .News-container:hover {
    transform: scale(1.5);
    -webkit-transform: scale(1.5);
    opacity: 1;
  }
</style>

<section class="News">
	<h1>{title}</h1>
	<div class="News-container">
		{#each news as item}
			<Newsitem {...item} />
		{:else}
			<p>Loading...</p>
		{/each}
    </div>
</section>
