<script lang="ts" setup>
import CustomBlockquote from "@/components/custom-blockquote.vue";
import ExternalLink from "@/components/external-link.vue";
</script>
<template>
	<div class="max-w-container p-2 mx-auto">
		<Head>
			<Title>Survey 2017</Title>
		</Head>
		<h1 class="text-4xl my-4">Surveying User Requirements in the Digital Humanities</h1>
		<p class="py-2">
			In March 2017 Greta circulated a questionnaire aimed at better understanding what users of
			digital editions expect or want from a digital edition. The answers given were compared
			against the editions contained in the
			<em>Catalogue of Digital Editions</em>
			in order to analyse meeting and diverging points between the production and use of digital
			editions.
		</p>
		<p class="py-2">
			In February 2019 this analysis was published by the
			<em class="italic">ACM Journal on Computing and Cultural Heritage (JOCCH)</em>
			in a special issue on
			<em class="italic">Evaluation of Digital Cultural Resources.</em>
			Below is the abstract of the article:
		</p>

		<CustomBlockquote>
			This article presents the findings of a web survey designed to better understand the
			expectations and use of digital editions of texts. The survey, modelled upon a detailed
			analysis of 242 projects, recorded 218 complete responses, shedding light on user requirements
			of digital editions. Specifically, the survey indicates that issues of data reuse, licensing,
			image availability, and comprehensive documentation are the most requested features of digital
			editions, although ones which seldom are provided. This analysis feeds into previous studies
			on good practice in building Digital Humanities resources and puts forward practical
			recommendations for both creators and funders of digital editions in an effort to promote a
			stronger consideration of user needs. This survey will be of interest to those who produce
			digital editions of texts, including developers and engineers, and will also be of interest to
			those who commission and fund these projects, such as universities, libraries, and archives,
			whose documentary collections are often showcased in digital editions.
		</CustomBlockquote>
		The article is available
		<ExternalLink href="https://dl.acm.org/citation.cfm?doid=3230671">HERE.</ExternalLink>
	</div>
</template>
