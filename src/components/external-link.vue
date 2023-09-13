<script lang="ts" setup>
import { LinkIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{
	href: string;
	iconOnly?: boolean;
}>();
</script>
<template>
	<a
		:href="href"
		class="items-center inline-flex group w-fit text-secondary-300"
		target="_blank"
		rel="noreferrer noopener"
	>
		<span class="group-hover:underline">
			<slot v-if="!iconOnly">
				{{ href }}
			</slot>
		</span>
		&nbsp;
		<LinkIcon class="h-4 w-4" />
	</a>
</template>
