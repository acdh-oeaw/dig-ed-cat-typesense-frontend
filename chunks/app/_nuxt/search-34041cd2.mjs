import { _ as __nuxt_component_0 } from './nuxt-link-0d39ff03.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { ChevronUpIcon } from '@heroicons/vue/24/solid';
import { u as useDefaultClient } from './search-clients-c01db311.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'typesense';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    let input = String(route.query.q || "");
    let page = Number(route.query.page || 1);
    let limit = Number(route.query.limit || 25);
    let results = ref();
    let loading = ref(true);
    const client = useDefaultClient();
    const search = () => {
      loading.value = true;
      client.collections("dig-ed-cat").documents().search({
        q: input,
        query_by: "edition-name",
        per_page: limit,
        page
      }).then((searchResults) => {
        console.log(searchResults);
        results.value = searchResults;
        loading.value = false;
      });
    };
    search();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto" }, _attrs))}><input type="text"${ssrRenderAttr("value", unref(input))} class="h-8 mx-auto my-4 p-4 rounded border" placeholder="Search...">`);
      if (!unref(loading)) {
        _push(`<div class="grid grid-cols-[1fr_auto_auto] gap-y-2 gap-x-8"><div>Name</div><div>url</div><div>time</div><!--[-->`);
        ssrRenderList((_a = unref(results)) == null ? void 0 : _a.hits, (hit) => {
          _push(`<!--[--><div>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            href: "/editions/" + hit.document.id.replace(/\D/g, "")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(hit.document["edition-name"])}`);
              } else {
                return [
                  createTextVNode(toDisplayString(hit.document["edition-name"]), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div>${ssrInterpolate(hit.document.url)}</div><div>${ssrInterpolate(hit.document["time-century"])}</div><!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(loading)) {
        _push(`<div class="flex justify-between items-center my-2"><button class="${ssrRenderClass([unref(page) <= 1 && "text-gray-400 cursor-not-allowed", "p-4 border rounded cursor-pointer"])}"${ssrIncludeBooleanAttr(unref(page) <= 1) ? " disabled" : ""}><span class="sr-only">Previous Page</span>`);
        _push(ssrRenderComponent(unref(ChevronUpIcon), { class: "w-4 h-4 -rotate-90" }, null, _parent));
        _push(`</button><span>showing ${ssrInterpolate((unref(page) - 1) * unref(limit) + 1)} - ${ssrInterpolate(Math.min(unref(results).found, unref(page) * unref(limit)))} out of ${ssrInterpolate((_b = unref(results)) == null ? void 0 : _b.found)}</span><button class="${ssrRenderClass([
          unref(page) * unref(limit) >= unref(results).found && "text-gray-400 cursor-not-allowed",
          "p-4 border rounded cursor-pointer"
        ])}"${ssrIncludeBooleanAttr(unref(page) * unref(limit) >= unref(results).found) ? " disabled" : ""}><span class="sr-only">Next Page</span>`);
        _push(ssrRenderComponent(unref(ChevronUpIcon), { class: "w-4 h-4 rotate-90" }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search-34041cd2.mjs.map
