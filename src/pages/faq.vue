<script setup lang="ts">
import ExternalLink from "@/components/external-link.vue";
</script>
<template>
	<div class="max-w-container mx-auto p-2">
		<Head>
			<Title>Frequently Asked Questions</Title>
		</Head>
		<h1 class="text-4xl my-4">Frequently Asked Questions (FAQ)</h1>

		<p class="mb-3">
			<strong class="text-bold">
				Q. What are the criteria for inclusion in the
				<em class="italic">Catalogue?</em>
			</strong>
		</p>
		<p class="mb-3">
			The project is constantly evolving as users request more features and development on the app
			moves forward. At the moment we don't accept ebooks, any form of commercial digital books or
			transcriptions made available via Wikisource, but projects whose authorship can be traced back
			to one or multiple individuals with, if possible, an institutional affiliation (university
			and/or GLAM institution). We primarily look for digital editions and digital
			<em class="italic">scholarly</em>
			editions (by which we mean editions with a strong critical component) but people are also
			beginning to submit digital archives, textual collections where some texts are treated in more
			detail, etc. It's worth noting that people define their projects in various ways (e.g. a
			project may define itself as a database when it fact it might be more of a digital archive)
			using different terms synonymously. This makes it difficult to pick what should be included in
			our list or not. The line of inclusion in our catalogue is a little blurry but it reflects the
			fuzziness that comes with these projects.
		</p>
		<p class="mb-3">
			If you have a project to submit but are unsure about its eligibility for inclusion, feel free
			to add it to the project's
			<ExternalLink href="https://github.com/gfranzini/digEds_cat/issues">
				GitHub repository as an issue with the
				<code class="p-[2px_4px] bg-red-50 text-red-500 rounded-sm">POTENTIAL</code>
				label
			</ExternalLink>
			and we'll take a look. Our
			<ExternalLink href="https://github.com/gfranzini/digEds_cat/wiki/Not-applicable">
				GitHub Wiki
			</ExternalLink>
			lists projects we considered but decided not to include.
		</p>
		<p class="mb-3">
			<strong class="text-bold">
				Q. Why are there no Asian and/or African digital editions in the
				<em>Catalogue?</em>
			</strong>
		</p>
		<p class="mb-3">
			Because the team cannot read those languages and we hesitate to rely on browser translation
			plugins as any machine translation errors would go unnoticed and possibly lead to incorrect
			cataloguing. We're eager to fill this gap but need help from users to do so.
		</p>
		<p class="mb-3">
			<strong class="text-bold">Q. Would it be possible to add a text size feature?</strong>
		</p>
		<p class="mb-3">
			Calculating the text size (tokens/types) of every project would require major efforts on our
			part as this information is almost never published on project websites. If this information
			were available, we would definitely consider adding the feature to the
			<em class="italic">Catalogue.</em>
		</p>
	</div>
</template>
