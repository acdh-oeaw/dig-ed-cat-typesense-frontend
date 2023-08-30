<script lang="ts" setup>
import externalLink from "@/components/external-link.vue";
import leafletMap from "@/components/mapComponent.vue";
import { type Institution } from "@/utils/types";

const props = defineProps<{
  institution?: Institution;
  institutions?: Institution[];
}>();
</script>

<template>
  <div class="rounded border border-slate-200">
    <div v-if="institution" class="p-5">
      <h1 class="text-2xl">{{ institution["institution-name"] }}</h1>
      <h2>{{ institution["located-at"] }}, {{ institution["part-of"] }}</h2>
      <h3 class="text-sm">
        <external-link :href="institution['institution-website']" />
      </h3>
      <h3 class="text-sm">
        <external-link :href="institution['institution-gnd']" />
      </h3>
    </div>
    <div class="p-5" v-else-if="institutions">
      <h1 class="text-2xl">{{ institutions.map((inst: Institution) => inst['institution-name']).join(', ')}}</h1>
    </div>
    <client-only>
      <leaflet-map
        v-if="institution"
        :points="[
          {
            lat: institution['institution-lat'],
            long: institution['institution-lng'],
          },
        ]"
        :name="institution['institution-name']"
        :zoom="13"
        class="h-64 w-full"
      />
      <leaflet-map
        v-else-if="institutions"
        :points="institutions.map((inst: Institution) => ({
          lat: inst['institution-lat'],
          long: inst['institution-lng'],
          name: inst['institution-name'],
        }))"
        name="institutions"
        class="h-64 w-full"
      />
    </client-only>
  </div>
</template>
