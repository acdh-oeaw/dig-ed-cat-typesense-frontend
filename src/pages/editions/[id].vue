<script lang="ts" setup>
import { ref, useRoute } from "#imports";
import Typesense from "typesense";
import { useDefaultClient } from "@/utils/search-clients";

const route = useRoute();
const id = route.params.id;

const client = useDefaultClient();
const results = ref();

const loading = ref(true);
client
  .collections("dig-ed-cat")
  .documents(`entry-${id}.html`)
  .retrieve()
  .then((response) => {
    results.value = response;
    loading.value = false;
  });
</script>
<template>
  <div v-if="!loading">
    <div class="grid grid-cols-2">
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
