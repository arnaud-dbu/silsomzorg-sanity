import { defineField, defineType } from "sanity";
import description from "../objects/description";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    defineField(description),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
