<script lang="ts" setup>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { onMounted } from "vue";

interface coord {
  lat: string;
  long: string;
}

const props = defineProps<{
  points: coord[];
  name: string;
}>();

onMounted(() => {
  let map = L.map(`map-${props.name}`).setView(
    [Number(props.points[0]?.lat), Number(props.points[0]?.long)],
    13
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  props.points.forEach((point) => {
    L.marker([
      Number(props.points[0]?.lat),
      Number(props.points[0]?.long),
    ]).addTo(map);
  });
});
</script>
<template>
  <div :id="`map-${name}`" class="relative w-full h-64 bg-slate-200" />
</template>
