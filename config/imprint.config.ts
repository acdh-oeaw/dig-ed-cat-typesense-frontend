import { createUrl, createUrlSearchParams } from "@acdh-oeaw/lib";

const baseUrl = "https://shared.acdh.oeaw.ac.at";
const pathname = "/acdh-common-assets/api/imprint.php";

export function createImprintUrl(locale: string, redmineId: string): URL {
	return createUrl({
		baseUrl,
		pathname,
		searchParams: createUrlSearchParams({
			outputLang: locale,
			serviceID: redmineId,
		}),
	});
}
