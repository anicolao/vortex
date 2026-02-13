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
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  let { children } = $props();

  onMount(() => {
    if (!app) return;
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
        // Use route.id to be base-path agnostic when checking current page
        const currentRoute = $page.route.id;
        if (currentRoute === '/login' || currentRoute === '/') {
           goto(`${base}/dashboard`);
        }

        return () => {
            unsubscribeEvents();
        }

      } else {
        // In test mode, we manage auth manually via Dev Login, so ignore Firebase's null state
        if (import.meta.env.VITE_TEST_MODE === 'true') {
            return;
        }

        store.dispatch(setUser(null));
        const currentRoute = $page.route.id;
        // Redirect to login if not already there (and not at root)
        if (currentRoute !== '/login' && currentRoute !== '/') {
            goto(`${base}/login`);
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
