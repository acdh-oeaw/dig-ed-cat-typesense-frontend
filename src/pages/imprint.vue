<script setup lang="ts">
import { onMounted, ref } from "#imports";
import Centered from "@/components/centered.vue";
import { getImprint } from "@/composable/use-imprint";
import { ArrowPathIcon } from "@heroicons/vue/24/outline";

const loading = ref(true);
const imprint = ref("");

getImprint();
onMounted(async () => {
	imprint.value = String((await getImprint()).value);
	loading.value = false;
});
</script>
<template>
	<div>
		<Head>
			<Title>Imprint</Title>
		</Head>
		<centered class="-z-10" v-if="loading">
			<ArrowPathIcon class="h-5 w-5 animate-spin" />
		</centered>
		<div v-else v-html="imprint" />
	</div>
</template>
