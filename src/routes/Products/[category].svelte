<script context="module">
  export async function preload({ params, query }) {
    const id = params.category;
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const API_URL = process.env.SAPPER_APP_API_URL
    const res = await this.fetch(`${API_URL}/api/products/category/${id}`);
    const data = await res.json();
    if (res.status === 200) {
      return { products: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>

  export let products;
  function handleAddToCart() {
    alert("Comprando");
  }
</script>

<style>
  aside {
    width: 20%;
    outline: 1px solid rgb(24, 207, 7);
  }
  aside ul {
    margin: 1em 2em;
  }
  .Products-container {
    height: inherit;
    margin: 1em;
    width: 98%;
  }
  /* .Products-container h1 {
    text-align: center;
  } */
  .products {
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    grid-row-gap: 1.5em;
    display: grid;
    padding: 0 1em;
  }

  .Products-item {
    width: 250px;
    text-decoration: none;
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
      1px 3px 8px rgba(39, 44, 49, 0.03);
    border-radius: 5px;
    position: relative;
  }
  .Products-item-info {
    padding: 10px;
  }
  .Products-item-info h2 {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
  /* .Products-item-info  span {
    color: #33b13a;
  }           */
  .Products-item-info p {
    font-size: 14px;
    font-weight: 300;
  }
  .Products-item img {
    width: 100%;
    height: 200px;
    border-radius: 5px 5px 0 0;
    object-fit: contain;
  }
  .Products-item button {
    width: 100%;
    padding: 10px;
    border-radius: 0px 0px 5px 5px;
    border: 0px;
    outline: 0;
    cursor: pointer;
    font-size: 14px;
    font-weight: 300;
  }
  .Products-item-info:hover {
    background-color: rgba(39, 44, 49, 0.06);
  }

  .Price-normal {
    text-decoration: line-through;
  }

  .Price-hoy {
    color: red;
    font-weight: bold;
    font-size: 20px;
  }

  .Products-buttom {
    background-color: #a2195b;
    color: white;
    font-size: 1.3em;
  }
</style>

<div class="Products-container">
  <aside>
    <ul>
      <li>Música</li>
      <li>Eventos</li>
      <li>Tienda</li>
    </ul>
  </aside>
  <div class="products">
    {#if products.length !== 0}
      {#each products.data as product}
        <div class="Products-item" key={product.idproducto}>
          <a rel="prefetch" href="/Item/{product._id}">
            <img src={product.image} alt={product.detail} />
          </a>
          <div class="Products-item-info">
            <h2>{product.detail}</h2>
            <p class="Price-normal">
              Precio Normal $ {Number(product.priceini).toLocaleString('es')}
            </p>
            <p class="Price-hoy">
              Hoy $ {Number(product.price).toLocaleString('es')}
            </p>
          </div>
          <a rel="prefetch" href="/Item/{product._id}">
            <button class="Products-buttom" type="button">Comprar</button>
          </a>
        </div>
      {/each}
    {:else}
      <p>Loading Products...</p>
    {/if}
  </div>
</div>

<!-- <button class="Products-buttom" type="button" onClick={() => handleAddToBuy(product)}>Comprar</button> -->
