<script>
  import globalStore from '../../stores/globalStore';
  import { fly, fade, blur } from 'svelte/transition';
  import ItemsList from './ItemsList.svelte';
  import user from '../../stores/user';
</script>

<div class="cart-overlay" transition:blur>
  <div class="cart-container" transition:fly={{ x: 100 }}>
    <div class="cart" transition:fade={{ delay: 400 }}>
      <!-- cart header -->
      <div class="cart-header">
        <button
          class="btn-close"
          on:click={() => globalStore.toggleItem('cart', false)}
        >
          <i class="fas fa-window-close" />
        </button>
        <h2 class="cart-title">your bag</h2>
        <span />
      </div>
      <!-- end cart header -->
      <!-- cart items -->
      <ItemsList />
      <!-- end cart items -->
      <!-- cart footer -->
      <div class="cart-footer">
        {#if $user.jwt}
          <a
            href="#/checkout"
            class="btn btn-primary btn-block"
            on:click={() => globalStore.toggleItem('cart', false)}>Checkout</a
          >
        {:else}
          <p class="cart-login">
            in order to cehckout please <a
              href="#/login"
              on:click={() => globalStore.toggleItem('cart', false)}>login</a
            >
          </p>
        {/if}
      </div>
      <!-- end cart footer -->
    </div>
  </div>
</div>
