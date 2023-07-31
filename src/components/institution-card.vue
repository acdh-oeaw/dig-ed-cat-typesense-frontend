<script lang="ts" setup>
import externalLink from "@/components/external-link.vue";
import leafletMap from "@/components/mapComponent.vue";
import { type Institution } from "@/utils/types";

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
        <external-link :href="institution['institution-website']" />
      </h3>
      <h3 class="text-sm">
        <external-link :href="institution['institution-gnd']" />
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
        :zoom="13"
        class="h-64 w-full"
      />
    </client-only>
  </div>
</template>
