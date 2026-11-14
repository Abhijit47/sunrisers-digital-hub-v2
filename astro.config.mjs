// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import astroTypesafeRoutes from "astro-typesafe-routes";
import moonarc from "moonarc";

// https://astro.build/config
export default defineConfig({
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
