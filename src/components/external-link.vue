<script lang="ts" setup>
import { LinkIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{
  href: string;
}>();
</script>
<template>
  <a :href="href" class="items-center flex">
    <span class="hover:underline">
      <slot>
        {{ href }}
      </slot>
    </span>
    &nbsp;
    <link-icon class="h-4 w-4" />
  </a>
</template>
