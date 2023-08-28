<script lang="ts" setup>
import { type Institution } from "@/utils/types";

const props = defineProps<{
	institution: Institution;
}>();
</script>

<template>
	<div class="rounded border border-neutral-200">
		<div class="p-5">
			<h1 class="text-2xl">{{ institution["institution-name"] }}</h1>
			<h2>{{ institution["located-at"] }}, {{ institution["part-of"] }}</h2>
			<h3 class="text-sm">
				<ExternalLink :href="institution['institution-website']" />
			</h3>
			<h3 class="text-sm">
				<ExternalLink :href="institution['institution-gnd']" />
			</h3>
		</div>

		<ClientOnly>
			<LeafletMap
				:points="[
					{
						lat: institution['institution-lat'],
						long: institution['institution-lng'],
					},
				]"
				:name="institution['institution-name']"
				:zoom="13"
				class="h-64 w-full"
			/>
		</ClientOnly>
	</div>
</template>
