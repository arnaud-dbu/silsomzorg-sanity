import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./studio/schemaTypes";
import { linkField } from "sanity-plugin-link-field";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { structure } from "./studio/structure/structure";
import {presentationTool} from 'sanity/presentation'

const SANITY_STUDIO_PREVIEW_URL = (
	process.env.SANITY_STUDIO_PREVIEW_URL
	|| 'http://localhost:4321',
  "https://silweb-8ikitcvv0-stuw.vercel.app"
)


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
    media(),
    presentationTool({
      // Required: set the base URL to the preview location in the front end
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
    }),

  ],
  schema: {
    types: schemaTypes,
  },
});
