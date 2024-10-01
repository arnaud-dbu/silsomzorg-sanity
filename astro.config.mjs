import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroImageTools,
    sanity({
      projectId: "sgwzchn9",
      dataset: "production",
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
