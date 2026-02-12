import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Basic Selectors
export const selectUser = (state: RootState) => state.auth.user;
export const selectEvents = (state: RootState) => state.events.log;

// Derived Selectors

// Compute balances for all users
// Returns a map of userId -> netBalance (positive = owed, negative = owes)
export const selectBalances = createSelector([selectEvents], (events) => {
    const balances: Record<string, number> = {};

    events.forEach((event) => {
        const { type, payload } = event;

        if (type === 'ADD_EXPENSE') {
            const { payerId, amount, splitWith } = payload;
            // splitWith is array of userIds who share the expense
            // Assuming equal split for MVP
            const splitAmount = amount / splitWith.length;

            // Payer is owed (positive)
            // balances[payerId] = (balances[payerId] || 0) + amount; // Wait, let's do net logic

            // Easier logic:
            // Payer paid 'amount'. This is a credit to the group.
            balances[payerId] = (balances[payerId] || 0) + amount;

            // Each person in splitWith "consumed" splitAmount. This is a debit.
            splitWith.forEach((uid: string) => {
                balances[uid] = (balances[uid] || 0) - splitAmount;
            });
        } else if (type === 'SETTLE_DEBT') {
            const { fromId, toId, amount } = payload;
            // 'fromId' paid 'amount' to 'toId'.
            // This is a transfer.

            // In our "Pool" model:
            // Payer (fromId) gets credit for paying.
            balances[fromId] = (balances[fromId] || 0) + amount;

            // Receiver (toId) gets debit (they received money, so their claim on the pool decreases).
            balances[toId] = (balances[toId] || 0) - amount;
        }
    });

    return balances;
});

// Get the current user's net balance
export const selectMyNetBalance = createSelector(
    [selectBalances, selectUser],
    (balances, user) => {
        if (!user) return 0;
        return balances[user.uid] || 0;
    }
);

// Recent activity (last 20 events, reversed)
export const selectRecentActivity = createSelector([selectEvents], (events) => {
    return [...events].reverse().slice(0, 20);
});
