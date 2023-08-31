<script lang="ts" setup>
import { ref, useRoute } from "#imports";
import externalLink from "@/components/external-link.vue";
import institutionCard from "@/components/institution-card.vue";
import { getDocument } from "@/composable/use-data";
import { koi, pseudoBoolTranslation } from "@/utils/mapping-objects";
import { pseudoBool, type Institution, type PseudoBool } from "@/utils/types";
import { ArrowPathIcon, LinkIcon } from "@heroicons/vue/24/solid";

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
      <Title v-else> {{ results["edition-name"] }} - DigEdCat </Title>
    </Head>
    <centered class="-z-10" v-if="loading">
      <arrow-path-icon class="h-5 w-5 animate-spin" />
    </centered>
    <div v-else class="flex flex-col max-w-container mx-auto">
      <div>
        <h1 class="text-center text-5xl mt-10 mb-10">
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
                {{
                  results[key]
                    .map((obj: Institution) => obj["institution-name"])
                    .join(", ")
                }}
              </template>
            </span>
            <span v-else-if="key === 'url'">
              <external-link :href="results[key]" />
            </span>
            <span v-else>
              {{ results[key] }}
            </span>
            <div class="col-span-2 border-b pt-1 mb-1 last:border-0" />
          </template>
        </div>
        <div class="flex flex-col" v-if="results['institution-s'].length">
          <h1 class="m-5 mb-0 text-2xl text-center">
            Institution{{ results["institution-s"].length === 1 ? "" : "s" }}:
          </h1>
          <institution-card
            v-if="results['institution-s'].length != 1"
            :institutions="results['institution-s']"
            class="m-5 mb-0"
          />
          <institution-card
            v-else
            :institution="results['institution-s'][0]"
            class="m-5 mb-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
