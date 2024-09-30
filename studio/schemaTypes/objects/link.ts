import { FaLink } from "react-icons/fa";

export default {
  name: "cta",
  title: "Call to Action",
  type: "object",
  icon: FaLink,
  preview: {
    select: {
      title: "link.text",
    },
    prepare({ title }: any) {
      return {
        title: title || "Untitled",
        subtitle: "Call to action",
      };
    },
  },
  fields: [
    {
      name: "link",
      title: "Link",
      type: "link",
      options: {
        enableText: true,
        collapsed: false,
      },
    },
  ],
};
