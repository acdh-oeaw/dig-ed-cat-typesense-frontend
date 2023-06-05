import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
    "~": fileURLToPath(new URL("./", import.meta.url)),
  },
  app: {
    baseURL: "/dig-ed-cat-typesense-frontend/",
  },
  css: ["tailwindcss/tailwind.css"],
  imports: {
    autoImport: false,
  },
  srcDir: "./src/",
  postcss: {
    plugins: {
      "tailwindcss/nesting": "postcss-nesting",
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
