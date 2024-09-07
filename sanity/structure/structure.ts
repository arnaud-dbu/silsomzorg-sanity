import { GiPapers } from "react-icons/gi";
import { BiSolidDirections } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";
import { FaHorseHead } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { PiFileFill } from "react-icons/pi";
import { PiFilesFill } from "react-icons/pi";
import { ImBlog } from "react-icons/im";
import { IoIosInformationCircle } from "react-icons/io";

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
                .icon(PiFileFill)
                .child(
                  S.document()
                    .title("Home")
                    .schemaType("home")
                    .documentId("home")
                ),
              S.listItem()
                .title("Services")
                .icon(PiFileFill)
                .child(
                  S.document()
                    .title("Services")
                    .schemaType("services")
                    .documentId("services")
                ),
              S.listItem()
                .title("Vision")
                .icon(PiFileFill)
                .child(
                  S.document()
                    .title("Vision")
                    .schemaType("vision")
                    .documentId("vision")
                ),
              S.listItem()
                .title("Practical")
                .icon(PiFileFill)
                .child(
                  S.document()
                    .title("Practical")
                    .schemaType("practical")
                    .documentId("practical")
                ),
              S.listItem()
                .title("Pages")
                .icon(PiFilesFill)
                .child(S.documentTypeList("pages").title("Page")),
            ])
        ),
      S.listItem()
        .title("Navigation")
        .icon(BiSolidDirections)
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
                .icon(IoIosInformationCircle)
                .child(
                  S.document().title("Company Info").schemaType("companyInfo")
                ),
              S.listItem()
                .title("Social Media")
                .icon(MdPhoneAndroid)
                .child(
                  S.document().title("Social Media").schemaType("socialMedia")
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Services")
        .icon(FaHorseHead)
        .child(S.documentTypeList("service").title("Service")),
      S.listItem()
        .title("Blog")
        .icon(ImBlog)
        .child(S.documentTypeList("blog").title("Blog")),
    ]);
