<template>
	<!-- <header class="shadow-sm">
		<nav class="mx-auto p-4 gap-4 flex items-center justify-center">
			<NuxtLink to="/">Home</NuxtLink>
			<NuxtLink to="/about">About</NuxtLink>
		</nav>
	</header> -->
	<header>
		<Navigation />
	</header>

	<div class="container mx-auto p-4">
		<slot />
	</div>
</template>

<style scoped>
	.router-link-exact-active {
		color: #12b488;
	}
</style>
