<script lang="ts" setup>
import { ChevronRightIcon } from "lucide-vue-next";

const props = defineProps<{
	href: string;
}>();
</script>

<template>
	<NuxtLink
		:href="href"
		class="rounded grid grid-cols-[auto_auto_1fr] items-center p-2 transition hover:bg-neutral-200 active:bg-neutral-300"
	>
		<span>
			<slot>
				{{ href }}
			</slot>
		</span>
		&nbsp;
		<span class="text-right">
			<ChevronRightIcon class="inline-block h-5 w-5" />
		</span>
	</NuxtLink>
</template>
