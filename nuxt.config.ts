import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
    "~": fileURLToPath(new URL("./", import.meta.url)),
  },
  app: {
    baseURL: "/dig-ed-cat-typesense-frontend/",
  },
  build: {
    publicPath: "/dist/",
  },
  css: [
    "tailwindcss/tailwind.css",
    "leaflet.markercluster/dist/MarkerCluster.Default.css",
    "leaflet.markercluster/dist/MarkerCluster.css",
  ],
  imports: {
    autoImport: false,
  },
  srcDir: "./src/",
  target: "static",
  postcss: {
    plugins: {
      "tailwindcss/nesting": "postcss-nesting",
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
