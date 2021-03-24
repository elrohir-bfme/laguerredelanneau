<template>
	<section>
		<div class="text-center py-4 px-4">
			<IndexTag
				:text="hoveredRegion.name"
				:iconPath="`${ this.mapFolder }/map legend/arrow.svg`"
				backgroundColor="bg-indigo-800"
			/>
			<IndexTag
				:text="`${playerCount} Joueurs`"
				:iconPath="`${ this.mapFolder }/map legend/smiley.svg`"
				backgroundColor="bg-gray-800"
			/>
			<IndexTag
				text="Port"
				:iconPath="`${ this.mapFolder }/map legend/anchor.svg`"
				backgroundColor="bg-blue-800"
			/>
			<IndexTag
				text="Forteresse"
				:iconPath="`${ this.mapFolder }/map legend/forteress.svg`"
				backgroundColor="bg-gray-800"
			/>
			<IndexTag
				text="Avant-poste"
				:iconPath="`${ this.mapFolder }/map legend/shield.svg`"
				backgroundColor="bg-gray-800"
			/>
			<IndexTag
				text="Emplacement de Construction"
				:iconPath="`${ this.mapFolder }/map legend/tower.svg`"
				backgroundColor="bg-gray-800"
			/>
			<IndexTag
				text="Bateau"
				:iconPath="`${ this.mapFolder }/map legend/boat.svg`"
				backgroundColor="bg-gray-800"
			/>
			<IndexTag
				text="Combat"
				:iconPath="`${ this.mapFolder }/map legend/sword.svg`"
				backgroundColor="bg-gray-800"
			/>
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
