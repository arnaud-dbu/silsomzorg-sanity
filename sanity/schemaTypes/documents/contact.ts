import {defineField, defineType} from 'sanity'
import pageBuilder from '../blocks/pageBuilder'
import {IoMdMail} from 'react-icons/io'
import pageTitle from '../objects/pageTitle'
import slug from '../objects/slug'
import pageHeader from '../blocks/pageHeader'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Contact',
        icon: IoMdMail,
      }
    },
  },
  fields: [
    defineField(pageTitle),
    defineField(slug),
    defineField(pageHeader),
    defineField(pageBuilder),
  ],
})
