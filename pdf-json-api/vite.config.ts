import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import purgeCss from 'vite-plugin-tailwind-purgecss'; // Importe corretamente o plugin

export default defineConfig({
	optimizeDeps: {
		include: ['svelte', 'svelte-routing', 'skeletonlabs'],
	},
	plugins: [
		sveltekit(),
		purgeCss({
			// Configurações do purgeCss, como 'content' (conteúdo a ser verificado para remoção de CSS não utilizado)
			// Consulte a documentação do plugin para as opções corretas de configuração
			content: ['./src/**/*.svelte'],
			// Outras opções...
		}),
	],
});
