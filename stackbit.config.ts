import { SanityContentSource } from "@stackbit/cms-sanity";

import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "astro",
  contentSources: [
    new SanityContentSource({
      projectId: "sgwzchn9",
      token:
        "skhWJmv11z65x0MBmibgFKVe74uQHtPZe473td2Z2YZUeBU7BovcZDnLNaAFq3oOTBFzSMIw0hesQzCWKopjUIqHRnvQp65zIX8dvELWA6KTXfdAjj98QiikhRZDOCnyN6XAGJyqHKDL7E9oJdLYCYnKwDvQeMMTk0VdFfxBn9BYis2W9dnu",
      dataset: "production",
      rootPath: __dirname,
      studioPath: "silsomzorg-sanity/studio",
      studioUrl: process.env.SANITY_STUDIO_URL || "",
    }),
  ],
  postInstallCommand: "npm i --no-save @stackbit/types @stackbit/cms-sanity",
});
