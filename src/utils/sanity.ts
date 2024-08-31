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
    link {
    ...,
    internalLink->{_type,slug,title}
    }
  }
}`);
}

export async function getGeneralInformation() {
  return await sanityClient.fetch(`*[_type == "generalInformation"]`);
}
