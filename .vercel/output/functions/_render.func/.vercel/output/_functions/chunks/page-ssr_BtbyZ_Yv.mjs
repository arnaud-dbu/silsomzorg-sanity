import { createClient } from '@sanity/client';
/* empty css                                */

const sanityClient = createClient(
            {"apiVersion":"2024-08-30","projectId":"sgwzchn9","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
