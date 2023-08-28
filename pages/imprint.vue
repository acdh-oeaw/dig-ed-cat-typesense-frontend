<script lang="ts" setup>
import { createImprintUrl } from "@/config/imprint.config";
import { metadata } from "@/config/metadata.config";

definePageMeta({
	title: "Imprint",
});

const env = useRuntimeConfig();

const redmineId = env.public.NUXT_PUBLIC_REDMINE_ID;

const imprint = await useFetch(String(createImprintUrl(metadata.locale, redmineId)), {
	responseType: "text",
	onResponseError(error) {
		throw createError({ fatal: true, statusCode: error.response.status });
	},
});
</script>

<template>
	<MainContent class="container py-12 container-width-md">
		<h1 class="text-4xl font-bold">Imprint</h1>
		<!-- eslint-disable-next-line vue/no-v-html -->
		<div v-if="imprint.data.value" class="prose" v-html="imprint.data.value" />
	</MainContent>
</template>
