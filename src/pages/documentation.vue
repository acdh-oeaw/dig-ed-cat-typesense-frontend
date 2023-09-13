<script setup lang="ts">
import ExternalLink from "@/components/external-link.vue";
import { ClockIcon } from "@heroicons/vue/24/outline";
</script>
<template>
	<div class="max-w-container mx-auto p-2">
		<Head>
			<Title>Documentation</Title>
		</Head>

		<h1 class="text-4xl my-4">Documentation</h1>
		<p class="text-sm flex items-center gap-2">
			<ClockIcon class="h-4 w-4" />
			<span>Last updated: July 11th, 2022</span>
		</p>

		<ul id="docs-outline" class="m-4">
			<li>
				<InternalLink class="-ml-4" href="#overview"><b>Overview</b></InternalLink>
			</li>
			<ul class="list-disc list-inside">
				<li><InternalLink href="#section1">Team</InternalLink></li>
				<li><InternalLink href="#section2">Duration</InternalLink></li>
				<li><InternalLink href="#section3">Funding</InternalLink></li>
				<li><InternalLink href="#section4">Components and repositories</InternalLink></li>
				<!-- <li><a href="#section5">Section 5</a></li> -->
				<li><InternalLink href="#section6">Limitations</InternalLink></li>
				<li><InternalLink href="#section7">How to contribute to the Catalogue</InternalLink></li>
				<li><InternalLink href="#section8">How to cite and follow the Catalogue</InternalLink></li>
				<li><InternalLink href="#section9">Web analytics</InternalLink></li>
				<li><InternalLink href="#section10">Copyright</InternalLink></li>
				<li><InternalLink href="#section11">Relevant reading</InternalLink></li>
				<li><InternalLink href="#section12">Relevant resources</InternalLink></li>
				<li><InternalLink href="#section13">Acknowledgments</InternalLink></li>
			</ul>
			<li>
				<InternalLink class="-ml-4" href="#navigating">
					<b>Navigating the Web Application</b>
				</InternalLink>
			</li>
			<ul class="list-disc list-inside">
				<li><InternalLink href="#section14">Browsing the data</InternalLink></li>
				<li><InternalLink href="#section15">Other menu pages</InternalLink></li>
			</ul>
		</ul>

		<h2 class="text-2xl my-4" id="overview">Overview</h2>

		<!--Team-->
		<div id="section1">
			<h3 class="text-xl my-3">Team</h3>
			<p>
				This project is a collaboration between
				<ExternalLink href="http://www.oeaw.ac.at/acdh/en/andorfer">Peter Andorfer</ExternalLink>
				and
				<ExternalLink href="http://www.oeaw.ac.at/acdh/en/zaytseva">Ksenia Zaytseva</ExternalLink>
				of the
				<ExternalLink href="http://www.oeaw.ac.at/acdh/">
					Austrian Centre for Digital Humanities
				</ExternalLink>
				(ACDH, Vienna) and
				<ExternalLink href="http://gretafranzini.com/">Greta Franzini</ExternalLink>
				of the
				<ExternalLink href="https://www.ucl.ac.uk/dh/">
					UCL Centre for Digital Humanities
				</ExternalLink>
				(UCLDH, London). Peter and Ksenia develop the web application while Greta curates the data.
			</p>

			<!--Contributors-->
			<h4 class="text-lg my-2">Contributors</h4>
			<p>
				Many digital editions in the
				<em class="italic">Catalogue</em>
				have been added by external contributors, listed here in alphabetical order (those for which
				we have full names; for some we only have GitHub usernames): Holger Berg, José Calvo, Ulrike
				Czeitschner, Ricardo Gómez-López, Eglal Henein, Szilvia Maróthy, Arnold Michalowski, Paolo
				Monella, Martin Anton Müller, Thomas Nehrlich, Balázs Nemes, Frederike Neuber, Clemens Radl,
				Matthias Reinert, Torsten Schrade, Christian Schwaderer, Werner Stangl, Evina Steinová,
				Marjam Trautmann, Francesca Tomasi, Gabor Mihaly Toth, Ron van den Branden and Aengus Ward.
				THANK YOU!
			</p>
		</div>

		<!--Duration-->
		<div id="section2">
			<h3 class="text-xl my-3">Duration</h3>
			<p>
				The
				<em class="italic">Catalogue of Digital Editions</em>
				began collecting digital editions in 2012. Development on the web application began in the
				summer of 2016 and kick-started the collaboration. The project will continue for as long as
				the team's means allow.
			</p>
		</div>

		<!--Funding-->
		<div id="section3">
			<h3 class="text-xl my-3">Funding</h3>
			<p>
				This project receives no funding. Peter Andorfer and Ksenia Zaytseva are supported as ACDH
				staff, and Greta Franzini's contribution is entirely voluntary.
			</p>
		</div>

		<!--Components-->
		<div id="section4">
			<h3 class="text-xl my-3">Components and repositories</h3>
			<p>
				The
				<em class="italic">Catalogue of Digital Editions Web Application</em>
				is made-up of two interacting components, each stored in its own GitHub repository: 1) the
				data, and 2) the web application to display the data to the user. The two components are
				connected via a custom script that regularly fetches the latest updates from the data
				repository and delivers them to the web application.
			</p>
			<h4 class="text-lg my-2">
				Data
				<small>component</small>
			</h4>
			<p>
				The digital editions present in the
				<em class="italic">Catalogue</em>
				come from numerous sources and their selection follows basic
				<ExternalLink href="https://github.com/gfranzini/digEds_cat/blob/master/CONTRIBUTING.md">
					criteria:
				</ExternalLink>
				the electronic texts can be ongoing or complete projects, born-digital editions as well as
				electronic reproductions of print volumes. They're gathered from aggregators (e.g.
				<ExternalLink href="http://www.tei-c.org/Activities/Projects/">
					Projects using the TEI
				</ExternalLink>
				or
				<ExternalLink href="https://dhcommons.org/projects">DH Commons - Projects),</ExternalLink>
				conferences presentations, publications, social media posts, word of mouth, the web, as well
				as external contributors.
			</p>

			<p>
				The data is collected across two
				<CustomCodeBlock>.csv</CustomCodeBlock>
				(Comma Separated Value) files: the
				<CustomCodeBlock>digEds_cat.csv</CustomCodeBlock>
				file contains the digital editions, while the
				<CustomCodeBlock>institutions_places_enriched.csv</CustomCodeBlock>
				file contains geographical information associated with the institutions contained in the
				master file, allowing us to place digital editions on a map.
			</p>

			<p>
				The data in the
				<em class="italic">Catalogue</em>
				is being hooked up to the
				<ExternalLink href="http://programminghistorian.org/lessons/intro-to-linked-data">
					<strong>Linked Open Data</strong>
				</ExternalLink>
				(LOD) cloud to increase discoverability while supporting semantic integration and knowledge
				sharing. The linked data vocabularies currently connected to the
				<em class="italic">Catalogue</em>
				are
				<ExternalLink href="https://www.w3.org/2003/01/geo/">W3C Basic Geo,</ExternalLink>
				<ExternalLink href="http://xmlns.com/foaf/spec/#">FOAF,</ExternalLink>
				<ExternalLink href="http://www.geonames.org/ontology#">GeoNames,</ExternalLink>
				<ExternalLink href="http://www.w3.org/ns/dcat#">Data Catalog</ExternalLink>
				and
				<ExternalLink href="http://purl.org/dc/terms/">Dublin Core Metadata.</ExternalLink>
				Institution data also links to
				<ExternalLink href="http://www.dnb.de/DE/Home/home_node.html">
					DNB (Deutsche Nationalbibliothek)
				</ExternalLink>
				Catalogue IDs.
			</p>
			<p>
				The data's GitHub repository is:
				<ExternalLink href="https://github.com/gfranzini/digEds_cat">
					https://github.com/gfranzini/digEds_cat
				</ExternalLink>
			</p>
			<h4 class="text-lg my-2">
				Web application
				<small>component</small>
			</h4>
			<p>
				The application is a
				<ExternalLink href="https://www.djangoproject.com/">Django web framework</ExternalLink>
				designed to be simple and pragmatic.
				<br />
				Some fields in the
				<em class="italic">Catalogue</em>
				's data file contain decimal numbers as values to measure the degree of compliance of a
				project to a particular feature: 0 stands for 'no compliance', 0.5 for 'somewhat/partially
				compliant', 1 for 'fully compliant'. Numbers make it easier to run calculations and
				statistical analyses over the data-set. When fetching data updates, the web application
				transforms these values into human-readable information: 0 becomes 'no', 0.5 becomes
				'partial/somewhat' and 1 becomes 'yes'. The web application's default view of the
				<em class="italic">Catalogue</em>
				data is a searchable table, but it also provides bar and pie charts to better visualise
				statistical information (see the
				<em class="italic">Navigation</em>
				section below).
			</p>

			<p>
				The web application's GitHub repository is:
				<ExternalLink href="https://github.com/acdh-oeaw/dig_ed_cat">
					https://github.com/acdh-oeaw/dig_ed_cat
				</ExternalLink>
			</p>
		</div>

		<!--Limitations-->
		<div id="section6">
			<h3 class="text-xl my-3">Limitations</h3>
			<p>
				Users might have noticed from the
				<em class="italic">Catalogue</em>
				that projects from Asian and African countries are underrepresented if not completely
				absent. The only reason for this large gap in the data is the language barrier. A Japanese
				project and website can only be correctly catalogued by someone who can read Japanese.
				Browser plugins to automatically translate webpages exist but we hesitate to use them as any
				machine-translation errors would go unnoticed and possibly lead to incorrect cataloguing.
				This is where
				<strong>
					user contributions become necessary to help provide a global, rather than a
					Western-centric, picture of digital edition initiatives.
				</strong>
			</p>
		</div>

		<!--How to contribute-->
		<div id="section7">
			<h3 class="text-xl my-3">
				How to contribute to the
				<em class="italic">Catalogue</em>
			</h3>
			<p>
				If you wish to contribute a digital edition to the
				<em class="italic">Catalogue</em>
				or correct an existing entry, you can do so in one of three ways:
			</p>
			<ul>
				<li>
					If you're familiar with GitHub, you can fork
					<ExternalLink href="https://github.com/gfranzini/digEds_cat">
						the data repository
					</ExternalLink>
					, edit the
					<CustomCodeBlock>.csv</CustomCodeBlock>
					file and create a pull request.
				</li>
				<li>
					If you're not familiar with GitHub, you can create
					<ExternalLink href="https://github.com/gfranzini/digEds_cat/issues">
						a GitHub issue
					</ExternalLink>
					with as much information about the edition as possible (see 'Data fields'
					<ExternalLink
						href="https://github.com/gfranzini/digEds_cat/wiki/Data-description-&-contribution#data-fields-in-the-catalogue"
					>
						here).
					</ExternalLink>
					The more information you provide, the sooner the edition will appear in the
					<em class="italic">Catalogue.</em>
				</li>
				<li>
					If you'd rather not use GitHub at all, you can fill-in a Google Form at this address:
					<ExternalLink href="https://goo.gl/forms/4Ya3jwRCBi0VSexx2">
						https://goo.gl/forms/4Ya3jwRCBi0VSexx2.
					</ExternalLink>
					Your entry will be moderated and promptly added to the
					<em class="italic">Catalogue.</em>
				</li>
			</ul>
			<p>
				<strong>
					The project you contribute will be exposed to over 300 libraries in Germany thanks to the
					<em class="italic">Catalogue's</em>
					integration and syndication in the
					<ExternalLink
						href="http://rzblx10.uni-regensburg.de/dbinfo/detail.php?bib_id=allefreien&colors=&ocolors=&lett=k&tid=0&titel_id=102043"
					>
						Datenbank-Infosystem (DBIS).
					</ExternalLink>
				</strong>
			</p>
		</div>

		<!--How to cite-->
		<div id="section8">
			<h3 class="text-xl my-3">How to cite and follow the Catalogue</h3>
			<p>
				There are two citations for this project. If you wish to cite
				<em class="italic">the data only,</em>
				please adapt the following according to your preferred referencing style:
				<CustomBlockquote>
					Franzini, G. (2012-)
					<em class="italic">Catalogue of Digital Editions.</em>
					<ExternalLink href="https://zenodo.org/badge/latestdoi/42574907">
						<img src="https://zenodo.org/badge/42574907.svg" alt="DOI" />
					</ExternalLink>
				</CustomBlockquote>
			</p>

			<p>
				If you wish to cite
				<em class="italic">the web application as a whole,</em>
				please adapt the following:
			</p>
			<CustomBlockquote>
				Franzini, G., Andorfer, P., Zaytseva, K. (2016-)
				<em class="italic">Catalogue of Digital Editions: The Web Application.</em>
				<ExternalLink href="https://doi.org/10.5281/zenodo.1250796">
					<img src="https://zenodo.org/badge/DOI/10.5281/zenodo.1250797.svg" alt="DOI" />
				</ExternalLink>
			</CustomBlockquote>

			<p>
				You can follow project updates via
				<ExternalLink href="https://twitter.com/search?q=%23digEdsCat">Twitter</ExternalLink>
				and
				<ExternalLink
					href="https://www.researchgate.net/project/The-Digital-Editions-Catalogue-App-A-web-application-to-browse-curate-and-analyse-digital-editions"
				>
					ResearchGate.
				</ExternalLink>
			</p>
		</div>

		<!--Web analytics-->
		<div id="section9">
			<h3 class="text-xl my-3">Web analytics</h3>
			<p>
				We monitor visits to the
				<em class="italic">Catalogue</em>
				with the
				<ExternalLink href="https://matomo.org/">Matomo Open Analytics</ExternalLink>
				platform (formerly Piwik). This allows us to improve the resource and, to some extent,
				understand user behaviour on the site while complying to GDPR regulations.
			</p>
		</div>

		<!--Copyright-->
		<div id="section10">
			<h3 class="text-xl my-3">Copyright</h3>
			<p>
				As per the
				<NuxtLink class="text-secondary-300" to="/imprint">Imprint</NuxtLink>
				page of this website, the data and code constituting this project are published under a
				Creative Commons Attribution Share-Alike International 4.0 License (CC-BY-SA 4.0). This
				means that you are free to reuse all contents as long as you make your copies or adaptations
				available under the same or a similar license.
			</p>
		</div>

		<!--Relevant reading-->
		<div id="section11">
			<h3 class="text-xl my-3">Relevant reading</h3>
			<ul class="list-disc list-inside">
				<li>
					Franzini, G., Terras, M., Mahony, S. (2019) 'Digital Editions of Text: Surveying User
					Requirements in the Digital Humanities',
					<em class="italic">
						Journal on Computing and Cultural Heritage (JOCCH) - Special Issue on Evaluation of
						Digital Resources
					</em>
					, 12(1), pp. 1-23. DOI:
					<ExternalLink href="https://dl.acm.org/citation.cfm?doid=3230671">
						10.1145/3230671
					</ExternalLink>
				</li>
				<li>
					Franzini, G., Mahony, S., and Terras, M. (2016), 'A Catalogue of Digital Editions', In:
					Pierazzo, E. and Driscoll, M. J. (eds)
					<em class="italic">
						<ExternalLink
							href="http://www.openbookpublishers.com/htmlreader/978-1-78374-238-7/ch9.xhtml#_idTextAnchor023"
						>
							Digital Scholarly Editing: Theories and Practices.
						</ExternalLink>
					</em>
					Cambridge: Open Book Publishers. DOI:
					<ExternalLink href="http://dx.doi.org/10.11647/OBP.0095.09">
						10.11647/OBP.0095.09
					</ExternalLink>
					[
					<strong>describes an early version</strong>
					of the
					<em class="italic">Catalogue of Digital Editions</em>
					]
				</li>
				<li>
					Krippendorf, K. (2004)
					<em class="italic">Content Analysis: An Introduction to Its Methodology</em>
					. 2nd edn. Thousand Oaks, CA: Sage.
				</li>
				<li>
					Warwick, C., Galina, I., Terras, M., Huntington, P., Pappa, N. (2008) 'The master
					builders: LAIRAH research on good practice in the construction of digital humanities
					projects',
					<em class="italic">Literary and Linguistic Computing</em>
					, 23(3), pp. 383-396. DOI:
					<ExternalLink
						href="https://academic.oup.com/dsh/article/23/3/383/937157/The-master-builders-LAIRAH-research-on-good"
					>
						10.1093/llc/fqn017
					</ExternalLink>
				</li>
			</ul>
		</div>

		<!--Relevant resources-->
		<div id="section12">
			<h3 class="text-xl my-3">Relevant resources</h3>
			<ul class="list-disc list-inside">
				<li>
					Other catalogues:
					<ul class="list-inside list-disc ml-4">
						<li>
							The first ever catalogue of digital editions was published and is still maintained by
							Patrick Sahle under the name
							<em class="italic">
								<ExternalLink
									href="https://digitale-edition.de/exist/apps/editions-browser/index.html"
								>
									Catalog of Scholarly Digital Editions.
								</ExternalLink>
							</em>
							Sahle's catalogue collects digital editions with a strong critical ("scholarly")
							component and from which
							<em class="italic">our Catalogue</em>
							borrows key data definitions.
						</li>
						<li>
							In December 2016, a catalogue of Spanish digital editions and texts also appeared on
							the web and can be accessed
							<ExternalLink
								href="http://www.morethanbooks.eu/atlas-de-datos-digital-editions-spanish/"
							>
								here.
							</ExternalLink>
						</li>
					</ul>
				</li>
				<li>
					As the name suggests, the
					<ExternalLink href="http://ride.i-d-e.de/">
						<em class="italic">RIDE review journal for digital editions and resources</em>
					</ExternalLink>
					publishes peer-reviewed reviews of digital editions in multiple languages.
				</li>
				<li>
					The
					<ExternalLink href="http://scholarlyediting.org/">
						<em class="italic">Scholarly Editing</em>
					</ExternalLink>
					journal.
				</li>
				<li>
					The multilingual
					<ExternalLink href="https://lexiconse.uantwerpen.be">
						Lexicon of Digital Scholarly Editing
					</ExternalLink>
					brings together field-specific definitions, concepts and terminology found in existing
					literature.
				</li>
				<li>
					The Austrian
					<ExternalLink href="http://www.digitale-edition.at/">
						KONDE - Digital Edition Competence Network.
					</ExternalLink>
				</li>
				<li>
					<ExternalLink href="http://correspsearch.net/index.xql">correspSearch:</ExternalLink>
					Search Scholarly Editions of Letters.
				</li>
			</ul>
		</div>

		<!--Acknowledgments-->
		<div id="section13">
			<h3 class="text-xl my-3">Acknowledgments</h3>
			<p>
				We thank
				<ExternalLink href="https://www.ed.ac.uk/profile/professor-melissa-terras">
					Professor Melissa Terras (University of Edinburgh)
				</ExternalLink>
				and Professor Simon Mahony (Beijing Normal University at Zhuhai) for their continuous
				support and encouragement since the very beginning of this project.
			</p>
		</div>

		<hr class="my-4" />

		<!-- NAVIGATION-->
		<h2 class="text-2xl my-4" id="navigating">Navigating the Web Application</h2>

		<div id="section14">
			<h3 class="text-xl my-3">Browsing the data</h3>
			<p>
				This web application provides different ways of browsing the digital editions in the
				<em class="italic">Catalogue</em>
				, either as a table or as map and chart visualisations.
			</p>
			<h4 class="text-lg my-2">Table view</h4>

			<p>
				The menu tab
				<em class="italic">Browse the Catalogue</em>
				lists digital editions in table form and allows users to search for a particular project
				using one or multiple filters. A bottom pagination indicates the number of data pages
				present in the
				<em class="italic">Catalogue</em>
				at any one time (25 digital editions per page), giving users the option to jump between
				pages. Clicking on a digital edition opens up its corresponding data sheet (Figure 2). Users
				can also move between projects from the individual data sheets by using the blue
				back/forward arrows at the top of the screen (Figure 3). A black, round information icon
				below the project title provides a collapsable column with definitions of each catalogued
				feature (Figure 4). A red banner is used to inform users of expired project URLs (Figure 5);
				the banner disappears upon the addition of a working or updated URL.
			</p>
			<p>
				From the
				<em class="italic">Browse the Catalogue</em>
				page, users can download all digital editions in the
				<em class="italic">Catalogue</em>
				at any one time as
				<CustomCodeBlock>.csv</CustomCodeBlock>
				,
				<CustomCodeBlock>rdf/xml</CustomCodeBlock>
				and
				<CustomCodeBlock>n3</CustomCodeBlock>
				.
			</p>
			<p>
				In addition, the menu tab
				<em class="italic">Get the Data</em>
				gives the user the option of downloading the data as a BibTeX file, which can be imported
				into bibliographic managers such as Zotero for citation purposes. The project's
				<strong>API</strong>
				is also available under
				<em class="italic">Get the Data.</em>
			</p>

			<div class="row">
				<div class="grid md:grid-cols-3 gap-8 p-4">
					<Thumbnail
						img-url="https://dig-ed-cat.acdh.oeaw.ac.at/static/webpage/images/pagination.png"
					>
						Figure 1. Pagination at the bottom of the main
						<em class="italic">Browse the Catalogue</em>
						view allows users to jump between data pages in the
						<em class="italic">Catalogue.</em>
					</Thumbnail>
					<Thumbnail
						img-url="https://dig-ed-cat.acdh.oeaw.ac.at/static/webpage/images/navi-arrows.png"
					>
						Figure 2. Blue back/forward arrows placed at each side of the project title allow users
						to move between digital editions.
					</Thumbnail>
					<Thumbnail
						img-url="https://dig-ed-cat.acdh.oeaw.ac.at/static/webpage/images/red-banner.png"
					>
						Figure 3. A red banner notifies the user of an expired project URL.
					</Thumbnail>
					<Thumbnail img-url="https://dig-ed-cat.acdh.oeaw.ac.at/static/webpage/images/info.png">
						Figure 4. The black circular information icon below the project title reveals a
						collapsable column (second column in this image) with definitions of each catalogued
						feature.
					</Thumbnail>
					<Thumbnail
						img-url="https://dig-ed-cat.acdh.oeaw.ac.at/static/webpage/images/data-sheet.png"
					>
						Figure 5. Example data sheet of a digital edition.
					</Thumbnail>
					<Thumbnail
						img-url="https://dig-ed-cat.acdh.oeaw.ac.at/static/webpage/images/bulk-download.png"
					>
						Figure 6. The bulk-download button on the
						<em class="italic">Browse the Catalogue</em>
						page allows users to download the most recent data in the
						<em class="italic">Catalogue</em>
						as
						<code>.csv</code>
						,
						<code>rdf/xml</code>
						and
						<code>n3</code>
						files.
					</Thumbnail>
				</div>
			</div>
			<h4 class="text-lg my-2">Chart and map view</h4>
			<p>
				The menu tab
				<em class="italic">Analyze the data</em>
				provides chart, map and network visualisations of the data contained in the
				<em class="italic">Catalogue.</em>
			</p>
			<p>
				The map locates institutions involved in the creation of digital editions present in the
				<em class="italic">Catalogue</em>
				(Figure 7). The user can either click on a location marker or search for an institution
				using the search button provided. Clicking on a location marker opens up a pop-up window
				with the name of the institution and its projects; here, clicking on a project leads the
				user to the corresponding project data-sheet.
			</p>
			<p>
				The menu option
				<ExternalLink href="https://dig-ed-cat.acdh.oeaw.ac.at/charts/chartselector/">
					<em class="italic">Select charts</em>
				</ExternalLink>
				provides a list of catalogued features to visualise as bar, line or pie charts. Hovering
				over a particular pie slice or bar reveals the exact project count. All charts can be
				downloaded as PNG, JPEG, PDF and SVG files.
			</p>
			<div class="alert alert-info">
				<strong>Attention!</strong>
				'Select charts' was implemented in September 2017 as a replacement of the previous
				<em class="italic">Bar charts</em>
				and
				<em class="italic">Pie charts</em>
				menu items.
			</div>
			<div class="p-4">
				<div class="md:w-1/2 mx-auto">
					<Thumbnail img-url="https://dig-ed-cat.acdh.oeaw.ac.at/static/webpage/images/map.png">
						Figure 7. A map of the world locates institutions involved in the creation of the
						digital editions present in the
						<em class="italic">Catalogue.</em>
						Click on a marker reveals a pop-up with the institution name and its projects.
					</Thumbnail>
				</div>
			</div>
			<h4 class="text-lg my-2">Network visualisation</h4>
			As of 2018, each project sheet contains a hyperlinked network view of the digital edition and
			its associated people, institutions and places (see example in Figure 8). Clicking on an
			institution node in the network opens up an information sheet with the institution's
			geographical coordinates and DNB ID (Figure 9). We also provide a
			<a href="{% url 'browsing:netvis">
				network visualisation of the entire set of digital editions
			</a>
			in the
			<em class="italic">Catalogue</em>
			to better visualise how these relate to one another. The network can be viewed and downloaded
			in both JSON and
			<ExternalLink href="https://gephi.org/gexf/format/">GEXF Gephi</ExternalLink>
			formats (Figure 10).
			<div class="grid md:grid-cols-3 gap-8 p-4">
				<Thumbnail
					img-url="https://dig-ed-cat.acdh.oeaw.ac.at/static/webpage/images/network-individual.png"
				>
					Figure 8. Example network of a digital edition in the
					<em class="italic">Catalogue.</em>
				</Thumbnail>
				<Thumbnail
					img-url="https://dig-ed-cat.acdh.oeaw.ac.at/static/webpage/images/institution-sheet.png"
				>
					Figure 9. Sheet detailing all information associated with the University of Sheffield.
				</Thumbnail>
				<Thumbnail
					img-url="https://dig-ed-cat.acdh.oeaw.ac.at/static/webpage/images/network-collective.png"
				>
					Figure 10. The collective network visualisation brings together all digital editions in
					the
					<em class="italic">Catalogue.</em>
				</Thumbnail>
			</div>

			<div id="section15">
				<h3 class="text-xl my-3">Other menu pages</h3>
				<p>
					The
					<em class="italic">Login</em>
					menu item is for the project team's use only. All other pages should be self-explanatory.
				</p>
			</div>
		</div>
	</div>
</template>
