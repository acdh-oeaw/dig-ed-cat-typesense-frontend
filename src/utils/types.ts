type pseudoBool = "0" | "0.5" | "1" | "not provided";

export interface Edition {
  "account-of-textual-variance": pseudoBool;
  "advanced-search": pseudoBool;
  api: pseudoBool;
  audience: string[];
  "begin-date": string;
  "budget-rough": pseudoBool;
  citation: pseudoBool;
  "creative-commons-license": pseudoBool;
  crowdsourcing: pseudoBool;
  "current-availability": pseudoBool;
  digital: pseudoBool;
  edition: pseudoBool;
  "edition-name": string;
  "end-date": string;
  feedback: pseudoBool;
  glossary: pseudoBool;
  "handle-pid": pseudoBool;
  "historical-period": string;
  id: string;
  "image-manipulation-brightness-rotation-etc": pseudoBool;
  images: pseudoBool;
  indices: pseudoBool;
  infrastructure: string[];
  "institution-s": string[];
  language: string[];
  "linked-open-data": pseudoBool;
  "links-to-ext-resources": pseudoBool;
  "manager-or-editor": string[];
  "mobile-friendly-application": pseudoBool;
  "ocr-or-keyed": string[];
  "open-source-open-access": string;
  "philological-statement": pseudoBool;
  "place-of-origin-of-source-material-s": string[];
  "print-facsimile-complementary-output": string;
  "print-friendly-view": string;
  "repository-of-source-material-s": string[];
  "ride-review": pseudoBool;
  "sahle-catalog": pseudoBool;
  scholarly: pseudoBool;
  "source-text-translation": string[];
  "sponsor-funding-body": string[];
  "string-matching": pseudoBool;
  "technological-statement": pseudoBool;
  "text-image-linking": pseudoBool;
  "time-century": "1475-1520";
  url: string;
  "value-of-witnesses": string;
  "website-language": string;
  "writing-support": string[];
  "xml-tei-available-to-download": pseudoBool;
  "xml-tei-transcription": pseudoBool;
  "zoom-images": pseudoBool;
}