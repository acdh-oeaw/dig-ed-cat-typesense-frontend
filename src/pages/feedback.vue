<script setup lang="ts">
import ExternalLink from "@/components/external-link.vue";
import CustomBlockquote from "@/components/custom-blockquote.vue";
</script>
<template>
	<div class="max-w-container mx-auto p-2">
		<Head>
			<Title>User Feedback</Title>
		</Head>
		<h1 class="text-4xl my-4">User feedback and testimonials</h1>
		<CustomBlockquote>
			<p>
				That digital editions website is really nicely done. There is a slight wiggle on the
				documentation pages on my iPhone 6+, but other than that, it looks nice. Plus, I *really*
				like the content of the documentation pages. It is so clearly written, it should be a model
				for writing documentation. Everything, from the license info to the funding, how to cite,
				and the description of the various components, it is really well done. Bravo!
			</p>
			<footer class="p-2">
				<cite>Puneet Kishor</cite>
				- June 2017, email
			</footer>
		</CustomBlockquote>
		<CustomBlockquote>
			<p>
				Grazie per il lavoro enorme che hai fatto con il tuo D[ata]base, che è davvero uno strumento
				utilissimo per le ricerche a tutti i livelli!
			</p>
			<footer>
				<cite>Paola Italia</cite>
				- May 2017, email
			</footer>
		</CustomBlockquote>
		<CustomBlockquote>
			<p>
				Another limitation of reviews for digital publications thus far is that they tend to be
				quite isolated, both by type within any given review publication, and from publication to
				publication. While there are cross-publisher directories of digital publications like AAUP's
				aforementioned Directory of Digital Publishing Projects, and the independent Directory of
				Open Access Journals (https://doaj.org) that can cover a great scope of subject matter,
				these directories and the individual reviews and review publications offer little in the way
				of comparisons of the type that might help us better understand the field and evaluate its
				trends. One notable exception to this is the Catalogue of Digital Editions, by Greta
				Franzini (https://dig-ed-cat.eos.arz.oeaw.ac.at/), who defines "digital edition" for these
				purposes as a critical edition that is not merely a facsimile edition, but one that takes
				advantage of its digital space and that fully "represents its material (usually as
				transcribed/edited text)" (Franzini). Though limited to its own particular subset of digital
				publishing activity, Franzini's Catalogue comprises a dataset of some 230 digital editions,
				currently, with some fifty consistent and comparable pieces of data on each, that range from
				the edition's subject matter and URL, to its features, textual encoding scheme, and
				technological infrastructure. While it takes a more object, data-focused approach to
				reviewing and cataloguing the included editions, the Catalogue also uniquely offers the
				possibility of rich comparison and analysis across publications, even if that more
				subjective and evaluative work is yet to be done. It may also someday provide a model to be
				applied to the evaluation of other types of digital publishing projects, specifically like
				the Mellon-funded university press projects, the Getty's OSCI collaborative, and other open
				access, scholarly editions which have been the subject of our history here thus far.
			</p>
			<footer class="p-2">
				<cite>Greg Albers</cite>
				- April 2017,
				<a
					href="https://mw17.mwconf.org/paper/the-next-generation-of-online-publishing-building-on-what-weve-learned-together/"
					title="Opens in new tab"
					target="_blank"
				>
					article
				</a>
			</footer>
		</CustomBlockquote>
		<CustomBlockquote>
			<p>What a nifty resource and cool website!</p>
			<footer class="p-2">
				<cite>Ron van den Branden</cite>
				- March 2017, email
			</footer>
		</CustomBlockquote>
		<CustomBlockquote>
			<p>
				Discussing @GretaFranzini’s catalogue of digital editions [...] #dixit Great resource, in
				addition to @patrick_sahle’s!
			</p>
			<footer class="p-2">
				<cite>Daniel Powell</cite>
				- September 2015, Twitter
			</footer>
		</CustomBlockquote>
		<CustomBlockquote>
			<p>@GretaFranzini This list is great. [...]</p>
			<footer class="p-2">
				<cite>Kyle P. Johnson</cite>
				- September 2015, Twitter
			</footer>
		</CustomBlockquote>
		<div class="py-2 italic text-sm">
			EDITOR'S NOTE: Feedback for this website was directed at previous incarnations and may not
			hold up to the current web app.
		</div>
		<div>
			<h2 class="text-2xl">Feedback</h2>
			<p class="py-2">
				For general comments and suggestions, please email Greta Franzini at
				<ExternalLink href="mailto:g.franzini.11@ucl.ac.uk">g.franzini.11@ucl.ac.uk</ExternalLink>
				<br />
				For specific requests, bug reports or corrections, please create GitHub issues in the
				relevant repository.
			</p>
			<p class="py-2">We'd love to hear from you!</p>
		</div>
	</div>
</template>
