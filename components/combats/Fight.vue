<template>
	<div class="flex flex-col flex-grow flex-shrink gap-2 p-2 border-gray-800 border rounded-lg hover:bg-gray-800 hover:border-gray-900">
		<div class="flex justify-end">
			<span class="rounded-full h-6 w-6 flex items-center justify-center bg-gray-800 text-gray-500">{{ fight.index }}</span>
		</div>

		<div class="flex flex-row flex-grow gap-2 items-center justify-around">
			<img class="w-12 h-12 object-cover object-center rounded-full" :src="fight.winner_img">

			<div class="flex flex-col text-center">
				<p class="flex-shrink text-white title-font font-medium mb-2">{{ fight.map }}</p>
				<template v-if="true">
					<p class="flex-shrink text-gray-600 text-base">Gagnant: {{ fight.winner }}</p>
					<p class="flex-shrink text-gray-600 text-base">Perdant: {{ fight.loser }}</p>
				</template>
				<template v-else>
					<p class="flex-shrink text-gray-600">Contre</p>
				</template>
			</div>

			<img class="w-12 h-12 object-cover object-center rounded-full" :src="fight.loser_img">
		</div>

		<div class="flex justify-around">
			<a v-if="fight.youtube_link" target="_blank" :href="fight.youtube_link" class="m-1 px-3 py-2 border-2 text-lg tracking-wide rounded-lg transition duration-300 ease-in-out border-red-500 text-red-600 hover:bg-red-700 hover:text-red-400">Vidéo Youtube</a>
			<a v-if="fight.replay_link"  target="_blank" :href="fight.replay_link"  class="m-1 px-3 py-2 border-2 text-lg tracking-wide rounded-lg transition duration-300 ease-in-out border-indigo-500 text-indigo-600 hover:bg-indigo-900 hover:text-indigo-400">Replay</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		fight: {
			type: Object,
			required: true,
		}
	}
}
</script>

<style scoped>

</style>
