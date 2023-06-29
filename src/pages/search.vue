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
import chip from "@/components/chip.vue";
import Key from "typesense/lib/Typesense/Key";

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

const facetObjectToQuery = (facetObject) => {
  const retArray = [];
  Object.entries(facetObject).forEach(([key, value]) => {
    console.log("facets", key, value);

    if (value && value.length != 0) {
      retArray.push(key + ":=[`" + value.join("`,`") + "`]");
    }
  });
  console.log("retArray", retArray);

  return retArray.join(" && ");

  // historical-period:=[`Middle Ages`,`Long Nineteenth Century`,`Early Modern`] && time-century:=[`14th`]"
};

const search = async () => {
  loading.value = true;
  results = await getDocuments<Edition>({
    q: input,
    query_by: "edition-name",
    per_page: 250,
    page,
    facet_by: Object.keys(facetValues.value).join(","),
    filter_by: facetObjectToQuery(facetValues.value),
    // max_facet_values: 500,
  });
  console.log(results.value);

  loading.value = false;
};

search();
</script>
<template>
  <div class="grid grid-cols-[auto_1fr]">
    <div>
      {{ facetValues }}
      <facet-field
        v-if="!loading"
        v-for="facet in results?.facet_counts"
        :facet="facet"
        @facetChange="
          facetValues[facet.field_name] = $event;
          search();
        "
      />
    </div>
    <div class="max-w-container">
      <input
        type="search"
        v-model="input"
        @input="
          page = 1;
          search();
        "
        class="h-8 mx-auto my-4 p-4 rounded border"
        placeholder="Search..."
      />
      <centered class="-z-10" v-if="loading">
        <arrow-path-icon class="h-5 w-5 animate-spin" />
      </centered>
      <div class="flex justify-between items-center my-2" v-else>
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
      <div class="grid grid-cols-[5fr_3fr_2fr] gap-y-2 gap-x-8" v-if="!loading">
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
</template>
