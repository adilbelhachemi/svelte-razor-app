<script>
  import user from '../stores/user';

  // logout functionality
  import globalStore from '../stores/globalStore';
</script>

{#if $user.jwt}
  <a
    href="#/"
    class="logout-btn"
    on:click={() => {
      globalStore.toggleItem('sidebar', false);
    }}>logout</a
  >
{:else}
  <a
    href="#/login"
    class="logout-btn"
    on:click={() => {
      globalStore.toggleItem('sidebar', false);
    }}>login</a
  >
{/if}
