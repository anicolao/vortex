import { test, expect } from '@playwright/test';

test('App loads and has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toHaveText('Welcome to The Vortex');
});
