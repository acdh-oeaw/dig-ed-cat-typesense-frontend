<script lang="ts" setup>
import type { ComputedRef, Ref } from "#imports";
import Chip from "@/components/chip.vue";
import { getFacets } from "@/composable/use-data";
import { removeDuplicates, firstLetterUp } from "@/utils/helpers";
import { koi, pseudoBoolTranslation } from "@/utils/mapping-objects";
import {
	type FacetField,
	type Facet,
	type DeFactoFacetsKey,
	type Koi,
	type PseudoBool,
	pseudoBool,
} from "@/utils/types";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import { ref, onMounted, computed } from "vue";

const props = defineProps<{
	fieldName: DeFactoFacetsKey;
	facets: Facet[];
	selected?: string[];
}>();

let facetModel: Ref<string[] | undefined> = ref(props.selected);
let loading: Ref<boolean> = ref(true);

let scopeFacet: Ref<FacetField> = ref({
	field_name: props.fieldName,
	counts: [],
	stats: {},
});

const loadFacets: Function = async (max: number = 500, facetQuery: string = "") => {
	loading.value = true;
	const results = await getFacets(props.fieldName, max);

	scopeFacet.value = (results.facet_counts?.length ? results.facet_counts[0] : {}) as FacetField;

	loading.value = false;
};

onMounted(async () => {
	await loadFacets(10);
});

// add selected facet to model
const facetsWithSelected: ComputedRef<Facet[]> = computed(() => {
	let retArray = removeDuplicates(
		[...scopeFacet.value.counts, ...props.facets],
		"value",
	) as Facet[];
	retArray = retArray.sort((a: Facet) => {
		if (props.selected && props.selected.includes(a.value)) return -1;
		else return 1;
	});
	return retArray;
});
</script>
<template>
	<div class="flex flex-col">
		<h1 class="flex items-center justify-between text-2xl">
			{{ koi[fieldName as Koi] }}
		</h1>
		<div
			class="flex items-center gap-2 rounded p-1 transition hover:bg-slate-200 active:bg-slate-300"
			v-for="count in facetsWithSelected"
		>
			<input
				type="checkbox"
				class="h-5 w-5 cursor-pointer ml-1"
				:id="count.value"
				:value="count.value"
				@change="$emit('facetChange', facetModel)"
				v-model="facetModel"
			/>
			&nbsp;
			<label
				:for="count.value"
				class="flex w-full cursor-pointer items-center justify-between gap-1"
			>
				<span v-if="pseudoBool.includes(count.value as PseudoBool)">
					{{ firstLetterUp(pseudoBoolTranslation[count.value as PseudoBool]) }}
				</span>
				<span v-else>
					{{ count.value }}
				</span>
				<chip v-if="count.count">
					{{ count.count }}
				</chip>
			</label>
		</div>
		<div
			v-if="scopeFacet.stats?.total_values != scopeFacet.counts.length"
			class="flex cursor-pointer items-center justify-center gap-2 rounded p-1 transition hover:bg-slate-200 active:bg-slate-300"
			@click="loadFacets()"
		>
			<span>show all... ({{ scopeFacet.stats.total_values }} total)</span>
			<ChevronDownIcon class="h-5 w-5" />
		</div>
	</div>
</template>
