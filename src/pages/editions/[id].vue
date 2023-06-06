<script lang="ts" setup>
import { ref, useRoute } from "#imports";
import { ArrowPathIcon } from "@heroicons/vue/24/solid";
import Typesense from "typesense";
import { getDocument } from "@/composable/use-data";

const route = useRoute();
const id = route.params.id;

const results = ref();

const loading = ref(true);
getDocument(`entry-${id}.html`).then((data) => {
  results.value = data.value;
  loading.value = false;
});
</script>
<template>
  <centered v-if="loading">
    <arrow-path-icon class="h-5 w-5 animate-spin" />
  </centered>
  <div v-else>
    <div class="grid grid-cols-2 max-w-container mx-auto">
      <template v-for="[key, val] in Object.entries(results)">
        <span>
          {{ key }}
        </span>
        <span>
          {{ val }}
        </span>
      </template>
    </div>
  </div>
</template>
