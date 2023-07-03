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
let showAll = ref(true);

let scopeFacet = ref(props.facet);

const loadFacets = async () => {
  loading.value = true;
  const results = await getFacets(scopeFacet.value.field_name);
  console.log(results);

  scopeFacet.value = results.value?.facet_counts?.length
    ? results.value?.facet_counts[0]
    : [];
  showAll.value = false;
  loading.value = false;
};
</script>
<template>
  <div class="flex flex-col">
    <h1 class="text-2xl flex justify-between items-center">
      {{ koi[scopeFacet.field_name] }}
      <chip>{{ scopeFacet.stats.total_values }}</chip>
    </h1>
    <div
      class="p-1 flex items-center rounded transition active:bg-slate-300 hover:bg-slate-200 gap-2"
      v-for="count in scopeFacet.counts"
    >
      <input
        type="checkbox"
        class="cursor-pointer h-5 w-5"
        :id="count.value"
        :value="count.value"
        @change="$emit('facetChange', facetModel)"
        v-model="facetModel"
      />
      &nbsp;
      <label
        :for="count.value"
        class="flex justify-between gap-1 w-full items-center cursor-pointer"
        >{{ count.value }}
        <chip>
          {{ count.count }}
        </chip></label
      >
    </div>
    <div
      v-if="showAll"
      class="cursor-pointer hover:bg-slate-200 active:bg-slate-300 rounded transition p-1 flex items-center justify-center gap-2"
      @click="loadFacets"
    >
      <span> show all... </span>
      <chevron-down-icon class="h-5 w-5" />
    </div>
  </div>
</template>
