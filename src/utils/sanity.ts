import { sanityClient } from "sanity:client";
import { loadQuery } from "./loadQuery";

// export async function getMainNavigation() {
//   return await sanityClient.fetch(`*[_type == "mainNavigation"].nav`);
// }

export async function getPageContent(page: string, language?: string) {
  let baseQuery = `*[_type == "${page}"]`;
  const languageFilter = language ? `&& language == "${language}"` : "";

  // Add ordering for service type
  if (page === "service") {
    baseQuery += "|order(orderRank)";
  }

  const fullQuery = `${baseQuery}${languageFilter}`;

  const { data } = await loadQuery<any[]>({
    query: fullQuery,
  });

  return data;
}

export async function getContentBySlug(slug: string, language?: string) {
  let baseQuery = `*[slug.current == "${slug}"]`;
  const languageFilter = language ? `[language == "${language}"]` : "";

  // Add ordering to ensure services appear first if found
  const ordering = '| order((_type == "service") desc, orderRank asc)';

  const fullQuery = `${baseQuery}${languageFilter}${ordering}[0]`;

  const { data } = await loadQuery<any>({
    query: fullQuery,
  });

  return data || null; // Return the matching content or null if not found
}

export async function getInternalLinkDetails(referenceId: string) {
  const { data } = await loadQuery<{ slug: string }>({
    query: `*[_id == $referenceId][0]{
      "slug": slug.current,
    }`,
    params: { referenceId },
  });

  return data;
}

export async function getNavigationItems() {
  return await sanityClient.fetch(`*[_type == "navigation"] {
  items[] {
    title,
    entry->{_type,slug,title}
  }
}`);
}

export async function getCompanyInfo() {
  const { data } = await loadQuery<any[]>({
    query: `*[_type == "companyInfo"]`,
  });
  return data;
}

export async function getSocialMedia() {
  const { data } = await loadQuery<any[]>({
    query: `*[_type == "socialMedia"]`,
  });
  return data;
}
