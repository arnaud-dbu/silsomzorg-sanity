import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";
import { linkField } from "sanity-plugin-link-field";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { structure } from "./sanity/structure/structure";

export default defineConfig({
  projectId: "sgwzchn9",
  dataset: "production",
  plugins: [
    structureTool({ structure }),
    linkField({
      linkableSchemaTypes: ["pages", "home", "contact"],
    }),
    visionTool(),
    media(),
  ],
  schema: {
    types: schemaTypes,
  },
});
