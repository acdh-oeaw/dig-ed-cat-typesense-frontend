<script lang="ts" setup>
import { DownloadIcon, HomeIcon } from "lucide-vue-next";
</script>

<template>
	<header class="border-b bg-background text-on-background">
		<div class="container flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
			<NuxtLink class="select-none text-4xl font-bold" href="/">DigEdCat</NuxtLink>

			<nav>
				<ul class="flex items-center font-medium xs:gap-4 sm:gap-8" role="list">
					<div>
						<NuxtLink
							class="rounded block p-4 text-lg transition hover:text-on-background/80"
							href="/"
						>
							<span class="sr-only">Home</span>
							<HomeIcon class="h-6 w-6" />
						</NuxtLink>
					</div>
					<div>
						<NuxtLink
							class="rounded block p-4 text-lg transition hover:text-on-background/80"
							href="/search"
						>
							Search
						</NuxtLink>
					</div>
					<div>
						<NuxtLink
							class="rounded block p-4 text-lg transition hover:text-on-background/80"
							href="/map"
						>
							Map
						</NuxtLink>
					</div>
					<div>
						<NuxtLink
							class="rounded block p-4 text-lg transition hover:text-on-background/80"
							href="/download"
						>
							<span class="sr-only">Download files</span>
							<DownloadIcon class="h-6 w-6" />
						</NuxtLink>
					</div>
				</ul>
			</nav>
		</div>
	</header>
</template>
