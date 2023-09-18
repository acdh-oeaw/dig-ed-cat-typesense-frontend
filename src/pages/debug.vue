<script lang="ts" setup>
import { getDocuments, getNetwork } from "@/composable/use-data";
import type { Edition } from "@/utils/types";
import { ref } from "vue";

const query = ref({
	q: "",
	query_by: "edition-name",
	per_page: 25,
	page: 1,
	facet_by: "",
	filter_by: "",
	sort_by: "",
});
let results = ref({});
const loading = ref(false);

const search = async () => {
	loading.value = true;
	results.value = await getDocuments<Edition>(query.value);

	loading.value = false;
};

const network = await getNetwork();
console.log(network);
</script>
<template>
	<div class="flex flex-col">
		<Head>
			<Title>Extremely secret debug screen</Title>
		</Head>
		<NetworkGraph :data="network" :width="800" :height="400" />
		<div class="grid grid-cols-2 w-fit h-fit">
			<span>query</span>
			<input type="text" v-model="query.q" class="border" />
			<span>query_by</span>
			<input type="text" v-model="query.query_by" class="border" />
			<span>per_page</span>
			<input type="number" v-model="query.per_page" class="border" />
			<span>page</span>
			<input type="number" v-model="query.page" class="border" />
			<span>facet_by</span>
			<input type="text" v-model="query.facet_by" class="border" />
			<span>filter_by</span>
			<input type="text" v-model="query.filter_by" class="border" />
			<span>sort_by</span>
			<input type="text" v-model="query.sort_by" class="border" />
		</div>
		<pre>query: {{ query }}</pre>
		<div>
			<button @click="search" class="border hover:bg-slate-200 p-2 active:bg-slate-300">
				Submit!
			</button>
		</div>
		<div v-if="loading">loading...</div>
		<pre>results: {{ results }}</pre>
	</div>
</template>
