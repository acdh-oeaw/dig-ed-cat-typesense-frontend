import { useFetch } from "#imports";

export async function getImprint() {
  const { data, error } = await useFetch("https://imprint.acdh.oeaw.ac.at/21958", { params: { locale: "en" }});

  if (error) console.error(error);
  return data;
}
