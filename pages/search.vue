<script lang="ts" setup>
import { ChevronLeftIcon, ChevronRightIcon, LinkIcon } from "lucide-vue-next";
import { type SearchParams } from "typesense/lib/Typesense/Documents";

import { type Facets } from "@/types/search.types";

definePageMeta({
	title: "Search",
});

const router = useRouter();
const route = useRoute();

const searchTerm = computed(() => {
	return String(route.query.q ?? "");
});

const page = computed(() => {
	const page = Number(route.query.page ?? 1);
	if (page <= 0) return 1;
	return page;
});

const limit = 25;

const facets = computed(() => {
	const facets: Facets = {
		"historical-period": ["Middle Ages"],
		language: [],
		"time-century": [],
		audience: [],
		"begin-date": [],
		"end-date": [],
		"institution-s.institution-name": [],
	};

	return facets;
});

function onChangeSearchTerm(event: Event) {
	const element = event.currentTarget as HTMLInputElement;
	const q = element.value;
	void router.push({ query: { q } });
}

const { searchClient } = useSearchClient();

const searchParams = computed(() => {
	const searchParams: SearchParams = {
		q: searchTerm.value,
		query_by: "edition-name",
		per_page: limit,
		page: page.value,
		facet_by: Object.keys(facets.value).join(","),
		filter_by: Object.entries(facets.value)
			.map(([key, value]) => {
				return value.map((v: string) => `${key}:="${v}"`).join("&&");
			})
			.filter((value) => value !== "")
			.join(" && "),
		max_facet_values: 10,
	};

	return searchParams;
});

const searchQuery = await useAsyncData(
	"search",
	() => {
		return searchClient.documents().search(searchParams.value);
	},
	{ watch: [searchParams] },
);

const facetsResults = computed(() => {
	return searchQuery.data.value?.facet_counts ?? [];
});

const searchResults = computed(() => {
	return searchQuery.data.value?.hits ?? [];
});

const pagination = computed(() => {
	return {
		prev: {
			isDisabled: page.value <= 1,
			href: { query: { ...route.query, page: page.value - 1 } },
		},
		next: {
			isDisabled: page.value * limit >= Number(searchQuery.data.value?.found),
			href: { query: { ...route.query, page: page.value + 1 } },
		},
	};
});
</script>

<template>
	<MainContent class="grid container content-start gap-12 py-12 container-width-xl">
		<section>
			<form @submit.prevent>
				<label>
					<span class="sr-only">Search editions by name</span>
					<input
						autocomplete="off"
						class="rounded w-full border p-6 shadow"
						name="q"
						placeholder="Search editions by name..."
						type="search"
						:value="searchTerm"
						@input="onChangeSearchTerm"
					/>
				</label>
			</form>
		</section>

		<section v-if="facetsResults.length > 0">
			<aside>
				<div v-for="facetResult of facetsResults" :key="facetResult.field_name" role="group">
					<!-- TODO: -->
					<pre>{{ facets[facetResult.field_name as keyof Facets] }}</pre>
					<pre>{{ facetResult }}</pre>
				</div>
			</aside>
		</section>

		<section
			v-if="searchResults.length > 0"
			:class="['grid relative gap-12 transition', searchQuery.pending.value && 'text-opacity-50']"
		>
			<nav aria-label="Pagination" class="flex justify-between gap-4">
				<PaginationLink
					:disabled="pagination.prev.isDisabled"
					:href="pagination.prev.href"
					rel="prev"
				>
					<ChevronLeftIcon class="h-5 w-5" />
					<span>Previous page</span>
				</PaginationLink>
				<span v-if="searchQuery.data.value?.found != null" class="flex gap-1">
					<span>Page {{ page }} of {{ Math.ceil(searchQuery.data.value.found / limit) }}</span>
					<span>({{ searchQuery.data.value?.found }} results)</span>
				</span>
				<PaginationLink
					:disabled="pagination.next.isDisabled"
					:href="pagination.next.href"
					rel="next"
				>
					<span>Next page</span>
					<ChevronRightIcon class="h-5 w-5" />
				</PaginationLink>
			</nav>

			<table>
				<caption class="sr-only">Search results</caption>

				<thead>
					<tr>
						<th>Name</th>
						<th>Institution(s)</th>
						<th>URL</th>
						<th>Time</th>
					</tr>
				</thead>

				<tbody>
					<tr v-for="searchResult of searchResults" :key="searchResult.document.id">
						<td>
							<NuxtLink :href="`/editions/${searchResult.document.id}`">
								<span
									v-if="searchResult.highlight['edition-name']?.snippet != null"
									v-html="searchResult.highlight['edition-name'].snippet"
								/>
								<span v-else>{{ searchResult.document["edition-name"] }}</span>
							</NuxtLink>
						</td>
						<td>
							<span>
								{{
									searchResult.document["institution-s"]
										.map((institution) => {
											return institution["institution-name"];
										})
										.join(", ")
								}}
							</span>
						</td>
						<td>
							<span>
								<a :href="searchResult.document.url">
									<!-- TODO: descriptive label -->
									<span class="sr-only">External URL</span>
									<LinkIcon class="h-4 w-4" />
								</a>
							</span>
						</td>
						<td>
							<span>{{ searchResult.document["time-century"] }}</span>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	</MainContent>
</template>

<style>
mark {
	margin: -1px;
	padding: 1px;
	border-radius: 2px;
	background-color: hsl(var(--color-mark, var(--color-neutral-200)));
}
</style>
