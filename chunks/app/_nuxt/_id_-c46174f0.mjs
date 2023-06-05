import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { u as useRoute } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useDefaultClient } from './search-clients-c01db311.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const id = route.params.id;
    const client = useDefaultClient();
    const results = ref();
    const loading = ref(true);
    client.collections("dig-ed-cat").documents(`entry-${id}.html`).retrieve().then((response) => {
      results.value = response;
      loading.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (!unref(loading)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-2"><!--[-->`);
        ssrRenderList(Object.entries(unref(results)), ([key, val]) => {
          _push(`<!--[--><span>${ssrInterpolate(key)}</span><span>${ssrInterpolate(val)}</span><!--]-->`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/editions/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-c46174f0.mjs.map
