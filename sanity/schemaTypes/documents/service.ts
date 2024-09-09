import { defineField, defineType } from "sanity";
import pageBuilder from "../blocks/pageBuilder";
import pageTitle from "../objects/pageTitle";
import slug from "../objects/slug";
import pageHeader from "../blocks/pageHeader";
import overviewTitle from "../objects/overviewTitle";
import overviewImage from "../objects/overviewImage";
import overviewDescription from "../objects/overviewDescription";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  groups: [
    { title: "Content", name: "content", default: true },
    { title: "Overview", name: "overview" },
  ],
  fields: [
    defineField({
      ...pageTitle,
      group: "content",
    }),
    defineField({
      ...slug,
      group: "content",
    }),
    defineField({
      ...pageHeader,
      group: "content",
    }),
    defineField({
      ...pageBuilder,
      group: "content",
    }),
    defineField({
      ...overviewTitle,
      group: "overview",
    }),
    defineField({
      ...overviewDescription,
      group: "overview",
    }),
    defineField({
      ...overviewImage,
      group: "overview",
    }),
  ],
});
