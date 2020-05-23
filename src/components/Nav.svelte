<script>
  import { carrito, sumQty, sumPrice } from "../store/store.js";

  export let segment;
  export let categories = [];

  //reactividad de los items en el carrito
  // $: {
  //   let count = 0;
  //   for (let item of $carrito) {
  //     count += item.qty;
  //   }
	// 	$sumQty  = count
  // }

</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    /* padding: 0 1em; */
    padding: 0;
    /* background-color: #a2195b; */
    background-color: black;
    color: white;

  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
    background-color: blueviolet;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    /* background-color: rgb(255, 62, 0); */
    background-color: turquoise;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
 
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        Home
      </a>
    </li>
    {#if categories.length !== 0}
      {#each categories as item}
        <li>
          <a
            aria-current={segment === 'Productos' ? 'page' : undefined}
            href="/Products/{item.idcategory}">
            {item.category}
          </a>
        </li>
      {/each}
    {/if}
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'Contactenos' ? 'page' : undefined}
        href="Contactenos">
        Contactenos
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        Blog
      </a>
    </li>
  </ul>
</nav>
