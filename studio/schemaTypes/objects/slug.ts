export default {
  title: "Slug",
  name: "slug",
  type: "slug",
  options: {
    source: "pageTitle",
    maxLength: 200,
    slugify: (input: string) =>
      input
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, "") // Remove all non-alphanumeric characters except hyphens
        .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
        .replace(/^-+|-+$/g, "") // Remove leading and trailing hyphens
        .slice(0, 200), // Trim to maxLength
  },
};
