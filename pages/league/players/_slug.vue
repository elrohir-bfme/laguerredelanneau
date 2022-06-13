<template>
  <section class="text-white body-font">
  <div class="lg:container sm:m-0 lg:mx-auto lg:px-5 py-4 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="font-medium mb-4 text-red-500 text-8xl">{{ $t('league.player') }}</h1>
    </div>

    <div class="flex">
    <div class="flex-grow">

    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full  mx-auto bg-gray-900 shadow-lg rounded-sm border border-orange-600">
            <header class="px-5 py-4 border-b border-orange-500 flex">
                <div class="flex-grow">
                    <h2 class="font-semibold text-white">{{ $t('league.player') }}</h2>
                </div>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full border-2 border-gray-800 rounded-xl">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.rang') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.elo') }}</div>
                                </th>
                                <!-- <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.main') }}</div>
                                </th> -->
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.players') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.win') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.lose') }}</div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-left">{{ $t('league.winRatio') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.games') }}</div>
                                </th>
                                <th class="hidden md:table-cell p-2 whitespace-nowrap" v-for="fac in factionList" v-bind:key="fac.name">
                                    <div  class="font-semibold text-left">{{$t(`league.${fac.name}`)}}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-orange-500">
                            <tr class="hover-gray-800">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{player}}</div>
                                </td>
                                <!-- <tds -->
                                <!-- <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{player.attributes.elo}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img v-if="player.attributes.img && player.attributes.img.data" class="rounded-full" :src="`https://api.laterredumilieu.fr${player.attributes.img.data.attributes.url}`" width="40" height="40" :alt="player.attributes.name">
                                        </div>
                                        <div class="font-medium text-white">{{player.attributes.name}}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.wins}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.loses}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.wins > 0 || player.loses > 0 ? `${((player.wins / (player.loses + player.wins)) * 100).toFixed(0)}%`  : "Aucun Match"}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.wins + player.loses}}</div>
                                </td>
                                <td v-for="fac in factionList" v-bind:key="fac.name" class="hidden md:table-cell p-2 w-1/12 whitespace-nowrap border-t" :class="`bg-${fac.color}-${fac.color == 'gray' ? 800 : 900} border-${fac.color}-600`">
                                    <div v-if="player.statsFactionWin[fac.name] || player.statsFactionWin[fac.name]" class="flex items-center justify-center text-white text-sm text-center">
                                        <p>
                                            {{`${(player.statsFactionWin[fac.name] >= 0 || player.statsFactionLose[fac.name] >= 0) ? ((((player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0) / ((player.statsFactionLose[fac.name] ? player.statsFactionLose[fac.name] : 0) + (player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0))) * 100).toFixed(0)) : "0"}%`}}
                                        </p>
                                    </div>
                                    <div v-if="player.statsFactionWin[fac.name] || player.statsFactionWin[fac.name]" class="w-full h-2 bg-indigo-100 rounded-full mb-4">
                                        <div 
                                            :style="`width: ${Object.keys(player.statsFactionLose).length > 0 || Object.keys(player.statsFactionWin).length > 0 ? (((player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0) / ((player.statsFactionLose[fac.name] ? player.statsFactionLose[fac.name] : 0) + (player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0))) * 100).toFixed(0) : 0}%;`" 
                                            class="h-full text-center text-xs rounded-full"
                                            :class="`from-${fac.color}-500 to-${fac.color}-700 ${(Object.keys(player.statsFactionLose).length > 0 || Object.keys(player.statsFactionWin).length > 0) && (player.statsFactionLose[fac.name] || player.statsFactionWin[fac.name]) ? 'bg-gradient-to-r' : ''}`"
                                        >
                                        </div>
                                    </div>
                                    <div v-if="player.statsFactionWin[fac.name] || player.statsFactionWin[fac.name]" class="flex items-center justify-between text-white text-sm">
                                        <p>
                                            {{player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0}}V
                                        </p>
                                        <p>
                                            {{player.statsFactionLose[fac.name] ? player.statsFactionLose[fac.name] : 0}}D
                                        </p>
                                    </div>
                                    <div v-else class=" text-white text-sm">
                                        <p class="text-center">-</p>
                                    </div>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>


    </div>
    </div>

  </div>
</section>
</template>

<script>
const qs = require('qs');
export default {
  layout: "league",
    data() {
        return {
            loading: false,
            player: [],
            info: false,
            factionList: [
                {name: "Men", color: "blue"}, 
                {name: "Elves", color: "green"}, 
                {name: "Dwarves", color: "yellow"}, 
                {name: "Mordor", color: "red"},
                {name: "Isengard", color: "gray"},
                {name: "Goblins", color: "orange"},
                {name: "Angmar", color: "purple"}
            ],
        }
    },
    async asyncData({ $strapi, $axios, params }) {
        let player = await $strapi.findOne('players', params.slug, { populate: '*'})
        const query = qs.stringify({
            fields: '*',
            populate: {
                populate: '*',
                replays: {
                    populate: '*'
                },
                elo: {
                    populate: '*'
                }
            },
            pagination: {
                page: 1,
                pageSize: 50,
            },
        }, {
        encodeValuesOnly: true,
        });

        const { data } = await $axios.$get(`https://api.laterredumilieu.fr/api/games?${query}`); 
        let games = data

        const slug = params.slug

        return { slug, player, games }
    },
    computed:{
        sortedGames() {
            let p = this.player.data.attributes.name
            let newPlayer = this.player.data.attributes;
            newPlayer.replays = []

            for (const g of this.games) {
                if(p == g.attributes.elo[0].player_lose.name || 
                p == g.attributes.elo[0].player_win.name) {

                    newPlayer.replays.push(g.attributes)
                    console.log(g.attributes)
                }
            }

            return newPlayer
        }
    },
}
</script>