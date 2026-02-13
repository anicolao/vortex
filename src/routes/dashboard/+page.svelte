<script lang="ts">
  import { svelteStore as store } from '$lib/store';
  import { selectMyNetBalance, selectRecentActivity } from '$lib/store/selectors';
  import VortexEffect from '$lib/components/VortexEffect.svelte';
  import { Plus } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  // Using Svelte 5 runes if possible, but store is reactive via $store for now 
  // since we are using Redux wrapper or we need to subscribe.
  // Wait, selectors take state.
  
  let state = $store;
  let balance = 0;
  let activity: any[] = [];

  // Subscribe to store updates
  store.subscribe((s) => {
    state = s;
    balance = selectMyNetBalance(s);
    activity = selectRecentActivity(s);
  });

  function goToAddExpense() {
    goto(`${base}/expense/new`);
  }

  function formatMoney(amount: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  }
</script>

<div class="dashboard">
  <VortexEffect />
  
  <div class="header">
      <div class="logo">The Vortex</div>
      <div class="settings-icon">⚙️</div>
  </div>

  <div class="balance-container">
    <h2>Your Net Balance</h2>
    <div class="amount" class:positive={balance >= 0} class:negative={balance < 0}>
      {balance >= 0 ? '+' : ''}{formatMoney(balance)}
    </div>
  </div>

  <div class="activity-feed">
    {#each activity as event}
      <div class="activity-item glass-panel">
        <div class="activity-icon">
          {#if event.type === 'ADD_EXPENSE'}
             🧾
          {:else if event.type === 'SETTLE_DEBT'}
             💸
          {:else}
             📝
          {/if}
        </div>
        <div class="activity-details">
            {#if event.type === 'ADD_EXPENSE'}
                <span class="primary-text">{event.payload.description || 'Expense'}</span>
                <span class="secondary-text">paid by You (if true)</span> 
            {:else}
                <span class="primary-text">Settlement</span>
            {/if}
        </div>
        <div class="activity-amount">
            {formatMoney(event.payload.amount)}
        </div>
      </div>
    {/each}
  </div>

  <button class="fab" on:click={goToAddExpense}>
    <Plus size={32} />
  </button>
</div>

<style>
  .dashboard {
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    z-index: 10;
  }

  .logo {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .balance-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    text-align: center;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }

  .amount {
    font-size: 4rem;
    font-weight: 800;
    text-shadow: 0 0 20px rgba(0,0,0,0.5);
  }

  .amount.positive { color: var(--color-success); text-shadow: 0 0 20px rgba(16, 185, 129, 0.5); }
  .amount.negative { color: var(--color-danger); text-shadow: 0 0 20px rgba(239, 68, 68, 0.5); }

  .activity-feed {
    flex: 1;
    overflow-y: auto;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding-bottom: 5rem; /* Space for FAB */
  }

  .glass-panel {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .activity-details {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .primary-text { font-weight: 600; }
  .secondary-text { font-size: 0.8rem; opacity: 0.7; }
  .activity-amount { font-weight: bold; }

  .fab {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: var(--color-primary);
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px var(--color-primary-glow);
    z-index: 20;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .fab:active {
    transform: translateX(-50%) scale(0.9);
  }
</style>
