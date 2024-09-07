import { defineField, defineType } from "sanity";
import { FiLink } from "react-icons/fi";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineField({
          name: "navigationItem",
          title: "Navigation Item",
          type: "object",
          preview: {
            select: {
              title: "title",
            },
            prepare({ title }) {
              return {
                title: title || "No title",
                icon: FiLink,
              };
            },
          },
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "entry",
              title: "Entry",
              type: "reference",
              to: [
                { type: "blog" },
                { type: "pages" },
                { type: "services" },
                { type: "practical" },
                { type: "vision" },
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
