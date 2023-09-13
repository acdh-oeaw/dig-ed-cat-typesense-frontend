<script setup lang="ts">
import { definePageMeta, setPageLayout } from "#imports";
import institutions from "@/assets/data/institutions_places_enriched.json";
import LeafletMap from "@/components/map-component.vue";
import type { coord } from "@/utils/types";

const coords: coord[] = institutions.map((inst) => ({
	name: inst["Institution Name"],
	lat: String(inst["Institution Lat"]),
	long: String(inst["Institution Lng"]),
}));

definePageMeta({
	layout: "maxcontent",
});
</script>
<template>
	<div class="mx-auto min-h-full min-w-full relative">
		<Head>
			<Title>Map of all DigEdCat Institutions</Title>
		</Head>
		<client-only>
			<leaflet-map name="full-map" :points="coords" class="absolute min-w-full min-h-full" />
		</client-only>
	</div>
</template>
