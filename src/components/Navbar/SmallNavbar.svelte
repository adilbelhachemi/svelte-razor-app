<script>
  // cart button
  // global store

  import CartButton from '../Cart/CartButton.svelte';
  import globalStore from '../../stores/globalStore';

  let openSideBar = globalStore.toggleItem;
  let open = false;
</script>

<nav class="navbar">
  <div class="nav-center">
    <!-- sidebar toggle -->
    <button
      class="btn-sidebar-toggle"
      on:click={() => openSideBar('sidebar', true)}
    >
      <i class="fas fa-bars" />
    </button>
    <a href="#/" class="nav-logo">
      <img src="/assets/images/logo.svg" alt="razors logo" class="logo" />
    </a>
    <!-- cart button -->
    <CartButton />
  </div>
</nav>
