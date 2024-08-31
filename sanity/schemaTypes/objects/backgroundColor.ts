export default {
  name: "backgroundColor",
  title: "Background Color",
  type: "string",
  initialValue: "Light",
  options: {
    list: [
      { title: "Light", value: "Light" },
      { title: "Dark", value: "Dark" },
    ],
    layout: "radio",
    direction: "horizontal",
  },
};
