<script lang="ts" setup>
import Typesense from "typesense";
import { ref } from "vue";

let input = "";
let results = ref();

let client = new Typesense.Client({
  nodes: [
    {
      host: "typesense.acdh-dev.oeaw.ac.at",
      port: 443,
      protocol: "https",
    },
  ],
  apiKey: "9B1PUuRZU5szyFE6HZGRHi19f03aWIql",
  connectionTimeoutSeconds: 2,
});

const search = () => {
  client
    .collections("dig-ed-cat")
    .documents()
    .search({
      q: input,
      query_by: "edition-name",
    })
    .then((searchResults) => {
      results.value = searchResults;
    });
};

search();
</script>

<template>
  <div class="max-w-container mx-auto">
    <input
      type="text"
      v-model="input"
      @input="search"
      class="h-8 mx-auto my-4 p-4 rounded border"
      placeholder="Search..."
    />
    <div class="grid grid-cols-[auto_1fr_auto_auto] gap-y-2 gap-x-8">
      <div>Edtion</div>
      <div>Name</div>
      <div>url</div>
      <div>time</div>
      <template v-for="hit in results?.hits">
        <div>{{ hit.document.edition }}</div>
        <div>
          <NuxtLink :href="'/editions/' + hit.document.id.replace(/\D/g, '')">
            {{ hit.document["edition-name"] }}
          </NuxtLink>
        </div>
        <div>{{ hit.document.url }}</div>
        <div>{{ hit.document["time-century"] }}</div>
      </template>
    </div>
  </div>
</template>
