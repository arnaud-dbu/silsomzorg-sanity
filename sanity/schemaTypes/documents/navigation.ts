import {defineField, defineType} from 'sanity'
import {FiLink} from 'react-icons/fi'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineField({
          name: 'navigationItem',
          title: 'Navigation Item',
          type: 'object',
          preview: {
            select: {
              title: 'link.text',
            },
            prepare({title}) {
              return {
                title: title || 'No title',
                icon: FiLink,
              }
            },
          },
          fields: [
            defineField({
              name: 'link',
              title: 'Link',
              type: 'link',
              options: {
                enableText: true,
                collapsed: false,
              },
            }),
          ],
        }),
      ],
    }),
  ],
})
