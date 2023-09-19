<script lang="ts" setup>
import type { getDefaultCompilerOptions } from "typescript";
import { ref, onMounted, onUnmounted } from "vue";

const centeredRef = ref<HTMLElement | null>(null);

const dimensions = ref<DOMRect | null>(null);

const observer = new ResizeObserver((entries) => {
	const [entry] = entries;
	if (entry == null) return;
	dimensions.value = entry.contentRect;
});

onMounted(() => {
	if (centeredRef.value == null) return;
	observer.observe(centeredRef.value);
});

onUnmounted(() => {
	observer.disconnect();
});
</script>
<template>
	<div ref="centeredRef" class="relative isolate inset-0 grid h-full w-full place-items-center">
		<slot v-if="dimensions" :width="dimensions.width" :height="dimensions.height" />
	</div>
</template>
