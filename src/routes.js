// pages
import Login from './pages/Login.svelte';
import Checkout from './pages/Checkout.svelte';
import ProductTemplate from './pages/ProductTemplate.svelte';
import Products from './pages/Products.svelte';
import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import NotFound from './pages/NotFound.svelte';

const routes = {
  '/': Home,
  '/login': Login,
  '/about': About,
  '/products': Products,
  '/products/:id': ProductTemplate,
  // catch all route
  '*': NotFound,
};

export { routes };
