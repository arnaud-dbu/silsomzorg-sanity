import '../../chunks/page-ssr_EDlWylL8.mjs';
import { c as createComponent, r as renderTemplate, d as renderComponent, e as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_Ci3rEjlL.mjs';
import 'kleur/colors';
import { g as getContentBySlug, $ as $$Layout, a as $$PageBuilder } from '../../chunks/Layout_CKOJubGt.mjs';
import { $ as $$PageHeader } from '../../chunks/PageHeader_ejnHz2vG.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const pageData = await getContentBySlug(slug);
  const { pageHeader, pageBuilder } = pageData;
  const { blocks } = pageBuilder ?? {};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageHeader.title, "shape": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "data": pageHeader, "detail": true })} ${maybeRenderHead()}<div class="section">${pageBuilder && renderTemplate`${renderComponent($$result2, "PageBuilder", $$PageBuilder, { "blocks": blocks })}`}</div> ` })}`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[service]/[slug].astro", void 0);

const $$file = "/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[service]/[slug].astro";
const $$url = "/[service]/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
