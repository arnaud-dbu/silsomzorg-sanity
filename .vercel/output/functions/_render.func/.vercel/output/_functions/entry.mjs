import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C9JcE-EM.mjs';
import { manifest } from './manifest_DFUeKEOX.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/studio/_---params_.astro.mjs');
const _page2 = () => import('./pages/_service_/_slug_.astro.mjs');
const _page3 = () => import('./pages/_services_.astro.mjs');
const _page4 = () => import('./pages/_slug_.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const _page6 = () => import('./pages/_---practical_.astro.mjs');
const _page7 = () => import('./pages/_---vision_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/[service]/[slug].astro", _page2],
    ["src/pages/[services].astro", _page3],
    ["src/pages/[slug].astro", _page4],
    ["src/pages/index.astro", _page5],
    ["src/pages/[...practical].astro", _page6],
    ["src/pages/[...vision].astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "007f753d-c697-4f29-a1ff-3e5c2652a9ce",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
