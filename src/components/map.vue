<script lang="ts" setup>
interface coord {
  lat: string;
  long: string;
}

const props = defineProps<{
  points: coord[];
}>();
</script>
<template>
  <div class="relative w-full h-64 bg-slate-200">
    <centered v-if="points[0]" class="z-0">
      {{ points[0].lat }} <br />
      {{ points[0].long }}
    </centered>
  </div>
</template>
