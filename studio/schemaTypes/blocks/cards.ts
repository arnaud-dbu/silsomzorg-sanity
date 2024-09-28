import { IoGrid } from "react-icons/io5";
import { defineArrayMember, defineField, defineType } from "sanity";
import card from "../objects/card";
import title from "../objects/title";
import richText from "../objects/richText";
import tagline from "../objects/tagline";

export default defineType({
  name: "cards",
  type: "object",
  title: "Cards",
  icon: IoGrid,
  preview: {
    select: {
      cards: "cards",
    },
    prepare({ cards }) {
      const title = cards?.length === 1 ? "1 Card" : `${cards?.length} Cards`;
      return {
        title,
        subtitle: "Cards",
      };
    },
  },
  fields: [
    defineField(tagline),
    defineField(title),
    defineField(richText),
    defineField({
      title: "Show Services",
      name: "showServices",
      type: "boolean",
    }),
    {
      title: "Cards",
      name: "cards",
      type: "array",
      hidden: ({ parent }) => parent?.showServices,
      of: [defineArrayMember(card)],
    },
  ],
});
