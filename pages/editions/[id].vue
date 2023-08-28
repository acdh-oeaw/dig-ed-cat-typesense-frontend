<script lang="ts" setup>
import { getDocument } from "@/composables/use-data";
import { koi, pseudoBoolTranslation } from "@/utils/mapping-objects";
import { type Institution, type PseudoBool, pseudoBool } from "@/utils/types";
import { ref, useRoute } from "#imports";

// definePageMeta({
// 	title: "",
// });

const route = useRoute();
const id = route.params.id;

const loading = ref(true);
const results = ref();

results.value = await getDocument(String(id));
loading.value = false;
</script>

<template>
	<div>
		<Head>
			<Title v-if="loading">Loading...</Title>
			<Title v-else>{{ results["edition-name"] }} - DigEdCat</Title>
		</Head>

		<Centered v-if="loading" class="-z-10">
			<LoadingIndicator />
		</Centered>
		<div v-else class="max-w-container mx-auto flex flex-col">
			<div>
				<h1 class="my-10 text-center text-5xl">
					{{ results["edition-name"] }}
				</h1>
			</div>
			<div class="grid m-2 lg:m-0 lg:grid-cols-[2fr_1fr]">
				<div class="grid grid-cols-2">
					<template v-for="[key, val] in Object.entries(koi)">
						<span class="font-semibold">
							{{ val }}
						</span>
						<span v-if="pseudoBool.includes(results[key])">
							{{ pseudoBoolTranslation[results[key] as PseudoBool] }}
						</span>
						<span v-else-if="typeof results[key] === 'object'">
							<template v-if="typeof results[key][0] === 'string'">
								{{ results[key].join(", ") }}
							</template>
							<template v-else>
								{{ results[key].map((obj: Institution) => obj["institution-name"]).join(", ") }}
							</template>
						</span>
						<span v-else-if="key === 'url'">
							<ExternalLink :href="results[key]" />
						</span>
						<span v-else>
							{{ results[key] }}
						</span>
						<div class="col-span-2 mb-1 border-b pt-1 last:border-0" />
					</template>
				</div>
				<div class="flex flex-col">
					<h1 class="m-5 mb-0 text-center text-2xl">
						Institution{{ results["institution-s"].length === 1 ? "" : "s" }}:
					</h1>
					<InstitutionCard
						v-for="inst in results['institution-s']"
						:institution="inst"
						class="m-5 mb-0"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
