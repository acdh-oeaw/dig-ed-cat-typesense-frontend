<script lang="ts" setup>
import { ref } from "#imports";
import { getDocuments } from "@/composable/use-data";
import { type Edition } from "@/utils/types";

const query = ref({
  q: "",
  query_by: "edition-name",
  per_page: 25,
  page: 1,
  facet_by: "",
  filter_by: "",
});
let results = ref({});
const loading = ref(false);

const search = async () => {
  loading.value = true;
  results.value = await getDocuments<Edition>(query.value);

  loading.value = false;
};
</script>
<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-2 w-fit h-fit">
      <span>query</span>
      <input type="text" v-model="query.q" class="border" />
      <span>query_by</span>
      <input type="text" v-model="query.query_by" class="border" />
      <span>per_page</span>
      <input type="number" v-model="query.per_page" class="border" />
      <span>page</span>
      <input type="number" v-model="query.page" class="border" />
      <span>facet_by</span>
      <input type="text" v-model="query.facet_by" class="border" />
      <span>filter_by</span>
      <input type="text" v-model="query.filter_by" class="border" />
    </div>
    <div>query: {{ query }}</div>
    <div>
      <button
        @click="search"
        class="border hover:bg-slate-200 p-2 active:bg-slate-300"
      >
        Submit!
      </button>
    </div>
    <div v-if="loading">loading...</div>
    <div>results: {{ results }}</div>
  </div>
</template>
