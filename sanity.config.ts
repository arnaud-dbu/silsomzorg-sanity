import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./studio/schemaTypes";
import { linkField } from "sanity-plugin-link-field";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { structure } from "./studio/structure/structure";
import { presentationTool } from "sanity/presentation";

import type { PluginOptions } from "sanity";

export default defineConfig({
  projectId: "sgwzchn9",
  dataset: "production",
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
      previewUrl: "http://localhost:4321",
    }) as PluginOptions,
  ],
  schema: {
    types: schemaTypes,
  },
});
