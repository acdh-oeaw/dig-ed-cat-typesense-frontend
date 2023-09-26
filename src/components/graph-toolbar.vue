<script lang="ts" setup>
import type { NetworkGraphData, FilterObject } from "@/utils/types";
import { types as allTypes, typeColors } from "@/utils/network-utils";
import { ref, type Ref } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
	data: NetworkGraphData;
}>();

const types: Ref<string[]> = ref(allTypes);
const query: Ref<string> = ref("");
</script>
<template>
	<div class="flex flex-col bg-white p-2 rounded border shadow">
		<div class="h-8 w-64 rounded border shadow grid grid-cols-[1fr_auto]">
			<input
				type="text"
				placeholder="Filter Nodes..."
				v-model="query"
				class="h-full w-fit pl-2"
				@input="$emit('inputChange', { query, types } as FilterObject)"
			/>
			<XMarkIcon
				v-if="query"
				class="h-5 w-5 text-gray-600 shrink-0 self-center cursor-pointer pr-2"
				@click="
					query = '';
					$emit('inputChange', { query, types } as FilterObject);
				"
			/>
		</div>
		<div class="mt-2">
			<div v-for="type in allTypes" class="flex items-center gap-2">
				<input
					type="checkbox"
					class="h-4 w-4"
					:style="`accent-color: ${typeColors[type]}`"
					:id="type"
					:value="type"
					v-model="types"
					@change="$emit('inputChange', { query, types } as FilterObject)"
				/>
				<label :for="type" class="text-lg">{{ type }}</label>
			</div>
		</div>
	</div>
</template>
