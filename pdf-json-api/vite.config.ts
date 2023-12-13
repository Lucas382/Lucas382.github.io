import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	optimizeDeps: {
		include: ['svelte', 'svelte-routing', 'skeletonlabs'],
	},
	plugins: [sveltekit(), purgeCss()]
});
