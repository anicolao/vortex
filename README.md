# The Vortex

The Vortex is a cost-sharing app designed to make it easy for people to split bills, lend money, and track balances. It uses an event-sourcing architecture where user actions ("facts on the ground") are the source of truth, and balances are computed via reducers.

![Build Status](https://github.com/anicolao/vortex/actions/workflows/deploy.yml/badge.svg)
![E2E Tests](https://github.com/anicolao/vortex/actions/workflows/e2e.yml/badge.svg)

## Features (Planned)
- 💸 **Split Bills**: Easily divide restaurant checks or shared expenses.
- 🤝 **Lend/Borrow**: Track casual loans between friends.
- 📊 **Balance Tracking**: Track whether you owe money or are owed money by the group (The Vortex). Payments can be made to anyone to adjust the global balance.
- ☁️ **Cloud Sync**: Data persisted via Firestore.
- 📱 **Mobile Friendly**: Designed for use on the go.

## Technology Stack
- **Frontend**: SvelteKit (Svelte 5)
- **State Management**: Redux (Event Sourcing Pattern)
- **Persistence**: Firebase Firestore
- **Testing**: Playwright (Zero-Tolerance E2E)
- **Styling**: Plain Svelte-Scoped CSS (No Tailwind)

## distinct Philosophy
- **Facts on the Ground**: We record *what happened* (e.g., "Alice paid $20 for Lunch"), not just "Bob owes Alice $10".
- **Reducers**: All computed state (balances) is derived from the event log.
- **Zero-Pixel Tolerance**: Visual regressions are bugs.

## Getting Started

### Prerequisites
- Node.js 20+
- Firebase Credentials

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/anicolao/vortex.git
   cd vortex
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (see below).
4. Run dev server:
   ```bash
   npm run dev
   ```

## Documentation
- [VISION.md](VISION.md): Project mission and architectural philosophy.
- [WORKFLOW.md](WORKFLOW.md): Development process and branching strategy.
- [E2E_GUIDE.md](E2E_GUIDE.md): Testing guidelines.
- [DEVELOPMENT.md](DEVELOPMENT.md): Coding standards.

## License
GPLv3
