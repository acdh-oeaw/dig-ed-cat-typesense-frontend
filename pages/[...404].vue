<script lang="ts" setup>
definePageMeta({
	title: "Page not found",
});

useSeoMeta({
	robots: {
		nofollow: true,
		noindex: true,
	},
});
</script>

<template>
	<MainContent class="container py-8">
		<h1>Page not found</h1>
	</MainContent>
</template>
