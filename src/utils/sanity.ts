import { sanityClient } from "sanity:client";

// export async function getMainNavigation() {
//   return await sanityClient.fetch(`*[_type == "mainNavigation"].nav`);
// }

export async function getPageContent(page: string, language?: string) {
  if (language) {
    return await sanityClient.fetch(
      `*[_type == "${page}" && language == "${language}"]`
    );
  } else {
    return await sanityClient.fetch(`*[_type == "${page}"]`);
  }
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
