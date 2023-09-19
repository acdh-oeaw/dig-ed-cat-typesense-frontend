<script lang="ts" setup>
import { getNetwork } from "@/composable/use-data";
import GraphToolbar from "@/components/graph-toolbar.vue";
import { filterNetwork, computed, definePageMeta, ref } from "#imports";

const network = await getNetwork();
const query = ref("");

const data = computed(() => {
	if (!network) return {};
	return filterNetwork(
		{ ...network },
		{
			query: query.value,
		},
	);
});

definePageMeta({
	layout: "maxcontent",
});
</script>
<template>
	<div>
		<Head>
			<Title>Network Graph</Title>
		</Head>
		<ClientOnly>
			<GraphToolbar :data="data" class="absolute z-20 border" />
			<Centered v-slot="{ width, height }">
				<NetworkGraph :data="data" :width="width" :height="height" />
			</Centered>
		</ClientOnly>
	</div>
</template>
