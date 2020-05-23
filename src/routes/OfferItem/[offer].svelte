<script context="module">
  const apiURL = process.env.SAPPER_APP_API_URL

  export async function preload({ params, query }) {
    const id = params.offer;
    console.log(id)
    // the `slug` parameter is available because
    // this file is called [slug].svelte

    const res = await this.fetch(`${apiURL}/api/offers/${id}`);
    const data = await res.json();
    // products = data;
    // return products;
    if (res.status === 200) {
    	console.log(data)
    	return { offer: data.data };
    } else {
    	this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let offer;
  function handleAddToCart() {
    alert("Comprando")
  }
</script>

<style>
  .Product {
    background-color: whitesmoke;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .Product h2 {
    text-align: center;
  }

  .Product-container {
    height: inherit;
    display: flex;
  }

  .Product-data-sheet{
    display: block;
  }

  .Product-data-sheet li{
    text-align: left;
  }

  .Product-miniPic {
    display: flex;
    width: 200px;
    height: inherit;
    padding: 1em;
    flex-direction: column;
  }

  .Product-miniPic img{
    width: 100px;
    height: 120px;
    padding: 1em 0;
  }

  .Product-mainImage {
    padding:2em ;
    width:50%;
    object-fit: contain;
  }

  .Product-info {
    width: 40%;
    height: inherit;
    text-align: center;
  }

  .cart-buttom {
    background-color: #A2195B;
    color: white;
    width: 90%;
    height: 3em;
    font-size: 1.3em;
    margin: 1em 0;
  }

  .Product-back {
    color: white;
    width: 90%;
    height: 3em;
    font-size: 1.3em;
    margin: 0 0 1em 0;
    background-color: #39A8DF;
  }
  .Price-normal {
    text-decoration: line-through;
  }

  .Price-hoy {
    color: red;
    font-weight: bold;
    font-size: 2em;
  }

  .Product-qty {
    font-size: 1.2em;
    text-align: right;
  }
</style>

<div class="Product">
  {#if offer.length !== 0}
    <h2>{offer.detail}</h2>
    <div class="Product-container">
      <div class="Product-miniPic">
        <img src={offer.image} alt={offer.detail} />
        <img src={offer.image} alt={offer.detail} />
      </div>
      <img class="Product-mainImage" src={offer.image} alt={offer.detail} />
      <div class="Product-info">
        <p class="Price-normal">
          Precio Normal $
          {Number(offer.priceini).toLocaleString('es')}
        </p>
        <h3 class="Price-hoy">
          Hoy $
          {Number(offer.price).toLocaleString('es')}
        </h3>
        <p>Cantidad </p>
        <input class="Product-qty" type="number" name="qty" min="1" max="20" defaultValue="1" />
        <button class="cart-buttom" type="button" on:click={ handleAddToCart(offer.prodbuy)} > Agregar al Carrito</button>
        <div>
          <button class="Product-back" type="button" on:click={() => { history.goBack() }} >Continuar Comprando</button>
        </div>
        <div class="Product-data-sheet">
          <ul>
            <h2>Caracteristicas</h2>
            <li>Procesador</li>
            <li>.Sistema Operativo</li>
            <li>.Memoria Ram</li>
            <li>.Pantalla 8</li>
          </ul>
        </div>
      </div>
    </div>
  {:else}  
    <p>Loading...</p>  
  {/if}
</div>
