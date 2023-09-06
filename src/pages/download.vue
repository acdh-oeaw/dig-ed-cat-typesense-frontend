<script lang="ts" setup>
import institutions from "@/assets/data/institutions_places_enriched.json";
import Centered from "@/components/centered.vue";
import { jsonToCsv, downloadString } from "@/utils/download-utils";
import { ArrowDownTrayIcon } from "@heroicons/vue/24/outline";

const downloadCsv = () => {
	downloadString(jsonToCsv(institutions), "institutions.csv", true, "csv");
};
const downloadJson = () => {
	downloadString(JSON.stringify(institutions), "institutions.json", true, "json");
};
</script>
<template>
	<div>
		<Head>
			<Title>Download DigEdCat Data</Title>
		</Head>
		<centered>
			<div class="grid grid-cols-1 gap-2">
				<h2 class="mx-auto text-xl mb-2">Download Institutions as</h2>
				<button
					class="rounded border hover:bg-slate-200 transition active:bg-slate-300 divide-x grid grid-cols-[1fr_auto] items-center"
					@click="downloadJson"
				>
					<div class="p-2">.json</div>
					<ArrowDownTrayIcon class="p-2 box-content h-5 w-5" />
				</button>
				<button
					class="rounded border hover:bg-slate-200 transition active:bg-slate-300 grid grid-cols-[1fr_auto] divide-x items-center"
					@click="downloadCsv"
				>
					<div class="p-2">.csv</div>
					<ArrowDownTrayIcon class="p-2 box-content h-5 w-5" />
				</button>
			</div>
		</centered>
	</div>
</template>
