<script lang="ts" setup>
import type { DeFactoFacets, Edition, FacetField } from '@/utils/types';
import type { SearchResponse } from 'typesense/lib/Typesense/Documents';
import { type RouteLocationNormalized, useRoute } from 'vue-router';
import { ChevronUpIcon } from '@heroicons/vue/24/outline';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const props = defineProps<{
  loading: boolean;
  results: SearchResponse<Edition> | null;
  facetValues: DeFactoFacets;
}>();

const route: RouteLocationNormalized = useRoute();

const facetObjectToTypesenseQuery: Function = (
	facetObject: DeFactoFacets,
	encode: boolean = false,
) => {
	const retArray: string[] = [];
	Object.entries(facetObject).forEach(([key, value]) => {
		if (value && value.length != 0) {
			retArray.push(key + ":=[`" + value.join("`,`") + "`]");
		}
	});
	const query: string = retArray.join("&&");

	return encode ? encodeURIComponent(query).replace("=", "") : query;
};

</script>
<template>
  <disclosure
				as="div"
				v-slot="{ open }"
				class="flex flex-col md:pt-10"
				default-open
			>
				<disclosure-button
					class="flex items-center justify-end gap-2 rounded align-top text-xl transition hover:bg-slate-200 active:bg-slate-300 lg:justify-center"
				>
					{{ open ? "Hide" : "Show" }} Filters...
					<ChevronUpIcon class="h-5 w-5 rotate-180 ui-open:rotate-0" />
				</disclosure-button>
				<disclosure-panel as="div" class="flex flex-col gap-2 divide-y">
					<facet-field
						class="pt-2"
						v-if="!loading"
						v-for="facet in (results?.facet_counts as FacetField[]).sort(
							(a, b) => facetValues[b.field_name].length - facetValues[a.field_name].length,
						)"
						:field-name="facet.field_name"
						:facets="facet.counts"
						:selected="facetValues[facet.field_name]"
						@facetChange="
							facetValues[facet.field_name] = $event;
							$router.push({
								query: {
									...route.query,
									facets: facetObjectToTypesenseQuery(facetValues, true),
									page: 1,
								},
							});
						"
					/>
				</disclosure-panel>
			</disclosure>
</template>