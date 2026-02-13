<script>
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
</script>

<div class="landing">
  <h1>Welcome to The Vortex</h1>
  <p>Share expenses simply.</p>
  <button on:click={() => goto(`${base}/login`)}>Enter The Vortex</button>
</div>

<style>
  .landing {
    text-align: center;
    padding: 4rem;
    color: white;
  }
  h1 { font-size: 3rem; margin-bottom: 1rem; }
  button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    background: var(--color-primary, #646cff);
    color: white;
    border: none;
    border-radius: 8px;
  }
</style>
