<template>
	<div>
		<UButton label="Modal" @click="isOpen = true" />

		<UModal v-model="isOpen">
			<!-- Content -->
		</UModal>
	</div>
</template>

<script setup>
	const isOpen = ref(false)
</script>
