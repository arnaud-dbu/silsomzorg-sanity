import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_Ci3rEjlL.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/arnaud/Documents/github/silsomzorg-sanity/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.C_Eop87r.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"class h{constructor(){document.querySelectorAll(\".js-pull-out\").length>0&&(this.pullOutBlocks(),window.addEventListener(\"resize\",this.pullOutBlocks.bind(this)))}pullOutBlocks(){Array.from(document.querySelectorAll(\".js-pull-out\")).forEach(t=>{const i=t.getAttribute(\"data-no-content\")?t.getAttribute(\"data-no-content\")==\"true\":!1,a=t.getAttribute(\"data-direction\"),n=t.getAttribute(\"data-query\");if(a){const r=t.getAttribute(\"data-max\")?parseInt(t.getAttribute(\"data-max\")||\"0\"):document.body.clientWidth,e=t.getAttribute(\"data-breakpoint\")?parseInt(t.getAttribute(\"data-breakpoint\")||\"0\"):0;this.pullOutBlock(t,a,e,r,i)}else if(n){const r=JSON.parse(n);let e=null;r.forEach(d=>{d.breakpoint<=document.body.clientWidth&&(e=d)}),e&&(e.direction=e.direction??\"both\",e.breakpoint=e.breakpoint??0,e.max=e.max??document.body.clientWidth,this.pullOutBlock(t,e.direction,e.breakpoint,e.max,i))}else console.error(\"You must have a data element with name 'data-direction' or 'data-query' defined in order for the pull out plugin to work.\")})}pullOutBlock(t,i,a,n,r=!1){const e=t.parentElement.getBoundingClientRect(),d={top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft},l=parseInt(window.getComputedStyle(t.parentElement,null).getPropertyValue(\"padding-left\")),u=parseInt(window.getComputedStyle(t.parentElement,null).getPropertyValue(\"padding-right\"));if(document.body.clientWidth>=a)switch(t.style.marginLeft=\"\",t.style.marginRight=\"\",t.style.width=\"\",i){case\"both\":case\"left\":if(t.style.marginLeft=`-${Math.min(d.left,n)+l}px`,r&&(t.style.width=`${Math.min(d.left,n)+e.width}px`),i!=\"both\")break;case\"right\":const s=document.body.clientWidth-(d.left+t.parentElement.clientWidth);if(t.style.marginRight=`-${Math.min(s,n)+u}px`,r&&(t.style.width=`${Math.min(s,n)+e.width}px`),i!=\"both\")break;r&&(t.style.width=`${Math.min(s,n)*2+e.width}px`)}else t.style.marginLeft&&(t.style.marginLeft=\"\"),t.style.marginRight&&(t.style.marginRight=\"\"),r&&(t.style.width=`${e.width}px`)}}new h;class c{constructor(){const t=document.getElementById(\"burger\"),i=document.querySelector(\"#flyout\");t.addEventListener(\"click\",()=>{i.classList.contains(\"js-hidden\")?(i.classList.remove(\"js-hidden\"),document.body.style.overflow=\"hidden\"):(i.classList.add(\"js-hidden\"),document.body.style.overflow=\"auto\")})}}new c;\n"}],"styles":[{"type":"external","src":"/_astro/studio-route.C_Eop87r.css"},{"type":"external","src":"/_astro/_slug_.38qtvuS7.css"}],"routeData":{"route":"/[blog]/[slug]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":true,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["blog","slug"],"component":"src/pages/[blog]/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"class h{constructor(){document.querySelectorAll(\".js-pull-out\").length>0&&(this.pullOutBlocks(),window.addEventListener(\"resize\",this.pullOutBlocks.bind(this)))}pullOutBlocks(){Array.from(document.querySelectorAll(\".js-pull-out\")).forEach(t=>{const i=t.getAttribute(\"data-no-content\")?t.getAttribute(\"data-no-content\")==\"true\":!1,a=t.getAttribute(\"data-direction\"),n=t.getAttribute(\"data-query\");if(a){const r=t.getAttribute(\"data-max\")?parseInt(t.getAttribute(\"data-max\")||\"0\"):document.body.clientWidth,e=t.getAttribute(\"data-breakpoint\")?parseInt(t.getAttribute(\"data-breakpoint\")||\"0\"):0;this.pullOutBlock(t,a,e,r,i)}else if(n){const r=JSON.parse(n);let e=null;r.forEach(d=>{d.breakpoint<=document.body.clientWidth&&(e=d)}),e&&(e.direction=e.direction??\"both\",e.breakpoint=e.breakpoint??0,e.max=e.max??document.body.clientWidth,this.pullOutBlock(t,e.direction,e.breakpoint,e.max,i))}else console.error(\"You must have a data element with name 'data-direction' or 'data-query' defined in order for the pull out plugin to work.\")})}pullOutBlock(t,i,a,n,r=!1){const e=t.parentElement.getBoundingClientRect(),d={top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft},l=parseInt(window.getComputedStyle(t.parentElement,null).getPropertyValue(\"padding-left\")),u=parseInt(window.getComputedStyle(t.parentElement,null).getPropertyValue(\"padding-right\"));if(document.body.clientWidth>=a)switch(t.style.marginLeft=\"\",t.style.marginRight=\"\",t.style.width=\"\",i){case\"both\":case\"left\":if(t.style.marginLeft=`-${Math.min(d.left,n)+l}px`,r&&(t.style.width=`${Math.min(d.left,n)+e.width}px`),i!=\"both\")break;case\"right\":const s=document.body.clientWidth-(d.left+t.parentElement.clientWidth);if(t.style.marginRight=`-${Math.min(s,n)+u}px`,r&&(t.style.width=`${Math.min(s,n)+e.width}px`),i!=\"both\")break;r&&(t.style.width=`${Math.min(s,n)*2+e.width}px`)}else t.style.marginLeft&&(t.style.marginLeft=\"\"),t.style.marginRight&&(t.style.marginRight=\"\"),r&&(t.style.width=`${e.width}px`)}}new h;class c{constructor(){const t=document.getElementById(\"burger\"),i=document.querySelector(\"#flyout\");t.addEventListener(\"click\",()=>{i.classList.contains(\"js-hidden\")?(i.classList.remove(\"js-hidden\"),document.body.style.overflow=\"hidden\"):(i.classList.add(\"js-hidden\"),document.body.style.overflow=\"auto\")})}}new c;\n"}],"styles":[{"type":"external","src":"/_astro/studio-route.C_Eop87r.css"},{"type":"external","src":"/_astro/_slug_.38qtvuS7.css"}],"routeData":{"route":"/[service]/[slug]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/([^/]+?)\\/?$","segments":[[{"content":"service","dynamic":true,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["service","slug"],"component":"src/pages/[service]/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"class h{constructor(){document.querySelectorAll(\".js-pull-out\").length>0&&(this.pullOutBlocks(),window.addEventListener(\"resize\",this.pullOutBlocks.bind(this)))}pullOutBlocks(){Array.from(document.querySelectorAll(\".js-pull-out\")).forEach(t=>{const i=t.getAttribute(\"data-no-content\")?t.getAttribute(\"data-no-content\")==\"true\":!1,a=t.getAttribute(\"data-direction\"),n=t.getAttribute(\"data-query\");if(a){const r=t.getAttribute(\"data-max\")?parseInt(t.getAttribute(\"data-max\")||\"0\"):document.body.clientWidth,e=t.getAttribute(\"data-breakpoint\")?parseInt(t.getAttribute(\"data-breakpoint\")||\"0\"):0;this.pullOutBlock(t,a,e,r,i)}else if(n){const r=JSON.parse(n);let e=null;r.forEach(d=>{d.breakpoint<=document.body.clientWidth&&(e=d)}),e&&(e.direction=e.direction??\"both\",e.breakpoint=e.breakpoint??0,e.max=e.max??document.body.clientWidth,this.pullOutBlock(t,e.direction,e.breakpoint,e.max,i))}else console.error(\"You must have a data element with name 'data-direction' or 'data-query' defined in order for the pull out plugin to work.\")})}pullOutBlock(t,i,a,n,r=!1){const e=t.parentElement.getBoundingClientRect(),d={top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft},l=parseInt(window.getComputedStyle(t.parentElement,null).getPropertyValue(\"padding-left\")),u=parseInt(window.getComputedStyle(t.parentElement,null).getPropertyValue(\"padding-right\"));if(document.body.clientWidth>=a)switch(t.style.marginLeft=\"\",t.style.marginRight=\"\",t.style.width=\"\",i){case\"both\":case\"left\":if(t.style.marginLeft=`-${Math.min(d.left,n)+l}px`,r&&(t.style.width=`${Math.min(d.left,n)+e.width}px`),i!=\"both\")break;case\"right\":const s=document.body.clientWidth-(d.left+t.parentElement.clientWidth);if(t.style.marginRight=`-${Math.min(s,n)+u}px`,r&&(t.style.width=`${Math.min(s,n)+e.width}px`),i!=\"both\")break;r&&(t.style.width=`${Math.min(s,n)*2+e.width}px`)}else t.style.marginLeft&&(t.style.marginLeft=\"\"),t.style.marginRight&&(t.style.marginRight=\"\"),r&&(t.style.width=`${e.width}px`)}}new h;class c{constructor(){const t=document.getElementById(\"burger\"),i=document.querySelector(\"#flyout\");t.addEventListener(\"click\",()=>{i.classList.contains(\"js-hidden\")?(i.classList.remove(\"js-hidden\"),document.body.style.overflow=\"hidden\"):(i.classList.add(\"js-hidden\"),document.body.style.overflow=\"auto\")})}}new c;\n"}],"styles":[{"type":"external","src":"/_astro/studio-route.C_Eop87r.css"},{"type":"external","src":"/_astro/_slug_.38qtvuS7.css"}],"routeData":{"route":"/[slug]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"class h{constructor(){document.querySelectorAll(\".js-pull-out\").length>0&&(this.pullOutBlocks(),window.addEventListener(\"resize\",this.pullOutBlocks.bind(this)))}pullOutBlocks(){Array.from(document.querySelectorAll(\".js-pull-out\")).forEach(t=>{const i=t.getAttribute(\"data-no-content\")?t.getAttribute(\"data-no-content\")==\"true\":!1,a=t.getAttribute(\"data-direction\"),n=t.getAttribute(\"data-query\");if(a){const r=t.getAttribute(\"data-max\")?parseInt(t.getAttribute(\"data-max\")||\"0\"):document.body.clientWidth,e=t.getAttribute(\"data-breakpoint\")?parseInt(t.getAttribute(\"data-breakpoint\")||\"0\"):0;this.pullOutBlock(t,a,e,r,i)}else if(n){const r=JSON.parse(n);let e=null;r.forEach(d=>{d.breakpoint<=document.body.clientWidth&&(e=d)}),e&&(e.direction=e.direction??\"both\",e.breakpoint=e.breakpoint??0,e.max=e.max??document.body.clientWidth,this.pullOutBlock(t,e.direction,e.breakpoint,e.max,i))}else console.error(\"You must have a data element with name 'data-direction' or 'data-query' defined in order for the pull out plugin to work.\")})}pullOutBlock(t,i,a,n,r=!1){const e=t.parentElement.getBoundingClientRect(),d={top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft},l=parseInt(window.getComputedStyle(t.parentElement,null).getPropertyValue(\"padding-left\")),u=parseInt(window.getComputedStyle(t.parentElement,null).getPropertyValue(\"padding-right\"));if(document.body.clientWidth>=a)switch(t.style.marginLeft=\"\",t.style.marginRight=\"\",t.style.width=\"\",i){case\"both\":case\"left\":if(t.style.marginLeft=`-${Math.min(d.left,n)+l}px`,r&&(t.style.width=`${Math.min(d.left,n)+e.width}px`),i!=\"both\")break;case\"right\":const s=document.body.clientWidth-(d.left+t.parentElement.clientWidth);if(t.style.marginRight=`-${Math.min(s,n)+u}px`,r&&(t.style.width=`${Math.min(s,n)+e.width}px`),i!=\"both\")break;r&&(t.style.width=`${Math.min(s,n)*2+e.width}px`)}else t.style.marginLeft&&(t.style.marginLeft=\"\"),t.style.marginRight&&(t.style.marginRight=\"\"),r&&(t.style.width=`${e.width}px`)}}new h;class c{constructor(){const t=document.getElementById(\"burger\"),i=document.querySelector(\"#flyout\");t.addEventListener(\"click\",()=>{i.classList.contains(\"js-hidden\")?(i.classList.remove(\"js-hidden\"),document.body.style.overflow=\"hidden\"):(i.classList.add(\"js-hidden\"),document.body.style.overflow=\"auto\")})}}new c;\n"}],"styles":[{"type":"external","src":"/_astro/studio-route.C_Eop87r.css"},{"type":"external","src":"/_astro/_slug_.38qtvuS7.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[blog]/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[service]/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/arnaud/Documents/github/silsomzorg-sanity/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/[blog]/[slug]@_@astro":"pages/_blog_/_slug_.astro.mjs","\u0000@astro-page:src/pages/[service]/[slug]@_@astro":"pages/_service_/_slug_.astro.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Dol-EcWL.mjs","/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/@sanity/astro/dist/visual-editing/visual-editing-component":"_astro/visual-editing-component.Drcd-2ST.js","@astrojs/react/client.js":"_astro/client.IC7HiHuG.js","/astro/hoisted.js?q=0":"_astro/hoisted.A1M8Q3Rh.js","/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.B5_PS4KY.js","/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.CK8pP003.js","/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.BTJanHjr.js","/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.Ca0H4-B6.js","/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.D-abf_yC.js","/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.DsIEkjxa.js","/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.CP_2lXBr.js","/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.DBg_RInA.js","/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.Du7R2Goe.js","/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.D-n_Ne9n.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.38qtvuS7.css","/_astro/studio-route.C_Eop87r.css","/favicon.svg","/_astro/SanityVision.CP_2lXBr.js","/_astro/browser.DI01FWNP.js","/_astro/client.IC7HiHuG.js","/_astro/client.lssnWBWo.js","/_astro/index.BLe5b60f.js","/_astro/index.DBg_RInA.js","/_astro/index.lHhHwRhm.js","/_astro/index2.Du7R2Goe.js","/_astro/index3.D-abf_yC.js","/_astro/resources.B5_PS4KY.js","/_astro/resources.DsIEkjxa.js","/_astro/resources2.CK8pP003.js","/_astro/resources3.Ca0H4-B6.js","/_astro/stegaEncodeSourceMap.BTJanHjr.js","/_astro/studio-component.D-n_Ne9n.js","/_astro/studio-component.DWh9d23h.js","/_astro/visual-editing-component.Drcd-2ST.js","/fonts/Author-Bold.eot","/fonts/Author-Bold.ttf","/fonts/Author-Bold.woff","/fonts/Author-Bold.woff2","/fonts/Author-BoldItalic.eot","/fonts/Author-BoldItalic.ttf","/fonts/Author-BoldItalic.woff","/fonts/Author-BoldItalic.woff2","/fonts/Author-Extralight.eot","/fonts/Author-Extralight.ttf","/fonts/Author-Extralight.woff","/fonts/Author-Extralight.woff2","/fonts/Author-ExtralightItalic.eot","/fonts/Author-ExtralightItalic.ttf","/fonts/Author-ExtralightItalic.woff","/fonts/Author-ExtralightItalic.woff2","/fonts/Author-Italic.eot","/fonts/Author-Italic.ttf","/fonts/Author-Italic.woff","/fonts/Author-Italic.woff2","/fonts/Author-Light.eot","/fonts/Author-Light.ttf","/fonts/Author-Light.woff","/fonts/Author-Light.woff2","/fonts/Author-LightItalic.eot","/fonts/Author-LightItalic.ttf","/fonts/Author-LightItalic.woff","/fonts/Author-LightItalic.woff2","/fonts/Author-Medium.eot","/fonts/Author-Medium.ttf","/fonts/Author-Medium.woff","/fonts/Author-Medium.woff2","/fonts/Author-MediumItalic.eot","/fonts/Author-MediumItalic.ttf","/fonts/Author-MediumItalic.woff","/fonts/Author-MediumItalic.woff2","/fonts/Author-Regular.eot","/fonts/Author-Regular.ttf","/fonts/Author-Regular.woff","/fonts/Author-Regular.woff2","/fonts/Author-Semibold.eot","/fonts/Author-Semibold.ttf","/fonts/Author-Semibold.woff","/fonts/Author-Semibold.woff2","/fonts/Author-SemiboldItalic.eot","/fonts/Author-SemiboldItalic.ttf","/fonts/Author-SemiboldItalic.woff","/fonts/Author-SemiboldItalic.woff2","/fonts/Author-Variable.eot","/fonts/Author-Variable.ttf","/fonts/Author-Variable.woff","/fonts/Author-Variable.woff2","/fonts/Author-VariableItalic.eot","/fonts/Author-VariableItalic.ttf","/fonts/Author-VariableItalic.woff","/fonts/Author-VariableItalic.woff2"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"u5izMmzf5X8etRdH3knVXGo378tp2MCNAOgu4A/eM3o=","experimentalEnvGetSecretEnabled":false});

export { manifest };