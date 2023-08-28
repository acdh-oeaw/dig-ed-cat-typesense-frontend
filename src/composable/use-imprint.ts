import { useFetch } from "#imports";

export async function getImprint() {
  const { data, error } = await useFetch(
    "https://shared.acdh.oeaw.ac.at/acdh-common-assets/api/imprint.php",
    {
      params: {
        serviceID: 21958,
        outputLang: "en",
      },
    }
  );

  if (error) console.error(error);
  return data;
}
