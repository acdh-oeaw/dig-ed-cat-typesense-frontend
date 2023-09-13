<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{
	href: string;
}>();
</script>
<template>
	<nuxt-link
		:href="href"
		class="items-center inline-grid grid-cols-[auto_auto_1fr] hover:bg-slate-200 active:bg-slate-300 p-2 rounded transition"
	>
		<span>
			<slot>
				{{ href }}
			</slot>
		</span>
		&nbsp;
		<span class="text-right flex">
			<ChevronRightIcon class="h-5 w-5 inline-block" />
		</span>
	</nuxt-link>
</template>
