import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import eventsReducer from './slices/events';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        events: eventsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['events/setEvents'],
                // Ignore these field paths in all actions
                ignoredActionPaths: ['payload.timestamp'],
                // Ignore these paths in the state
                ignoredPaths: ['events.log.timestamp'],
            },
        }),
});

// Svelte Store Wrapper
export const svelteStore = {
    subscribe: (run: (value: RootState) => void) => {
        run(store.getState()); // Initial call
        return store.subscribe(() => {
            run(store.getState());
        });
    },
    dispatch: store.dispatch, // Expose dispatch directly
    getState: store.getState // Expose getState directly
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
