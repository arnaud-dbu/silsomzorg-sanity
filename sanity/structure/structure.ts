import { GiPapers } from "react-icons/gi";
import { IoHome } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { FaHorseHead } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";

export const structure = (S: any) =>
  S.list()
    .title("Silsomzorg")
    .items([
      S.listItem()
        .title("Content")
        .icon(GiPapers)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home")
                .icon(IoHome)
                .child(
                  S.document()
                    .title("Home")
                    .schemaType("home")
                    .documentId("home")
                ),
              S.listItem()
                .title("Services")
                .icon(FaHorseHead)
                .child(
                  S.document()
                    .title("Services")
                    .schemaType("services")
                    .documentId("services")
                ),
              S.listItem()
                .title("Practical")
                .icon(IoMdMail)
                .child(
                  S.document()
                    .title("Practical")
                    .schemaType("practical")
                    .documentId("practical")
                ),
              S.listItem()
                .title("Pages")
                .icon(GiPapers)
                .child(S.documentTypeList("pages").title("Page")),
            ])
        ),
      S.listItem()
        .title("Navigation")
        .icon(IoHome)
        .child(
          S.document()
            .title("Navigation")
            .schemaType("navigation")
            .documentId("navigation")
        ),

      S.listItem()
        .title("General Information")
        .icon(FaGlobe)
        .child(
          S.list()
            .title("General Information")
            .items([
              S.listItem()
                .title("Company Info")
                .icon(FaGlobe)
                .child(
                  S.document().title("Company Info").schemaType("companyInfo")
                ),
              S.listItem()
                .title("Social Media")
                .icon(MdPhoneAndroid)
                .child(
                  S.document().title("Social Media").schemaType("socialMedia")
                ),
              S.listItem()
                .title("Services")
                .icon(FaHorseHead)
                .child(S.documentTypeList("service").title("Service")),
            ])
        ),
      // S.listItem().title('Settings').child(S.document().title('Settings').schemaType('settings')),
    ]);
