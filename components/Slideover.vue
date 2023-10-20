<script setup>
	const isOpen = ref(false)
</script>

<template>
	<div>
		<UButton label="Slideover" @click="isOpen = true" />

		<USlideover v-model="isOpen">
			<!-- Content -->
			<Navigation />
		</USlideover>
	</div>
</template>
