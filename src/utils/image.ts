import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: any) {
  return builder.image(source);
}

export const srcSet = (url: string) => `
  ${url} 240w,
  ${url}?w=480 480w,
  ${url}?w=720 720w,
  ${url}?w=960 960w,
  ${url}?w=1200 1200w,
  ${url}?w=1440 1440w,
  ${url}?w=1680 1680w,
  ${url}?w=1920 1920w,
`;

export const halfWidthSizes = (): string => `
(max-width: 479px) 95vw,
(min-width: 480px) and (max-width: 659px) 448px,
(min-width: 660px) and (max-width: 819px) 628px,
(min-width: 820px) and (max-width: 979px) 378px,
(min-width: 980px) and (max-width: 1199px) 458px,
(min-width: 1200px) 568px`;

export const overviewWidthSizes = (): string => `
(max-width: 479px) 95vw, 
(min-width: 480px) and (max-width: 819px) 298px, 
(min-width: 820px) and (max-width: 1199px) 295px, 
(min-width: 1200px) 368px`;
