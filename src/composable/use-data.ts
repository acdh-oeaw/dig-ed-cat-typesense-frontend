import { useDefaultClient, useAsyncData } from "#imports";
import { log } from "console";
import {
  type SearchParams,
  type SearchParamsWithPreset,
  type SearchResponse,
} from "typesense/lib/Typesense/Documents";
import { type Ref } from "vue";

export async function getDocument<CollectionEntry extends Record<string, any>>(
  id: string
) {
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

  return useDefaultClient()
    .collections<CollectionEntry>("dig-ed-cat")
    .documents(id)
    .retrieve();
}

export async function getDocuments<CollectionEntry extends Record<string, any>>(
  query: SearchParams | SearchParamsWithPreset,
  collection: string = "editions"
) {
  const { data, error } = await useAsyncData(collection, () =>
    useDefaultClient()
      .collections<CollectionEntry>("dig-ed-cat")
      .documents()
      .search(query)
  );

  if (error) console.error(error);
  return data;
}

export async function getFacets<CollectionEntry extends Record<string, any>>(
  facets: string,
  max: number = 500
) {
  const { data, error } = await useAsyncData("facets", () =>
    useDefaultClient()
      .collections<CollectionEntry>("dig-ed-cat")
      .documents()
      .search({
        q: "*",
        query_by: "edition-name",
        per_page: 0,
        facet_by: facets,
        max_facet_values: max,
      })
  );

  if (error) console.error(error);
  else console.log(data);
  return data;
}
