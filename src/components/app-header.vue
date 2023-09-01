<script lang="ts" setup>
import { HomeIcon, ArrowDownTrayIcon } from "@heroicons/vue/24/solid";
</script>
<template>
	<header class="bg-slate-100 shadow z-10">
		<div
			class="mx-auto flex w-full max-w-container flex-col items-center justify-between gap-x-4 gap-y-2 px-8 py-4 sm:flex-row"
		>
			<nuxt-link class="font-bold text-5xl select-none" href="/">DigEdCat</nuxt-link>
			<div class="flex gap-8 items-center">
				<div>
					<nuxt-link
						href="/"
						class="hover:bg-black active:bg-slate-300 transition rounded p-4 block group"
					>
						<span class="sr-only">Home</span>
						<home-icon class="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition" />
					</nuxt-link>
				</div>
				<div>
					<nuxt-link
						class="text-lg rounded p-4 hover:bg-slate-200 active:bg-slate-300 transition"
						href="/search"
					>
						Browse
					</nuxt-link>
				</div>
				<div>
					<nuxt-link
						class="text-lg rounded p-4 hover:bg-slate-200 active:bg-slate-300 transition"
						href="/map"
					>
						Map
					</nuxt-link>
				</div>
				<div>
					<nuxt-link
						class="text-lg rounded p-4 hover:bg-slate-200 active:bg-slate-300 transition"
						href="/imprint"
					>
						Imprint
					</nuxt-link>
				</div>
				<div>
					<nuxt-link
						class="text-lg rounded p-4 hover:bg-slate-200 active:bg-slate-300 transition block group"
						href="/download"
					>
						<span class="sr-only">Download Files</span>
						<arrow-down-tray-icon
							class="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition"
						/>
					</nuxt-link>
				</div>
			</div>
		</div>
	</header>
</template>
