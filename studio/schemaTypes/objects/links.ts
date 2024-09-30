import { defineArrayMember } from "sanity";
import link from "./link";

export default {
  name: "links",
  title: "Links",
  type: "array",
  of: [defineArrayMember(link)],
  validation: (Rule: any) =>
    Rule.max(2).error("You can only add up to 2 links"),
};
