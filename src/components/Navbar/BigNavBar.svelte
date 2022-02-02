<script>
  import CartButton from '../Cart/CartButton.svelte';
  import links from '../../constants/links';
  import LoginLink from '../LoginLink.svelte';
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <!-- nav links -->
      <ul class="nav-links">
        {#each links as navLink (navLink.text)}
          <li>
            <a href={navLink.url}>{navLink.text}</a>
          </li>
        {/each}
      </ul>
      <!-- logo -->
      <a href="#/" class="nav-logo big-logo">
        <img src="/assets/images/logo.svg" alt="razors logo" class="logo" />
      </a>
      <!-- cart toggle -->
      <div class="nav-aside">
        <LoginLink />
        <CartButton />
      </div>
    </div>
  </div>
</nav>
