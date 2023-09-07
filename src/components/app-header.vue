<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
	HomeIcon as HomeOutline,
	ArrowDownTrayIcon,
	Bars3Icon,
	XMarkIcon,
	MagnifyingGlassIcon,
	MapIcon,
} from "@heroicons/vue/24/outline";
import { HomeIcon } from "@heroicons/vue/24/solid";

const testLog = () => {
	console.log("test");
};
</script>
<template>
	<header class="bg-slate-100 shadow z-10">
		<div
			class="mx-auto flex w-full max-w-container items-center justify-between gap-x-4 gap-y-2 px-8 py-4 flex-row"
		>
			<nuxt-link class="font-bold text-5xl select-none" href="/">DigEdCat</nuxt-link>
			<div class="hidden md:flex gap-8 items-center">
				<div>
					<nuxt-link
						href="/"
						class="hover:bg-slate-200 active:bg-slate-300 transition rounded p-4 block group"
					>
						<span class="sr-only">Home</span>
						<HomeIcon class="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition" />
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
						href="/download"
					>
						Downloads
					</nuxt-link>
				</div>
			</div>
			<div class="md:hidden">
				<Menu as="div" class="relative" v-slot="{ open, close }">
					<MenuButton class="p-4 border rounded hover:bg-slate-200 active:bg-slate-300 group">
						<XMarkIcon
							v-if="open"
							class="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition"
						/>
						<Bars3Icon
							v-else
							class="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition"
						/>
					</MenuButton>
					<transition
						enter-active-class="transition duration-100 ease-out"
						enter-from-class="transform scale-95 opacity-0"
						enter-to-class="transform scale-100 opacity-100"
						leave-active-class="transition duration-75 ease-in"
						leave-from-class="transform scale-100 opacity-100"
						leave-to-class="transform scale-95 opacity-0"
					>
						<MenuItems
							class="absolute flex right-0 flex-col min-w-fit w-56 origin-top-right bg-white shadow-lg rounded divide-y"
						>
							<MenuItem as="div" @click="close">
								<nuxt-link
									@click="close"
									href="/"
									class="hover:bg-slate-200 active:bg-slate-300 transition rounded-t p-4 group flex gap-4 text-lg"
								>
									<HomeOutline
										class="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition"
									/>
									Home
								</nuxt-link>
							</MenuItem>
							<MenuItem as="div" @click="close">
								<nuxt-link
									@click="close"
									class="text-lg p-4 hover:bg-slate-200 active:bg-slate-300 transition flex gap-4 group"
									href="/search"
								>
									<MagnifyingGlassIcon
										class="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition"
									/>
									Browse
								</nuxt-link>
							</MenuItem>
							<MenuItem as="div" @click="close">
								<nuxt-link
									@click="close"
									class="text-lg p-4 hover:bg-slate-200 active:bg-slate-300 transition flex gap-4 group"
									href="/map"
								>
									<MapIcon class="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition" />
									Map
								</nuxt-link>
							</MenuItem>
							<MenuItem as="div" @click="close">
								<nuxt-link
									@click="close"
									class="text-lg rounded-b p-4 hover:bg-slate-200 active:bg-slate-300 transition flex gap-4 group"
									href="/download"
								>
									<span class="sr-only">Download Files</span>
									<ArrowDownTrayIcon
										class="w-6 h-6 group-hover:scale-110 group-active:scale-90 transition"
									/>
									Download
								</nuxt-link>
							</MenuItem>
						</MenuItems>
					</transition>
				</Menu>
			</div>
		</div>
	</header>
</template>
