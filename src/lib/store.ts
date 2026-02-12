import { configureStore, createSlice } from '@reduxjs/toolkit';

interface State {
    events: any[];
}

const initialState: State = {
    events: []
};

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            state.events.push(action.payload);
        },
        hydrateEvents: (state, action) => {
            state.events = action.payload;
        }
    }
});

export const { addEvent, hydrateEvents } = eventsSlice.actions;

export const store = configureStore({
    reducer: eventsSlice.reducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
