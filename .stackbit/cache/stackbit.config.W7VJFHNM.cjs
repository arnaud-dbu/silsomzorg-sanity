"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_cms_sanity = require("@stackbit/cms-sanity");
var import_path = __toESM(require("path"), 1);
var import_types = require("@stackbit/types");
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  nodeVersion: "18",
  ssgName: "astro",
  contentSources: [
    new import_cms_sanity.SanityContentSource({
      projectId: process.env.SANITY_PROJECT_ID,
      token: process.env.SANITY_ACCESS_TOKEN,
      dataset: process.env.SANITY_DATASET || "production",
      rootPath: "/Users/arnaud/Documents/github/silsomzorg-sanity",
      studioPath: import_path.default.resolve("/Users/arnaud/Documents/github/silsomzorg-sanity"),
      studioUrl: process.env.SANITY_STUDIO_URL || ""
    })
  ],
  postInstallCommand: "npm i --no-save @stackbit/types @stackbit/cms-sanity"
});
s;
//# sourceMappingURL=stackbit.config.W7VJFHNM.cjs.map
