<template>
	<NuxtLink :to="`https://${project.url}`">
		<UCard class="w-64">
			<h3>{{ project.title }}</h3>

			<template #footer> Footer </template>
		</UCard>
	</NuxtLink>
</template>

<script setup>
	const { project } = defineProps(["project"])
</script>
