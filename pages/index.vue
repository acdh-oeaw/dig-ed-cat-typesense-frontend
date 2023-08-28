<script lang="ts" setup>
definePageMeta({
	title: "Home",
});
</script>

<template>
	<MainContent class="grid container gap-6 py-12 container-width-xl">
		<div class="rounded bg-surface p-6 text-on-surface shadow">
			<h1 class="sr-only">Catalogue of Digital Editions</h1>
			<img alt="" class="max-w-2xl" src="@/assets/images/DigEds_Cat_logo_transp.png" />
		</div>

		<div class="grid gap-6 leading-relaxed lg:grid-cols-3">
			<div class="rounded bg-surface p-6 text-on-surface shadow">
				<h2 class="inline pr-4 font-bold">Why?</h2>
				Since 2012 the Catalogue of Digital Editions has been gathering digital editions and texts
				in an attempt to survey and identify best practice in the field of digital scholarly
				editing. Analogous initiatives exist but don't provide the granular analysis of features
				necessary to better understand the rationale and methodology behind the creation of a
				digital edition. This Catalogue provides an accessible record of standards and building
				technologies used, and thus an insight into past and present projects.
			</div>
			<div class="rounded bg-surface p-6 text-on-surface shadow">
				<h2 class="inline pr-4 font-bold">How?</h2>
				Development on this web application began in 2016 and aims at delivering the Catalogue data
				in an interactive and user-friendly manner, allowing users to browse, search, filter and
				order projects around their research interests.
			</div>
			<div class="rounded bg-surface p-6 text-on-surface shadow">
				<h2 class="inline pr-4 font-bold">What?</h2>
				The Catalogue continuously adds digital editions and always seeks external contributions.
				For instructions on how to submit a digital edition to the Catalogue, please visit the
				Documentation page of this site. Projects added will be exposed to over 300 German libraries
				thanks to the Catalogue's integration into the German Library Network (DBIS).
			</div>
		</div>
	</MainContent>
</template>
