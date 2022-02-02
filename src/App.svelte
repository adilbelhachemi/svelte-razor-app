<script>
  import Router, { location } from 'svelte-spa-router';
  import { routes } from './routes';

  // components
  import Navbar from './components/Navbar/Navbar.svelte';
  import SideBar from './components/Navbar/SideBar.svelte';
  import Cart from './components/Cart/Cart.svelte';

  // global store
  import globalStore from './stores/globalStore';
</script>

<!-- Router -->
<Router {routes} />
<Navbar />
{#if $globalStore.sidebar}
  <SideBar />
{/if}
{#if $globalStore.cart}
  <Cart />
{/if}

<!-- <h3>Location: {$location}</h3> -->
