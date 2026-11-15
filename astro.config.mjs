// @ts-check
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { cacheVercel } from "@astrojs/vercel/cache";
import tailwindcss from "@tailwindcss/vite";
import astroTypesafeRoutes from "astro-typesafe-routes";
import { defineConfig } from "astro/config";
import moonarc from "moonarc";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  cache: {
    provider: cacheVercel(),
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react({
      compiler: {
        compilationMode: "annotation",
      },
    }),
    moonarc(),
    astroTypesafeRoutes(),
  ],
});
