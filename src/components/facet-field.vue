<script lang="ts" setup>
import { koi } from "@/utils/mapping-objects";
import { type FacetField } from "@/utils/types";
import { ref } from "vue";

const props = defineProps<{
  facet: FacetField;
}>();

let facetModel = ref([]);
</script>
<template>
  <div>
    <h1 class="text-2xl">
      {{ koi[facet.field_name] }}
    </h1>
    <span>{{ facetModel }}</span>
    <div class="flex items-center gap-1" v-for="count in facet.counts">
      <input
        type="checkbox"
        :id="count.value"
        :value="count.value"
        @change="$emit('facetChange', facetModel)"
        v-model="facetModel"
      />
      &nbsp;
      <label
        :for="count.value"
        class="flex justify-between gap-1 w-full items-center"
        >{{ count.value }}
        <chip>
          {{ count.count }}
        </chip></label
      >
    </div>
  </div>
</template>
