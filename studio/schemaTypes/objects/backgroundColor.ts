export default {
  name: "backgroundColor",
  title: "Background Color",
  type: "string",
  initialValue: "default",
  options: {
    list: [
      { title: "Default", value: "default" },
      { title: "Light", value: "light" },
    ],
    layout: "radio",
    direction: "horizontal",
  },
};
