import { useDefaultClient, useAsyncData } from "#imports";
import { type Ref } from "vue";
import {
  type SearchParams,
  type SearchParamsWithPreset,
  type SearchResponse,
} from "typesense/lib/Typesense/Documents";

export async function getDocument(id: string) {
  const { data, error } = await useAsyncData("editions", () =>
    useDefaultClient().collections("dig-ed-cat").documents(id).retrieve()
  );
  if (error) console.error(error);

  return data;
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
