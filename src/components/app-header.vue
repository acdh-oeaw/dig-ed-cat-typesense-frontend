<script lang="ts" setup>
import { HomeIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <header class="bg-slate-100">
    <div
      class="mx-auto flex w-full max-w-container flex-col items-center justify-between gap-x-4 gap-y-2 px-8 py-4 sm:flex-row"
    >
      <NuxtLink class="font-bold text-5xl" href="/">DigEdCat</NuxtLink>
      <div class="flex gap-8 items-center">
        <div>
          <NuxtLink
            href="/"
            class="hover:bg-slate-200 transition rounded p-4 block"
          >
            <span class="sr-only">Home</span>
            <HomeIcon class="w-6 h-6" />
          </NuxtLink>
        </div>
        <div>
          <NuxtLink
            class="text-lg rounded p-4 hover:bg-slate-200 transition"
            href="/search"
            >Search</NuxtLink
          >
        </div>
      </div>
    </div>
  </header>
</template>
