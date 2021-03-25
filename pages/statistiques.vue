<template>
    <div class="container mx-auto bg-lotr rounded-lg">
        <h1 class="text-white text-center text-3xl pt-4 underline">Voici la page Statistiques</h1>

        <h2 class="text-white text-center text-2xl pt-4">Répartitions des joueurs de l'évènement</h2>
        <div class="w-3/6 mx-auto p-4">
          	<ChartDoughnutBase
			  	v-if="!loading"
			  	:chart-data="playersCount"
			/>
        </div>

        <h2 class="text-white text-center text-2xl pt-4">Répartition du nombre de territoire par faction</h2>
        <div class="w-3/6 mx-auto p-4 bg-gray-900">
			<ChartDoughnutBase
				v-if="!loading"
				:chart-data="regionsCount"
			/>
        </div>

        <h2 class="text-white text-center text-2xl pt-4">Tableau statistique des joueurs</h2>
        <vue-good-table
			class="m-4"
			:columns="playerStats.columns"
			:rows="playerStats.rows"
			:line-numbers="true"
			theme="nocturnal"
			:search-options="{
				enabled: true,
				placeholder: 'Rechercher',
			}"
			:sort-options="{
				enabled: true,
				initialSortBy: {
					field: 'name',
					type: 'asc',
					field: 'wins',
					type: 'desc',
				},
			}"
        >
			<template slot="table-row" slot-scope="props">
				<span v-if="props.column.field == 'faction'">
					<span :class="props.row.color">{{props.row.faction}}</span>
				</span>
				<span v-else-if="props.column.field == 'winrate'">
					<span class="float-right">{{props.row.ratio}}</span>
				</span>
				<span v-else>{{props.formattedRow[props.column.field]}}</span>
			</template>
        </vue-good-table>

    </div>
</template>

<script>
export default {
	head: {
		title: "Statistiques - La Guerre de l'Anneau",
  	},
	data() {
		return {
			loading: true,

			factions: [],
			players: [],
			regions: [],

			playersCount: {},
			regionsCount: {},
			playerStats: {},
		};
	},
   	methods: {
  	},
	async fetch() {
		this.players = await this.$http.$get("/api/players.json");
		this.regions = await this.$http.$get("/api/regions.json");
		this.factions = await this.$http.$get("/api/factions.json");

		const pr = this.factions.map(({color, id, name}) => ({
			name,
			color,
			players: this.players.filter(player => player.faction === id),
		}));

		this.playersCount = {
			labels: pr.map(f => f.name),
			datasets: [
				{
					backgroundColor: pr.map(f => f.color),
					borderColor: new Array(pr.length).fill("#636564"),
					data: pr.map(f => f.players.length),
				},
			],
		};

		const rr = this.factions.map(({color, id, name}) => ({
			name,
			color,
			regions: this.regions.filter(region => region.faction === id),
		}));

		this.regionsCount = {
			labels: rr.map(f => f.name),
			datasets: [
				{
					barPercentage: 0.5,
					backgroundColor: rr.map(f => f.color),
					borderColor: new Array(rr.length).fill("#636564"),
					data: rr.map(f => f.regions.length),
				},
			],
		};

		const ps = this.players.map(({faction, losses, name, wins}) => ({
			name,
			faction: this.factions.find(f => f.id === faction).name,
			wins,
			losses,
			winrate: (wins + losses) === 0 ? "Aucune parties jouées" : `${Math.round((wins / (wins + losses)) * 100)} %`,
		}));

		this.playerStats = {
			columns: ps,
			rows: [
				{
					label: "Nom",
					field: "name",
				},
				{
					label: "Faction",
					field: "faction",
					type: "string",
				},
				{
					label: "Victoire",
					field: "wins",
					type: "number",
				},
				{
					label: "Défaite",
					field: "losses",
					type: "number",
				},
				{
					label: "Ratio de victoire",
					field: "winrate",
					type: "string",
				},
			],
		}

		this.loading = false;
	},
};
</script>

<style scoped>
.bg-lotr {
  background-color: #18191c;
}
</style>
