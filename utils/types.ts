export const pseudoBool = ["0", "0.5", "1", "1.5", "2", "not provided"] as const;
export type PseudoBool = (typeof pseudoBool)[number];

export interface Edition {
	"account-of-textual-variance": PseudoBool;
	"advanced-search": PseudoBool;
	api: PseudoBool;
	audience: Array<string>;
	"begin-date": string;
	"budget-rough": PseudoBool;
	citation: PseudoBool;
	"creative-commons-license": PseudoBool;
	crowdsourcing: PseudoBool;
	"current-availability": PseudoBool;
	digital: PseudoBool;
	edition: PseudoBool;
	"edition-name": string;
	"end-date": string;
	feedback: PseudoBool;
	glossary: PseudoBool;
	"handle-pid": PseudoBool;
	"historical-period": string;
	id: string;
	"image-manipulation-brightness-rotation-etc": PseudoBool;
	images: PseudoBool;
	indices: PseudoBool;
	infrastructure: Array<string>;
	"institution-s": Array<object>;
	language: Array<string>;
	"linked-open-data": PseudoBool;
	"links-to-ext-resources": PseudoBool;
	"manager-or-editor": Array<string>;
	"mobile-friendly-application": PseudoBool;
	"ocr-or-keyed": Array<string>;
	"open-source-open-access": string;
	"philological-statement": PseudoBool;
	"place-of-origin-of-source-material-s": Array<string>;
	"print-facsimile-complementary-output": string;
	"print-friendly-view": string;
	"repository-of-source-material-s": Array<string>;
	"ride-review": PseudoBool;
	"sahle-catalog": PseudoBool;
	scholarly: PseudoBool;
	"source-text-translation": Array<string>;
	"sponsor-funding-body": Array<string>;
	"string-matching": PseudoBool;
	"technological-statement": PseudoBool;
	"text-image-linking": PseudoBool;
	"time-century": "1475-1520";
	url: string;
	"value-of-witnesses": string;
	"website-language": string;
	"writing-support": Array<string>;
	"xml-tei-available-to-download": PseudoBool;
	"xml-tei-transcription": PseudoBool;
	"zoom-images": PseudoBool;
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

export interface Facet {
	count: number;
	highlighted: string;
	value: string;
}
export interface FacetStats {
	total_values?: number;
	avg?: number;
	max?: number;
	min?: number;
	sum?: number;
}

export interface FacetField {
	field_name: string;
	counts: Array<Facet>;
	stats: FacetStats;
}

export interface coord {
	lat: string;
	long: string;
	name?: string;
}

export interface deFactoFacets {
	"historical-period": Array<string>;
	language: Array<string>;
	"time-century": Array<string>;
	audience: Array<string>;
	"begin-date": Array<string>;
	"end-date": Array<string>;
	"institution-s.institution-name": Array<string>;
}
