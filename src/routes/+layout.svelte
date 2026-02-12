<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { app } from '$lib/firebase';
  import { svelteStore as store } from '$lib/store';
  import { setUser } from '$lib/store/slices/auth';
  import { setEvents } from '$lib/store/slices/events';
  import { subscribeToEvents } from '$lib/db';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  let { children } = $props();

  onMount(() => {
    const auth = getAuth(app);
    
    // Auth Listener
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        store.dispatch(setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }));

        // Subscribe to Data only when authenticated
        const unsubscribeEvents = subscribeToEvents((events) => {
           // Create a plain object copy of events to avoid non-serializable errors in Redux
           // Firestore timestamps are objects, we might need to convert them to strings/numbers if Redux complains,
           // but we added middleware to ignore them in store.ts.
           store.dispatch(setEvents(events)); 
        });

        // If we are on login page, go to dashboard
        if ($page.url.pathname === '/login' || $page.url.pathname === '/') {
           goto('/dashboard');
        }

        return () => {
            unsubscribeEvents();
        }

      } else {
        store.dispatch(setUser(null));
        if ($page.url.pathname !== '/login' && $page.url.pathname !== '/') {
            goto('/login');
        }
      }
    });

    return () => {
      unsubscribeAuth();
    };
  });
</script>

<div class="app">
    {@render children()}
</div>
