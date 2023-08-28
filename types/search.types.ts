export const pseudoBoolean = ["0", "0.5", "1", "1.5", "2", "not provided"] as const;

export type PseudoBoolean = (typeof pseudoBoolean)[number];

export interface Edition {
	"account-of-textual-variance": string;
	"advanced-search": string;
	api: string;
	audience: Array<string>;
	"begin-date": string;
	"budget-rough": string;
	citation: string;
	"creative-commons-license": string;
	crowdsourcing: string;
	"current-availability": string;
	digital: string;
	edition: string;
	"edition-name": string;
	"end-date": string;
	feedback: string;
	glossary: string;
	"handle-pid": string;
	"historical-period": string;
	id: string;
	"image-manipulation-brightness-rotation-etc": string;
	images: string;
	indices: string;
	infrastructure: Array<string>;
	"institution-s": Array<Institution>;
	language: Array<string>;
	"linked-open-data": string;
	"links-to-ext-resources": string;
	"manager-or-editor": Array<string>;
	"mobile-friendly-application": string;
	"ocr-or-keyed": Array<string>;
	"open-source-open-access": string;
	"philological-statement": string;
	"place-of-origin-of-source-material-s": Array<string>;
	"print-facsimile-complementary-output": string;
	"print-friendly-view": string;
	"repository-of-source-material-s": Array<string>;
	"ride-review": string;
	"sahle-catalog": string;
	scholarly: string;
	"source-text-translation": string;
	"sponsor-funding-body": Array<string>;
	"string-matching": string;
	"technological-statement": string;
	"text-image-linking": string;
	"time-century": string;
	url: string;
	"value-of-witnesses": string;
	"website-language": Array<string>;
	"writing-support": Array<string>;
	"xml-tei-available-to-download": string;
	"xml-tei-transcription": string;
	"zoom-images": string;
}

export interface Institution {
	id: string;
	"institution-gnd": string;
	"institution-lat": string;
	"institution-lng": string;
	"institution-name": string;
	"institution-website": string;
	"located-at": string;
	"location-geonames-id": string;
	"location-lat": string;
	"location-lng": string;
	"part-of": string;
	"type-of-location": string;
}

export interface Facets {
	"historical-period": Array<string>;
	language: Array<string>;
	"time-century": Array<string>;
	audience: Array<string>;
	"begin-date": Array<string>;
	"end-date": Array<string>;
	"institution-s.institution-name": Array<string>;
}
