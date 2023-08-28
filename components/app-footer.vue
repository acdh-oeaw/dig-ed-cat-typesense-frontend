<template>
	<footer class="bg-background text-on-background">
		<div class="border-t">
			<div class="grid container w-full place-items-center gap-8 py-8 sm:grid-cols-2">
				<div>
					<img alt="" class="h-16" src="@/assets/images/logo-acdh-with-text.svg" />
				</div>
				<div>
					<img alt="" class="h-16" src="@/assets/images/logo-oeaw.svg" />
				</div>
			</div>
		</div>

		<small class="flex justify-center border-t py-2 text-center text-md">
			<span>
				&copy; {{ new Date().getUTCFullYear() }}
				<a class="hover:underline" href="https://oeaw.ac.at/acdh">ACDH-CH</a>
			</span>
			<span class="mx-2">|</span>
			<span>
				<NuxtLink class="hover:underline" href="/imprint">Imprint</NuxtLink>
			</span>
		</small>
	</footer>
</template>
