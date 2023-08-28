import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
	alias: {
		"@": fileURLToPath(new URL("./", import.meta.url)),
	},
	app: {
		// baseURL: "/dig-ed-cat-typesense-frontend/",
	},
	components: [{ path: "@/components", pathPrefix: false }],
	css: [
		"@fontsource-variable/open-sans/standard.css",
		"tailwindcss/tailwind.css",
		"@/styles/index.css",
	],
	devtools: {
		enabled: true,
	},
	nitro: {
		compressPublicAssets: true,
		// preset: "github-pages",
		// static: true,
	},
	postcss: {
		plugins: {
			"tailwindcss/nesting": "postcss-nesting",
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	routeRules: {
		"**/*": {
			headers: process.env.BOTS !== "enabled" ? { "X-Robots-Tag": "noindex, nofollow" } : {},
		},
		"/": { static: true },
		"/imprint": { static: true },
	},
	runtimeConfig: {
		BOTS: process.env.BOTS,
		ENV_VALIDATION: process.env.ENV_VALIDATION,
		NODE_ENV: process.env.NODE_ENV,
		public: {
			NUXT_PUBLIC_APP_BASE_URL: process.env.NUXT_PUBLIC_APP_BASE_URL,
			NUXT_PUBLIC_MATOMO_BASE_URL: process.env.NUXT_PUBLIC_MATOMO_BASE_URL,
			NUXT_PUBLIC_MATOMO_ID: process.env.NUXT_PUBLIC_MATOMO_ID,
			NUXT_PUBLIC_REDMINE_ID: process.env.NUXT_PUBLIC_REDMINE_ID,
			NUXT_PUBLIC_TYPESENSE_API_KEY: process.env.NUXT_PUBLIC_TYPESENSE_API_KEY,
			NUXT_PUBLIC_TYPESENSE_COLLECTION: process.env.NUXT_PUBLIC_TYPESENSE_COLLECTION,
			NUXT_PUBLIC_TYPESENSE_HOST: process.env.NUXT_PUBLIC_TYPESENSE_HOST,
			NUXT_PUBLIC_TYPESENSE_PORT: process.env.NUXT_PUBLIC_TYPESENSE_PORT,
			NUXT_PUBLIC_TYPESENSE_PROTOCOL: process.env.NUXT_PUBLIC_TYPESENSE_PROTOCOL,
		},
	},
	typescript: {
		shim: false,
		strict: true,
		// https://github.com/nuxt/nuxt/issues/14816#issuecomment-1484918081
		tsConfig: {
			compilerOptions: {
				paths: {
					"@/*": ["./*"],
				},
			},
		},
	},
});
