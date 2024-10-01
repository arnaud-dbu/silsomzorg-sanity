import '../chunks/page-ssr_EDlWylL8.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, e as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Ci3rEjlL.mjs';
import 'kleur/colors';
import { g as getContentBySlug, b as getPageContent, $ as $$Layout, c as $$ServiceCard, a as $$PageBuilder } from '../chunks/Layout_CKOJubGt.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_ejnHz2vG.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const pageData = await getContentBySlug(slug);
  const serviceData = await getPageContent("service");
  const { pageHeader, pageBuilder } = pageData;
  const { blocks } = pageBuilder ?? {};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageHeader.title, "shape": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "data": pageHeader })} ${pageData._type == "services" && renderTemplate`${maybeRenderHead()}<div class="container relative -top-20 -mb-20"> <div class="grid grid-cols-1 md:grid-cols-2 lg:gap-6 gap-4"> ${serviceData.map((card) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "card": card })}`)} </div> </div>`}${pageData._type == "practical" && renderTemplate`<div class="container"> <iframe class="w-full h-[30rem] relative -top-20 -mb-20 rounded-2xl" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyALyRKX76qq098gtLj1RsNVMkIuQFru2BI
    &q=Olmenhoekstraat+41a,Erps-Kwerps"></iframe> </div>`}${pageBuilder && renderTemplate`${renderComponent($$result2, "PageBuilder", $$PageBuilder, { "blocks": blocks })}`}` })}
)`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[slug].astro", void 0);

const $$file = "/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
