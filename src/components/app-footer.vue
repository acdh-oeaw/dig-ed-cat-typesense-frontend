<template>
	<footer class="w-screen shadow z-10">
		<div
			class="grid mx-auto sm:grid-cols-2 gap-8 px-8 py-4 text-xs sm:max-w-container sm:text-sm"
			:class="$route.path != '/' && 'grayscale'"
		>
			<div>
				<img src="@/assets/images/logo-acdh-with-text.svg" alt="" class="max-h-16 mx-auto" />
			</div>
			<div>
				<img src="@/assets/images/logo-ucldh.png" alt="" class="max-h-16 mx-auto" />
			</div>
		</div>
	</footer>
</template>
