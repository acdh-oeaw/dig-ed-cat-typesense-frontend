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

const route = useRoute();

let input = String(route.query.q || "");
let page = Number(route.query.page || 1);
let limit = Number(route.query.limit || 25);

let results = ref<SearchResponse<Edition> | null>(null);
let loading = ref(true);

const search = () => {
  loading.value = true;
  getDocuments<Edition>({
    q: input,
    query_by: "edition-name",
    per_page: limit,
    page,
  }).then((searchResults) => {
    console.log(searchResults);
    results.value = searchResults.value;
    loading.value = false;
  });
};

search();
</script>

<template>
  <div class="max-w-container mx-auto">
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
    <centered v-if="loading">
      <arrow-path-icon class="h-5 w-5 animate-spin" />
    </centered>
    <div class="flex justify-between items-center my-2" v-else>
      <button
        :class="page <= 1 && 'text-gray-400 cursor-not-allowed'"
        class="p-4 border rounded cursor-pointer hover:bg-slate-200 active:bg-slate-300 transition"
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
        class="p-4 border rounded cursor-pointer hover:bg-slate-200 active:bg-slate-300 transition"
        :class="
          page * limit >= Number(results?.found) &&
          'text-gray-400 cursor-not-allowed'
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
          <nuxt-link
            class="hover:underline"
            :href="'/editions/' + hit.document.id.replace(/\D/g, '')"
          >
            {{ hit.document["edition-name"] }}
          </nuxt-link>
        </div>
        <div>{{ hit.document.url }}</div>
        <div>{{ hit.document["time-century"] }}</div>
      </template>
    </div>
  </div>
</template>
