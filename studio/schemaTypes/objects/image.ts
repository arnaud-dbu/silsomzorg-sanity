export default {
  name: 'image',
  type: 'image',
  options: {
    hotspot: true,
  },
  // hidden: ({parent}: any) => !parent?.showImage,
  fields: [
    {
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
    },
  ],
}
