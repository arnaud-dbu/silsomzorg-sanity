import { defineField, defineType } from "sanity";
import pageBuilder from "../blocks/pageBuilder";
import { FaHorseHead } from "react-icons/fa";
import pageTitle from "../objects/pageTitle";
import slug from "../objects/slug";
import pageHeader from "../blocks/pageHeader";

export default defineType({
  name: "vision",
  title: "Vision",
  type: "document",
  preview: {
    prepare() {
      return {
        title: "Vision",
        icon: FaHorseHead,
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
