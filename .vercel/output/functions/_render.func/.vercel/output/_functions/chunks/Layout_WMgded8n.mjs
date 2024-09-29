import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, g as renderSlot, b as renderComponent, d as createAstro, a as addAttribute, F as Fragment, u as unescapeHTML, e as renderHead } from './astro/server_DXd110xi.mjs';
import 'kleur/colors';
import { isPortableTextToolkitList, isPortableTextListItemBlock, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, nestLists, LIST_NEST_MODE_HTML, buildMarksTree } from '@portabletext/toolkit';
import 'clsx';
import { $ as $$Image } from './_astro_assets_DbOVnMVc.mjs';
import { s as sanityClient } from './page-ssr_BtbyZ_Yv.mjs';
import imageUrlBuilder from '@sanity/image-url';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                               */

function isComponent(it) {
  return typeof it === "function";
}
function mergeComponents(components, overrides) {
  const cmps = { ...components };
  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key];
    const value = !current || isComponent(override) || isComponent(current) ? override : {
      ...current,
      ...override
    };
    cmps[key] = value;
  }
  return cmps;
}

const getTemplate = (prop, type) => `PortableText [components.${prop}] is missing "${type}"`;
const unknownTypeWarning = (type) => getTemplate("type", type);
const unknownMarkWarning = (markType) => getTemplate("mark", markType);
const unknownBlockWarning = (style) => getTemplate("block", style);
const unknownListWarning = (listItem) => getTemplate("list", listItem);
const unknownListItemWarning = (listStyle) => getTemplate("listItem", listStyle);
const getWarningMessage = (nodeType, type) => {
  const fncs = {
    block: unknownBlockWarning,
    list: unknownListWarning,
    listItem: unknownListItemWarning,
    mark: unknownMarkWarning,
    type: unknownTypeWarning
  };
  return fncs[nodeType](type);
};
function printWarning(message) {
  console.warn(message);
}

const key = Symbol("astro-portabletext");
function useContext(node) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }
  return globalThis[key](node);
}

const $$Astro$k = createAstro();
const $$Block = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Block;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const styleIs = (style) => style === node.style;
  const { getUnknownComponent } = useContext(node);
  const UnknownStyle = getUnknownComponent();
  return renderTemplate`${styleIs("h1") ? renderTemplate`${maybeRenderHead()}<h1${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h1>` : styleIs("h2") ? renderTemplate`<h2${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h2>` : styleIs("h3") ? renderTemplate`<h3${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h3>` : styleIs("h4") ? renderTemplate`<h4${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h4>` : styleIs("h5") ? renderTemplate`<h5${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h5>` : styleIs("h6") ? renderTemplate`<h6${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h6>` : styleIs("blockquote") ? renderTemplate`<blockquote${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</blockquote>` : styleIs("normal") ? renderTemplate`<p${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</p>` : renderTemplate`${renderComponent($$result, "UnknownStyle", UnknownStyle, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/astro-portabletext/components/Block.astro", void 0);

const $$HardBreak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<br>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/astro-portabletext/components/HardBreak.astro", void 0);

const $$Astro$j = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$List;
  const { node, index, isInline, ...attrs } = Astro2.props;
  const listItemIs = (listItem) => listItem === node.listItem;
  return renderTemplate`${listItemIs("menu") ? renderTemplate`${maybeRenderHead()}<menu${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</menu>` : listItemIs("number") ? renderTemplate`<ol${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ol>` : renderTemplate`<ul${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ul>`}`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/astro-portabletext/components/List.astro", void 0);

const $$Astro$i = createAstro();
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { node, index, isInline, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/astro-portabletext/components/ListItem.astro", void 0);

const $$Astro$h = createAstro();
const $$Mark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Mark;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const markTypeIs = (markType) => markType === node.markType;
  const { getUnknownComponent } = useContext(node);
  const UnknownMarkType = getUnknownComponent();
  return renderTemplate`${markTypeIs("code") ? renderTemplate`${maybeRenderHead()}<code${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</code>` : markTypeIs("em") ? renderTemplate`<em${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</em>` : markTypeIs("link") ? renderTemplate`<a${addAttribute(node.markDef.href, "href")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</a>` : markTypeIs("strike-through") ? renderTemplate`<del${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</del>` : markTypeIs("strong") ? renderTemplate`<strong${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</strong>` : markTypeIs("underline") ? renderTemplate`<span style="text-decoration: underline;"${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`${renderComponent($$result, "UnknownMarkType", UnknownMarkType, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/astro-portabletext/components/Mark.astro", void 0);

const $$UnknownBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-portabletext-unknown="block">${renderSlot($$result, $$slots["default"])}</p>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/astro-portabletext/components/UnknownBlock.astro", void 0);

const $$UnknownList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-portabletext-unknown="list">${renderSlot($$result, $$slots["default"])}</ul>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/astro-portabletext/components/UnknownList.astro", void 0);

const $$UnknownListItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li data-portabletext-unknown="listitem">${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/astro-portabletext/components/UnknownListItem.astro", void 0);

const $$UnknownMark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span data-portabletext-unknown="mark">${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/astro-portabletext/components/UnknownMark.astro", void 0);

const $$Astro$g = createAstro();
const $$UnknownType = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$UnknownType;
  const { node, isInline } = Astro2.props;
  const warning = getWarningMessage("type", node._type);
  return renderTemplate`${isInline ? renderTemplate`${maybeRenderHead()}<span style="display:none" data-portabletext-unknown="type">${warning}</span>` : renderTemplate`<div style="display:none" data-portabletext-unknown="type">${warning}</div>`}`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/astro-portabletext/components/UnknownType.astro", void 0);

const $$Astro$f = createAstro();
const $$PortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$PortableText;
  const {
    value,
    components: componentOverrides = {},
    listNestingMode = LIST_NEST_MODE_HTML,
    onMissingComponent = true
  } = Astro2.props;
  const components = mergeComponents(
    {
      type: {},
      unknownType: $$UnknownType,
      block: {
        h1: $$Block,
        h2: $$Block,
        h3: $$Block,
        h4: $$Block,
        h5: $$Block,
        h6: $$Block,
        blockquote: $$Block,
        normal: $$Block
      },
      unknownBlock: $$UnknownBlock,
      list: {
        bullet: $$List,
        number: $$List,
        menu: $$List
      },
      unknownList: $$UnknownList,
      listItem: {
        bullet: $$ListItem,
        number: $$ListItem,
        menu: $$ListItem
      },
      unknownListItem: $$UnknownListItem,
      mark: {
        code: $$Mark,
        em: $$Mark,
        link: $$Mark,
        "strike-through": $$Mark,
        strong: $$Mark,
        underline: $$Mark
      },
      unknownMark: $$UnknownMark,
      hardBreak: $$HardBreak
    },
    componentOverrides
  );
  const noop = () => {
  };
  const missingComponentHandler = ((handler) => {
    if (typeof handler === "function") {
      return handler;
    }
    return !handler ? noop : printWarning;
  })(onMissingComponent);
  const serializeNode = (isInline) => (node, index = 0) => asComponentProps(node, index, isInline);
  const serializeChildren = (node, isInline) => node.children.map(serializeNode(isInline));
  const serializeMarksTree = (node) => buildMarksTree(node).map(serializeNode(true));
  const asComponentProps = (node, index, isInline) => ({
    node,
    index,
    isInline
  });
  const provideComponent = (nodeType, type) => {
    const component = components[nodeType];
    return isComponent(component) ? component : component[type] ?? missingComponentHandler(getWarningMessage(nodeType, type), {
      nodeType,
      type
    });
  };
  const prepareForRender = (props) => {
    const { node } = props;
    return isPortableTextToolkitList(node) ? [
      provideComponent("list", node.listItem) ?? components.unknownList,
      serializeChildren(node, false)
    ] : isPortableTextListItemBlock(node) ? [
      provideComponent("listItem", node.listItem) ?? components.unknownListItem,
      serializeMarksTree(node).map((children) => {
        if (node.style !== "normal") {
          const { listItem, ...blockNode } = node;
          children = serializeNode(false)(blockNode, 0);
        }
        return children;
      })
    ] : isPortableTextToolkitSpan(node) ? [
      provideComponent("mark", node.markType) ?? components.unknownMark,
      serializeChildren(node, true)
    ] : isPortableTextBlock(node) ? [
      provideComponent(
        "block",
        node.style ?? (node.style = "normal")
        /* Make sure style has been set */
      ) ?? components.unknownBlock,
      serializeMarksTree(node)
    ] : isPortableTextToolkitTextNode(node) ? [
      "\n" === node.text && isComponent(components.hardBreak) ? components.hardBreak : node.text,
      []
    ] : [
      provideComponent("type", node._type) ?? components.unknownType,
      []
    ];
  };
  globalThis[key] = (node) => {
    return {
      getDefaultComponent: provideDefaultComponent.bind(null, node),
      getUnknownComponent: provideUnknownComponent.bind(null, node)
    };
  };
  const provideDefaultComponent = (node) => {
    return isPortableTextToolkitList(node) ? $$List : isPortableTextListItemBlock(node) ? $$ListItem : isPortableTextToolkitSpan(node) ? $$Mark : isPortableTextBlock(node) ? $$Block : isPortableTextToolkitTextNode(node) ? $$HardBreak : $$UnknownType;
  };
  const provideUnknownComponent = (node) => {
    return isPortableTextToolkitList(node) ? components.unknownList : isPortableTextListItemBlock(node) ? components.unknownListItem : isPortableTextToolkitSpan(node) ? components.unknownMark : isPortableTextBlock(node) ? components.unknownBlock : !isPortableTextToolkitTextNode(node) ? components.unknownType : (() => {
      throw new Error(
        `[PortableText getUnknownComponent] Unable to provide component with node type ${node._type}`
      );
    })();
  };
  const blocks = Array.isArray(value) ? value : [value];
  function* renderBlocks() {
    let index = 0;
    for (const it of nestLists(blocks, listNestingMode)) {
      yield asComponentProps(it, index++, false);
    }
  }
  return renderTemplate`${[...renderBlocks()].map(function render(props) {
    const [Cmp, children] = prepareForRender(props);
    return !isComponent(Cmp) ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${Cmp}` })}` : renderTemplate`${renderComponent($$result, "Cmp", Cmp, { ...props }, { "default": ($$result2) => renderTemplate`${children.map(render)}` })}`;
  })}`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/astro-portabletext/components/PortableText.astro", void 0);

const icons = {"local":{"prefix":"local","lastModified":1727633057,"icons":{"envelope":{"body":"<path fill=\"currentColor\" d=\"M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-20.57 16L128 133.15 52.57 64ZM216 192H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19z\"/>","width":256,"height":256},"facebook":{"body":"<path fill=\"currentColor\" d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15z\"/>"},"instagram":{"body":"<path fill=\"currentColor\" d=\"M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87M12 15.595a3.595 3.595 0 1 1 0-7.19 3.595 3.595 0 0 1 0 7.19m3.737-6.491a.84.84 0 1 1 0-1.68.84.84 0 0 1 0 1.68M14.333 12a2.333 2.333 0 1 1-4.666 0 2.333 2.333 0 0 1 4.666 0M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072C5.008 14.14 5 13.901 5 12s.008-2.139.042-2.886c.117-2.544 1.529-3.955 4.072-4.071C9.861 5.008 10.099 5 12 5s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886s-.008 2.14-.042 2.886\"/>"},"linkedin":{"body":"<path fill=\"currentColor\" d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m-2 16H8v-6h2zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109M17 16h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0V16h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548z\"/>"},"logo":{"body":"<g fill=\"none\"><g fill=\"#fff\" clip-path=\"url(#a)\"><path d=\"M40.82 60.765c0-4.603 2.254-6.871 3.063-6.871.203 0 .337.204.337.441a18.5 18.5 0 0 0-1.21 6.23c0 2.539.637 3.86 1.815 3.86 1.515 0 3.967-4.366 3.967-4.366s.172-.27.306-.27a.225.225 0 0 1 .235.205.8.8 0 0 1-.102.302c-.54.879-3.094 5.314-5.348 5.314-1.548 0-3.063-1.628-3.063-4.84m5.686-12.358a1.78 1.78 0 0 1-1.413 1.628.95.95 0 0 1-.91-1.05 1.99 1.99 0 0 1 1.477-1.828c.471 0 .84.507.84 1.25\"/><path d=\"M50.773 59.612c.065 3.59 1.21 5.147 2.656 5.147 1.815 0 4.642-4.705 4.642-4.705s.166-.27.305-.27a.225.225 0 0 1 .236.205c-.016.108-.054.21-.102.307-.535.879-3.325 5.649-6.018 5.649-1.885 0-3.834-2.237-3.834-6.974 0-14.32 4.134-18.109 6.05-18.109 1.382 0 1.853 1.186 1.853 2.641 0 6.23-4.272 13.64-5.782 16.114m0-1.013c1.445-2.64 4.91-9.512 4.91-15.198 0-1.05-.274-1.692-.943-1.692-1.413 0-3.903 5.25-3.967 16.89\"/><path d=\"M57.364 64.72a.73.73 0 0 1 .504-.538c.165 0 .738 1.487 2.591 1.487a2.556 2.556 0 0 0 2.356-2.57c0-1.962-2.42-5.347-2.624-6.128a27 27 0 0 1-1.75 3.417c-.166.27-.236.372-.37.372-.102 0-.236-.103-.236-.205 0-.135.07-.237.236-.507a18.3 18.3 0 0 0 1.852-3.859 14 14 0 0 1-.165-1.66c0-2.23 1.579-4.063 2.082-4.063.236 0 .305.102.305.27 0 .166-.674.576-.674 2.91s3.063 5.55 3.063 7.787c0 3.115-2.217 4.77-4.14 4.77-1.921 0-3.024-1.186-3.024-1.488m18.252-7.237c0 4.436-2.591 8.192-5.113 8.192-1.949 0-3.528-1.525-3.528-4.096 0-4.468 3.566-7.718 5.852-7.718 1.815 0 2.79 1.25 2.79 3.622m-6.355 4.16c0 1.725.739 2.879 1.949 2.879 1.515 0 3.432-3.218 3.432-7.039 0-1.795-.54-2.91-1.617-2.91-1.949 0-3.764 3.417-3.764 7.076m21.152-4.538c-1.108 0-2.285 2.436-3.126 4.3-.84 1.86-1.178 2.98-1.65 2.98a1.043 1.043 0 0 1-1.108-.948c0-.641 1.007-6.839 1.007-8.87 0-.88-.166-1.186-.637-1.186-1.044 0-3.127 4.3-3.802 6.23a17.8 17.8 0 0 0-.872 4.974c0 .776-1.044 1.39-1.312 1.39s-.37-.07-.37-.237.102-.641.102-4.03c0-1.925-.139-3.849-.407-5.751a.94.94 0 0 1 .74-.712c1.108 0 1.445 3.827 1.477 3.961.102-.34 2.49-6.736 4.61-6.736 1.21 0 2.254.98 2.254 3.417a39 39 0 0 1-.503 4.807s1.917-4.5 4.101-4.5c2.993 0 1.954 6.467 3.935 6.467 1.548 0 2.892-2.096 3.197-2.603 0 0 .166-.27.305-.27a.225.225 0 0 1 .236.205 1 1 0 0 1-.102.307c-.541.879-2.05 3.385-4.439 3.385-4.101 0-2.05-6.57-3.63-6.57\"/><path d=\"M105.755 64.489c.536.889.803 1.908.777 2.942 0 5.654-4.337 9.852-8.342 9.852-1.676.124-3.132-1.148-3.255-2.83a4 4 0 0 1-.011-.247c0-2.948 4.845-5.923 9.011-9.038-.573-1.525-1.649-2.231-2.688-2.231a4 4 0 0 0-1.312.372.425.425 0 0 1-.439-.41v-.032c0-.238.605-.54 1.382-1.218 1.279-1.116 3.228-2.808 3.228-5.756a.95.95 0 0 0-.792-1.078 1 1 0 0 0-.214-.006c-1.414 0-4.235 4.84-4.675 5.584-.165.27-.235.372-.369.372-.102 0-.236-.103-.236-.205 0-.135.07-.237.236-.507.503-.711 3.196-6.5 5.82-6.5 1.547 0 2.42 1.084 2.42 2.61 0 2.942-3.898 5.448-4.674 5.922 1.483.07 2.864.77 3.801 1.93a14.4 14.4 0 0 0 3.7-3.962s.166-.27.3-.27a.224.224 0 0 1 .235.206c-.016.107-.053.21-.101.307a15.6 15.6 0 0 1-3.802 4.198m-1.649 1.32c-3.967 3.046-8.438 5.821-8.438 8.295 0 1.288.637 2.199 2.49 2.199 3.228 0 6.152-4.166 6.152-8.666a7.3 7.3 0 0 0-.204-1.827\"/><path d=\"M117.561 57.478c0 4.436-2.592 8.192-5.113 8.192-1.949 0-3.529-1.525-3.529-4.096 0-4.468 3.566-7.718 5.852-7.718 1.815 0 2.79 1.25 2.79 3.622m-6.356 4.16c0 1.725.739 2.879 1.949 2.879 1.516 0 3.432-3.218 3.432-7.039 0-1.795-.54-2.91-1.617-2.91-1.949 0-3.764 3.417-3.764 7.076m14.023 3.621a2.19 2.19 0 0 1-2.345-2.021q-.006-.105-.005-.21c0-2.539 1.949-5.18 1.949-5.788 0-.61-1.044-.981-2.217-1.827a21 21 0 0 1-2.286 4.974c-.166.27-.236.372-.375.372-.102 0-.236-.102-.236-.205 0-.135.065-.237.236-.507.573-.916 1.885-3.282 2.12-4.974-1.108-.846-3.025-2.134-3.025-4.435 0-2.097 1.376-3.18 2.388-3.18 1.312 0 2.153 1.288 2.153 2.98a13 13 0 0 1-.536 3.218c1.58 1.255 3.127 2.3 3.127 3.115 0 .813-1.141 3.352-1.141 5.923 0 1.05.504 1.59 1.141 1.59 1.312 0 4.037-4.231 4.037-4.231s.166-.27.3-.27a.22.22 0 0 1 .235.205c-.016.108-.053.21-.101.307-.536.879-3.159 4.975-5.413 4.975m-2.351-14.422c0-1.59-.776-2.706-1.381-2.706-.471 0-1.007.507-1.007 1.488 0 2.333 2.12 3.724 2.12 3.724q.267-1.237.268-2.506\"/><path d=\"M138.004 70.817a68 68 0 0 0-.911-9.955s-3.228 4.91-6.087 4.91c-.873 0-1.783-.641-1.783-2.231 0-5.012 6.387-10.39 10.055-10.39a1.614 1.614 0 0 1 1.713 1.503v.156a2.08 2.08 0 0 1-.872 1.897c-.204 0-.268-.102-.268-.237.214-.48.316-.997.305-1.525 0-.68-.401-.981-1.044-.981-2.757 0-7.769 5.244-7.769 9.512 0 .61.337.949.739.949 1.547 0 3.7-2.91 4.808-4.57s1.344-2.097 1.649-2.097a.59.59 0 0 1 .471.577c.338 3.826 1.109 5.993 1.109 12.455 0 4.872-2.694 9.21-6.527 9.21-1.58 0-2.324-.98-2.324-1.218a.394.394 0 0 1 .337-.34c.477.507 1.125.82 1.816.879 3.33 0 4.572-4.064 4.572-8.494m-107.56 1.375c3.03-4.28 6.944-9.69 5.461-15.182-.718-3.358-3.459-5.567-6.323-7.179a65.5 65.5 0 0 0-9.948-4.225c-5.927-2.21-12.197-5.335-15.233-11.231a17.17 17.17 0 0 1-1.574-10.817c1.462-6.284 6.516-11.474 12.502-13.576a19.8 19.8 0 0 0-11.34 11.07c-1.408 3.32-1.167 7.184-.113 10.569 2.33 7.124 9.568 10.622 16.095 13.08a72 72 0 0 1 10.066 4.317c3.03 1.665 6.034 4.112 6.794 7.706 1.58 5.848-2.51 11.512-6.382 15.462\"/><path d=\"M14.933 9.997c-4.52 2.5-8.738 5.999-11.281 10.547a16.82 16.82 0 0 0-.38 14.772c2.136 4.792 6.954 7.422 11.548 9.459 2.967 1.288 6.125 2.333 9.15 3.6a33.7 33.7 0 0 1 5.462 2.614c6.585 3.87 8.968 11.851 4.61 18.367a14.86 14.86 0 0 1-8.289 6.214c-3.292 1.056-6.789.965-10.172.485C6.773 74.778.675 69.173 0 60.059a19.5 19.5 0 0 0 2.87 7.233c2.87 4.37 7.908 6.516 12.936 7.011 5.15.61 10.938-.226 14.723-4.02 2.324-2.334 3.979-5.567 3.727-8.93a10.43 10.43 0 0 0-4.3-7.691c-2.462-2.021-5.541-3.228-8.454-4.462-6.473-2.733-14.477-5.212-18.429-11.54a17.29 17.29 0 0 1-.16-17.547c2.81-4.576 7.25-7.89 12.02-10.116\"/><path d=\"M14.745 10.191c-5.44 2.98-9.723 7.33-9.964 13.857-.128 4.408 1.435 8.924 4.77 11.889 5.574 5.464 13.53 6.267 20.24 9.776 6.494 3.465 10.563 7.62 8.432 15.354a24.2 24.2 0 0 1-1.863 4.608 19.2 19.2 0 0 1-4.969 6.715 24.7 24.7 0 0 0 3.502-5.567 40.3 40.3 0 0 0 2.275-6.181c1.633-7.104-2.163-10.386-8.08-13.55-5.359-2.802-11.698-3.82-16.816-7.216-5.75-3.648-8.937-8.903-8.535-15.893.525-6.43 4.883-11.894 11.008-13.802\"/><path d=\"M21.63 16.734c-1.697 4.344-1.413 8.57 2.897 11.032 1.205.771 3.015 1.596 3.234 3.223-.894-1.347-2.42-1.492-3.796-2.123-5.242-2.07-6.098-8.219-2.334-12.132m1.146-8.854a1.7 1.7 0 0 0 1.081-.885c.129-.398.145-1.115.305-1.579a6.2 6.2 0 0 1 2.062-2.862C27.879.96 30.214-.398 32.628.108l1.109.21-.846.776c-.664.593-.573 1.288-.52 2.145l.102 1.428a8.41 8.41 0 0 1-2.784 6.915l-.027-.992q.948.52 1.783 1.207c1.623 1.51 2.024 3.886 2.543 5.923.648 2.657 1.243 5.33 1.858 7.993.44 1.935.959 4.047 1.446 5.982.31 1.385.916 2.76.482 4.241-.504 1.59-2.49 2.102-3.925 1.558a2.86 2.86 0 0 1-1.515-1.709l.428.232c-1.194.367-2.286-.749-2.388-1.886a1.67 1.67 0 0 0 2.024 1.234q.092-.022.182-.054l.316-.091a2.37 2.37 0 0 0 1.237 1.595c1.017.377 2.58.048 2.918-1.116.343-1.218-.262-2.565-.562-3.788l-.552-1.978-1.097-3.956c-.723-2.636-1.542-5.25-2.27-7.885-.573-1.902-.852-3.842-2.1-5.314a9 9 0 0 0-1.53-1.18l-.68-.501.653-.49a6 6 0 0 0 2.248-4.544c.215-1.908-.819-4.42.986-5.837l.257.987c-2.089-.48-4.01.673-5.553 2.058a5.55 5.55 0 0 0-1.895 2.388c-.225.576-.155 1.03-.45 1.66a1.475 1.475 0 0 1-1.745.55\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h141v80H0z\"/></clipPath></defs></g>","width":141,"height":80},"paper-plane":{"body":"<path fill=\"currentColor\" d=\"M227.32 28.68a16 16 0 0 0-15.66-4.08h-.15L19.57 82.84a16 16 0 0 0-2.49 29.8L102 154l41.3 84.87a15.86 15.86 0 0 0 14.44 9.13q.69 0 1.38-.06a15.88 15.88 0 0 0 14-11.51l58.2-191.94v-.15a16 16 0 0 0-4-15.66m-69.49 203.17-.05.14v-.07l-40.06-82.3 48-48a8 8 0 0 0-11.31-11.31l-48 48-82.33-40.06h-.07.14L216 40Z\"/>","width":256,"height":256},"phone":{"body":"<path fill=\"currentColor\" d=\"m222.37 158.46-47.11-21.11-.13-.06a16 16 0 0 0-15.17 1.4 8 8 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92 16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40 .6.6 0 0 0 0 .12l21 47-20.67 24.74a6 6 0 0 0-.57.77 16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14 8 8 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208\"/>","width":256,"height":256},"quote":{"body":"<path fill=\"currentColor\" d=\"M14.017 21v-7.391C14.017 7.905 17.748 4.039 23 3l.995 2.151C21.563 6.068 20 8.789 20 11h4v10zM0 21v-7.391C0 7.905 3.748 4.039 9 3l.996 2.151C7.563 6.068 6 8.789 6 11h3.983v10z\"/>"},"shape":{"body":"<path fill=\"#f1dbd7\" d=\"M.928 290.823C37.942 453.375 118.743 595.996 285.33 649.901c112.776 35.526 240.732 28.051 341.637-36.626 181.811-104.333 260.829-304.378 400.492-452.376 136.98-142.77 273.99-217.731 457.87-106.094 37.77 23.568 73.08 51.078 105.2 81.877 58.2 48.509 104.84 109.165 136.81 177.638-33.19-48.764-72.94-92.947-117.94-131.286-44.65-38.537-92.47-73.329-142.79-104.041-171.26-94.145-283.74-19.874-408.7 110.136-111.564 118.236-184.294 274.859-309.387 382.53C612.267 693.83 453.377 737.897 276.01 676.449 114.005 615.908 4.977 463.2.65 290.744\"/>","width":1728,"height":704},"shape-2":{"body":"<path fill=\"#F7EBE9\" d=\"M396.807 292.087C207.607 240.775 82.399 133.998.606 0v59.87C83.857 181.885 216.55 279.153 380.692 330.564c58.309 16.931 115.464 28.335 171.414 34.484v-45.876c-52.68-4.623-104.867-13.77-155.299-27.085\"/>","width":553,"height":366},"youtube":{"body":"<path fill=\"currentColor\" d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892M10 9.658l4.917 2.338L10 14.342z\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$e = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/node_modules/astro-icon/components/Icon.astro", void 0);

async function getPageContent(page, language) {
  let baseQuery = `*[_type == "${page}"]`;
  const languageFilter = "";
  if (page === "service") {
    baseQuery += "|order(orderRank)";
  }
  const fullQuery = `${baseQuery}${languageFilter}`;
  return await sanityClient.fetch(fullQuery);
}
async function getInternalLinkDetails(referenceId) {
  return await sanityClient.fetch(
    `*[_id == $referenceId][0]{
    "slug": slug.current,
  }`,
    { referenceId }
  );
}
async function getNavigationItems() {
  return await sanityClient.fetch(`*[_type == "navigation"] {
  items[] {
    title,
    entry->{_type,slug,title}
  }
}`);
}
async function getCompanyInfo() {
  return await sanityClient.fetch(`*[_type == "companyInfo"]`);
}
async function getSocialMedia() {
  return await sanityClient.fetch(`*[_type == "socialMedia"]`);
}

const $$Astro$d = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Link;
  const { data, inverse } = Astro2.props;
  let href;
  let internalLinkDetails;
  switch (data.link.type) {
    case "email":
      href = `mailto:${data.link.email}`;
      break;
    case "phone":
      href = `tel:${data.link.phone}`;
      break;
    case "external":
      href = data.link.url;
      break;
    case "internal":
      internalLinkDetails = await getInternalLinkDetails(
        data.link.internalLink._ref
      );
      href = internalLinkDetails ? `/${internalLinkDetails.slug}` : "#";
      break;
    default:
      href = "#";
  }
  let linkStyle;
  switch (data.linkStyle) {
    case "primary":
      linkStyle = "btn btn--primary";
      break;
    case "outline":
      linkStyle = "btn btn--outline";
      break;
    case "link":
      linkStyle = "link";
      break;
    default:
      linkStyle = "";
      break;
  }
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${linkStyle}${inverse ? "-inverse" : ""}`, "class")}${addAttribute(data.link.blank ? "_blank" : "", "target")}${addAttribute(href, "href")}>${data.link.text} </a>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/components/Link.astro", void 0);

const $$Astro$c = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { block } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-primary flex relative text-white box-rounded-sm pt-48 lg:py-16 lg:pl-16 p-8 overflow-clip"> <div class="w-full sm:w-2/3 spacing-y"> <h2 class="text-white xl:text-6xl">${block.title}</h2> <div class="rich-text rich-text--inverse"> ${renderComponent($$result, "PortableText", $$PortableText, { "value": block.richText })} </div> ${renderComponent($$result, "Link", $$Link, { "data": block.cta, "inverse": true })} </div> ${renderComponent($$result, "Icon", $$Icon, { "class": "absolute -right-[1rem] -top-[12.5rem] w-[35rem] sm:-top-[5rem] lg:-top-[7.5rem] lg:-right-[6rem] xl:-right-[5rem] xl:w-[35rem] lg:w-[32.5rem] sm:w-[30rem] h-auto", "name": "shape-2" })} </div>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/blocks/CallToAction.astro", void 0);

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
const srcSet = (url) => `
  ${url} 240w,
  ${url}?w=480 480w,
  ${url}?w=720 720w,
  ${url}?w=960 960w,
  ${url}?w=1200 1200w,
  ${url}?w=1440 1440w,
  ${url}?w=1680 1680w,
  ${url}?w=1920 1920w,
`;
const halfWidthSizes = () => `
(max-width: 479px) 95vw,
(min-width: 480px) and (max-width: 659px) 448px,
(min-width: 660px) and (max-width: 819px) 628px,
(min-width: 820px) and (max-width: 979px) 378px,
(min-width: 980px) and (max-width: 1199px) 458px,
(min-width: 1200px) 568px`;

const $$Astro$b = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { card } = Astro2.props;
  const imageUrl = card.pageHeader.image ? urlFor(card.pageHeader.image).url() : null;
  return renderTemplate`${maybeRenderHead()}<div class="@container hover:scale-[1.002] transition hover:shadow-lg relative rounded-2xl border-primary-600/50 border overflow-hidden"> <div class="flex flex-col @lg:flex-row h-full"> ${imageUrl && renderTemplate`${renderComponent($$result, "Image", $$Image, { "srcset": imageUrl ? srcSet(imageUrl) : "", "width": 1e3, "height": 1e3, "src": imageUrl, "alt": "test", "class": "w-full aspect-video object-cover @lg:w-2/5" })}`} <div class="p-6 bg-white sm:p-8 flex flex-col gap-2 lg:gap-4 @lg:w-fit h-full"> <h3 class="">${card.overviewTitle}</h3> <p class="text-lg">${card.overviewDescription}</p> <div class="mt-auto pt-4"> <a class="btn btn--outline link--extended"${addAttribute(`/aanbod/${card.slug.current}`, "href")}>
Meer info
</a> </div> </div> </div> </div>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/blocks/ServiceCard.astro", void 0);

const $$Astro$a = createAstro();
const $$Cards = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Cards;
  const { block } = Astro2.props;
  const services = await getPageContent("service");
  return renderTemplate`${maybeRenderHead()}<div class="spacing-y-lg"> <div class="spacing-y-xs max-w-blockHeader"> <div class="block-heading"> <span>${block.tagline}</span> <h2>${block.title}</h2> </div> ${renderComponent($$result, "PortableText", $$PortableText, { "value": block.richText })} </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:gap-6 gap-4"> ${!block.showServices && block.cards.map((card) => {
    const imageUrl = urlFor(card.icon).url();
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="flex flex-col gap-4 bg-white p-12 border-primary border-4"> ${renderComponent($$result2, "Image", $$Image, { "sizes": "150px", "srcset": imageUrl ? srcSet(imageUrl) : "", "width": 1e3, "height": 1e3, "src": imageUrl, "alt": card.title, "class": "w-24" })} <h3 class=" ">${card.title}</h3> <p class="text-lg">${card.description}</p> </div> ` })}`;
  })} ${block.showServices && services.map((card) => renderTemplate`${renderComponent($$result, "ServiceCard", $$ServiceCard, { "card": card })}`)} </div> </div>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/blocks/Cards.astro", void 0);

const $$Astro$9 = createAstro();
const $$Links = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Links;
  const { data, inverse } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-4"> ${data?.map((link) => {
    return renderTemplate`${renderComponent($$result, "Link", $$Link, { "inverse": inverse, "data": link })}`;
  })} </div>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/components/Links.astro", void 0);

const $$Astro$8 = createAstro();
const $$TextAndImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TextAndImage;
  const { block } = Astro2.props;
  let imageUrl = "";
  if (block.image && block.image.asset) {
    try {
      imageUrl = urlFor(block.image).url();
    } catch (error) {
      console.error("Error resolving image URL:", error);
      imageUrl = "/path/to/fallback/image.jpg";
    }
  } else {
    console.warn("Image data is incomplete:", block.image);
    imageUrl = "/path/to/fallback/image.jpg";
  }
  const alignImage = block.image.imagePosition == "left" ? "md:flex-row" : "md:flex-row-reverse";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${block.image ? "flex flex-col md:flex-row lg:items-center  gap-8 md:gap-10 lg:gap-12 " : ""} ${block.fullWidth ? "xl:gap-36" : ""}  ${alignImage}`, "class")}> ${block.image && imageUrl && renderTemplate`<div class="w-full lg:w-1/2 xl:w-2/5"> <div${addAttribute(`${block.fullWidth ? "js-pull-out" : ""}`, "class")}${addAttribute(`${block.image.imagePosition ?? ""}`, "data-direction")}> ${renderComponent($$result, "Image", $$Image, { "sizes": halfWidthSizes(), "srcset": srcSet(imageUrl), "width": 1e3, "height": 1e3, "src": imageUrl, "alt": block.image.alt ?? "", "class": `${block.fullWidth ? "aspect-square w-full h-full" : "img-rounded aspect-[7/6]"}  object-cover` })} </div> </div>`} <div${addAttribute(`flex flex-col gap-4 px-4   ${block.image ? "w-full lg:w-1/2 xl:w-3/5" : "lg:flex-row lg:gap-16 xl:gap-24"}`, "class")}> <div${addAttribute(`w-full ${block.image ? "" : "lg:w-1/2"} spacing-y`, "class")}> <div${addAttribute(`block-heading w-full`, "class")}> <span>${block.tagline}</span> <h2>${block.title}</h2> </div> <div class="rich-text"> ${renderComponent($$result, "PortableText", $$PortableText, { "value": block.richText })} </div> ${block.links && renderTemplate`${renderComponent($$result, "Links", $$Links, { "data": block.links })}`} </div> </div> </div>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/blocks/TextAndImage.astro", void 0);

const $$Astro$7 = createAstro();
const $$TextAndMap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TextAndMap;
  const { block } = Astro2.props;
  const street = block.street.replace(/[\s-]/g, "+");
  const number = block.number.replace(/[\s-]/g, "+");
  const city = block.city.replace(/[\s-]/g, "+");
  const address = `${street ?? ""}+${number ?? ""},${city ?? ""}`;
  const alignText = block.textPosition == "right" ? "lg:flex-row" : "lg:flex-row-reverse";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col lg:flex-row gap-6 lg:gap-16 lg:items-center ${alignText}`, "class")}> <iframe class="w-full lg:w-1/2 aspect-video lg:aspect-square img-rounded border-none" referrerpolicy="no-referrer-when-downgrade"${addAttribute(`https://www.google.com/maps/embed/v1/place?key=AIzaSyAKq_9ud7SFKDGWcfSVT3WDbwu05nB_Wok&q=${address}`, "src")} allowfullscreen>
  </iframe> <div${addAttribute(`w-full lg:w-1/2 spacing-y`, "class")}> <h2>${block.title}</h2> <div class="rich-text"> ${renderComponent($$result, "PortableText", $$PortableText, { "value": block.richText })} </div> <!-- <Links data={block.links} /> --> </div> </div>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/blocks/TextAndMap.astro", void 0);

const $$Astro$6 = createAstro();
const $$Quote = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Quote;
  const { block } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex"> <div class="flex flex-col sm:w-4/5 lg:w-2/3"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-12 md:size-16 lg:size-20 text-secondary-500", "name": "quote" })} <blockquote class="spacing-y flex flex-col"> <div class="text-2xl lg:text-3xl">
"${block.quote}"
</div> <div class="flex items-center flex-wrap gap-3"> ${block.author && renderTemplate`<footer class="text-lg font-normal">${block.author}</footer>`} </div> </blockquote> </div> </div>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/blocks/Quote.astro", void 0);

const $$Astro$5 = createAstro();
const $$ImageGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ImageGallery;
  const { block } = Astro2.props;
  let aspectRatio = "";
  let grid = "";
  const { length } = block.images;
  if (length % 2 === 0) {
    grid = "sm:grid-cols-2";
    aspectRatio = "aspect-[4/3]";
  } else if (length % 3 === 0) {
    grid = "md:grid-cols-3";
    aspectRatio = "aspect-[4/3]";
  } else {
    grid = "";
    aspectRatio = "aspect-[4/3] md:aspect-[2/1]";
  }
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <div${addAttribute(`gap-6 grid grid-cols-1 xl:gap-10 ${grid}`, "class")}> ${block.images.map((image, index) => {
    const imageUrl = urlFor(image).url();
    const isFirst = index === 0;
    const isLast = index === block.images.length - 1;
    return renderTemplate`${renderComponent($$result, "Image", $$Image, { "sizes": halfWidthSizes(), "srcset": srcSet(imageUrl), "width": 1e3, "height": 1e3, "src": imageUrl, "alt": image.alt ?? "", "class": `object-cover w-full h-full  ${isFirst ? "img-rounded-first" : ""} ${isLast ? "img-rounded-last" : ""} ${aspectRatio}` })}`;
  })} </div> </div>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/blocks/ImageGallery.astro", void 0);

const $$Astro$4 = createAstro();
const $$PageBuilder = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PageBuilder;
  const components = {
    textAndImage: $$TextAndImage,
    textAndMap: $$TextAndMap,
    callToAction: $$CallToAction,
    cards: $$Cards,
    quote: $$Quote,
    imageGallery: $$ImageGallery
  };
  const { blocks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${blocks.map((block) => {
    const Component = components[block._type];
    return Component ? renderTemplate`<section${addAttribute(`section `, "class")}> <div${addAttribute(`container ${block.fullWidth ? "!p-0" : ""}`, "class")}> ${renderComponent($$result, "Component", Component, { "block": block })} </div> </section>` : null;
  })} </div>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/components/PageBuilder.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const { nav, companyInfo, socialMedia } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="text-white section bg-secondary section--half"> <div class="container"> <div class="flex flex-col md:items-end justify-between md:flex-row gap-8"> <div class="spacing-y-lg max-w-[20rem] lg:max-w-[25rem]"> <div class=""> <!-- Company --> <a href="/"> <div class="sr-only">Main Navigation</div> ${renderComponent($$result, "Icon", $$Icon, { "name": "logo", "class": "w-full max-w-[10rem] lg:max-w-[12.5rem] h-auto" })} </a> <p class="text-base mt-2 lg:text-lg">${companyInfo.description}</p> </div> <div class="space-y-1 text-base lg:text-lg"> <div class="flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "phone", "class": "size-4" })} <a class="underline hover:no-underline"${addAttribute(`tel:${companyInfo.phone}`, "href")}>${companyInfo.phone}</a> </div> <div class="flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "envelope", "class": "size-4" })} <a class="underline hover:no-underline"${addAttribute(`mailto:${companyInfo.email}`, "href")}>${companyInfo.email}</a> </div> </div> <div class="flex flex-wrap items-center gap-3"> ${socialMedia.facebook && renderTemplate`<a${addAttribute(socialMedia.facebook, "href")} target="_blank" class="text-white hover:opacity-80"> ${renderComponent($$result, "Icon", $$Icon, { "name": "facebook", "class": "size-8" })} </a>`} ${socialMedia.instagram && renderTemplate`<a${addAttribute(socialMedia.instagram, "href")} target="_blank" class="text-white hover:opacity-80"> ${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "class": "size-8" })} </a>`} ${socialMedia.youtube && renderTemplate`<a${addAttribute(socialMedia.youtube, "href")} target="_blank" class="text-white hover:opacity-80"> ${renderComponent($$result, "Icon", $$Icon, { "name": "youtube", "class": "size-8" })} </a>`} ${socialMedia.linkedin && renderTemplate`<a${addAttribute(socialMedia.linkedin, "href")} target="_blank" class="text-white hover:opacity-80"> ${renderComponent($$result, "Icon", $$Icon, { "name": "linkedin", "class": "size-8" })} </a>`} </div> </div> <!-- Navigation --> <nav> <ul class="flex lg:flex-row text-lg gap-x-4 md:gap-x-8 lg:gap-x-12"> ${nav.map((item) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <li> <a class="link link--primary text-lg lg:text-xl text-white after:bg-white"${addAttribute(`/${item.entry.slug.current}`, "href")}> ${item.title} </a> </li> ` })}`)} </ul> </nav> </div> </div> </footer>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/blocks/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { nav, companyInfo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="absolute w-full z-10"> <div class="container"> <div class="flex items-end justify-between pt-5"> <!-- Logo --> <a href="/"> <div class="sr-only">Main Navigation</div> ${renderComponent($$result, "Icon", $$Icon, { "name": "logo", "class": "w-36 lg:w-40 h-auto" })} </a> <!-- Navigation --> <nav> <ul class="items-center text-base gap-12 lg:gap-16 hidden md:flex"> ${nav.map((item) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <li> <a class="link link--primary text-lg lg:text-xl text-white"${addAttribute(`/${item.entry.slug.current}`, "href")}> ${item.title} </a> </li> ` })}`)} <li class="bg-primary-600 group hover:bg-primary-700 hover:scale-[1.02] hover:shadow-md transition rounded-br-2xl rounded-tl-2xl size-10 lg:size-[2.85rem] shadow-md"> <a class="flex-center h-full w-full"${addAttribute(`mailto:${companyInfo.email}`, "href")}> <span class="sr-only">Contact</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "paper-plane", "class": "text-white text-lg lg:text-xl" })} </a> </li> </ul> </nav> <!-- Hamburger --> </div> </div> </header> <div class="absolute right-4 top-14 z-40"> <label class="burger md:!hidden" for="burger"> <input type="checkbox" id="burger"> <span></span> <span></span> <span></span> </label> </div>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/blocks/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Flyout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Flyout;
  const { nav, companyInfo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="flyout" class="js-hidden sm:hidden fixed content-center w-screen h-screen bg-primary z-30 text-white"> <div class="p-10 flex flex-col items-center gap-16"> <!-- Navigation --> <nav> <ul class="items-center gap-6 flex flex-col"> ${nav.map((item) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <li> <a class="link link--primary text-xl"${addAttribute(`/${item.entry.slug.current}`, "href")}> ${item.title} </a> </li> ` })}`)} <li class=""> <a class="flex-center flex gap-1 border border-white/70 rounded-full px-4 py-[6px]"${addAttribute(`mailto:${companyInfo.email}`, "href")}> <span class="text-lg">Stuur bericht</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "paper-plane", "class": "text-white text-lg lg:text-xl" })} </a> </li> </ul> </nav> </div> </div> `;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/components/Flyout.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const nav = await getNavigationItems();
  const companyInfo = await getCompanyInfo();
  const socialMedia = await getSocialMedia();
  const { items } = nav[0];
  const { title, shape } = Astro2.props;
  return renderTemplate`<html lang="nl"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Silsomzorg</title>${renderHead()}</head> <body> ${renderComponent($$result, "Flyout", $$Flyout, { "nav": items, "companyInfo": companyInfo[0] })} ${renderComponent($$result, "Header", $$Header, { "nav": items, "companyInfo": companyInfo[0] })} <main${addAttribute(`${shape && "bg-shape"}`, "class")}> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "nav": items, "companyInfo": companyInfo[0], "socialMedia": socialMedia[0] })}  </body></html>`;
}, "/Users/arnaud/Documents/github/silsomzorg-sanity/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$PageBuilder as a, $$ServiceCard as b, $$Icon as c, getPageContent as g, urlFor as u };
