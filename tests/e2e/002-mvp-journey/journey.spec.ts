import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';

test.describe('MVP User Journey', () => {
    test('Login Page loads correctly', async ({ page }, testInfo) => {
        const helper = new TestStepHelper(page, testInfo);

        // Action: Navigate
        await page.goto('/login');

        await helper.step('00-initial-load', {
            description: 'Navigate to application',
            verifications: [
                {
                    spec: 'Page has "The Vortex" header',
                    check: async () => {
                        await expect(page.locator('h1')).toHaveText('The Vortex');
                    }
                },
                {
                    spec: 'Login button is visible',
                    check: async () => {
                        const btn = page.locator('button', { hasText: 'Sign in with Google' });
                        await expect(btn).toBeVisible();
                    }
                }
            ]
        });

        // Generate automatic documentation
        await helper.generateDocs();
    });
});
