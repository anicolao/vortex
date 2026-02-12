<script lang="ts">
  import { svelteStore as store } from '$lib/store';
  import { logEvent } from '$lib/db';
  import { goto } from '$app/navigation';
  import { User, Users, ChevronLeft } from 'lucide-svelte';
  
  // Mock users for MVP
  const FRIENDS = [
    { id: 'alice', name: 'Alice', color: '#ec4899' },
    { id: 'bob', name: 'Bob', color: '#ef4444' },
    { id: 'charlie', name: 'Charlie', color: '#eab308' },
    { id: 'david', name: 'David', color: '#22c55e' }
  ];

  let amount = '';
  let description = '';
  let selectedUsers: string[] = []; // IDs
  let loading = false;

  $: currentUser = $store.auth.user;

  function toggleUser(id: string) {
    if (selectedUsers.includes(id)) {
      selectedUsers = selectedUsers.filter(u => u !== id);
    } else {
       selectedUsers = [...selectedUsers, id];
    }
  }

  async function handleSubmit() {
    if (!amount || !description || selectedUsers.length === 0) return;
    loading = true;

    try {
      // Include current user in the split? usually yes.
      // For MVP "I paid for X, split with Y, Z" -> implies I am also part of it?
      // Let's assume the "Split" includes the payer + selected users.
      const splitWith = [currentUser?.uid, ...selectedUsers].filter(Boolean) as string[];

      await logEvent('ADD_EXPENSE', {
        payerId: currentUser?.uid,
        amount: parseFloat(amount),
        description,
        splitWith,
        timestamp: Date.now()
      });

      // Navigate back with a small delay to show animation (if we had one here)
      goto('/dashboard');
    } catch (e) {
      console.error(e);
      loading = false;
    }
  }

  function goBack() {
    goto('/dashboard');
  }
</script>

<div class="page-container">
  <header>
    <button class="icon-btn" on:click={goBack}><ChevronLeft /></button>
    <h1>Add Expense</h1>
    <div class="spacer"></div>
  </header>

  <main>
    <div class="input-group amount-group">
      <span class="currency">$</span>
      <input 
        type="number" 
        bind:value={amount} 
        placeholder="0.00" 
        class="amount-input"
      />
    </div>

    <div class="input-group">
      <input 
        type="text" 
        bind:value={description} 
        placeholder="What is this for?" 
        class="text-input"
      />
    </div>

    <div class="split-section">
      <h3>Split with...</h3>
      <div class="users-grid">
        {#each FRIENDS as friend}
          <button 
            class="user-chip" 
            class:selected={selectedUsers.includes(friend.id)}
            on:click={() => toggleUser(friend.id)}
            style="--user-color: {friend.color}"
          >
            <div class="avatar">{friend.name[0]}</div>
            <span class="name">{friend.name}</span>
          </button>
        {/each}
      </div>
    </div>
  </main>

  <footer>
    <button 
      class="btn-vortex" 
      disabled={!amount || !description || selectedUsers.length === 0 || loading}
      on:click={handleSubmit}
    >
      {#if loading}
        Sending...
      {:else}
        Throw into Vortex
      {/if}
    </button>
  </footer>
</div>

<style>
  .page-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;
    background: radial-gradient(circle at top, #1e1b4b 0%, #000 100%);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .icon-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
  }

  h1 {
    font-size: 1.2rem;
    margin: 0;
  }

  .spacer { width: 2rem; }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .input-group {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .amount-group {
    color: var(--color-primary);
  }

  .currency {
    font-size: 3rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .amount-input {
    background: none;
    border: none;
    font-size: 4rem;
    font-weight: bold;
    color: white;
    width: 200px;
    text-align: center;
    outline: none;
  }

  .amount-input::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }

  .text-input {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    padding: 1rem;
    color: white;
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    outline: none;
  }

  .split-section h3 {
    margin-bottom: 1rem;
    opacity: 0.7;
    text-align: center;
  }

  .users-grid {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .user-chip {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.2s;
  }

  .user-chip.selected {
    opacity: 1;
    transform: scale(1.1);
  }

  .avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: var(--user-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
    color: black;
    margin-bottom: 0.5rem;
    box-shadow: 0 0 10px var(--user-color);
  }

  .name {
    color: white;
    font-size: 0.9rem;
  }

  footer {
    padding-top: 1rem;
  }

  .btn-vortex {
    width: 100%;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    border: none;
    padding: 1.2rem;
    border-radius: 2rem;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
    transition: transform 0.2s;
  }

  .btn-vortex:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }

  .btn-vortex:active:not(:disabled) {
    transform: scale(0.98);
  }
</style>
