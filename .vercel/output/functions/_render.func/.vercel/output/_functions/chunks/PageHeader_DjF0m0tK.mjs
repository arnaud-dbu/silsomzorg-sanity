import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro, F as Fragment } from './astro/server_DXd110xi.mjs';
import 'kleur/colors';
import { u as urlFor } from './Layout_WMgded8n.mjs';

const $$Astro = createAstro();
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { data, detail } = Astro2.props;
  const imageUrl = data.image ? urlFor(data.image).url() : null;
  return renderTemplate`${maybeRenderHead()}<div> <div class="min-h-[45rem] md:min-h-[40rem] pt-40 flex bg-primary-200 bg-no-repeat bg-cover grayscale bg-fixed rounded-edge items-end relative"${addAttribute(imageUrl ? `background-image: url("${imageUrl}");background-position: ${(data.image?.hotspot?.x ?? 0.5) * 100}% ${(data.image?.hotspot?.y ?? 0.5) * 100}%;` : "", "style")}> ${data.image && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="primary-overlay z-10"></div> <div class="gradient-overlay-bt z-20"></div> <div class="gradient-overlay-tb z-20"></div> ` })}`} ${!detail && renderTemplate`<div class="container relative z-30"> <div${addAttribute(`${data.image ? "text-primary-200" : "text-primary"}  relative z-10 w-full lg:w-1/2 spacing-y mb-28`, "class")}> <h1>${data.title}</h1> ${data.description && renderTemplate`<p${addAttribute(data.image ? "text-white" : "text-black", "class")}> ${data.description} </p>`} </div> </div>`} </div> ${detail && renderTemplate`<div class="container relative z-20 !px-0 md:!px-4"> <div class="relative -top-60 -mb-60 flex flex-col"> <div${addAttribute(`${imageUrl ? "w-full" : "w-full max-w-[60rem]"} ${detail ? "text-center" : ""} p-6 text-white bg-primary lg:p-12 xl:p-16 space-y-4 lg:space-y-6`, "class")}> <h1 class="text-4xl sm:text-7xl md:text-8xl lg:text-9xl"> ${data.title} </h1> ${data.description && renderTemplate`<p class="text-lg md:text-xl">${data.description}</p>`} </div> </div> </div>`} </div>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/blocks/PageHeader.astro", void 0);

export { $$PageHeader as $ };
