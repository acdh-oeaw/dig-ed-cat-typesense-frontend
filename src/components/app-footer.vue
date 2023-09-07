<template>
	<footer class="shadow bg-slate-100">
		<div class="container mx-auto p-2">
			<div class="flex flex-wrap gap-4 my-4 justify-around">
				<div>
					<a href="https://www.oeaw.ac.at/acdh/" class="navlink content-center">
						<img
							src="@/assets/images/logo-acdh-with-text.svg"
							class="h-16 w-auto mx-auto"
							alt="ACDHCH"
							title="Austrian Centre for Digital Humanities and Cultural Heritage"
						/>
					</a>
				</div>
				<div>
					<a href="http://www.ucl.ac.uk/dh/" class="navlink">
						<img
							src="@/assets/images/logo-ucldh.png"
							class="h-16 w-auto mx-auto"
							alt="UCLDH"
							title="UCL Centre for Digital Humanities"
						/>
					</a>
				</div>
			</div>
			<hr />
			<div class="my-2 font-bold">
				<nuxt-link href="/imprint">Imprint</nuxt-link>
			</div>
			<div class="my-2 font-bold">Contact</div>
			<div class="my-2">
				Greta Franzini
				<br />
				g.franzini.11@ucl.ac.uk
			</div>
			<div class="my-2 font-bold">Find more on the web</div>
			<div class="flex flex-wrap my-2">
				<a
					href="https://github.com/acdh-oeaw/dig-ed-cat-typesense-frontend"
					class="flex w-20 h-20 rounded-full bg-slate-600 m-1 items-center justify-around p-4"
				>
					<img src="@/assets/images/logo-github.png" alt="Github" title="Github" />
				</a>
				<a
					href="https://twitter.com/search?q=%23digEdsCat"
					class="flex w-20 h-20 rounded-full bg-slate-600 m-1 items-center justify-around p-4"
				>
					<img src="@/assets/images/logo-twitter.png" alt="Twitter" title="DigEdsCat on Twitter" />
				</a>
				<a
					href="https://www.researchgate.net/project/The-Digital-Editions-Catalogue-App-A-web-application-to-browse-curate-and-analyse-digital-editions"
					class="flex w-20 h-20 rounded-full bg-slate-600 m-1 items-center justify-around p-4"
				>
					<img
						src="@/assets/images/logo-researchgate.png"
						alt="Research gate"
						title="Research gate"
					/>
				</a>
				<a
					href="https://www.openaire.eu/search/dataset?datasetId=r37b0ad08687::c2ad7b8b5225d5abc748a1c6bbb07aeb"
					class="flex w-20 h-20 rounded-full bg-slate-600 m-1 items-center justify-around p-4"
				>
					<img src="@/assets/images/logo-openaire.png" alt="Open Aire" title="Open Aire" />
				</a>
				<a
					href="https://www.zotero.org/groups/2199751/digital_scholarly_editions"
					class="flex w-20 h-20 rounded-full bg-slate-600 m-1 items-center justify-around p-4"
				>
					<img src="@/assets/images/logo-zotero.png" alt="Zotero" title="Zotero" />
				</a>
				<a
					href="https://creativecommons.org/licenses/by/4.0/"
					class="flex w-20 h-20 rounded-full bg-slate-600 m-1 items-center justify-around p-4"
				>
					<img src="@/assets/images/logo-cc.png" alt="CC-BY-SA-4.0" title="CC-BY-SA-4.0 license" />
				</a>
			</div>
		</div>
	</footer>
</template>
