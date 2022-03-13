<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="font-medium mb-4 text-green-200 text-8xl">League de JLS</h1>
    </div>

    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full max-w-2xl mx-auto bg-gray-900 shadow-lg rounded-sm border border-orange-600">
            <header class="px-5 py-4 border-b border-orange-500">
                <h2 class="font-semibold text-white">La ligue de JLS</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Rang</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Joueur</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Main</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Match joué</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">Ratio de victoires</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-orange-500">
                            <tr v-for="card in sortedData" v-bind:key="card.name">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{card.rang}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"></div>
                                        <div class="font-medium text-white">{{card.name}}</div>
                                    </div>
                                </td>
                                
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">{{card.main}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{card.win.length + card.lose.length}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{card.win.length > 0 || card.lose.length > 0 ? `${((card.win.length / (card.lose.length + card.win.length)) * 100).toFixed(2)}%`  : "Aucun Match"}}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <header class="px-5 py-4 border-b border-orange-500">
                <h2 class="font-semibold text-white">Matchs</h2>
            </header>

            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Date</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Map</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Victoire</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Défaite</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Replay</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-orange-500">
                            <tr v-for="match in matchs" v-bind:key="match._id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{match.date}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">{{match.map.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{match.playerWin.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{match.playerLose.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <a target="_blank" :href="`https://api.laterredumilieu.fr${replay.url}`" v-for="(replay, index) in match.replay" v-bind:key="replay._id"  class="bg-orange-900 hover:bg-orange-800 text-white font-bold py-2 px-4 mx-2 rounded inline-flex items-center">
                                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                        <span>Replay {{index +1}}</span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <header class="px-5 py-4 border-b border-orange-500">
                <h2 class="font-semibold text-white">Factions</h2>
            </header>

            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Faction</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Victoire</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Défaite</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Ratio de victoires</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Nombre de Matchs</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-orange-500">
                            <tr v-for="faction in factions" v-bind:key="faction._id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{faction.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">{{faction.matchs_win.length}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{faction.matchs_lose.length}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{faction.matchs_win.length > 0 || faction.matchs_lose.length > 0 ? `${((faction.matchs_win.length / (faction.matchs_lose.length + faction.matchs_win.length)) * 100).toFixed(2)}%`  : "Aucun Match"}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{faction.matchs_win.length + faction.matchs_lose.length}}</div>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  layout: "gde",
    data() {
        return {
        loading: false,
        cards: [],
        matchs: [],
        maps: [],
        factions: [],
        isShowModal: false,
        data: []
        }
    },
    async fetch() {
      this.loading = false;
      this.cards =  await this.$strapi.find('leagues')
      this.matchs =  await this.$strapi.find('league-matchs')
      this.factions =  await this.$strapi.find('league-factions')
      this.maps =  await this.$strapi.find('league-maps')
      this.loading = true;
    },
    methods: {
      toggleModal(value) {
        this.data = value;
        this.isShowModal = !this.isShowModal;
      },
    },
    computed:{
        sortedData() {
            return this.cards.map(item=>item).sort((a,b)=> a.rang - b.rang)
        },
        sortedFaction() {

            return this.matchs.reduce(function(obj, v) {
                obj[v.factionLose] = { lose: (obj[v.factionLose] || 0) + 1};
                obj[v.factionWin] = { win: (obj[v.factionWin] || 0) + 1};
                return obj;
            }, {})

            // {
            //     name: "nain",
            //     win: 42,
            //     lose: 40,
            // }
            // return this.matchs.map(match=> {
            //     match
            // })
        }
    },
}
</script>
<style>

</style>