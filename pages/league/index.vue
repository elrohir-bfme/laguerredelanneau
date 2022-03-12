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
                                    <div class="text-left font-medium text-green-500">{{match.map}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{match.playerWin.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{match.playerLose.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">

                                    <div v-for="replay in match.replay" v-bind:key="replay._id" class="text-lg text-center">{{replay.name}}</div>
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
        isShowModal: false,
        data: []
        }
    },
    async fetch() {
      this.loading = false;
      this.cards =  await this.$strapi.find('leagues')
      this.matchs =  await this.$strapi.find('league-matchs')
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
        }
    },
}
</script>
<style>

</style>