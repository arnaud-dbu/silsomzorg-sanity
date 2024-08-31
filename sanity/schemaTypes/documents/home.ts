import { defineField, defineType } from "sanity";
import hero from "../blocks/hero";
import pageBuilder from "../blocks/pageBuilder";
import pageTitle from "../objects/pageTitle";
import slug from "../objects/slug";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  preview: {
    prepare() {
      return {
        title: "Home",
      };
    },
  },
  fields: [
    defineField(pageTitle),
    defineField(slug),
    defineField(hero),
    defineField(pageBuilder),
  ],
});
