<script lang="ts" setup>
import { koi } from "@/utils/mapping-objects";
import { type Edition, type FacetField } from "@/utils/types";
import { getFacets, getDocuments } from "@/composable/use-data";
import { ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{
  facet: FacetField;
  selected: string[];
}>();
 
let facetModel = ref(props.selected);
let loading = ref(false);

let scopeFacet = ref(props.facet);

const loadFacets = async () => {
  loading.value = true;
  const results = await getFacets(scopeFacet.value.field_name);

  scopeFacet.value = results.value?.facet_counts?.length
    ? results.value?.facet_counts[0]
    : [];
  loading.value = false;
};
</script>
<template>
  <div class="flex flex-col">
    <h1 class="flex items-center justify-between text-2xl">
      {{ koi[scopeFacet.field_name] }}
    </h1>
    <div
      class="flex items-center gap-2 rounded p-1 transition hover:bg-slate-200 active:bg-slate-300"
      v-for="count in scopeFacet.counts"
    >
      <input
        type="checkbox"
        class="h-5 w-5 cursor-pointer"
        :id="count.value"
        :value="count.value"
        @change="$emit('facetChange', facetModel)"
        v-model="facetModel"
      />
      &nbsp;
      <label
        :for="count.value"
        class="flex w-full cursor-pointer items-center justify-between gap-1"
        >{{ count.value }}
        <chip>
          {{ count.count }}
        </chip></label
      >
    </div>
    <div
      v-if="scopeFacet.stats.total_values != scopeFacet.counts.length"
      class="flex cursor-pointer items-center justify-center gap-2 rounded p-1 transition hover:bg-slate-200 active:bg-slate-300"
      @click="loadFacets"
    >
      <span> show all... ({{ scopeFacet.stats.total_values }} total)</span>
      <chevron-down-icon class="h-5 w-5" />
    </div>
  </div>
</template>
