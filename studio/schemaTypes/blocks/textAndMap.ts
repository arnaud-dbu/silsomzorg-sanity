import {defineField, defineType} from 'sanity'
import title from '../objects/title'
import richText from '../objects/richText'
import links from '../objects/links'
import {RiRoadMapFill} from 'react-icons/ri'
import textPosition from '../objects/textPosition'

export default defineType({
  name: 'textAndMap',
  title: 'Text & Map',
  type: 'object',
  icon: RiRoadMapFill,
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Text & Map',
      }
    },
  },
  fields: [
    defineField(title),
    defineField(richText),
    defineField(links),
    defineField(textPosition),
    defineField({
      name: 'street',
      title: 'Street',
      type: 'string',
    }),
    defineField({
      name: 'number',
      title: 'Number',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'postalCode',
      title: 'Postal Code',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
  ],
})
