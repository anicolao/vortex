import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AppEvent } from '../../db';

interface EventsState {
    log: AppEvent[];
    loading: boolean;
}

const initialState: EventsState = {
    log: [],
    loading: true,
};

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEvents: (state, action: PayloadAction<AppEvent[]>) => {
            state.log = action.payload;
            state.loading = false;
        },
        appendEvent: (state, action: PayloadAction<AppEvent>) => {
            state.log.push(action.payload);
        },
    },
});

export const { setEvents, appendEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
