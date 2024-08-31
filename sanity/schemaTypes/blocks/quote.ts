import {defineField, defineType} from 'sanity'
import {FaQuoteLeft} from 'react-icons/fa'
import image from '../objects/image'

export default defineType({
  name: 'quote',
  title: 'Quote',
  type: 'object',
  icon: FaQuoteLeft,
  preview: {
    select: {
      title: 'quote',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Quote',
        media: image || FaQuoteLeft,
      }
    },
  },

  fields: [
    defineField(image),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    // defineField(link),
    // defineField(backgroundColor),
  ],
})
