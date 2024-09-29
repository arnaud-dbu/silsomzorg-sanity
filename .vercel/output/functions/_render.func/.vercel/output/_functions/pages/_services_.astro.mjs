import '../chunks/page-ssr_BtbyZ_Yv.mjs';
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DXd110xi.mjs';
import 'kleur/colors';
import { g as getPageContent, $ as $$Layout, b as $$ServiceCard, a as $$PageBuilder } from '../chunks/Layout_DnEShf-X.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_BvEmZzEB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await getPageContent("services");
  const pages = data.map((page) => {
    return {
      slug: page.slug.current,
      pageHeader: page.pageHeader,
      pageBuilder: page.pageBuilder
    };
  });
  return pages.map(({ slug, pageHeader, pageBuilder }) => {
    return {
      params: { services: slug },
      props: { pageHeader, pageBuilder }
    };
  });
}
const $$services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$services;
  const services = await getPageContent("service");
  const {
    pageHeader,
    pageBuilder
  } = Astro2.props;
  const { blocks } = pageBuilder ?? {};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageHeader.title, "shape": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "data": pageHeader })} ${maybeRenderHead()}<div class="container relative -top-20 -mb-20"> <div class="grid grid-cols-1 md:grid-cols-2 lg:gap-6 gap-4"> ${services.map((card) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "card": card })}`)} </div> </div> ${pageBuilder && renderTemplate`${renderComponent($$result2, "PageBuilder", $$PageBuilder, { "blocks": blocks })}`}` })}`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[services].astro", void 0);

const $$file = "/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[services].astro";
const $$url = "/[services]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$services,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
