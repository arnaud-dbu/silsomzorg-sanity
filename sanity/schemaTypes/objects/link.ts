import {FaLink} from 'react-icons/fa'

export default {
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  icon: FaLink,
  preview: {
    select: {
      title: 'link.text',
    },
    prepare({title}: any) {
      return {
        title: title || 'Untitled',
        subtitle: 'Call to action',
      }
    },
  },
  fields: [
    {
      name: 'link',
      title: 'Link',
      type: 'link',
      options: {
        enableText: true,
        collapsed: false,
      },
    },
    {
      name: 'linkStyle',
      title: 'Link Style',
      type: 'string',
      initialValue: 'Primary',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
  ],
}
