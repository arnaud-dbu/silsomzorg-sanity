import '../chunks/page-ssr_BtbyZ_Yv.mjs';
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro } from '../chunks/astro/server_DXd110xi.mjs';
import 'kleur/colors';
import { $ as $$Layout, g as getPageContent, a as $$PageBuilder } from '../chunks/Layout_WMgded8n.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_DjF0m0tK.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await getPageContent("pages");
  const pages = data.map((page) => {
    return {
      slug: page.slug.current,
      pageHeader: page.pageHeader,
      pageBuilder: page.pageBuilder
    };
  });
  return pages.map(({ slug, pageHeader, pageBuilder }) => {
    return {
      params: { slug },
      props: { pageHeader, pageBuilder }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const {
    pageHeader,
    pageBuilder
  } = Astro2.props;
  const { blocks } = pageBuilder ?? {};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageHeader.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "data": pageHeader })} ${pageBuilder && renderTemplate`${renderComponent($$result2, "PageBuilder", $$PageBuilder, { "blocks": blocks })}`}` })}`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[slug].astro", void 0);

const $$file = "/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
