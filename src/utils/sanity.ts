import { sanityClient } from "sanity:client";

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
  return await sanityClient.fetch(fullQuery);
}

export async function getInternalLinkDetails(referenceId: string) {
  return await sanityClient.fetch(
    `*[_id == $referenceId][0]{
    "slug": slug.current,
  }`,
    { referenceId }
  );
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
  return await sanityClient.fetch(`*[_type == "companyInfo"]`);
}

export async function getSocialMedia() {
  return await sanityClient.fetch(`*[_type == "socialMedia"]`);
}
