<template>
	<section>
		<div class="text-center py-4 px-4">
			<div class="my-1 p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full inline-flex" role="alert">
				<span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-sm mr-3">Carte</span>
				<span class="mr-2 text-left flex-auto">{{ hoveredRegion.name }}</span>
				<img :src="`${ this.mapFolder }/map legend/arrow.svg`" class="icon" />
			</div>
			<div class="my-1 p-2 bg-gray-800 items-center text-gray-100 leading-none rounded-full inline-flex" role="alert">
				<span class="flex rounded-full bg-gray-700 uppercase px-2 py-1 text-sm mr-3">Joueurs</span>
				<span class="mr-2 text-left flex-auto">{{ playerCount }}</span>
				<img :src="`${ this.mapFolder }/map legend/smiley.svg`" class="icon" />
			</div>
			<div class="my-1 p-2 bg-blue-800 items-center text-blue-100 leading-none rounded-full inline-flex" role="alert">
				<span class="flex rounded-full bg-blue-500 uppercase px-2 py-1 text-sm mr-3">Ports</span>
				<img :src="`${ this.mapFolder }/map legend/anchor.svg`" class="icon" />
			</div>
			<div class="my-1 p-2 bg-gray-800 items-center text-gray-100 leading-none rounded-full inline-flex" role="alert">
				<span class="flex rounded-full bg-gray-700 uppercase px-2 py-1 text-sm mr-3">Forteresses</span>
				<img :src="`${ this.mapFolder }/map legend/forteress.svg`" class="icon" />
			</div>
			<div class="my-1 p-2 bg-gray-800 items-center text-gray-100 leading-none rounded-full inline-flex" role="alert">
				<span class="flex rounded-full bg-gray-700 uppercase px-2 py-1 text-sm mr-3">Avant-Postes</span>
				<img :src="`${ this.mapFolder }/map legend/shield.svg`" class="icon" />
			</div>
			<div class="my-1 p-2 bg-gray-800 items-center text-gray-100 leading-none rounded-full inline-flex" role="alert">
				<span class="flex rounded-full bg-gray-700 uppercase px-2 py-1 text-sm mr-3">Emplacements de Construction</span>
				<img :src="`${ this.mapFolder }/map legend/tower.svg`" class="icon" />
			</div>
			<div class="my-1 p-2 bg-gray-800 items-center text-gray-100 leading-none rounded-full inline-flex" role="alert">
				<span class="flex rounded-full bg-gray-700 uppercase px-2 py-1 text-sm mr-3">Bateaux</span>
				<img :src="`${ this.mapFolder }/map legend/boat.svg`" class="icon" />
			</div>
			<div class="my-1 p-2 bg-gray-800 items-center text-gray-100 leading-none rounded-full inline-flex" role="alert">
				<span class="flex rounded-full bg-gray-700 uppercase px-2 py-1 text-sm mr-3">Combats</span>
				<img :src="`${ this.mapFolder }/map legend/sword.svg`" class="icon" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "MapLegend",
	props: {
		mapFolder: {
			type: String,
			required: true,
		},
		hoveredRegion: {
			type: Object,
			required: false,
		},
		playerCount: {
			type: Number,
			required: true,
		}
	}
}
</script>

<style>
.icon {
	height: 20px;
	width: 20px;
}
</style>
