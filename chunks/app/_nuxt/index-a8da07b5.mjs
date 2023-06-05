import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("DigEds_Cat_logo_transp.78b0bd4c.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto" }, _attrs))}><div class="flex-col flex divide-y"><div class="p-4"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="grid grid-cols-3 divide-x p-4"><div class="p-4"><b>Why?</b>\u2003 Since 2012 the Catalogue of Digital Editions has been gathering digital editions and texts in an attempt to survey and identify best practice in the field of digital scholarly editing. Analogous initiatives exist but don&#39;t provide the granular analysis of features necessary to better understand the rationale and methodology behind the creation of a digital edition. This Catalogue provides an accessible record of standards and building technologies used, and thus an insight into past and present projects. </div><div class="p-4"><b>How?</b>\u2003 Development on this web application began in 2016 and aims at delivering the Catalogue data in an interactive and user-friendly manner, allowing users to browse, search, filter and order projects around their research interests. </div><div class="p-4"><b>What?</b>\u2003 The Catalogue continuously adds digital editions and always seeks external contributions. For instructions on how to submit a digital edition to the Catalogue, please visit the Documentation page of this site. Projects added will be exposed to over 300 German libraries thanks to the Catalogue&#39;s integration into the German Library Network (DBIS). </div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-a8da07b5.mjs.map
