import { useFetch } from "#imports";

export async function getImprint() {
  const { data, error } = await useFetch(
    "https://shared.acdh.oeaw.ac.at/acdh-common-assets/api/imprint.php",
    {
      params: {
        serviceID: 9945, // stolen as of now, will be replaced by official redmine ID
        outputLang: "en",
      },
    }
  );

  if (error) console.error(error);
  return data;
}
