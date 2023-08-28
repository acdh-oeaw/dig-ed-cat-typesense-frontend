import { type SearchParams, type SearchParamsWithPreset } from "typesense/lib/Typesense/Documents";

export async function getDocument(id: string) {
	return useSearchClient().searchClient.documents(id).retrieve();
}

export async function getDocuments(query: SearchParams | SearchParamsWithPreset) {
	return useSearchClient().searchClient.documents().search(query);
}

export async function getFacets(facets: string, max = 500) {
	const { data } = await useAsyncData("facets", () =>
		useSearchClient().searchClient.documents().search({
			q: "*",
			query_by: "edition-name",
			per_page: 0,
			facet_by: facets,
			max_facet_values: max,
		}),
	);
	return data;
}
