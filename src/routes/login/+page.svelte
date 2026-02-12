<script lang="ts">
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { goto } from '$app/navigation';
  import { app } from '$lib/firebase';
  import { Tornado } from 'lucide-svelte';

  async function signIn() {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      goto('/dashboard');
    } catch (error) {
      console.error("Error signing in", error);
    }
  }
</script>

<div class="login-container">
  <div class="vortex-icon">
    <Tornado size={80} color="var(--color-primary)" />
  </div>
  <h1>The Vortex</h1>
  <p>Enter the flow. Split costs. Stay balanced.</p>
  
  <button on:click={signIn} class="btn-primary">
    Sign in with Google
  </button>
</div>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: radial-gradient(circle at center, #1a0b2e 0%, #000000 100%);
    color: white;
    text-align: center;
  }

  .vortex-icon {
    animation: spin 20s linear infinite;
    margin-bottom: 2rem;
    filter: drop-shadow(0 0 15px var(--color-primary));
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #fff, var(--color-primary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #a0a0a0;
    margin-bottom: 3rem;
  }

  .btn-primary {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-primary:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
    box-shadow: 0 0 20px var(--color-primary-glow);
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>
