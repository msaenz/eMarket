<script>
  export let idcategory;
  export let image;
  export let category;
</script>

<style>
  .Card {
    text-decoration: none;
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
      1px 3px 8px rgba(39, 44, 49, 0.03);
    border-radius: 5px;
    display: block;
    animation-duration: 4s;
    animation-name: fade;
  }

  .Card img {
    width: 100%;
    height: 300px;
    border-radius: 5px 5px 0 0;
  }

  .Card h2 {
    font-size: 18px;
    font-weight: 300;
    padding: 5px 10px;
    text-align: center;
  }
</style>

<article class="Card" key={idcategory}>
  <a rel='prefetch' href="/Products/{idcategory}">
  <!-- <a href="/Products"> -->

    <img src={image} alt={category} />
  </a>
  <h2>{category}</h2>
</article>
