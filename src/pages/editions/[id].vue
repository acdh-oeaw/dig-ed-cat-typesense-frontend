<script lang="ts" setup>
import { ref, useRoute } from "#imports";
import { ArrowPathIcon, LinkIcon } from "@heroicons/vue/24/solid";
import { getDocument } from "@/composable/use-data";
import { pseudoBool, type PseudoBool } from "@/utils/types";
import institutionCard from "@/components/institution-card.vue";

const koi = {
  // keys of interest
  url: "URL",
  "historical-period": "Historical Period",
  scholarly: "Scholarly",
  digital: "Digital",
  edition: "Edition",
  "writing-support": "Writing Support",
  language: "Language",
  "begin-date": "Begin Date",
  "end-date": "End Date",
  "manager-or-editor": "Manager",
  "repository-of-source-material-s": "Repository of Source Material(s)",
  audience: "Audience",
  "philological-statement": "Philological Statement",
  "account-of-textual-variance": "Account of textual variance",
  "value-of-witnesses": "Value of witnesses",
  "xml-tei-transcription": "XML-TEI transcription",
  "xml-tei-available-to-download": "XML(-TEI) transcription to download",
  images: "Images",
  "zoom-images": "Zoom images",
  "image-manipulation-brightness-rotation-etc": "Image manipulation",
  "text-image-linking": "Text-image linking",
  "website-language": "Website language",
  glossary: "Glossary",
  indices: "Indices",
  "string-matching": "String matching search",
  "advanced-search": "Advanced Search",
  "creative-commons-license": "Creative Commons License",
  "open-source-open-access": "Open Source/Open Access",
  "ocr-or-keyed": "OCR or keyed",
  "print-friendly-view": "Print-frienfly view",
  "budget-rough": "Budget",
  infrastructure: "Infrastructure",
  api: "API",
  "ride-review": "RIDE review",
  "sahle-catalog": "Sahle Catalog",
  "handle-pid": "handle",
};

const pseudoBoolTranslation = {
  0: "no",
  "0.5": "partial",
  1: "yes",
  "1.5":
    "Open Access and Open Source. Part of the data underlying the digital edition is freely available for access and reuse.",
  "2": "yes and yes",
  "not provided": "unknown",
};

const route = useRoute();
const id = route.params.id;

const loading = ref(true);
const results = ref();

getDocument(String(id)).then((data) => {
  console.log(data);
  results.value = data;

  loading.value = false;
});
</script>
<template>
  <centered class="-z-10" v-if="loading">
    <arrow-path-icon class="h-5 w-5 animate-spin" />
  </centered>
  <div v-else class="flex flex-col">
    <div>
      <h1 class="text-center text-5xl mt-10 mb-10">
        {{ results["edition-name"] }}
      </h1>
    </div>
    <div class="flex mx-auto">
      <div class="grid grid-cols-2 max-w-container">
        <template v-for="[key, val] in Object.entries(koi)">
          <span class="font-semibold p-1 border-b">
            {{ val }}
          </span>
          <span v-if="pseudoBool.includes(results[key])" class="p-1 border-b">
            {{ pseudoBoolTranslation[results[key] as PseudoBool] }}
          </span>
          <span
            v-else-if="typeof results[key] === 'object'"
            class="p-1 border-b"
          >
            {{ results[key].join(", ") }}
          </span>
          <span v-else-if="key === 'url'" class="border-b">
            <a :href="results[key]" class="flex items-center"
              ><span class="underline">{{ results[key] }}</span
              >&nbsp;<link-icon class="h-5 w-5"
            /></a>
          </span>
          <span v-else class="p-1 border-b">
            {{ results[key] }}
          </span>
        </template>
      </div>
      <div class="flex flex-col">
        <h1 class="m-5 mb-0 text-2xl">
          Institution{{ results["institution-s"].length === 1 ? "" : "s" }}:
        </h1>
        <institution-card
          v-for="inst in results['institution-s']"
          :institution="inst"
          class="m-5"
        />
      </div>
    </div>
  </div>
</template>
