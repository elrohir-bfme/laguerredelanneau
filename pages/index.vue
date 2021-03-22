<template>
  	<div>
		<IndexTimer class="text-center text-white text-2xl p-4" />
		<section>
			<IndexMap
				:mapFolder="'/img/pages/index/'"
				:apiPath="'/api/'"
				:showLegend="true"
				:showHud="true"
			/>

			<!--
			<div class="fixed bottom-0 left-0" >
				<img class="absolute transform scale-125 regionimg" src="~assets/maps/doom.png">
				<div class="absolute regiontext">
					<p class="text-center text-yellow-500">{{title}}</p>
				</div>
				<img src="~assets/palantir.png">
			</div>

			<Modal
				class="hidden lg:flex md:flex"
				v-if="isShowModal"
				@close="toggleModal"
				:map="map"
				:region="region"
			/>

			<Panel
				:map="map"
				:region="region"
			/>

			<ModalMobile
				class="flex lg:hidden md:hidden mb-4"
				:map="map"
				:region="regionMobile"
			/>
			-->
		</section>

		<section class="container mx-auto mb-20">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
				<template v-for="(faction, index) in factions">
						<IndexFactionCard
							v-bind:key="index"
							v-bind:faction="faction"
						/>
				</template>
			</div>
		</section>
  	</div>
</template>

<script>
export default {
	head: {
		title: "La Guerre de l'Anneau",
		meta: [
			{
				hid: "description",
				name: "description",
				content: "Carte de la Guerre de l'Anneau",
			},
		],
  	},
  	data() {
		return {
			players: [],
			factions: [],
			regions: [],
		};
	},
  	methods: {
  	},
  	async fetch() {
		this.factions = (await this.$http.$get("/api/factions.json"))
			.map(faction => {
				faction.players = []; // add empty array of player in the faction
				faction.regions = []; // add empty array of regions owned by the faction
				return faction;
			})
			.sort((a, b) => a.id - b.id); // sort factions by id

		this.players = (await this.$http.$get("/api/players.json"))
			.map(player => {
				this.factions.find(faction => faction.id === player.faction)?.players.push(player); // add players to factions
				return player;
			});
		

		this.regions = (await this.$http.$get("/api/regions.json"))
			.map(region => {
				this.factions.find(faction => faction.id === region.faction)?.regions.push(region); // add region to factions
				return region;
			});
  	},
};
</script>

<style scoped>
.regiontext {
	bottom: 1.6em;
	/* left: 2em; */
	/* padding-left: 80px; */
	/* padding-right: 80px; */
	margin-left: 18%;
	margin-right: 100;
	text-align: center;
}

.regionimg {
	left: 3em;
	top: 26px;
}
</style>
