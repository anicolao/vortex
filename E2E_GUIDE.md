# E2E Testing Guide

This project uses [Playwright](https://playwright.dev/) for End-to-End testing.

## 1. The Philosophy: "Zero-Pixel Tolerance"

We enforce a strict **Zero-Pixel Tolerance** policy. Visual state is the primary feedback mechanism. Any deviation is a bug.

*   **Software Rendering**: We use software rendering to ensure consistency.
*   **Determinism**: Tests must be deterministic.

## 2. Test Structure

Tests live in `tests/e2e/`.

```
tests/e2e/
├── helpers/                   # Shared utilities (TestStepHelper)
├── 001-scenario-name/         # Scenario Directory
│   ├── 001-scenario.spec.ts   # Main test file
│   └── screenshots/           # Committed baseline images
```

## 3. The "Unified Step Pattern"

Use `TestStepHelper` to combine documentation, verification, and capturing.

```typescript
import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';

test('User logs expense', async ({ page }, testInfo) => {
  const tester = new TestStepHelper(page, testInfo);
  tester.setMetadata('Expense Logging', 'User adds a bill.');

  await page.goto('/');
  await tester.step('initial-load', {
    description: 'Dashboard is visible',
    verifications: [
      { spec: 'Title is correct', check: async () => await expect(page).toHaveTitle('The Vortex') }
    ]
  });

  tester.generateDocs();
});
```

## 4. Playwright Configuration

-   **Browsers**: Chromium.
-   **Timeouts**: Max **2000ms** for conditions.
-   **Waits**: Use `expect().toBeVisible()`, never `waitForTimeout`.
