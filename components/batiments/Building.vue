<template>
	<div class="p-4 w-1/3 md:w-1/3 sm:mb-0 mb-6">
		<div class="rounded-lg h-auto w-auto overflow-hidden">
			<img alt="content" :src="building.img">
		</div>
		<div class="bg-gray-900 mt-4 px-4 pb-4 pt-1 rounded-lg">
			<h2 class="text-xl font-medium text-indigo-400 mt-5">{{ building.name }}</h2>
			<p class="text-base leading-relaxed mt-2">{{ building.description }}</p>
			<p class="text-indigo-500 inline-flex items-center mt-3">Prix: {{ building.prix }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		building: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped>

</style>
