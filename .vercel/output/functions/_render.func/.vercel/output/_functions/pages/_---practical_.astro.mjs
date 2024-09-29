import '../chunks/page-ssr_BtbyZ_Yv.mjs';
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DXd110xi.mjs';
import 'kleur/colors';
import { $ as $$Layout, g as getPageContent, a as $$PageBuilder } from '../chunks/Layout_DnEShf-X.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_BvEmZzEB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await getPageContent("practical");
  const pages = data.map((page) => {
    return {
      slug: page.slug.current,
      pageHeader: page.pageHeader,
      pageBuilder: page.pageBuilder
    };
  });
  return pages.map(({ slug, pageHeader, pageBuilder }) => {
    return {
      params: { practical: slug },
      props: { pageHeader, pageBuilder }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const {
    pageHeader,
    pageBuilder
  } = Astro2.props;
  const { blocks } = pageBuilder ?? {};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageHeader.title, "shape": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "data": pageHeader })} ${maybeRenderHead()}<div class="container"> <iframe class="w-full h-[30rem] relative -top-20 -mb-20 rounded-2xl" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyALyRKX76qq098gtLj1RsNVMkIuQFru2BI
    &q=Olmenhoekstraat+41a,Erps-Kwerps">
    </iframe> </div> ${pageBuilder && renderTemplate`${renderComponent($$result2, "PageBuilder", $$PageBuilder, { "blocks": blocks })}`}` })}`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[...practical].astro", void 0);

const $$file = "/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[...practical].astro";
const $$url = "/[...practical]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
