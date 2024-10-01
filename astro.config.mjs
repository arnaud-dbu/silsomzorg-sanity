import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";
import { loadEnv } from "vite";

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroImageTools,
    sanity({
      projectId: SANITY_STUDIO_PROJECT_ID,
      dataset: SANITY_STUDIO_DATASET,
      useCdn: true, // See note on using the CDN
      apiVersion: "2024-08-30", // insert the current date to access the latest version of the API
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
    tailwind(),
    icon(),
  ],
  output: "server",
  adapter: netlify(),
});
