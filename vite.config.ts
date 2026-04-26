import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === 'production' ? './' : '/',
	plugins: [
		react(),
		{
			name: 'serve-root-index',
			configureServer(server) {
				server.middlewares.use((req, _res, next) => {
					if (req.url === '/') {
						req.url = '/index.html'
					}
					next()
				})
			},
		},
	],
	build: {
		outDir: 'dist',
	},
})
