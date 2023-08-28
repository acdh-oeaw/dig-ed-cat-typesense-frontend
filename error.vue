<script lang="ts" setup>
defineProps<{
	error: Error;
}>();

useSeoMeta({
	robots: {
		nofollow: true,
		noindex: true,
	},
});

function onReset() {
	void clearError({ redirect: "/" });
}
</script>

<template>
	<MainContent class="grid min-h-full place-content-center text-center">
		<h1>Error</h1>
		<button @click="onReset">Try again</button>
	</MainContent>
</template>
