<script lang="ts" setup>
import { useRoute, ref, type Ref, watch, computed, type ComputedRef } from "#imports";
import centered from "@/components/centered.vue";
import externalLink from "@/components/external-link.vue";
import internalLink from "@/components/internal-link.vue";
import { getDocuments } from "@/composable/use-data";
import type {
	Edition,
	deFactoFacets,
	deFactoFacetsKey,
	Institution,
	FacetField,
} from "@/utils/types";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon, ArrowPathIcon } from "@heroicons/vue/24/solid";
import type { SearchResponse } from "typesense/lib/Typesense/Documents";
import type { RouteLocationNormalized, LocationQuery } from "vue-router";

const route: RouteLocationNormalized = useRoute();

let input: string = String(route.query.q || "");

const results: Ref<SearchResponse<Edition> | null> = ref(null);
let loading: Ref<boolean> = ref(true);

let facetValues: Ref<deFactoFacets> = ref({
	"historical-period": [],
	language: [],
	"time-century": [],
	audience: [],
	"begin-date": [],
	"end-date": [],
	"institution-s.institution-name": [],
});

const facetObjectToTypesenseQuery: Function = (
	facetObject: deFactoFacets,
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

const typesenseQueryToFacetObject = (typeQuery: string, decode: boolean = false) => {
	const query: string = decode ? decodeURIComponent(typeQuery) : typeQuery;
	const facetArray: string[] = query.split("&&");
	const retObject: deFactoFacets = { ...facetValues.value };
	facetArray.forEach((facetString: string) => {
		const facetSplit = facetString.split(":=") as deFactoFacetsKey[];
		retObject[facetSplit[0] as deFactoFacetsKey] = JSON.parse(
			String(facetSplit[1])?.replaceAll("`", '"'),
		);
	});
	return retObject;
};

const getSortString = (col: string) => {
	switch (route.query.sort_by) {
		case `${col}:asc`:
			return `${col}:desc`;
		case `${col}:desc`:
			return "";
		default:
			return `${col}:asc`;
	}
};

if (route.query.facets) {
	facetValues.value = typesenseQueryToFacetObject(String(route.query.facets), true);
}

const search = async (
	terms: string = "",
	page: number = 1,
	limit: number = 25,
	facets: string = "",
	sortBy: string = "",
) => {
	loading.value = true;

	const response = await getDocuments<Edition>({
		q: terms,
		query_by: "edition-name",
		per_page: limit,
		page,
		facet_by: Object.keys(facetValues.value).join(","),
		filter_by: facets,
		sort_by: sortBy,
		// max_facet_values: 500,
	});

	results.value = response;
	loading.value = false;
};

const pageNum: ComputedRef<number> = computed(() => Number(route.query.page) || 1);
const limitNum: ComputedRef<number> = computed(() => Number(route.query.limit) || 25);

watch(
	route,
	(newRoute) => {
		const query: LocationQuery = newRoute.query;

		search(
			String(query.q || ""),
			pageNum.value || 1,
			limitNum.value || 25,
			decodeURIComponent(String(query.facets || "")),
			String(query.sort_by || ""),
		);
	},
	{
		immediate: true,
	},
);
</script>
<template>
	<div>
		<Head>
			<Title>Browse Editions</Title>
		</Head>
		<div class="mx-auto flex max-w-container items-center px-2">
			<input
				type="search"
				v-model="input"
				@input="
					$router.replace({
						query: {
							...route.query,
							q: input,
							page: 1,
						},
					})
				"
				class="mx-auto my-4 h-16 min-w-full rounded border p-4 shadow"
				placeholder="Search..."
			/>
		</div>
		<div>
			<div
				class="grid min-w-full gap-4 divide-y p-4 lg:grid-cols-[1fr_3fr_1fr] lg:gap-32 lg:divide-y-0 lg:px-16"
			>
				<disclosure as="div" v-slot="{ open }" class="flex flex-col pt-10" defaultOpen>
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
				<centered class="-z-10" v-if="loading || !results?.found">
					<arrow-path-icon v-if="loading" class="h-5 w-5 animate-spin" />
					<span class="text-gray-400 italic" v-else>Nothing found.</span>
				</centered>
				<div v-else class="min-w-full">
					<div class="my-2 flex items-center justify-between">
						<button
							class="rounded border p-4 transition"
							:class="
								pageNum <= 1
									? 'cursor-not-allowed text-gray-400'
									: 'cursor-pointer hover:bg-slate-200 active:bg-slate-300'
							"
							:disabled="pageNum <= 1"
							@click="
								$router.push({
									query: {
										...route.query,
										page: pageNum - 1,
									},
								})
							"
						>
							<span class="sr-only">Previous Page</span>
							<chevron-up-icon class="h-4 w-4 -rotate-90" />
						</button>
						<span>
							showing {{ (pageNum - 1) * limitNum + 1 }} -
							{{ Math.min(results?.found || Infinity, pageNum * limitNum) }} out of
							{{ results?.found }}
						</span>
						<button
							class="rounded border p-4 transition"
							:class="
								pageNum * limitNum >= Number(results?.found)
									? 'cursor-not-allowed text-gray-400'
									: 'cursor-pointer hover:bg-slate-200 active:bg-slate-300'
							"
							:disabled="pageNum * limitNum >= Number(results?.found)"
							@click="
								$router.push({
									query: {
										...route.query,
										page: pageNum + 1,
									},
								})
							"
						>
							<span class="sr-only">Next Page</span>
							<chevron-up-icon class="h-4 w-4 rotate-90" />
						</button>
					</div>
					<div
						class="grid min-w-full grid-cols-[5fr_3fr_auto_auto] gap-x-8 gap-y-1"
						v-if="!loading && results?.found"
					>
						<div>
							<nuxt-link
								class="flex items-center gap-2 hover:bg-slate-200 p-1 -m-1 rounded transition active:bg-slate-300"
								:to="{
									query: {
										...route.query,
										page: 1,
										sort_by: getSortString('edition-name'),
									},
								}"
							>
								Name
								<ChevronUpIcon
									:class="{
										'opacity-20': !route.query.sort_by?.includes('edition-name'),
										'rotate-180': !route.query.sort_by?.includes('desc'),
									}"
									class="w-5 h-5"
								/>
								<span class="sr-only">Click to sort by Name</span>
							</nuxt-link>
						</div>
						<div>Institution(s)</div>
						<div>url</div>
						<div class="text-right">Time</div>
						<template v-for="hit in results?.hits">
							<div class="col-span-4 border-t" />
							<div class="-ml-2 self-center">
								<internal-link :href="'/editions/' + hit.document.id">
									<span
										v-if="hit.highlight['edition-name']?.snippet"
										v-html="hit.highlight['edition-name']?.snippet"
									/>
									<span v-else>
										{{ hit.document["edition-name"] }}
									</span>
								</internal-link>
							</div>
							<div class="self-center">
								{{
									(hit.document["institution-s"] as Institution[])
										.map((inst: Institution) => inst["institution-name"])
										.join(", ")
								}}
							</div>
							<div class="flex items-center">
								<external-link :href="hit.document.url" icon-only />
							</div>
							<div class="self-center text-right">
								{{ hit.document["time-century"] }}
							</div>
						</template>
						<div
							v-if="Math.min(results?.found || Infinity, pageNum * limitNum) === results?.found"
							class="col-span-4 border-t italic text-gray-300 text-center"
						>
							You've reached the end.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
mark {
	margin: -1px;
	padding: 1px;
	border-radius: 2px;
	background-color: #cbd5e1;
}
</style>
