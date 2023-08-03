<script lang="ts" setup>
import { useRoute, ref } from "#imports";
import centered from "@/components/centered.vue";
import externalLink from "@/components/external-link.vue";
import internalLink from "@/components/internal-link.vue";
import { getDocuments } from "@/composable/use-data";
import {
  type Edition,
  type deFactoFacets,
  type Institution,
} from "@/utils/types";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon, ArrowPathIcon } from "@heroicons/vue/24/solid";
import { log } from "console";
import { type SearchResponse } from "typesense/lib/Typesense/Documents";

const route = useRoute();

let input = String(route.query.q || "");
let page = Number(route.query.page || 1);
let limit = Number(route.query.limit || 25);
let institution = String(route.query.inst || "");

let results = ref<SearchResponse<Edition> | null>(null);
let loading = ref(true);

let facetValues = ref<deFactoFacets>({
  "historical-period": [],
  language: [],
  "time-century": [],
  audience: [],
  "begin-date": [],
  "end-date": [],
  "institution-s.institution-name": institution ? [institution] : [],
});

const facetObjectToQuery = (facetObject: object) => {
  const retArray: string[] = [];
  Object.entries(facetObject).forEach(([key, value]) => {
    if (value && value.length != 0) {
      retArray.push(value.map((x: string) => `${key}:="${x}"`).join("&&"));
    }
  });
  const query = retArray.join(" && ");
  return query;
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
    <Head>
      <Title>Browse Editions</Title>
    </Head>
    <div class="mx-auto flex max-w-container items-center px-2">
      <input
        type="search"
        v-model="input"
        @input="
          page = 1;
          search();
        "
        class="mx-auto my-4 h-16 min-w-full rounded border p-4 shadow"
        placeholder="Search..."
      />
    </div>
    <p>
      <button @click="search()" class="border">Submit Button</button>
    </p>
    {{ results }}
    <div>
      <div
        class="grid min-w-full gap-4 divide-y p-4 lg:grid-cols-[1fr_3fr_1fr] lg:gap-32 lg:divide-y-0 lg:px-16"
      >
        <disclosure
          as="div"
          v-slot="{ open }"
          class="flex flex-col pt-10"
          defaultOpen
        >
          <disclosure-button
            class="flex items-center justify-end gap-2 rounded align-top text-xl transition hover:bg-slate-200 active:bg-slate-300 lg:justify-center"
          >
            {{ open ? "Hide" : "Show" }} Filters...
            <ChevronUpIcon class="h-5 w-5 rotate-180 ui-open:rotate-0" />
          </disclosure-button>
          <disclosure-panel as="div" class="flex flex-col gap-2 divide-y">
            <facet-field
              class="pt-2"
              v-if="!loading"
              v-for="facet in results?.facet_counts?.sort(
                (a, b) =>
                  facetValues[b.field_name].length -
                  facetValues[a.field_name].length
              )"
              :facet="facet"
              :selected="facetValues[facet.field_name]"
              @facetChange="
                facetValues[facet.field_name] = $event;
                page = 1;
                search();
              "
            />
          </disclosure-panel>
        </disclosure>
        <centered class="-z-10" v-if="loading">
          <arrow-path-icon class="h-5 w-5 animate-spin" />
        </centered>
        <div v-else class="min-w-full">
          <div class="my-2 flex items-center justify-between">
            <button
              class="rounded border p-4 transition"
              :class="
                page <= 1
                  ? 'cursor-not-allowed text-gray-400'
                  : 'cursor-pointer hover:bg-slate-200 active:bg-slate-300'
              "
              :disabled="page <= 1"
              @click="
                page--;
                search();
              "
            >
              <span class="sr-only">Previous Page</span>
              <chevron-up-icon class="h-4 w-4 -rotate-90" />
            </button>
            <span>
              showing {{ (page - 1) * limit + 1 }} -
              {{ Math.min(results?.found || Infinity, page * limit) }} out of
              {{ results?.found }}
            </span>
            <button
              class="rounded border p-4 transition"
              :class="
                page * limit >= Number(results?.found)
                  ? 'cursor-not-allowed text-gray-400'
                  : 'cursor-pointer hover:bg-slate-200 active:bg-slate-300'
              "
              :disabled="page * limit >= Number(results?.found)"
              @click="
                page++;
                search();
              "
            >
              <span class="sr-only">Next Page</span>
              <chevron-up-icon class="h-4 w-4 rotate-90" />
            </button>
          </div>
          <div
            class="grid min-w-full grid-cols-[5fr_3fr_auto_auto] gap-x-8 gap-y-1"
            v-if="!loading"
          >
            <div>Name</div>
            <div>Institution(s)</div>
            <div>url</div>
            <div class="text-right">time</div>
            <template v-for="hit in results?.hits">
              <div class="col-span-4 border-t" />
              <div class="-ml-2 self-center">
                <internal-link :href="'/editions/' + hit.document.id">
                  <span
                    v-if="hit.highlight['edition-name']?.snippet"
                    v-html="hit.highlight['edition-name']?.snippet"
                  />
                  <span v-else>
                    {{ hit.document["edition-name"] }}
                  </span>
                </internal-link>
              </div>
              <div class="self-center">
                {{
                  hit.document["institution-s"]
                    .map(
                      (inst: Institution): string => inst["institution-name"]
                    )
                    .join(", ")
                }}
              </div>
              <div class="flex items-center">
                <external-link :href="hit.document.url" icon-only />
              </div>
              <div class="self-center text-right">
                {{ hit.document["time-century"] }}
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
mark {
  margin: -1px;
  padding: 1px;
  border-radius: 2px;
  background-color: #cbd5e1;
}
</style>
