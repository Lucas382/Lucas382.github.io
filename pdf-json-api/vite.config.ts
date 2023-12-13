import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	build: {
		outDir: 'public',
	},

	plugins: [sveltekit()]
};

export default config;