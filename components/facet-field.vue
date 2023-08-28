<script lang="ts" setup>
import { ChevronDownIcon } from "lucide-vue-next";
import { ref } from "vue";

import { getFacets } from "@/composables/use-data";
import { koi } from "@/utils/mapping-objects";
import { type FacetField } from "@/utils/types";

const props = defineProps<{
	facet: FacetField;
	selected: Array<string>;
}>();

let facetModel = ref(props.selected);
let loading = ref(false);

let scopeFacet = ref(props.facet);

const loadFacets = async () => {
	loading.value = true;
	const results = await getFacets(scopeFacet.value.field_name);

	scopeFacet.value = results.value?.facet_counts?.length ? results.value.facet_counts[0] : [];
	loading.value = false;
};
</script>

<template>
	<div class="flex flex-col">
		<h1 class="flex items-center justify-between text-2xl">
			{{ koi[scopeFacet.field_name] }}
		</h1>
		<div
			v-for="count in scopeFacet.counts"
			class="rounded flex items-center gap-2 p-1 transition hover:bg-neutral-200 active:bg-neutral-300"
		>
			<input
				:id="count.value"
				v-model="facetModel"
				type="checkbox"
				class="ml-1 h-5 w-5 cursor-pointer"
				:value="count.value"
				@change="$emit('facetChange', facetModel)"
			/>
			&nbsp;
			<label
				:for="count.value"
				class="flex w-full cursor-pointer items-center justify-between gap-1"
			>
				{{ count.value }}
				<chip>
					{{ count.count }}
				</chip>
			</label>
		</div>
		<div
			v-if="scopeFacet.stats.total_values != scopeFacet.counts.length"
			class="rounded flex cursor-pointer items-center justify-center gap-2 p-1 transition hover:bg-neutral-200 active:bg-neutral-300"
			@click="loadFacets"
		>
			<span>show all... ({{ scopeFacet.stats.total_values }} total)</span>
			<chevron-down-icon class="h-5 w-5" />
		</div>
	</div>
</template>
