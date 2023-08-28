<script lang="ts" setup>
import { type deFactoFacets } from "@/utils/types";

const facetValues = ref<deFactoFacets>({
	"historical-period": [],
	language: [],
	"time-century": [],
	audience: [],
	"begin-date": [],
	"end-date": [],
	"institution-s.institution-name": [],
});

function facetObjectToQuery(facetObject: object) {
	const retArray: Array<string> = [];
	Object.entries(facetObject).forEach(([key, value]) => {
		if (value && value.length !== 0) {
			retArray.push(value.map((x: string) => `${key}:="${x}"`).join("&&"));
		}
	});
	const query = retArray.join(" && ");
	return query;
}

// async function search() {
// 	loading.value = true;
// 	console.log("input", input);

// 	const response = await getDocuments<Edition>({
// 		q: input,
// 		query_by: "edition-name",
// 		per_page: 25,
// 		page,
// 		facet_by: Object.keys(facetValues.value).join(","),
// 		filter_by: facetObjectToQuery(facetValues.value),
// 		// max_facet_values: 500,
// 	});

// 	results.value = response;
// 	console.log(results.value);

// 	loading.value = false;
// }

// void search();
</script>

<template>
	<div />
	<!-- <FacetField
		v-for="facet in results?.facet_counts?.sort(
			(a, b) => facetValues[b.field_name].length - facetValues[a.field_name].length,
		)"
		class="pt-2"
		:facet="facet"
		:selected="facetValues[facet.field_name]"
		@facetChange="
			facetValues[facet.field_name] = $event;
		"
	/> -->
</template>
