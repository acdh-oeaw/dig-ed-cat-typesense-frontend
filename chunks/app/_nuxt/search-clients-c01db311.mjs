import Typesense from 'typesense';

const client = new Typesense.Client({
  nodes: [
    {
      host: "typesense.acdh-dev.oeaw.ac.at",
      port: 443,
      protocol: "https"
    }
  ],
  apiKey: "Lm0v6mpJrr5gOIWdJa8tpAEylk0B7rMt",
  // read & retrieve only
  connectionTimeoutSeconds: 2
});
function useDefaultClient() {
  return client;
}

export { useDefaultClient as u };
//# sourceMappingURL=search-clients-c01db311.mjs.map
