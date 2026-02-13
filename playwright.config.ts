import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests/e2e',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        baseURL: 'http://localhost:5173',
        trace: 'on-first-retry',
        contextOptions: { reducedMotion: 'reduce' },
        serviceWorkers: 'block',
        launchOptions: {
            args: [
                '--font-render-hinting=none',
                '--disable-font-subpixel-positioning',
                '--disable-lcd-text',
                '--disable-skia-runtime-opts',
                '--disable-system-font-check',
                '--disable-features=FontAccess,WebRtcHideLocalIpsWithMdns',
                '--force-device-scale-factor=1',
                '--disable-accelerated-2d-canvas',
                '--disable-gpu', // Use software rendering for consistency
                '--use-gl=swiftshader',
                '--disable-smooth-scrolling',
                '--disable-partial-raster',
                '--disable-partial-raster',
            ],
        },
        viewport: { width: 393, height: 852 },
        deviceScaleFactor: 1, // Enforce 1x for manageable screenshot sizes
        timezoneId: 'America/New_York',
        locale: 'en-US',
    },
    snapshotPathTemplate: '{testDir}/{testFileDir}/screenshots/{arg}.png',
    projects: [
        {
            name: 'chromium',
            use: {
                // Ensure we use the global viewport settings by not overriding them with desktop defaults
                browserName: 'chromium',
            },
        },
    ],
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:5173',
        reuseExistingServer: !process.env.CI,
        env: {
            VITE_TEST_MODE: 'true'
        }
    },
    timeout: 60000, // Increase failure timeout for CI
    expect: {
        timeout: 5000, // Shorten assertion timeout
        toHaveScreenshot: {
            maxDiffPixels: 100,
            threshold: 0.1,
        } // Relaxed for cross-platform
    }
});
