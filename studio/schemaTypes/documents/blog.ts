import { defineField, defineType } from "sanity";
import pageBuilder from "../blocks/pageBuilder";
import pageTitle from "../objects/pageTitle";
import slug from "../objects/slug";
import pageHeader from "../blocks/pageHeader";
import { ImBlog } from "react-icons/im";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  preview: {
    select: {
      title: "pageHeader.title",
    },
    prepare({ title }) {
      return {
        title,
        media: ImBlog,
      };
    },
  },
  fields: [
    defineField(pageTitle),
    defineField(slug),
    defineField(pageHeader),
    defineField(pageBuilder),
  ],
});
