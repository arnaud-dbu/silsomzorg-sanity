import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./studio/schemaTypes";
import { linkField } from "sanity-plugin-link-field";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { structure } from "./studio/structure/structure";
import { presentationTool } from "sanity/presentation";
import type { PluginOptions } from "sanity";

const SANITY_STUDIO_PREVIEW_URL =
  "http://localhost:4321" || "https://silsomzorg.netlify.app/";

export default defineConfig({
  title: "silweb",
  name: "silweb",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool({ structure }),
    linkField({
      linkableSchemaTypes: [
        "pages",
        "home",
        "practical",
        "services",
        "service",
        "vision",
      ],
    }),
    visionTool(),
    media() as PluginOptions,
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
    }) as PluginOptions,
  ],
  schema: {
    types: schemaTypes,
  },
});
