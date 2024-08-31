import {GiPapers} from 'react-icons/gi'
import {IoHome} from 'react-icons/io5'
import {IoMdMail} from 'react-icons/io'
import {FaGlobe} from 'react-icons/fa'

export const structure = (S: any) =>
  S.list()
    .title('De Lariks')
    .items([
      S.listItem()
        .title('Content')
        .icon(GiPapers)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(IoHome)
                .child(S.document().title('Home').schemaType('home').documentId('home')),
              S.listItem()
                .title('Contact')
                .icon(IoMdMail)
                .child(S.document().title('Contact').schemaType('contact').documentId('contact')),
              S.listItem()
                .title('Pages')
                .icon(GiPapers)
                .child(S.documentTypeList('pages').title('Page')),
            ]),
        ),
      S.listItem()
        .title('Navigation')
        .icon(IoHome)
        .child(S.document().title('Navigation').schemaType('navigation').documentId('navigation')),

      S.listItem()
        .title('General Information')
        .icon(FaGlobe)
        .child(S.document().title('General Information').schemaType('generalInformation')),
      // S.listItem().title('Settings').child(S.document().title('Settings').schemaType('settings')),
    ])
