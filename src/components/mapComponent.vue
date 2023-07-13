<script lang="ts" setup>
import L from "leaflet";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet/dist/leaflet.css";
import { onMounted } from "vue";

interface coord {
  lat: string;
  long: string;
  name?: string;
}

const props = defineProps<{
  points: coord[];
  name: string;
}>();

onMounted(() => {
  let map = L.map(`map-${props.name}`);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const leafletPoints = props.points.map((point) =>
    L.marker([Number(point.lat), Number(point.long)])
  );

  // ignore error warning
  const cluster = L.markerClusterGroup();

  cluster.addLayer(L.layerGroup(leafletPoints));
  map.addLayer(cluster);

  map.fitBounds(cluster.getBounds());
});
</script>
<template>
  <div :id="`map-${name}`" class="relative bg-slate-200 z-0" />
</template>
