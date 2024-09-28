import { defineField, defineType } from "sanity";
import { PiTextTFill } from "react-icons/pi";
import title from "../objects/title";
import richText from "../objects/richText";
import links from "../objects/links";
import tagline from "../objects/tagline";

export default defineType({
  name: "textAndImage",
  title: "Text / Image",
  type: "object",
  icon: PiTextTFill,
  preview: {
    select: {
      title: "title",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Text / Image",
        media: image || PiTextTFill,
      };
    },
  },
  fields: [
    defineField(tagline),
    defineField(title),
    defineField(richText),
    defineField(links),
    defineField({
      title: "Full Width",
      name: "fullWidth",
      type: "boolean",
      options: {
        layout: "switch",
      },
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
        {
          name: "imagePosition",
          title: "Image Position",
          type: "string",
          initialValue: "left",
          options: {
            list: [
              { title: "Left", value: "left" },
              { title: "Right", value: "right" },
            ],
            layout: "radio",
            direction: "horizontal",
          },
        },
      ],
    }),
  ],
});
