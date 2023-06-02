<script lang="ts" setup>
import { useRoute } from "#imports";

const route = useRoute();
const id = route.params.id;
</script>
<template>
  <div>
    {{ id }}
  </div>
</template>
