<script lang="ts" setup>
import { isNonEmptyString } from "@acdh-oeaw/lib";
import { type WebSite, type WithContext } from "schema-dts";
import { metadata } from "@/config/metadata.config";

const env = useRuntimeConfig();

const route = useRoute();

useHead({
	htmlAttrs: {
		lang: metadata.locale,
	},
	titleTemplate: computed(() => {
		return ["%s", metadata.title].join(" | ");
	}),
	title: computed(() => {
		return route.meta.title;
	}),
	link: computed(() => {
		return [
			{ href: "/favicon.ico", rel: "icon", sizes: "any" },
			{ href: "/icon.svg", rel: "icon", type: "image/svg+xml", sizes: "any" },
			{ href: "/apple-icon.png", rel: "apple-touch-icon" },
		];
	}),
	meta: computed(() => {
		return [
			{ name: "description", content: metadata.description },
			{ property: "og:type", content: "website" },
			{ property: "og:title", content: route.meta.title },
			{ property: "og:site_name", content: metadata.title },
			{ property: "og:description", content: metadata.description },
			{ property: "og:image", content: "/opengraph-image.png" },
			{ property: "og:locale", content: metadata.locale },
		];
	}),
	script: computed(() => {
		const jsonLd: WithContext<WebSite> = {
			"@context": "https://schema.org",
			"@type": "WebSite",
			name: metadata.title,
			description: metadata.description,
		};

		const scripts = [
			{ type: "application/ld+json", innerHTML: JSON.stringify(jsonLd, safeJsonLdReplacer) },
		];

		if (
			isNonEmptyString(env.public.NUXT_PUBLIC_MATOMO_BASE_URL) &&
			isNonEmptyString(env.public.NUXT_PUBLIC_MATOMO_ID)
		) {
			scripts.push({
				type: "",
				innerHTML: createAnalyticsScript(
					env.public.NUXT_PUBLIC_MATOMO_BASE_URL,
					env.public.NUXT_PUBLIC_MATOMO_ID,
				),
			});
		}

		return scripts;
	}),
});
</script>

<template>
	<div class="grid min-h-full grid-rows-[auto_1fr_auto]">
		<SkipLink target-id="main-content">Skip to main content</SkipLink>

		<AppHeader />
		<slot />
		<AppFooter />

		<RouteAnnouncer />
	</div>
</template>
