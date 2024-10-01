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
  process.env.SANITY_STUDIO_PREVIEW_URL ||
  "http://localhost:4321" ||
  "https://silsomzorg.netlify.app/";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

if (!projectId) {
  throw new Error(
    "The `SANITY_STUDIO_PROJECT_ID` environment variable is required."
  );
}

export default defineConfig({
  projectId: projectId,
  dataset: dataset,
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
