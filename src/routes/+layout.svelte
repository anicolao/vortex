<script>
    import '../app.css';
    let { children } = $props();
</script>

<div class="app">
    {@render children()}
</div>

<style>
    :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
</style>
