<template>
	<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
		<div class="h-full flex items-center bg-gray-900 hover:bg-gray-800 border-gray-800 hover:border-gray-700 border p-4 rounded-lg">
		<img alt="team" class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" :src="img">
		<div class="flex-grow">
			<h2 class="text-white title-font font-medium">{{ name }}</h2>
			<p class="text-gray-600">{{ description }}</p>
		</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped>

</style>
