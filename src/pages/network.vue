<script lang="ts" setup>
import { getNetwork } from "@/composable/use-data";
import GraphToolbar from "@/components/graph-toolbar.vue";
import { computed, definePageMeta, navigateTo, ref, type Ref } from "#imports";
import type { FilterObject, Node } from "@/utils/types";
import { createGraph } from "@/utils/network-utils";
import VisContainer from "@/components/vis-container.vue";

const network = await getNetwork();

const query: Ref<string> = ref("");
const types: Ref<string[]> = ref(["Edition", "Institution", "City", "Country", "Person"]);

const data = createGraph({ ...network });

const changeNodeVisibility = ref((filterObject: FilterObject) => {
	query.value = filterObject.query || "";
	types.value = filterObject.types || [];
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
