<script lang="ts" setup>
import { ref, useRoute } from "#imports";
import { ArrowPathIcon } from "@heroicons/vue/24/solid";
import { getDocument } from "@/composable/use-data";
import institutionCard from "@/components/institution-card.vue";

const route = useRoute();
const id = route.params.id;

const loading = ref(true);
const results = ref();

getDocument(String(id)).then((data) => {
  results.value = data.value;
  loading.value = false;
});
</script>
<template>
  <centered class="-z-10" v-if="loading">
    <arrow-path-icon class="h-5 w-5 animate-spin" />
  </centered>
  <div v-else class="flex mx-auto">
    <div class="grid grid-cols-2 max-w-container">
      <template v-for="[key, val] in Object.entries(results)">
        <span>
          {{ key }}
        </span>
        <span>
          {{ val }}
        </span>
      </template>
    </div>
    <div class="flex flex-col">
      <institution-card
        v-for="inst in results['institution-s']"
        :institution="inst"
      />
    </div>
  </div>
</template>
