<script setup>
import { ref } from "#imports";
import LeafletMap from "@/components/mapComponent.vue";

const testCoords = [
  {
    lat: "48.20849",
    long: "16.37208",
  },
  {
    lat: "48.148598",
    long: "17.107748",
  },
  {
    lat: "50.073658",
    long: "14.418540",
  },
];
</script>
<template>
  <div class="mx-auto h-full w-screen relative">
    <client-only v-if="!loading">
      <leaflet-map
        name="full-map"
        :points="coords"
        class="absolute min-w-full min-h-full"
      />
    </client-only>
  </div>
</template>
