<script>
  import { carrito, sumQty, sumPrice } from "../store/store.js";

  $: {
    $sumQty = $carrito.reduce((sum, { qty }) => {
      return sum + qty;
    }, 0);
    $sumPrice  = $carrito.reduce((sum, { qty, price  }) => {
      return sum + (qty * price);
    }, 0);
  }
</script>

<style>
  .Header {
    height: 5rem;
    display: flex;
    flex-direction: column;
    height: 50px;
  }
  .Header-content {
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .Header-content-logo {
    height: 100%;
    width: 150px;
    object-fit: cover;
  }

  .Header-content-search {
    width: 70%;
    text-align: center;
  }

  .Header-content-search input {
    color: white;
    background-color: #45bdcf;
    border: 2px solid white;
    border-radius: 50px;
    font-size: 16px;
    height: 40px;
    padding: 0px 20px;
    width: 70%;
    outline-style: none;
    margin-top: 10px;
  }

  .Header-content-profile {
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .Header-content-profile img {
    margin-right: 8px;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
  }
  .Header-checkout {
    position: relative;
    display: inline-block;
    text-align: center;
  }
  .texto-centrado {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #a2195b;
    font-size: 1em;
    background-color: #45bdcf;
    border-radius:100%;
    width: 25px;
    font-weight: bold;
    transform: translate(-50%, -50%);
  }
</style>

<header class="Header">
  <div class="Header-content">
    <a href="/">
      <img
        class="Header-content-logo"
        src="../assets/static/logo_kuru3.png"
        alt="Logo e-commerce" />
    </a>
    <div class="Header-content-search">
      <input
        class="Header-content-search-input"
        type="text"
        placeholder="Qué estas buscando?" />
    </div>
    <div class="Header-content-profile">
      <img src="./assets/static/add-user.png" alt="icono de Registro" />
      <img src="./assets/static/log-in.png" alt="icono de Login" />
      <div class="Header-checkout">
        <a href="/CartPage">
          <i
            style="position: relative"
            class="fa fa-shopping-cart fa-2x"
            aria-hidden="true" />
          {#if $sumQty > 0}
            <p class="texto-centrado">{$sumQty}</p>
          {/if}
        </a>
      </div>
    </div>
  </div>
</header>
