import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';

test('App loads successfully', async ({ page }, testInfo) => {
    const tester = new TestStepHelper(page, testInfo);
    tester.setMetadata('Basic Load', 'User visits the landing page.');

    await page.goto('/');

    await tester.step('initial-load', {
        description: 'Landing page is visible',
        verifications: [
            { spec: 'Title is correct', check: async () => await expect(page.locator('h1')).toHaveText('Welcome to The Vortex') }
        ],
        networkStatus: 'skip' // Skip network sync check for this basic test as UI might not have it yet
    });

    tester.generateDocs();
});
