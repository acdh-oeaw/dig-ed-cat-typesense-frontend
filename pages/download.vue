<script lang="ts" setup>
import { DownloadIcon } from "lucide-vue-next";

import institutions from "@/assets/data/institutions_places_enriched.json";
import { downloadString, jsonToCsv } from "@/utils/download-utils";

definePageMeta({
	title: "Download DigEdCat Data",
});

const downloadCsv = () => {
	downloadString(jsonToCsv(institutions), "institutions.csv", true, "csv");
};
const downloadJson = () => {
	downloadString(JSON.stringify(institutions), "institutions.json", true, "json");
};
</script>

<template>
	<div>
		<Centered>
			<div class="grid grid-cols-1 gap-2">
				<h2 class="mx-auto mb-2 text-xl">Download Institutions as</h2>
				<button
					class="rounded grid grid-cols-[1fr_auto] items-center divide-x border transition hover:bg-neutral-200 active:bg-neutral-300"
					@click="downloadJson"
				>
					<div class="p-2">.json</div>
					<DownloadIcon class="box-content h-5 w-5 p-2" />
				</button>
				<button
					class="rounded grid grid-cols-[1fr_auto] items-center divide-x border transition hover:bg-neutral-200 active:bg-neutral-300"
					@click="downloadCsv"
				>
					<div class="p-2">.csv</div>
					<DownloadIcon class="box-content h-5 w-5 p-2" />
				</button>
			</div>
		</Centered>
	</div>
</template>
