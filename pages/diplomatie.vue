<template>
    <div v-if="!loading" class="mt-8 p-4 bg-lotr container mx-auto rounded-lg text-white">
    	<h1 class="text-3xl sm:text-4xl text-white p-2 antialiased sm:subpixel-antialiased md:antialiased text-center underline">Diplomatie</h1>
    	<h2 class="text-2xl sm:text-3xl text-white p-2 antialiased sm:subpixel-antialiased md:antialiased text-center">Tour Actuel : {{ getTourName(getCurrentTourId()) }}</h2>
    	<table class="table-auto overflow-x-auto container table-fixed">
			<tr>
				<td></td>
				<template v-for="(faction, index) in factions">
					<th scope="col" class="border border-gray-800" v-bind:key="`col-${index}`">
						<img :src="faction.img" />
					</th>
				</template>
			</tr>
			<template v-for="(faction_y, index_y) in factions">
				<tr v-bind:key="`row-${index_y}`">
					<th scope="row" class="border border-gray-800">
						<img :src="faction_y.img" />
					</th>
					<template v-for="(faction_x, index_x) in factions">
						<td v-bind:key="`${index_y}-${index_x}`" :class="{'bg-gray-900': index_y === index_x, 'border border-gray-800': index_x >= index_y}">
							<template v-if="index_x > index_y">
								<div class="text-center border-gray-600">
									<template v-if="getAlliance(faction_x, faction_y).length">
										<span class="text-green-600 block">Alliance</span>
										<br>
										<template v-for="(alliance, index) in getAlliance(faction_x, faction_y)">
											<span class="w-min text-sm mx-2 block" v-bind:key="`${faction_y}-${faction_x}-${index}`" v-if="alliance.endTourId !== null" >Du {{ getTourName(alliance.startTourId) }} à la fin du {{ getTourName(alliance.endTourId) }}</span>
											<span class="w-min text-sm mx-2 block" v-bind:key="`${faction_y}-${faction_x}-${index}`" v-else>Depuis le {{ getTourName(alliance.startTourId) }}</span>
										</template>
									</template>
									<span v-else class="text-red-600">En guerre</span>
								</div>
							</template>
						</td>
					</template>
				</tr>
			</template>
        </table>
    </div>
</template>

<script >
export default {
	head: {
		title: "Diplomatie - La Guerre de l'Anneau",
  	},
    data() {
        return {
			loading: true,

			tours: [],
            factions: [],
			alliances: [],
        }
    },
	methods: {
		getAlliance(faction1, faction2) {
			return this.alliances
				.filter(a => a.factions.includes(faction1.id) && a.factions.includes(faction2.id))
				.filter(a => a.endTourId === null || a.endTourId >= this.getCurrentTourId());
		},
		getCurrentTourId() {
			return this.tours
				.find(tour => (new Date(`${tour.end} UTC+1`) > new Date()))?.id;
		},
		getTourName(tourId) {
			return this.tours.find(t => t.id === tourId)?.name;
		},
	},
    async fetch() {
		this.tours = await this.$http.$get("/api/tours.json");
        this.factions = await this.$http.$get("/api/factions.json");
        this.alliances = await this.$http.$get("/api/alliances.json");

		this.loading = false;
    },
};
</script>

<style scoped>

.bg-lotr {
  background-color: #18191c;
}
</style>
