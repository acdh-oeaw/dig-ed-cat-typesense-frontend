<script lang="ts" setup>
import type { Network } from "@/utils/types";
import { getTypes } from "@/utils/network-utils";
import { ref } from "vue";

const props = defineProps<{
	data: Network;
}>();

const types = ref(getTypes(props.data));
</script>
<template>
	<div class="flex flex-col">
		<input type="text" class="h-8 w-64 rounded" />
		<div v-for="type in getTypes(data)">
			<input type="checkbox" :id="type" :value="type" v-model="types" />
			<label :for="type">{{ type }}</label>
		</div>
		{{ types }}
	</div>
</template>
