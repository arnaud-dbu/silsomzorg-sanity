import {defineArrayMember} from 'sanity'
import link from './link'

export default {
  name: 'links',
  title: 'Links',
  type: 'array',
  of: [defineArrayMember(link)],
}
