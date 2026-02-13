import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404s on the favicon or other assets to prevent build failure
				if (path.includes('favicon.png')) {
					console.warn(`Ignoring 404 for ${path}`);
					return;
				}
				// Check if it's a 404 and just warn
				if (message.includes('404')) {
					console.warn(`Prerender 404: ${path} (linked from ${referrer})`);
					return;
				}

				throw new Error(message);
			}
		},
		paths: {
			base: process.env.PUBLIC_BASE_PATH || ''
		}
	}
};

export default config;
