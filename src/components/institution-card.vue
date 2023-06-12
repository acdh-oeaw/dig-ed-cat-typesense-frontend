<script lang="ts" setup>
import { type Institution } from "@/utils/types";
import leafletMap from "@/components/map.vue";

const props = defineProps<{
  institution: Institution;
}>();
</script>

<template>
  <div class="rounded border border-slate-200">
    <div class="p-5">
      <h1 class="text-2xl">{{ institution["institution-name"] }}</h1>
      <h2>{{ institution["located-at"] }}, {{ institution["part-of"] }}</h2>
      <h3 class="text-sm">
        <a :href="institution['institution-website']">{{
          institution["institution-website"]
        }}</a>
      </h3>
      <h3 class="text-sm">
        <a :href="institution['institution-gnd']">{{
          institution["institution-gnd"]
        }}</a>
      </h3>
    </div>
    <client-only>
      <leaflet-map
        :points="[
          {
            lat: institution['institution-lat'],
            long: institution['institution-lng'],
          },
        ]"
        :name="institution['institution-name']"
      />
    </client-only>
  </div>
</template>
