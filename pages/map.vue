<script setup lang="ts">
import institutions from "@/assets/data/institutions_places_enriched.json";
import { type coord } from "@/utils/types";

definePageMeta({
	title: "Map of all DigEdCat Institutions",
});

const coords: coord[] = institutions.map((inst) => ({
	name: inst["Institution Name"],
	lat: String(inst["Institution Lat"]),
	long: String(inst["Institution Lng"]),
}));
</script>

<template>
	<div class="mx-auto h-full w-screen relative">
		<ClientOnly>
			<LeafletMap name="full-map" :points="coords" class="absolute min-w-full min-h-full" />
		</ClientOnly>
	</div>
</template>
