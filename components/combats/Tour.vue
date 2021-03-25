<template>
	<div class="flex flex-auto flex-wrap md:flex-no-wrap hover:bg-gray-900">
		<div class="md:w-40 md:mb-0 p-4 flex-shrink-0 flex flex-col">
			<h2 class="tracking-widest font-medium title-font text-white">{{ tour.name }}</h2>
			<span class="mt-1 text-gray-600 text-sm">{{ tour.date }}</span>
			<span v-if="tour.fights.length > 0" class="mt-1 text-gray-600 text-sm">{{ tour.fights.length }} matchs</span>
		</div>
		<div class="md:flex-grow gap-4 py-4 pr-4 flex flex-row flex-wrap">
			<template v-for="(fight, index) in tour.fights">
				<CombatsFight
					v-bind:key="`${fight.name}-${index}`"
					:fight="fight"
				/>
			</template>
			<template v-if="tour.fights.length === 0">
				<p class="text-2xl font-medium text-white title-font mb-2">Aucun Combat pour le moment !</p>
				<p class="leading-relaxed">Si vous voulez participer à l'évènement suffit de rejoindre le Discord et de prendre une faction. Pour plus d'informations aller voir les règles.</p>
				<a class="text-indigo-500 hover:text-indigo-600 inline-flex items-center mt-4" target="_blank" href="http://bit.ly/LaTerreduMilieu">Discord la Terre du Milieu →</a>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		tour: {
			type: Object,
			required: true,
		}
	}
}
</script>

<style scoped>

</style>
