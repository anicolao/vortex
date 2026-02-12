# Vision: The Vortex

## Mission
To make it easy for people to split bills at restaurants, lend each other money, or buy each other things while keeping track of everyone's balance. The Vortex aims to remove the social friction of shared expenses through transparency and reliable tracking.

## Core Architectural Principles

### 1. Event Sourcing ("Facts on the Ground")
The database will store a log of **user actions**, not the current state of balances.
- **Wrong**: `Alice Balance: +$10`
- **Right**: `Event: Alice paid $20 for Lunch shared with Bob at 12:00 PM`

This ensures that we can always reconstruct the state from the history. If a bug in calculation is found, we fix the reducer, replay the events, and the state is corrected. We never "migrate" state to fix logic bugs.

### 2. Reducer-Based Computation
All derived data (who owes who, total spend, etc.) is computed exclusively in reducers (Redux) on the client side (and potentially verified by serverless functions).

### 3. Firestore Persistence
Unlike "food" which uses Google Sheets, "The Vortex" uses **Firestore** to store the append-only event log. This provides better scalability and real-time updates while maintaining the append-only philosophy.

### 4. Zero-Pixel Tolerance
We trust our eyes. If the UI looks wrong, it is wrong. Automated E2E tests with screenshot comparison ensure that we never regress on visual quality.
