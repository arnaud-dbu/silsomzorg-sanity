import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./studio/schemaTypes";
import { linkField } from "sanity-plugin-link-field";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { structure } from "./studio/structure/structure";
import { presentationTool } from "sanity/presentation";
import type { PluginOptions } from "sanity";

const projectId =
  import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID! ||
  import.meta.env.PUBLIC_SANITY_PROJECT_ID!;
const dataset =
  import.meta.env.PUBLIC_SANITY_STUDIO_DATASET! ||
  import.meta.env.PUBLIC_SANITY_DATASET!;

const SANITY_STUDIO_PREVIEW_URL =
  import.meta.env.PUBLIC_SANITY_STUDIO_PREVIEW_URL || "http://localhost:4321";

if (!projectId || !dataset) {
  throw new Error(
    `Missing environment variable(s). Check if named correctly in .env file.\n\nShould be:\nPUBLIC_SANITY_STUDIO_PROJECT_ID=${projectId}\nPUBLIC_SANITY_STUDIO_DATASET=${dataset}\n\nAvailable environment variables:\n${JSON.stringify(
      import.meta.env,
      null,
      2
    )}`
  );
}

export default defineConfig({
  title: "Silsomzorg",
  name: "silsomzorg",
  projectId,
  dataset,
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
