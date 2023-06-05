<script lang="ts" setup>
import { useRoute, ref } from "#imports";
import { ChevronUpIcon } from "@heroicons/vue/24/solid";
import { useDefaultClient } from "@/utils/search-clients";

const route = useRoute();

let input = String(route.query.q || "");
let page = Number(route.query.page || 1);
let limit = Number(route.query.limit || 25);

let results = ref();
let loading = ref(true);

const client = useDefaultClient();

const search = () => {
  loading.value = true;
  client
    .collections("dig-ed-cat")
    .documents()
    .search({
      q: input,
      query_by: "edition-name",
      per_page: limit,
      page,
    })
    .then((searchResults) => {
      console.log(searchResults);
      results.value = searchResults;
      loading.value = false;
    });
};

search();
</script>

<template>
  <div class="max-w-container mx-auto">
    <input
      type="text"
      v-model="input"
      @input="
        page = 1;
        search();
      "
      class="h-8 mx-auto my-4 p-4 rounded border"
      placeholder="Search..."
    />
    <div class="grid grid-cols-[1fr_auto_auto] gap-y-2 gap-x-8" v-if="!loading">
      <div>Name</div>
      <div>url</div>
      <div>time</div>
      <template v-for="hit in results?.hits">
        <div>
          <nuxt-link :href="'/editions/' + hit.document.id.replace(/\D/g, '')">
            {{ hit.document["edition-name"] }}
          </nuxt-link>
        </div>
        <div>{{ hit.document.url }}</div>
        <div>{{ hit.document["time-century"] }}</div>
      </template>
    </div>
    <div class="flex justify-between items-center my-2" v-if="!loading">
      <button
        :class="page <= 1 && 'text-gray-400 cursor-not-allowed'"
        class="p-4 border rounded cursor-pointer"
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
        {{ Math.min(results.found, page * limit) }} out of
        {{ results?.found }}
      </span>
      <button
        class="p-4 border rounded cursor-pointer"
        :class="
          page * limit >= results.found && 'text-gray-400 cursor-not-allowed'
        "
        :disabled="page * limit >= results.found"
        @click="
          page++;
          search();
        "
      >
        <span class="sr-only">Next Page</span>
        <chevron-up-icon class="w-4 h-4 rotate-90" />
      </button>
    </div>
  </div>
</template>
