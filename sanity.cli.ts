import { defineCliConfig } from "sanity/cli";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

if (!projectId) {
  throw new Error(
    "The `SANITY_STUDIO_PROJECT_ID` environment variable is required."
  );
}

export default defineCliConfig({
  api: {
    projectId: "sgwzchn9",
    dataset: dataset,
  },
  studioHost: "Silsomzorg",
});
