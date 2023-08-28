import { Client } from "typesense";

import { type Edition } from "@/types/search.types";

export function useSearchClient() {
	const env = useRuntimeConfig();

	const _searchClient = new Client({
		apiKey: env.public.NUXT_PUBLIC_TYPESENSE_API_KEY,
		connectionTimeoutSeconds: 3,
		nodes: [
			{
				host: env.public.NUXT_PUBLIC_TYPESENSE_HOST,
				port: Number(env.public.NUXT_PUBLIC_TYPESENSE_PORT),
				protocol: env.public.NUXT_PUBLIC_TYPESENSE_PROTOCOL,
			},
		],
	});

	const searchClient = _searchClient.collections<Edition>(
		env.public.NUXT_PUBLIC_TYPESENSE_COLLECTION,
	);

	return { searchClient };
}
