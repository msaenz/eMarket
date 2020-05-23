<script>
  export let image;
  export let title;
  export let priceorig;
  export let price;
  export let subtitle;
  export const item = [];
  export let _id;
</script>

<style>
  .Offersitem {
    width: 357px;
    text-decoration: none;
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
      1px 3px 8px rgba(39, 44, 49, 0.03);
    border-radius: 5px;
    margin: 0 20px 0 0;
    position: relative;
  }
  .Offersitem-info {
    padding: 10px;
  }
  .Offersitem-info h3 {
    font-size: 1em;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }

  .Offersitem-info p {
    font-size: 14px;
    font-weight: 300;
  }
  .Offersitem img {
    width: 100%;
    height: 200px;
    border-radius: 5px 5px 0 0;
    object-fit: contain;
  }
  .Offersitem button {
    background-color: #a2195b;
    color: white;
    width: 100%;
    padding: 10px;
    border-radius: 0px 0px 5px 5px;
    border: 0px;
    outline: 0;
    cursor: pointer;
    font-size: 14px;
    font-weight: 300;
  }
  .Offersitem-info :hover {
    background-color: rgba(39, 44, 49, 0.06);
  }

  .Price-normal {
    text-decoration: line-through;
  }

  .Price-hoy {
    color: red;
    font-weight: bold;
    font-size: 1em;
  }
</style>

<div class="Offersitem">
  <img src={image} alt={title} />
  <div class="Offersitem-info">
    <h3>{title}</h3>
    <p class="Price-normal">
      Precio Normal$ {Number(priceorig).toLocaleString('es')}
    </p>
    <p class="Price-hoy">Hoy$ {Number(price).toLocaleString('es')}</p>
    <p>{subtitle}</p>
  </div>
  <a rel='prefetch' href="/OfferItem/{_id}">"
    <button type="button">Comprar</button>
  </a>
</div>
