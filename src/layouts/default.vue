import AppHeader from '@/components/app-header.vue'; import AppFooter from
'@/components/app-footer.vue';

<template>
	<div class="relative grid grid-rows-[auto_1fr_auto] min-h-screen h-full">
		<AppHeader />
		<slot />
		<AppFooter />
	</div>
</template>
