import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		sveltekit(),
		VitePWA({
			strategies: 'generateSW',
			registerType: 'autoUpdate',
			includeAssets: ['favicon.png', 'robots.txt', 'apple-touch-icon.png'],
			manifest: {
				name: 'Avtoservice',
				short_name: 'Avtoservice',
				description: 'Avtoservice',
				start_url: '/',
				scope: '/',
				display: 'standalone',
				background_color: '#ffffff',
				lang: 'ru',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/user.png',
						sizes: '192x192',
						type: 'image/png'
					}
				]
			}
		})
	]
});
