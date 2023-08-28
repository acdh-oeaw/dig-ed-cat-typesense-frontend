<script lang="ts" setup>
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { onMounted } from "vue";

import extMarker from "@/assets/images/marker.png";
import { type coord } from "@/utils/types";
import { navigateTo } from "#imports";

const props = defineProps<{
	points: Array<coord>;
	name: string;
	zoom?: number;
}>();

onMounted(() => {
	let map = L.map(`map-${props.name}`);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		minZoom: 3,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);

	const leafletPoints = props.points.map((point) => {
		const marker = L.marker([Number(point.lat), Number(point.long)], {
			icon: new L.Icon({
				iconUrl: extMarker,
				iconSize: [25, 41],
				iconAnchor: [12, 41],
				popupAnchor: [1, -34],
				tooltipAnchor: [16, -28],
			}),
		});
		if (point.name) {
			marker
				.bindTooltip(
					`<span class="text-right">${point.name}<br>Lat: ${point.lat}<br>Long: ${point.long}</span>`,
				)
				.on("click", (e) => {
					navigateTo({
						path: "/search",
						query: {
							inst: point.name,
						},
					});
				});
		}
		return marker;
	});

	// @ts-expect-error ignore error warning, this property does exist
	const cluster = L.markerClusterGroup();

	cluster.addLayer(L.layerGroup(leafletPoints));
	map.addLayer(cluster);

	map.fitBounds(cluster.getBounds());
	if (props.zoom) map.setZoom(props.zoom);
});
</script>

<template>
	<div :id="`map-${name}`" class="relative z-0 bg-neutral-200" />
</template>
