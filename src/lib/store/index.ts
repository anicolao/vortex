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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
