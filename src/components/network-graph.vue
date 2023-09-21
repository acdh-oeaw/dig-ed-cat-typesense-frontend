<script lang="ts" setup>
import type { Network, Node } from "@/utils/types";
import type { ForceGraphInstance, LinkObject, NodeObject } from "force-graph";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { typeColors } from "@/utils/network-utils";
import type { Ref } from "#imports";

const props = defineProps<{
	data: Network;
	width: number;
	height: number;
}>();

const emit = defineEmits<{
	(event: "nodeClick", node): void;
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

	// context.graph.nodeVisibility((node: Node) => {
	// 	(props.types ? props.types.includes(node.attributes.type) : true) &&
	// 		(props.query ? node.attributes.label.includes(props.query) : true);
	// });
	context.graph.onNodeClick((node) => {
		emit("nodeClick", node as Node);
	});
	context.graph.nodeVal(3);
	context.graph.nodeColor((node: Node) => typeColors[node.attributes.type]);

	context.graph.nodeId("key");
	context.graph.nodeLabel((node: Node) => `${node.attributes.label}<br />${node.attributes.type}`);

	context.graph.nodeAutoColorBy((node: Node) => node.attributes.type);
	context.graph.linkDirectionalArrowLength(5);

	context.graph?.graphData({
		links: Array.from(props.data.edges.values()) as LinkObject[],
		nodes: Array.from(props.data.nodes.values()) as NodeObject[],
	});
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
	(newVal) => {
		if (context.graph === null) return;
		context.graph?.graphData({
			links: Array.from(newVal.edges.values()) as LinkObject[],
			nodes: Array.from(newVal.nodes.values()) as NodeObject[],
		});
	},
);
</script>
<template>
	<div ref="elementRef" />
	<slot :context="context" />
</template>
