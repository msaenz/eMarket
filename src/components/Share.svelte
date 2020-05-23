<script>
  let _onContinue= () => {
    window.history.back();
  }
</script>

<style>
  .Share {
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 4px;
    background-color: white;
    margin: 0 0 2em 0;
    width: 300px;
    height: 120px;
    position: absolute;
    top: 300px;
    left: 30%;
    z-index: 9;
    padding: 1em;
  }
  .Share-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Share-head h2 {
    /* font-size: 16px; */
    color: #45bdcf;
    font-size: 1.5em;
		text-align: center;
  }
  .Share-head i {
    cursor: pointer;
  }
  .Share-content a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 14px;
    margin: 2em 0 0 0;
  }
  .Share-content i {
    color: #a2195b;
    margin: 0 0.5em 0 0;
    font-size: 20px;
  }
</style>

<div class="Share">
  <div class="Share-head">
    <h2>Producto Adicionado</h2>
    <i class="fas fa-times-circle" on:click />
  </div>
  <div class="Share-content">
    <button on:click={_onContinue}>
      <i class="fa fa-search fa-2x" aria-hidden="true"></i>
      Continuar Comprando
  	</button>
    <a href="/CartPage" type="button">
      <i class="fa fa-shopping-cart fa-2x" aria-hidden="false" />
      Ver Carrito
    </a>
  </div>
</div>
