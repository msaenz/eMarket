<script>
  import { goto } from "@sapper/app";
  import { carrito, sumQty, sumPrice } from "../store/store.js";
  let epaycoUrl = process.env.SAPPER_APP_URL_EPAYCO;
  let epaycoKey = process.env.SAPPER_APP_EPAYCO_KEY;
  let epaycoResp = process.env.SAPPER_APP_EPAYCO_RESPONSE;
  let epaycoConfirm = process.env.SAPPER_APP_EPAYCO_CONFIRMATION;

  function handleChangeQty(event, _id) {
    let indice = $carrito.findIndex($carrito => $carrito._id === _id);
    if (indice !== -1) {
      //producto esta en el carrito de compras
      $carrito[indice].qty = event.target.valueAsNumber;
    }
    document.getElementsByClassName("epayco-button")[0].dataset.apaycoAmount =
      {$sumPrice};
    {
      goto('/CartPage');
    }
  }

  function handleDeleteToCart(_id) {
    $carrito = $carrito.filter($carrito => $carrito._id !== _id, 0);
    // $sumQty = $carrito.reduce((sum, { qty }) => {
    //   return sum + qty;
    // }, 0);
  }
</script>

<style>
  .Checkout {
    display: flex;
    flex-direction: row;
    height: inherit;
  }
  .Checkout-content {
    text-align: center;
    width: 69%;
  }

  .Checkout-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-content: space-around;
  }
  .fas {
    margin: 0 0 0 10px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
  .Checkout-element {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #eee;
  }
  .Checkout-img {
    padding: 0.2em;
    height: 120px;
    border-radius: 5px 5px 0 0;
    object-fit: contain;
    width: 20%;
  }
  .Checkout-detail {
    margin: 0;
    width: 30%;
    text-align: left;
  }
  .Checkout-price,
  .Checkout-price-total {
    font-size: 1.2em;
    font-weight: bold;
    width: 15%;
  }
  .Checkout-qty {
    font-size: 1.2em;
    width: 100%;
  }
  .Checkout-sidebar {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  /* .Checkout-sidebar button {
    background-color: #a2195b;
    color: white;
    width: 100%;
    height: 3em;
    font-size: 1.3em;
    margin: 1em 0;
  } */
</style>

<div class="Checkout">
  <div class="Checkout-content">
    {#if $sumQty !== 0}
      <!-- {#if $carrito.length !== 0} -->
      <h3>Productos en el Carrito {$sumQty}</h3>
      {#each $carrito as item}
        <div key={item.index} class="Checkout-item">
          <div class="Checkout-element">
            <img class="Checkout-img" src={item.image} alt={item.detail} />
            <h4 class="Checkout-detail">{item.detail}</h4>
            <!-- <p class="Checkout-qty">{item.qty}</p> -->
            <span class="Checkout-price">
              $ {Number(item.price).toLocaleString('es')}
            </span>
            <span>
              <input
                class="Checkout-qty"
                type="number"
                name="qty"
                min="1"
                max="20"
                bind:value={item.qty}
                on:change={handleChangeQty(item._id)} />
            </span>
            <span class="Checkout-price-total">
              $ {Number(item.price * item.qty).toLocaleString('es')}
            </span>
            <i
              role="presentation"
              class="fas fa-trash-alt"
              on:click={handleDeleteToCart(item._id)} />
          </div>
        </div>
      {/each}
    {:else}
      <h2>Sin Pedidos</h2>
    {/if}

  </div>
  <div class="Checkout-sidebar">
    <h2>Items {$sumQty}</h2>
    <h2>
      Total
      <span>$ {Number($sumPrice).toLocaleString('es')}</span>
      <!-- {$sumPrice} -->
    </h2>
    <form>
      <script
        src={epaycoUrl}
        class="epayco-button"
        data-epayco-key={epaycoKey}
        data-epayco-amount={$sumPrice}
        data-epayco-name="Productos Seleccionados"
        data-epayco-description="Productos en carrito de Compras"
        data-epayco-currency="cop"
        data-epayco-country="co"
        data-epayco-test="true"
        data-epayco-external="false"
        data-epayco-response="epaycoResp"
        data-epayco-confirmation="epaycoConfirm">

      </script>
    </form>

  </div>

</div>
