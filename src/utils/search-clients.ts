import Typesense from "typesense";

const client = new Typesense.Client({
	nodes: [
		{
			host: "typesense.acdh-dev.oeaw.ac.at",
			port: 443,
			protocol: "https",
		},
	],
	apiKey: "Lm0v6mpJrr5gOIWdJa8tpAEylk0B7rMt", // read & retrieve only
	connectionTimeoutSeconds: 3,
});

export const network = async () => {
	return await fetch("https://csae8092.github.io/dig-ed-cat-indexer/network.json");
};

export function useDefaultClient() {
	return client;
}
