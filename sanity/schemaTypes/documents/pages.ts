import { defineField, defineType } from "sanity";
import pageHeader from "../blocks/pageHeader";
import { FaFile } from "react-icons/fa";
import pageBuilder from "../blocks/pageBuilder";
// import pageBuilder from '../blocks/pageBuilder'
// import pageHeader from '../blocks/pageHeader'

export default defineType({
  name: "pages",
  title: "Pages",
  icon: FaFile,
  type: "document",

  fields: [
    defineField({
      title: "Page Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField(pageHeader),
    defineField(pageBuilder),
  ],
});
