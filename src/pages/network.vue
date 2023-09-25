<script lang="ts" setup>
import { getNetwork } from "@/composable/use-data";
import GraphToolbar from "@/components/graph-toolbar.vue";
import { computed, definePageMeta, navigateTo, ref, type ComputedRef, type Ref } from "#imports";
import type { FilterObject, NetworkGraphData, Node } from "@/utils/types";
import { createGraph, filterGraph } from "@/utils/network-utils";
import VisContainer from "@/components/vis-container.vue";

const network = createGraph(await getNetwork());

const data: Ref<NetworkGraphData> = ref(network);

const changeNodeVisibility = ref((filterObject: FilterObject) => {
	data.value = filterGraph(network, {
		types: filterObject.types || [],
		query: filterObject.query || "",
	});
});

const clickEvent = (node: Node) => {
	switch (node.attributes.type) {
		case "Edition":
			// navigateTo(`editions/${node.index + 1}`);
			break;
		case "Institution":
			navigateTo({
				path: "search",
				query: {
					facets: encodeURIComponent(`[institution-s.institution-name:=${node.attributes.label}]`),
				},
			});
			break;
		default:
			break;
	}
};

definePageMeta({
	layout: "maxcontent",
});
</script>
<template>
	<div class="relative">
		<Head>
			<Title>Network Graph</Title>
		</Head>
		<ClientOnly>
			<GraphToolbar
				:data="data"
				@inputChange="changeNodeVisibility"
				class="absolute z-20 right-0 bottom-0 m-2"
			/>
			<Centered>
				<VisContainer v-slot="{ width, height }">
					<NetworkGraph :data="data" :width="width" :height="height" @nodeClick="clickEvent" />
				</VisContainer>
			</Centered>
		</ClientOnly>
	</div>
</template>
