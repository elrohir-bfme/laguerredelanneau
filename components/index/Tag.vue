<template>
	<div :class="backgroundColor" class="p-2 inline-flex flex-row gap-2 items-center text-gray-100 rounded-full" role="alert">
		<span class="uppercase text-sm">{{ text }}</span>
		<img v-if="iconPath" :src="iconPath" class="icon" />
	</div>
</template>

<script>
export default {
	props: {
		text: {
			type: [String, Number],
			required: true,
		},
		iconPath: {
			type: String,
			required: false,
		},
		backgroundColor: {
			type: String,
			required: true,
		}
	}
}
</script>

<style scoped>
.icon {
	height: 20px;
	width: 20px;
}
</style>
