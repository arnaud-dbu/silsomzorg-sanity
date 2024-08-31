import {defineArrayMember, defineType} from 'sanity'

export default defineType({
  name: 'pageBuilder',
  type: 'object',
  title: 'Page Builder',
  fields: [
    {
      title: 'Blocks',
      name: 'blocks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'textAndImage',
        }),
        defineArrayMember({
          type: 'callToAction',
        }),
        defineArrayMember({
          type: 'cards',
        }),
        defineArrayMember({
          type: 'quote',
        }),
        defineArrayMember({
          type: 'imageGallery',
        }),
        defineArrayMember({
          type: 'textAndMap',
        }),
        // defineArrayMember({
        //   type: "video",
        // }),
      ],
    },
  ],
})
