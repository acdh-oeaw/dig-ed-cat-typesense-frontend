<script lang="ts" setup>
import type { NetworkGraphData, Node, NetworkNode } from "@/utils/types";
import type { ForceGraphInstance, LinkObject, NodeObject } from "force-graph";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { typeColors } from "@/utils/network-utils";
import type { Ref } from "#imports";

const props = defineProps<{
	data: NetworkGraphData;
	width: number;
	height: number;
	selected?: string;
}>();

const emit = defineEmits<{
	(event: "nodeClick", node): void;
}>();

const context: { graph: null | ForceGraphInstance } = {
	graph: null,
};
const elementRef: Ref<HTMLElement | null> = ref(null);

const updateGraph = () => {
	const nodes = Array.from(props.data.nodes.values()) as Array<NodeObject>;
	const links = Array.from(props.data.links.values()) as Array<LinkObject>;

	context.graph?.graphData({ links, nodes });
};

onMounted(async () => {
	if (elementRef.value == null) return;

	const { default: ForceGraph } = await import("force-graph");

	context.graph = ForceGraph();
	context.graph.width(props.width);
	context.graph.height(props.height);

	context.graph.onNodeClick((node) => {
		emit("nodeClick", node as Node);
	});

	context.graph.nodeVal((node) => node.neighbors.size + 1);
	context.graph.nodeColor((node) => typeColors[node.attributes.type]);

	context.graph.nodeId("key");
	context.graph.nodeLabel((node) => `${node.attributes.label}<br />${node.attributes.type}`);

	context.graph.linkDirectionalArrowLength(5);

	updateGraph();
	context.graph(elementRef.value);
});
onUnmounted(() => {
	context.graph?._destructor();
});

watch(
	() => props.height,
	() => {
		if (context.graph === null) return;
		context.graph.height(props.height);
	},
);
watch(
	() => props.width,
	() => {
		if (context.graph === null) return;
		context.graph.width(props.width);
	},
);
watch(
	() => props.data,
	() => {
		if (context.graph === null) return;
		updateGraph();
	},
);
</script>
<template>
	<div ref="elementRef" />
	<slot :context="context" />
</template>
