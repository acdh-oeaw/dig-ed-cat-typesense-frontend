<script lang="ts" setup>
import type { Network } from "@/utils/types";
import type { ForceGraphInstance, GraphData, LinkObject, NodeObject } from "force-graph";
import { onMounted, ref } from "vue";
import type { Ref } from "#imports";

const props = defineProps<{
	data: Network;
	width: number;
	height: number;
}>();

const context: { graph: null | ForceGraphInstance } = {
	graph: null,
};
const elementRef: Ref<HTMLElement | null> = ref(null);

onMounted(async () => {
	if (elementRef.value == null) return;

	const { default: ForceGraph } = await import("force-graph");

	context.graph = ForceGraph();
	context.graph.width(props.width);
	context.graph.height(props.height);

	context.graph.nodeId("key");
	context.graph.nodeLabel((node: Node) => `${node.attributes.label}<br />${node.attributes.type}`);

	context.graph.nodeAutoColorBy((node: Node) => node.attributes.type);

	context.graph?.graphData({
		links: Array.from(props.data.edges.values()) as LinkObject[],
		nodes: Array.from(props.data.nodes.values()) as NodeObject[],
	});
	context.graph(elementRef.value);
});
</script>
<template>
	<div ref="elementRef" class="h-96 w-screen" />
	<slot :context="context" />
</template>
