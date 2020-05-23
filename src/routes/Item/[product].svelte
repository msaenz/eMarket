<script context="module">
  const apiURL = process.env.SAPPER_APP_API_URL
  let epaycoUrl = process.env.SAPPER_APP_URL_EPAYCO;
  let epaycoKey = process.env.SAPPER_APP_EPAYCO_KEY
  let epaycoResp = process.env.SAPPER_APP_EPAYCO_RESPONSE
  let epaycoConfirm = process.env.SAPPER_APP_EPAYCO_CONFIRMATION

  export async function preload({ params, query }) {
    const id = params.product;
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`${apiURL}/api/products/${id}`);
    const data = await res.json();
    if (res.status === 200) {
      return { product: data.data };
    } else {
      this.error(res.status, data.message);
    }
  }

</script>

<script>
  import { blur } from "svelte/transition";
  import { carrito, sumQty, sumPrice } from "../../store/store.js";
  import Modal from "../../components/Modal.svelte"
  import Share from "../../components/Share.svelte"
  
  export let product;
  let qty = 1;
  let isModal = false;

  function handleAddToCart() {
    let indice = $carrito.findIndex(($carrito) => $carrito._id === product._id)
    if ( indice === -1) { //producto no esta en el carrito de compras
      product.qty = qty;
      $carrito = [...$carrito, product];
    } else {
      $carrito[indice].qty += qty 
    }
    qty = 1;
    isModal = !isModal;
  }

  function handleClick() {
    isModal = !isModal;
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
  .Product-qty {
    padding-right: 0.5em;
    color: blue;
    height: 1.5em;
  }

  .Product-container {
    height: inherit;
    display: flex;
  }

  .Product-data-sheet {
    display: block;
  }

  .Product-data-sheet li {
    text-align: left;
  }

  .Product-miniPic {
    display: flex;
    width: 200px;
    height: inherit;
    padding: 1em;
    flex-direction: column;
  }

  .Product-miniPic img {
    width: 100px;
    height: 120px;
    padding: 1em 0;
  }

  .Product-mainImage {
    padding: 2em;
    width: 50%;
    object-fit: contain;
  }

  .Product-info {
    width: 40%;
    height: inherit;
    text-align: center;
  }

  .cart-buttom {
    background-color: #a2195b;
    color: white;
    width: 90%;
    height: 3em;
    font-size: 1.3em;
    margin: 1em 0;
    padding: 0;
  }

  .Product-back {
    background-color: #39a8df;
    color: white;
    font-size: 1.3em;
    height: 3em;
    margin: 0 0 1em 0;
    padding: 0;
    width: 90%;
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
  {#if isModal}
    <div transition:blur>
      <Modal>
        <Share on:click={handleClick} />
      </Modal>
    </div>
  {/if}
  {#if product.length !== 0}
    <h2>{product.detail}</h2>
    <div class="Product-container">
      <div class="Product-miniPic">
        <img src={product.image} alt={product.detail} />
        <img src={product.image} alt={product.detail} />
      </div>
      <img class="Product-mainImage" src={product.image} alt={product.detail} />
      <div class="Product-info">
        <p class="Price-normal">
          Precio Normal $ {Number(product.priceini).toLocaleString('es')}
        </p>
        <h3 class="Price-hoy">
          Hoy $ {Number(product.price).toLocaleString('es')}
        </h3>
        <p>Cantidad</p>
        <input
          class="Product-qty"
          type="number"
          name="qty"
          min="1"
          max="20"
          bind:value={qty} />
        <button
          class="cart-buttom"
          type="button"
          on:click={handleAddToCart(product)}>
          Agregar al Carrito
        </button>
        <div>
          <button
            class="Product-back"
            type="button"
            on:click={() => {
              window.history.back();
            }}>
            Continuar Comprando
          </button>
        </div>
        <form>
          <script
            src={epaycoUrl}
            class="epayco-button"
            data-epayco-key={epaycoKey}
            data-epayco-amount={$sumPrice}
            data-epayco-name="Vestido Mujer Primavera"
            data-epayco-description="Vestido Mujer Primavera"
            data-epayco-currency="cop"
            data-epayco-country="co"
            data-epayco-test="true"
            data-epayco-external="false"
            data-epayco-response=epaycoResp
            data-epayco-confirmation=epaycoConfirm
          >
          </script>
        </form>
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
