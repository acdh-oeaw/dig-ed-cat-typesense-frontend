import { useDefaultClient, network } from "#imports";
import type { SearchParams, SearchParamsWithPreset } from "typesense/lib/Typesense/Documents";
import type { Node } from "@/utils/types";
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

export async function getNetwork(type?: string[], label?: string) {
	const response = await network();
	const json = await response.json();

	if (!label && !type) return json;
	json.nodes = json.nodes.filter(
		(node: Node) =>
			(type || ["Edition", "Institution"]).includes(node.attributes?.type) &&
			node.attributes?.label.includes(label),
	);

	return json;
}
