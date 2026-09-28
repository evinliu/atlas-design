import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig, type Plugin } from 'vitest/config';

export default defineConfig({
	plugins: [vue(), vueJsx()] as Plugin[],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./test/setup.ts'],
		include: ['**/*.{test,spec}.{ts,tsx}'],
	},
	resolve: {
		alias: {
			'@atlas-design/components': resolve(__dirname, './'),
			'@atlas-design/utils': resolve(__dirname, '../utils'),
			'@atlas-design/theme': resolve(__dirname, '../theme'),
		},
	},
});
