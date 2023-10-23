<script setup lang="ts">
	const projects = [
		{ title: "Learn Together", url: "https://learntogether.app" },
		{ title: "Crypto Watcher", url: "https://cryptowatcher.app" },
	]
</script>

<template>
	<h1 class="mb-8 text-2xl text-center">Projects</h1>
	<div class="flex justify-center gap-4 flex-wrap">
		<ProjectCard v-for="project in projects" :project="project" />
	</div>
</template>

<style lang="css" scoped></style>
