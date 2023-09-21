<script lang="ts" setup>
import { ref, useRoute, type Ref, filterNetwork } from "#imports";
import NetworkGraph from "@/components/network-graph.vue";
import InstitutionCard from "@/components/institution-card.vue";
import { getDocument, getNetwork } from "@/composable/use-data";
import { koi, pseudoBoolTranslation } from "@/utils/mapping-objects";
import {
	pseudoBool,
	type Institution,
	type Edition,
	type Koi,
	type PseudoBool,
} from "@/utils/types";
import { ArrowPathIcon } from "@heroicons/vue/24/solid";
import type { RouteLocationNormalized } from "vue-router";

const route: RouteLocationNormalized = useRoute();
const id = route.params.id;

const loading: Ref<boolean> = ref(true);
const results: Ref<Edition> = ref({} as Edition);

const koiEntries = Object.entries(koi) as [Koi, string][];

results.value = await getDocument(String(id));
const network = await getNetwork();
const filteredNetwork = ref(
	filterNetwork(
		{ ...network },
		{
			related_to: [`edition__${route.params.id}`],
		},
	),
);
loading.value = false;
</script>
<template>
	<div>
		<Head>
			<Title v-if="loading">Loading...</Title>
			<Title v-else>{{ results["edition-name"] }} - DigEdCat</Title>
		</Head>
		<centered class="-z-10" v-if="loading">
			<ArrowPathIcon class="h-5 w-5 animate-spin" />
		</centered>
		<div v-else class="flex flex-col max-w-container mx-auto">
			<div>
				<h1 class="text-center text-5xl mt-10 mb-10">
					{{ results["edition-name"] }}
				</h1>
			</div>
			<div
				class="grid m-2 lg:m-0 lg:grid-cols-[2fr_1fr]"
				:class="results['institution-s'].length === 0 && 'lg:grid-cols-1'"
			>
				<div class="grid md:grid-cols-2">
					<template v-for="[key, val] of koiEntries">
						<span class="font-semibold">{{ val }}</span>
						<span v-if="val === 'Institutions'">
							<InstitutionLinks
								v-if="results['institution-s'].length >= 1"
								:institutions="results['institution-s']"
							/>
							<span v-else>none</span>
						</span>
						<span v-else-if="pseudoBool.includes(results[key] as PseudoBool)">
							{{ pseudoBoolTranslation[results[key] as PseudoBool] }}
						</span>
						<span v-else-if="typeof results[key] === 'object'">
							{{ Array(results[key]).join(", ") }}
						</span>
						<span v-else>
							{{ results[key] }}
						</span>
						<div class="md:col-span-2 border-b pt-1 mb-1 last:border-0" />
					</template>
				</div>
				<div class="flex flex-col" v-if="results['institution-s'].length">
					<h1 class="m-5 mb-0 text-2xl text-center">
						Institution{{ results["institution-s"].length === 1 ? "" : "s" }}:
					</h1>
					<InstitutionCard
						v-if="results['institution-s'].length != 1"
						:institutions="results['institution-s'] as Institution[]"
						class="m-5 mb-0"
					/>
					<InstitutionCard
						v-else
						:institution="results['institution-s'][0] as Institution"
						class="m-5 mb-0"
					/>
					<div class="m-5 mb-0 h-72 border rounded">
						<ClientOnly>
							<VisContainer v-slot="{ width, height }">
								<NetworkGraph :data="filteredNetwork" :width="width" :height="height" />
							</VisContainer>
						</ClientOnly>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
