import { koi } from "@/utils/mapping-objects";

export const pseudoBool = ["0", "0.5", "1", "1.5", "2", "not provided"] as const;
export type PseudoBool = (typeof pseudoBool)[number];

export interface Edition {
	"account-of-textual-variance": PseudoBool;
	"advanced-search": PseudoBool;
	api: PseudoBool;
	audience: string[];
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
	infrastructure: string[];
	"institution-s": Institution[];
	"institution-s.institution-name": string;
	language: string[];
	"linked-open-data": PseudoBool;
	"links-to-ext-resources": PseudoBool;
	"manager-or-editor": string[];
	"mobile-friendly-application": PseudoBool;
	"ocr-or-keyed": string[];
	"open-source-open-access": string;
	"philological-statement": PseudoBool;
	"place-of-origin-of-source-material-s": string[];
	"print-facsimile-complementary-output": string;
	"print-friendly-view": string;
	"repository-of-source-material-s": string[];
	"ride-review": PseudoBool;
	"sahle-catalog": PseudoBool;
	scholarly: PseudoBool;
	"source-text-translation": string[];
	"sponsor-funding-body": string[];
	"string-matching": PseudoBool;
	"technological-statement": PseudoBool;
	"text-image-linking": PseudoBool;
	"time-century": "1475-1520";
	url: string;
	"value-of-witnesses": string;
	"website-language": string;
	"writing-support": string[];
	"xml-tei-available-to-download": PseudoBool;
	"xml-tei-transcription": PseudoBool;
	"zoom-images": PseudoBool;
}
[koi];

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

// SearchResponseFacetCountSchema<deFactoFacets> would be the right interface here in theory, but typesemse is responding with a different stat object than expected, so i had to wrtie new interfaces
export interface FacetField {
	field_name: DeFactoFacetsKey;
	counts: Array<Facet>;
	stats: FacetStats;
}

// the only expected key here is total_values
export interface FacetStats {
	total_values?: number;
	avg?: number;
	max?: number;
	min?: number;
	sum?: number;
}

export interface coord {
	lat: string;
	long: string;
	name?: string;
}

export interface DeFactoFacets {
	"account-of-textual-variance": string[];
	"advanced-search": string[];
	api: string[];
	audience: string[];
	"begin-date": string[];
	citation: string[];
	"creative-commons-license": string[];
	crowdsourcing: string[];
	"current-availability": string[];
	digital: string[];
	edition: string[];
	"end-date": string[];
	feedback: string[];
	glossary: string[];
	"historical-period": string[];
	"image-manipulation-brightness-rotation-etc": string[];
	images: string[];
	indices: string[];
	infrastructure: string[];
	"institution-s": string[];
	"institution-s.institution-name": string[];
	language: string[];
	"linked-open-data": string[];
	"links-to-ext-resources": string[];
	"manager-or-editor": string[];
	"mobile-friendly-application": string[];
	"ocr-or-keyed": string[];
	"open-source-open-access": string[];
	"philological-statement": string[];
	"place-of-origin-of-source-material-s": string[];
	"print-facsimile-complementary-output": string[];
	"print-friendly-view": string[];
	"repository-of-source-material-s": string[];
	"sahle-catalog": string[];
	scholarly: string[];
	"source-text-translation": string[];
	"sponsor-funding-body": string[];
	"string-matching": string[];
	"technological-statement": string[];
	"text-image-linking": string[];
	"time-century": string[];
	"value-of-witnesses": string[];
	"website-language": string[];
	"writing-support": string[];
	"xml-tei-available-to-download": string[];
	"xml-tei-transcription": string[];
	"zoom-images": string[];
}

export type DeFactoFacetsKey = keyof DeFactoFacets;
export type EditionKey = keyof Edition;
export type Koi = keyof typeof koi;

export interface Network {
	attributes: {
		name: string;
		description: string;
	};
	options: {
		type: string;
		multi: boolean;
		allowSelfLoops: boolean;
	};
	nodes: Node[];
	edges: Edge[];
}

export interface Node {
	key: string;
	attributes: {
		label: string;
		type: "Edition" | "Institution";
	};
}
export interface Edge {
	key: string;
	source: Node["key"];
	target: Node["key"];
	attributes?: {
		type: string;
	};
}
