<script lang="ts" setup>
import { useRoute, ref } from "#imports";
import { ChevronUpIcon, ArrowPathIcon } from "@heroicons/vue/24/solid";
import { getDocuments } from "@/composable/use-data";
import {
  type SearchResponse,
  type SearchResponseHit,
} from "typesense/lib/Typesense/Documents";
import { type Edition } from "@/utils/types";
import centered from "@/components/centered.vue";
import internalLink from "@/components/internal-link.vue";
import externalLink from "@/components/external-link.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const route = useRoute();

let input = String(route.query.q || "");
let page = Number(route.query.page || 1);
let limit = Number(route.query.limit || 25);

let results = ref<SearchResponse<Edition> | null>(null);
let loading = ref(true);

let facetValues = ref({
  "historical-period": [],
  language: [],
  "time-century": [],
  audience: [],
  "begin-date": [],
  "end-date": [],
});

const facetObjectToQuery = (facetObject: object) => {
  const retArray: string[] = [];
  Object.entries(facetObject).forEach(([key, value]) => {
    if (value && value.length != 0) {
      retArray.push(key + ":=[`" + value.join("`,`") + "`]");
    }
  });

  return retArray.join(" && ");

  // historical-period:=[`Middle Ages`,`Long Nineteenth Century`,`Early Modern`] && time-century:=[`14th`]"
};

const search = async () => {
  loading.value = true;
  results = await getDocuments<Edition>({
    q: input,
    query_by: "edition-name",
    per_page: 25,
    page,
    facet_by: Object.keys(facetValues.value).join(","),
    filter_by: facetObjectToQuery(facetValues.value),
    // max_facet_values: 500,
  });

  loading.value = false;
};

search();
</script>
<template>
  <div>
    <div class="flex items-center max-w-container mx-auto">
      <input
        type="search"
        v-model="input"
        @input="
          page = 1;
          search();
        "
        class="h-8 mx-auto my-4 p-4 rounded border min-w-full"
        placeholder="Search..."
      />
    </div>
    <div>
      <div
        class="grid lg:grid-cols-[1fr_3fr] divide-y lg:divide-y-0 p-4 gap-10 min-w-full"
      >
        <disclosure as="div" v-slot="{ open }" class="flex flex-col pt-10">
          <disclosure-button
            class="rounded transition hover:bg-slate-200 active:bg-slate-300 flex items-center gap-2 justify-center text-xl align-top"
          >
            {{ open ? "Hide" : "Show" }} Filters...
            <ChevronUpIcon class="rotate-180 ui-open:rotate-0 h-5 w-5" />
          </disclosure-button>
          <disclosure-panel>
            <facet-field
              v-if="!loading"
              v-for="facet in results?.facet_counts"
              :key="facet.field_name"
              :facet="facet"
              :selected="facetValues[facet.field_name]"
              @facetChange="
                facetValues[facet.field_name] = $event;
                search();
              "
            />
          </disclosure-panel>
        </disclosure>
        <centered class="-z-10" v-if="loading">
          <arrow-path-icon class="h-5 w-5 animate-spin" />
        </centered>
        <div v-else class="min-w-full">
          <div class="flex justify-between items-center my-2">
            <button
              class="p-4 border rounded transition"
              :class="
                page <= 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'cursor-pointer hover:bg-slate-200 active:bg-slate-300'
              "
              :disabled="page <= 1"
              @click="
                page--;
                search();
              "
            >
              <span class="sr-only">Previous Page</span>
              <chevron-up-icon class="w-4 h-4 -rotate-90" />
            </button>
            <span
              >showing {{ (page - 1) * limit + 1 }} -
              {{ Math.min(results?.found || Infinity, page * limit) }} out of
              {{ results?.found }}
            </span>
            <button
              class="p-4 border rounded transition"
              :class="
                page * limit >= Number(results?.found)
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'cursor-pointer hover:bg-slate-200 active:bg-slate-300'
              "
              :disabled="page * limit >= Number(results?.found)"
              @click="
                page++;
                search();
              "
            >
              <span class="sr-only">Next Page</span>
              <chevron-up-icon class="w-4 h-4 rotate-90" />
            </button>
          </div>
          <div
            class="grid grid-cols-[5fr_3fr_2fr] gap-y-2 gap-x-8 min-w-full"
            v-if="!loading"
          >
            <div>Name</div>
            <div>url</div>
            <div>time</div>
            <template v-for="hit in results?.hits">
              <div>
                <internal-link :href="'/editions/' + hit.document.id">
                  {{ hit.document["edition-name"] }}
                </internal-link>
              </div>
              <div class="flex items-center">
                <external-link :href="hit.document.url" />
              </div>
              <div class="flex items-center">
                {{ hit.document["time-century"] }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
