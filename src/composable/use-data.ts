import { useDefaultClient, useAsyncData } from "#imports";
import { log } from "console";
import {
	type SearchParams,
	type SearchParamsWithPreset,
	type SearchResponse,
} from "typesense/lib/Typesense/Documents";
import { type Ref } from "vue";
import type { LocationQuery } from "vue-router";

export async function getDocument<CollectionEntry extends Record<string, any>>(id: string) {
	// not working on reload as of now
	/*
  const { data, error } = await useAsyncData("edition", () =>
    useDefaultClient()
      .collections<CollectionEntry>("dig-ed-cat")
      .documents(id)
      .retrieve()
  );
  if (error) console.error(error);
  else console.log(data);
  return data;
  */

	return useDefaultClient().collections<CollectionEntry>("dig-ed-cat").documents(id).retrieve();
}

export async function getDocuments<CollectionEntry extends Record<string, any>>(
	query: SearchParams | SearchParamsWithPreset,
	collection: string = "editions",
) {
	// const { data, error } = await useAsyncData(collection, () =>
	return useDefaultClient().collections<CollectionEntry>("dig-ed-cat").documents().search(query);
	// );

	// if (error) console.error(error);
	// return data;
}

export async function getFacets<CollectionEntry extends Record<string, any>>(
	facets: string,
	max: number = 500,
	query: LocationQuery = {},
	facetQuery: string = "",
) {
	return useDefaultClient()
		.collections<CollectionEntry>("dig-ed-cat")
		.documents()
		.search({
			q: "*",
			per_page: 0,
			query_by: "edition-name",
			...query,
			facet_by: facets,
			facet_query: `${facets}:${facetQuery}`,
			max_facet_values: max,
		});
}
