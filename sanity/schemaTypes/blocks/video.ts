// import { defineField, defineType } from "sanity";
// import { DocumentVideoIcon } from "@sanity/icons";
// import title from "../fields/title";
// import backgroundColor from "../fields/backgroundColor";

// export default defineType({
//   name: "video",
//   title: "Video",
//   type: "object",
//   icon: DocumentVideoIcon,
//   preview: {
//     select: {
//       title: "title",
//       image: "image",
//     },
//     prepare({ title, image }) {
//       return {
//         title: title || "Untitled",
//         subtitle: "Video",
//         media: image || DocumentVideoIcon,
//       };
//     },
//   },
//   fields: [
//     defineField({
//       name: "videoUrl",
//       title: "Video Url",
//       type: "url",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField(backgroundColor),
//   ],
// });
