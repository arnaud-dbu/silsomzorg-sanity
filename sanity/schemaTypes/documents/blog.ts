import { defineField, defineType } from "sanity";
import pageBuilder from "../blocks/pageBuilder";
import { FaHorseHead } from "react-icons/fa";
import pageTitle from "../objects/pageTitle";
import slug from "../objects/slug";
import pageHeader from "../blocks/pageHeader";
import { ImBlog } from "react-icons/im";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  preview: {
    prepare() {
      return {
        title: "Blog",
        icon: ImBlog,
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
