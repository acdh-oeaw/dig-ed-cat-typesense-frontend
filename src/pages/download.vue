<script lang="ts" setup>
import institutions from "@/assets/data/institutions_places_enriched.json";
import Centered from "@/components/centered.vue";
import { jsonToCsv, downloadString } from "@/utils/download-utils";
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";

const downloadCsv = () => {
  downloadString(jsonToCsv(institutions), "institutions.csv", true);
};
const downloadJson = () => {
  console.log(institutions);

  downloadString(
    ("data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(institutions)),
    "institutions.json")
  );
};
</script>
<template>
  <div>
    <Head>
      <Title>Download DigEdCat Data</Title>
    </Head>
    <centered>
      <div class="grid grid-cols-1 gap-2">
        <h2 class="mx-auto text-lg">Download Institutions as</h2>
        <button
          class="rounded border hover:bg-slate-200 transition active:bg-slate-300 divide-x flex items-center justify-end"
          @click="downloadJson"
        >
          <div class="p-2">Download Institutions as .json</div>
          <arrow-down-tray-icon class="p-2 box-content h-5 w-5" />
        </button>
        <button
          class="rounded border hover:bg-slate-200 transition active:bg-slate-300 flex divide-x items-center justify-end"
          @click="downloadCsv"
        >
          <div class="p-2">Download Institutions as .csv</div>
          <arrow-down-tray-icon class="p-2 box-content h-5 w-5" />
        </button>
      </div>
    </centered>
  </div>
</template>
