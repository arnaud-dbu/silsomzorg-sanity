// load-query.ts
import { type QueryParams } from "sanity";
import { sanityClient } from "sanity:client";

const visualEditingEnabled =
  import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === "false";
const token =
  "skzMoKsKgLgaYoYuUPobflZXfb1Q6w096NTnsl9yQzyhpwRrQPRNrAiaas77WxGUTxcUDvoJvnucHZIDtPoj9gqDngbQxTogtk9Yh0A2Uzo49wwExxDbxtOUCk8Ddh7t1tKwBULBkKNURN3oZPRnjiCfFYNCVFE8PZog3fCFihIyWQOvWgmG";

export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  if (visualEditingEnabled && !token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required during Visual Editing."
    );
  }

  const perspective = visualEditingEnabled ? "previewDrafts" : "published";

  const { result, resultSourceMap } = await sanityClient.fetch<QueryResponse>(
    query,
    params ?? {},
    {
      filterResponse: false,
      perspective,
      resultSourceMap: visualEditingEnabled ? "withKeyArraySelector" : false,
      stega: visualEditingEnabled,
      ...(visualEditingEnabled ? { token } : {}),
      useCdn: !visualEditingEnabled,
    }
  );

  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective,
  };
}
