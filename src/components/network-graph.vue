<script lang="ts" setup>
import type { Network } from "@/utils/types";
import type { GraphData } from "force-graph";
import { onMounted, ref } from "vue";

const props = defineProps<{
	data: Network;
}>();

const elementRef = ref(null);

onMounted(async () => {
	// if (elementRef.value == null) return;

	const { default: ForceGraph } = await import("force-graph");
	const graph = ForceGraph();
	graph(elementRef).graphData = {
		nodes: props.data.nodes,
		links: props.data.edges,
	} as GraphData;
});
</script>
<template>
	<div ref="elementRef" />
</template>
