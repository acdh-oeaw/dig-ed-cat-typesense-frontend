<script lang="ts" setup>
import type { Network, FilterObject } from "@/utils/types";
import { types as allTypes, typeColors } from "@/utils/network-utils";
import { ref, type Ref } from "vue";

const props = defineProps<{
	data: Network;
}>();

const types: Ref<string[]> = ref(allTypes);
const query: Ref<string> = ref("");
</script>
<template>
	<div class="flex flex-col bg-white p-2 rounded border shadow">
		<input
			type="text"
			placeholder="Filter Nodes..."
			v-model="query"
			class="h-8 w-64 rounded border shadow pl-2"
			@input="$emit('inputChange', { query, types } as FilterObject)"
		/>
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
