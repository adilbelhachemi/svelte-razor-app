<script>
  import golbalStore from '../stores/globalStore';
  import { addToCart } from '../stores/cart';

  export let params;

  // global store
  import products from '../stores/defaultProducts';
  import Loading from '../components/Loading.svelte';

  $: product = $products.find((item) => item.id === parseInt(params.id));
</script>

<svelte:head>
  <title>{!product ? 'single product' : product.title}</title>
</svelte:head>

{#if !product}
  <Loading />
{:else}
  <section class="single-product">
    <a href="#/products" class="btn btn-primary">Back to product</a>
    <!-- single product container -->
    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>$ {product.price}</h2>
        <p>{product.description}</p>
        <button
          class="btn btn-primary btn-block"
          on:click={() => {
            addToCart(product);
            golbalStore.toggleItem('cart', true);
          }}>Add to cart</button
        >
      </article>
    </div>
  </section>
{/if}
