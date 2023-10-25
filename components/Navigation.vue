<script setup>
	const isOpen = ref(false)
</script>

<template>
	<div>
		<!-- <UButton label="Open" @click="isOpen = true" /> -->
		<UIcon
			name="i-heroicons-bars-3"
			class="text-right p-3 ml-auto my-8 mr-8 block hover:cursor-pointer"
			@click="isOpen = true"
		/>

		<USlideover v-model="isOpen">
			<UCard
				class="flex flex-col flex-1"
				:ui="{
					body: { base: 'flex-1' },
					ring: '',
					divide: 'divide-y divide-gray-100 dark:divide-gray-800',
				}"
			>
				<template #header>
					<!-- Content -->
					<nav class="p-4">
						<NuxtLink to="/">Jeremy Kung</NuxtLink>
					</nav>
				</template>

				<!-- Content -->
				<nav class="mx-auto p-4 gap-4 flex flex-col justify-center">
					<NuxtLink to="/">Home</NuxtLink>
					<NuxtLink to="/projects">Projects</NuxtLink>
					<NuxtLink to="/blog">Blog</NuxtLink>
					<NuxtLink to="/about">About</NuxtLink>
				</nav>

				<template #footer>
					<!-- Content -->
				</template>
			</UCard>
		</USlideover>
	</div>
</template>
