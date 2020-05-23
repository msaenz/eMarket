<script context="module">
  const API_URL = process.env.SAPPER_APP_API_URL;
  // let categories = [];
  export async function preload() {
    const response = await this.fetch(`${API_URL}/api/categories`);
    let categories = await response.json();
    categories = categories.data;
    return { categories };
  }
</script>

<script>
  import Nav from "../components/Nav.svelte";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
  export let categories;

  //implementar epayco
  // export let epayco = {}
  // var handler = ePayco.checkout.configure({
  //   key: '45b960805ced5c27ce34b1600b4b9f54',
  //   test: true
  // })
</script>

<style>
  main {
    position: relative;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<svelte:head>
  <!-- Plugin pagos epayco -->
  <script type="text/javascript" src="https://checkout.epayco.co/checkout.js">

  </script>
</svelte:head>
<Header />
<Nav {categories} {segment} />

<main>
  <slot />
</main>
<Footer />
