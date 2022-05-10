<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-4 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="font-medium mb-4 text-red-500 text-8xl">{{ $t('league.matchs') }}</h1>
    </div>

    <div class="flex">
    <div class="flex-grow">

    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full  mx-auto bg-gray-900 shadow-lg rounded-sm border border-orange-600">

            <header class="px-5 py-4 border-b border-orange-500 flex">
                <div class="flex-grow">
                    <h2 class="font-semibold text-white">{{ $t('league.games') }}</h2>
                </div>
            </header>

            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full border-2 border-gray-800 rounded-xl">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <!-- <div class="font-semibold text-left">{{ $t('league.name') }}</div> -->
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.date') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.bo') }}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody v-for="game in games" v-bind:key="game.id" class="text-sm divide-y divide-orange-500">
                            <tr>
                                <td class="p-2 whitespace-nowrap">
                                    <svg class="fill-current text-orange-600 h-12 w-12" @click="showReplays(game.id)" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"/></svg>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">
                                        {{ $moment(game.attributes.date).lang($i18n.locale).format('MMMM Do YYYY, h:mm:ss a') }}
                                        ({{ $moment(game.attributes.date).lang($i18n.locale).fromNow()}})
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">
                                        {{ game.attributes.bo}}
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="ids.length > 0 && ids.includes(game.id)">
                                <table class="table-auto w-full border-2 border-gray-800 rounded-xl">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">{{ $t('league.map') }}</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">{{ $t('league.win') }}</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">{{ $t('league.lose') }}</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">{{ $t('league.replay') }}</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-orange-500">
                                        <tr v-for="replay in game.attributes.replays" v-bind:key="replay.id">
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-left text-white">
                                                    {{replay.map.data && replay.map.data.attributes.name}}
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-left text-white">
                                                    {{replay.player_win.data && replay.player_win.data.attributes.name}}
                                                    (<span :class="`text-${factionList.find(o => o.name === (replay.faction_win.data && replay.faction_win.data.attributes.name)).color}-500`">
                                                        {{replay.faction_win.data && replay.faction_win.data.attributes.name}}
                                                    </span>)
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-left text-white">
                                                    {{replay.player_lose.data && replay.player_lose.data.attributes.name}}
                                                    (<span :class="`text-${factionList.find(o => o.name === (replay.faction_lose.data && replay.faction_lose.data.attributes.name)).color}-500`">
                                                    {{replay.faction_lose.data && replay.faction_lose.data.attributes.name}}
                                                    </span>)
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap" v-if="replay.replay.data !== null">
                                                <a target="_blank" :href="`https://api.laterredumilieu.fr${replay.replay.data.attributes.url}`" class="bg-orange-900 hover:bg-orange-800 text-white font-bold py-2 px-4 mx-2 rounded inline-flex items-center">
                                                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                                    <span>{{replay.replay.data.attributes.name}}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
            games: [],
            ids: [],
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
    async asyncData({ $axios }) {
        const query = qs.stringify({
            fields: '*',
            populate: {
                populate: '*',
                replays: {

                    populate: '*',
                    faction_win: {
                        populate: '*'
                    },
                    faction_lose: {
                        populate: '*'
                    },
                    map: {
                        populate: '*'
                    },
                    player_win: {
                        populate: '*'
                    },
                },
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
        return { games }
    },
        computed:{

        },
        methods: {  
            showReplays(id){
                console.log(id, this.ids, "showREPLAY")
                if(!this.ids.includes(id)){          //checking weather array contain the id
                    this.ids.push(id);               //adding to array because value doesnt exists
                }else{
                    this.ids.splice(this.ids.indexOf(id), 1);  //deleting
                }
            }
        },
}
</script>
<style>

</style>