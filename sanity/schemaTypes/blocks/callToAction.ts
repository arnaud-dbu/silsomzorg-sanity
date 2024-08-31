import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'
import title from '../objects/title'
import richText from '../objects/richText'
import links from '../objects/links'

export default defineType({
  name: 'callToAction',
  title: 'Call To Action',
  type: 'object',
  icon: LinkIcon,
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Call to action',
        media: image || LinkIcon,
      }
    },
  },
  fields: [
    defineField(title),
    defineField(richText),
    defineField(links),
    // defineField(image),
    // defineField(backgroundColor),
  ],
})
