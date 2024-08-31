import {defineField, defineType} from 'sanity'
import title from '../objects/title'
import description from '../objects/description'
import links from '../objects/links'
import image from '../objects/image'

export default defineType({
  name: 'pageHeader',
  title: 'Page Header',
  type: 'object',
  fields: [defineField(title), defineField(description), defineField(links), defineField(image)],
})
