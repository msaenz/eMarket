<script>
  import { onMount } from "svelte";

  import News from "../components/News.svelte";
  import Categories from "../components/Categories.svelte";
  import Offers from "../components/Offers.svelte";

  export let categories = [];
  let offers = [];
  let news = [];

  const API_URL = process.env.SAPPER_APP_API_URL

  onMount(async () => {
    let response = await fetch(`${API_URL}/api/news`);
    news = await response.json();

    response = await fetch(`${API_URL}/api/categories`);
    categories = await response.json();

    response = await fetch(`${API_URL}/api/offers`);
    offers = await response.json();

  });
</script>

<svelte:head>
  <title>eMarket Tienda Digital</title>
</svelte:head>

<News news={news.data} title="Noticias" />
<Categories categories={categories.data} title="eMarket Categorias" />
<Offers offers={offers.data} title="Ofertas eMarket" />
