import {defineField} from 'sanity'
import title from './title'
import description from './description'
import icon from './icon'

export default {
  name: 'card',
  type: 'object',
  title: 'Card',

  fields: [defineField(icon), defineField(title), defineField(description)],
}
