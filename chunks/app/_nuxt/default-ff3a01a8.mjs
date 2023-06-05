import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-0d39ff03.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, unref, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { HomeIcon } from '@heroicons/vue/24/solid';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app-header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-slate-100" }, _attrs))}><div class="mx-auto flex w-full max-w-container flex-col items-center justify-between gap-x-4 gap-y-2 px-8 py-4 sm:flex-row">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "font-bold text-5xl select-none",
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` DigEdCat `);
          } else {
            return [
              createTextVNode(" DigEdCat ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex gap-8 items-center"><div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        href: "/",
        class: "hover:bg-slate-200 transition rounded p-4 block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>Home</span>`);
            _push2(ssrRenderComponent(unref(HomeIcon), { class: "w-6 h-6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("span", { class: "sr-only" }, "Home"),
              createVNode(unref(HomeIcon), { class: "w-6 h-6" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "text-lg rounded p-4 hover:bg-slate-200 transition",
        href: "/search"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Search `);
          } else {
            return [
              createTextVNode(" Search ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("logo-acdh-with-text.c90a77bd.svg");
const _imports_1 = "" + buildAssetsURL("logo-oeaw.1b12db76.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="mx-auto grid w-full max-w-[20rem] gap-8 px-8 py-4 text-xs sm:max-w-container sm:grid-cols-7 sm:text-sm"><div><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app-footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = _sfc_main$2;
  const _component_AppFooter = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid min-h-full grid-rows-[auto_1fr_auto]" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-ff3a01a8.mjs.map
