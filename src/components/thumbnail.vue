<script setup lang="ts">
const props = defineProps<{
	imgUrl: string;
	imgDesc?: string;
}>();
</script>
<template>
	<figure class="border border-gray-200 p-2 h-fit">
		<a :href="imgUrl" title="Click to enlarge">
			<img :src="imgUrl" :alt="imgDesc || ''" />
		</a>
		<figcaption>
			<slot />
		</figcaption>
	</figure>
</template>
