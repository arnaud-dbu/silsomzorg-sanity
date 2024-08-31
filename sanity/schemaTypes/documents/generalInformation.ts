import {defineField, defineType} from 'sanity'

import address from '../objects/address'
import {FaGlobe} from 'react-icons/fa'
import socialMedia from '../objects/socialMedia'
import companyInfo from '../objects/companyInfo'

export default defineType({
  name: 'generalInformation',
  title: 'General Infomation',
  icon: FaGlobe,
  type: 'document',
  fields: [defineField(companyInfo), defineField(address), defineField(socialMedia)],
})
