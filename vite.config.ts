import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"~services": "/src/services",
			"~components": "/src/components",
			"~utils": "/src/utils",
			"~assets": "/src/assets",
			"~styles": "/src/assets/styles",
			"~src": "/src"
		},
	},
	build: {
		outDir: "build"
	}
})

