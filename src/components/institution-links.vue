<script lang="ts" setup>
import type { Institution } from "@/utils/types";

const props = defineProps<{
	institutions: Institution[];
	noIcons?: boolean;
}>();
</script>
<template>
	<template v-for="(inst, i) in institutions">
		<ExternalLink :href="inst['institution-website']" :no-icon="noIcons">
			{{ `${inst["institution-name"]}${i === institutions.length - 1 ? "" : ", "}` }}
		</ExternalLink>
	</template>
</template>
