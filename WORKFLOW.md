# Project Workflow

This document outlines the standard workflow for contributing to `The Vortex`.

## Development Process

1.  **Branching**:
    - Always create a new branch for each task.
    - Format: `feature/description` or `fix/issue-name`.

2.  **Iterative Development**:
    - Commit often.
    - Push to your branch frequently.

3.  **Pull Requests**:
    - Create a PR using `gh pr create`.
    - **Crucial**: The PR body MUST include the **original User Prompt(s)** and any **relevant User Comments** that initiated the work.
    - **VERBATIM**: Copy the text exactly. Do not summarize.
    - This ensures context is preserved.

4.  **Artifacts**:
    - All planning/documentation artifacts (e.g., `implementation_plan.md`) must be committed to the repository (e.g., in `docs/` or root) to be visible to reviewers.

## CI/CD
- **Deployments**: Every PR is automatically deployed to a unique URL (e.g., `.../vortex/pr123/`).
- **Tests**: E2E tests run on every push.

## Documentation
- **E2E Testing**: See [E2E_GUIDE.md](./E2E_GUIDE.md).
