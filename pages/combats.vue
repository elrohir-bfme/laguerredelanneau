<template>
	<section class="text-gray-500 container mx-auto bg-lotr p-8 rounded-lg body-font overflow-hidden border-2 border-red-500">
		<template v-if="!loading">
			<template v-for="(tour, index) in f">
				<CombatsTour
					:tour="tour"
					v-bind:key="index"
				/>
				<hr
					v-if="index !== f.length - 1"
					v-bind:key="`hr${index}`"
					class="border-2 border-gray-800 mt-4 mb-4"
				/>
			</template>
		</template>
	</section>
</template>

<script>
export default {
	head: {
		title: "Combats - La Guerre de l'Anneau",
  	},
    data() {
		return {
			loading: true,
			f: [],

			factions: [],
			fights: [],
			regions: [],
			tours: [],
		};
	},
	async fetch() {
		this.loading = true;

	  	this.factions = await this.$http.$get("/api/factions.json");
	  	this.fights = await this.$http.$get("/api/fights.json");
	  	this.regions = await this.$http.$get("/api/regions.json");
	  	this.tours = await this.$http.$get("/api/tours.json");

		this.f = this.tours
			.filter(tour => !tour.preparation)
			.map(({id, name, start}) => ({
				fights: this.fights
					.filter(fight => fight.tour_id === id)
					.map(({region_id, winning_faction_id, losing_faction_id, youtube_link, replay_link}, index) => ({
						index: index + 1,
						map: this.regions.find(region => region.id === region_id)?.name || "?",
						winner: this.factions.find(faction => faction.id === winning_faction_id)?.name || "?",
						winner_img: this.factions.find(faction => faction.id === winning_faction_id).img,
						loser: this.factions.find(faction => faction.id === losing_faction_id)?.name || "?",
						loser_img: this.factions.find(faction => faction.id === losing_faction_id).img,
						youtube_link,
						replay_link,
					})),
				name,
				date: new Intl.DateTimeFormat("fr-FR", { weekday: "long",  day: "numeric", month: "long", year: "numeric" }).format(new Date(`${start} UTC+1`)),
			}));

		this.loading = false;
	}
}
</script>

<style scoped>
.bg-lotr {
  background-color: #18191c;
}
</style>
