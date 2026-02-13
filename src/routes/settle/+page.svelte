<script lang="ts">
  import { svelteStore as store } from '$lib/store';
  import { selectBalances, selectMyNetBalance } from '$lib/store/selectors';
  import { logEvent } from '$lib/db';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { ChevronLeft } from 'lucide-svelte';
  import SlideToPay from '$lib/components/SlideToPay.svelte';

  let state = $store;
  let balances: Record<string, number> = {};
  let myNet = 0;

  // Mock users mapping for display (In real app, we'd have a users slice)
  const USER_NAMES: Record<string, string> = {
    'alice': 'Alice',
    'bob': 'Bob',
    'charlie': 'Charlie',
    'david': 'David'
  };

  store.subscribe((s: any) => {
    state = s;
    balances = selectBalances(s);
    myNet = selectMyNetBalance(s);
  });

  $: currentUser = $store.auth.user;
  $: eligibleRecipients = Object.entries(balances)
    .filter(([uid, bal]) => uid !== currentUser?.uid && bal > 0) // People who are owed money
    .map(([uid, bal]) => ({ uid, name: USER_NAMES[uid] || uid, amount: bal }));

  let selectedRecipientId: string | null = null;
  let amountToPay = 0;

  function selectRecipient(recipient: any) {
    selectedRecipientId = recipient.uid;
    // Default to paying off full debt or whatever they are owed, whichever is smaller?
    // For MVP, simplified: I pay them whatever I owe, capped by what they are owed?
    // Let's just say I pay $50 arbitrarily for the demo if logic is complex.
    // Better: I pay my negative balance (absolute) or their positive balance.
    const myDebt = Math.abs(Math.min(0, myNet));
    amountToPay = Math.min(myDebt, recipient.amount); 
    // If I don't owe anything, I can still pay? No.
    if (amountToPay === 0) amountToPay = 10; // Fallback for demo
  }

  async function handlePaymentComplete() {
    if (!selectedRecipientId || !currentUser) return;

    try {
      await logEvent('SETTLE_DEBT', {
        fromId: currentUser.uid,
        toId: selectedRecipientId,
        amount: amountToPay,
        timestamp: Date.now()
      });
      
      setTimeout(() => {
        goto(`${base}/dashboard`);
      }, 1000);
    } catch (e) {
      console.error(e);
    }
  }

  function goBack() {
    goto(`${base}/dashboard`);
  }

  function formatMoney(amount: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  }
</script>

<div class="page-container">
  <header>
    <button class="icon-btn" on:click={goBack}><ChevronLeft /></button>
    <h1>Settle Up</h1>
    <div class="spacer"></div>
  </header>

  <main>
    {#if myNet >= 0}
      <div class="empty-state">
        <p>You don't owe anyone. You are in the clear!</p>
        <div class="big-check">✅</div>
      </div>
    {:else}
      <h2>You owe {formatMoney(Math.abs(myNet))}</h2>
      <p class="subtitle">Select someone to pay:</p>
      
      <div class="recipients-list">
        {#each eligibleRecipients as recipient}
          <button 
            class="recipient-card" 
            class:selected={selectedRecipientId === recipient.uid}
            on:click={() => selectRecipient(recipient)}
          >
            <div class="avatar">{recipient.name[0]}</div>
            <div class="info">
              <span class="name">{recipient.name}</span>
              <span class="owed">is owed {formatMoney(recipient.amount)}</span>
            </div>
            {#if selectedRecipientId === recipient.uid}
              <div class="check">✓</div>
            {/if}
          </button>
        {/each}
      </div>
    {/if}

    {#if selectedRecipientId}
      <div class="payment-action">
        <div class="pay-amount">Pay {formatMoney(amountToPay)}</div>
        <SlideToPay on:complete={handlePaymentComplete} />
      </div>
    {/if}
  </main>
</div>

<style>
  .page-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: radial-gradient(circle at bottom, #312e81 0%, #000 100%);
    box-sizing: border-box;
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
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .empty-state {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0.7;
  }

  .big-check { font-size: 5rem; margin-top: 1rem; }

  h2 { font-size: 2rem; margin: 0; text-align: center; color: var(--color-danger); }
  .subtitle { text-align: center; opacity: 0.6; margin-bottom: 2rem; }

  .recipients-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    flex: 1;
  }

  .recipient-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: white;
    cursor: pointer;
    transition: all 0.2s;
  }

  .recipient-card.selected {
    background: rgba(168, 85, 247, 0.2);
    border-color: var(--color-primary);
  }

  .avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: var(--color-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .name { font-weight: bold; }
  .owed { font-size: 0.8rem; opacity: 0.7; }

  .payment-action {
    margin-top: auto;
    padding-top: 2rem;
  }

  .pay-amount {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
</style>
