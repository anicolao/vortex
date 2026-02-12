# Development Standards

## Technology Stack

-   **Frontend**: SvelteKit (Svelte 5)
-   **State Management**: Redux (Event Sourcing Pattern)
-   **Persistence**: Firestore
-   **Styling**: Plain Svelte-Scoped CSS (No Tailwind)

## Architecture: Event Sourcing with Redux

-   **Facts on the Ground**: The state is a result of a series of actions (events).
-   **Reducers as Interpreters**: Pure functions that interpret actions.
-   **Debuggability**: Fix logic errors by rewriting reducers.

## Styling

-   **No Tailwind**: Tailwind classes are explicitly forbidden.
-   **Structure**: Use `<style>` blocks within `.svelte` components.
-   **Variables**: Global theme variables in a root layout/stylesheet.

## Testing

-   **Pixel-Perfect Consistency**: Software rendering in E2E.
-   **GitHub Workflows**: Validated by E2E suite.
-   **PR Previews**: Deployments for every PR.
