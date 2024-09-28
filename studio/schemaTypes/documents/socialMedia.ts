import { defineType } from "sanity";

export default defineType({
  title: "Social Media",
  name: "socialMedia",
  type: "object",
  options: {
    columns: 2,
  },
  fields: [
    {
      title: "Facebook",
      name: "facebook",
      type: "url",
    },
    {
      title: "Instagram",
      name: "instagram",
      type: "url",
    },
    {
      title: "Twitter / X",
      name: "twitter",
      type: "url",
    },
    {
      title: "LinkedIn",
      name: "linkedin",
      type: "url",
    },
    {
      title: "YouTube",
      name: "youtube",
      type: "url",
    },
  ],
});
