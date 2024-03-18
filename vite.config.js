/** @type {import('vite').Plugin} */
const viteServerConfig = {
	name: "cors-header-middleware",
	configureServer(server) {
		server.middlewares.use((req, res, next) => {
			res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
			res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
			next();
		});
	},
};

/** @type {import('@vitejs/plugin-vue').Config} */
const config = {
	plugins: [viteServerConfig],

	optimizeDeps: {
    	exclude: ['@mkkellogg/gaussian-splats-3d'],
  	},
  	build: {
    	target: "es2022"
  	},
};

export default config;
