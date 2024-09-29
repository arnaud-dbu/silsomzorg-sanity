import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import icon from "astro-icon";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroImageTools,
    sanity({
      projectId: "sgwzchn9",
      dataset: "production",
      useCdn: false, // See note on using the CDN
      apiVersion: "2024-08-30", // insert the current date to access the latest version of the API
      studioBasePath: "/studio",
    }),
    react(),
    tailwind(),
    icon(),
  ],

  adapter: vercel(),
  output: "server",
});
