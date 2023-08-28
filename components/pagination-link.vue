<script lang="ts" setup>
import { type RouteLocationRaw } from "#vue-router";

const props = defineProps<{
	disabled: boolean;
	href: RouteLocationRaw;
	rel: "next" | "prev";
}>();
</script>

<template>
	<NuxtLink
		v-if="!props.disabled"
		class="flex items-center gap-2 hover:text-on-background/80"
		:href="props.href"
		:rel="props.rel"
	>
		<slot />
	</NuxtLink>
	<span v-else class="flex cursor-not-allowed items-center gap-2 text-on-muted">
		<slot />
	</span>
</template>
