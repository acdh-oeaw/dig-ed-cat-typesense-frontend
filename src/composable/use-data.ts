import { useDefaultClient, useAsyncData } from "#imports";
import { type Ref } from "vue";
import {
  type SearchParams,
  type SearchParamsWithPreset,
  type SearchResponse,
} from "typesense/lib/Typesense/Documents";

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
  query: SearchParams | SearchParamsWithPreset
) {
  const { data, error } = await useAsyncData("editions", () =>
    useDefaultClient()
      .collections<CollectionEntry>("dig-ed-cat")
      .documents()
      .search(query)
  );
  if (error) console.error(error);

  return data;
}
