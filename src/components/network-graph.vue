<script lang="ts" setup>
import type { NetworkGraphData, Node } from "@/utils/types";
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

	// context.graph.nodeVisibility((node: Node) => {
	// 	(props.types ? props.types.includes(node.attributes.type) : true) &&
	// 		(props.query ? node.attributes.label.includes(props.query) : true);
	// });
	context.graph.onNodeClick((node) => {
		emit("nodeClick", node as Node);
	});

	context.graph.nodeVisibility((node) => {
		if (!props.selected) return true;
		if (props.selected === node.key) return true;
		for (const key of node.neighbors) {
			if (props.selected === key) return true;
		}
		return false;
	});
	context.graph.linkVisibility((edge) => {
		if (!props.selected) return true;
		// @ts-expect-error At this point `d3` has replaced `source` with `NodeObject`.
		const source = edge.source.key;
		// @ts-expect-error At this point `d3` has replaced `target` with `NodeObject`.
		const target = edge.target.key;
		if (props.selected === source) return true;
		if (props.selected === target) return true;
		return false;
	});

	context.graph.nodeVal(3);
	context.graph.nodeColor((node: Node) => typeColors[node.attributes.type]);

	context.graph.nodeId("key");
	context.graph.nodeLabel((node: Node) => `${node.attributes.label}<br />${node.attributes.type}`);

	context.graph.nodeAutoColorBy((node: Node) => node.attributes.type);
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
