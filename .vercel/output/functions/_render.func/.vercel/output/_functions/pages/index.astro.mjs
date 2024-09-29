import '../chunks/page-ssr_BtbyZ_Yv.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro } from '../chunks/astro/server_DXd110xi.mjs';
import 'kleur/colors';
import { u as urlFor, c as $$Icon, g as getPageContent, a as $$PageBuilder, $ as $$Layout } from '../chunks/Layout_WMgded8n.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { hero } = Astro2.props;
  const imageUrl = urlFor(hero.image).url();
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-x-clip"> <div class="rounded-edge relative h-screen flex items-center lg:items-end max-h-[65rem]"> <div class="primary-overlay z-10"></div> <div class="gradient-overlay-bt z-20"></div> <div class="gradient-overlay-tb z-20"></div> <div class="text-white px-10 flex flex-col gap-2 md:gap-0 items-center lg:items-start text-center lg:text-start container lg:mb-28 relative z-30"> <h1 class="text-white">Silsomzorg</h1> <p class="intro sm:w-2/3 lg:w-1/2"> ${hero.description} </p> </div> <div${addAttribute(`background-image: url("${imageUrl}");background-position: ${(hero.image.hotspot?.x ?? 0.5) * 100}% ${(hero.image.hotspot?.y ?? 0.5) * 100}%; `, "style")}${addAttribute(`absolute bg-fixed inset-0 bg-no-repeat bg-cover grayscale `, "class")}></div> </div> ${renderComponent($$result, "Icon", $$Icon, { "name": "shape", "class": "absolute -bottom-[40rem] sm:-bottom-[45rem] md:-bottom-[50rem] lg:-bottom-[55rem] xl:-bottom-[75rem] left-1/2 -translate-x-1/2 w-[200rem] xl:w-[250rem] h-auto" })} </section>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/blocks/Hero.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const data = await getPageContent("home");
  const [{ hero, pageBuilder }] = data;
  const { blocks } = pageBuilder;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "hero": hero })} <div class="relative z-10"> ${renderComponent($$result2, "PageBuilder", $$PageBuilder, { "blocks": blocks })} </div> </main> ` })}`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/index.astro", void 0);

const $$file = "/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
