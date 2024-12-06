import {defineArrayMember, defineType} from 'sanity'
import {IoImageSharp} from 'react-icons/io5'
import image from '../objects/image'

export default defineType({
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  icon: IoImageSharp,
  preview: {
    select: {
      images: 'images',
    },
    prepare({images}) {
      const title = images?.length === 1 ? '1 Image' : `${images?.length} Images`
      return {
        title,
        subtitle: 'Image Gallery',
      }
    },
  },
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [defineArrayMember(image)],
    },
    { 
      title: 'Preserve Aspect Ratio',
      name: 'preserveRatio',
      type: "boolean",
      options: {
        layout: "switch",
      },
     }
  ],
})
