<template>
  <section class="text-gray-400 body-font">
  <div class="container px-5 py-4 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="font-medium mb-4 text-red-500 text-8xl">{{ $t('league.matchs') }}</h1>
    </div>

    
    <div class="flex space-x-2 justify-center mb-8">
        <div>
            <button @click="paginationHandle(-1)" class="flex-shrink-0 text-white bg-orange-600 border-0 py-2 px-8 focus:outline-none hover:bg-orange-700 rounded text-lg mt-10 sm:mt-0">Page d'avant</button>
            <button @click="sortGames()" class="flex-shrink-0 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg mt-10 sm:mt-0">{{ $t('league.sort') }} page {{page}}</button>
            <button @click="paginationHandle(1)" class="flex-shrink-0 text-white bg-orange-600 border-0 py-2 px-8 focus:outline-none hover:bg-orange-700 rounded text-lg mt-10 sm:mt-0">Page suivante</button>
        </div>
    </div>

    <div class="flex">

    
    <div class="flex-grow">

    <div class="flex flex-col justify-center h-full">
        <div class="w-full  mx-auto bg-gray-900 shadow-lg rounded-sm border border-orange-600">

            <header class="px-5 py-4 border-b border-orange-500 flex">
                <div class="flex-grow">
                    <h2 class="font-semibold text-white">{{ $t('league.games') }}</h2>
                </div>
            </header>

            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full border-2 border-gray-800 rounded-xl">
                        <!-- <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.date') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.bo') }}</div>
                                </th>
                            </tr>
                        </thead> -->
                        <tbody v-for="game in games" v-bind:key="game.id" class="text-sm divide-y divide-orange-500">
                            <!-- <tr>
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
                            </tr> -->
                            <tr>
                                <table class="table-auto md:table-fixed w-full border-2 border-gray-800 rounded-xl">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-justify">{{ $t('league.map') }}</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-justify">{{ $t('league.win') }}</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-justify">{{ $t('league.lose') }}</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-justify">{{ $t('league.replay') }} -
                                                    {{ $moment(game.attributes.createdAt).lang($i18n.locale).format('MMMM Do YYYY, h:mm:ss a') }}
                                                    ({{ $moment(game.attributes.createdAt).lang($i18n.locale).fromNow()}})
                                                </div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-right">
                                                    ⌛ Duration of the game
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-orange-500">
                                        <tr>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-justify text-white">
                                                    {{game.attributes.map.data && game.attributes.map.data.attributes.name}}
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-justify text-white">
                                                    {{game.attributes.player_win.data && game.attributes.player_win.data.attributes.name}}
                                                    (<span :class="`text-${factionList.find(o => o.name === (game.attributes.faction_win.data && game.attributes.faction_win.data.attributes.name)).color}-500`">
                                                        {{game.attributes.faction_win.data && game.attributes.faction_win.data.attributes.name}}
                                                    </span>)
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap">
                                                <div class="text-lg text-justify text-white">
                                                    {{game.attributes.player_lose.data && game.attributes.player_lose.data.attributes.name}}
                                                    (<span :class="`text-${factionList.find(o => o.name === (game.attributes.faction_lose.data && game.attributes.faction_lose.data.attributes.name)).color}-500`">
                                                    {{game.attributes.faction_lose.data && game.attributes.faction_lose.data.attributes.name}}
                                                    </span>)
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap" v-if="game.attributes.replay.data !== null">
                                                <div class="text-justify text-white">
                                                    <a target="_blank" :href="`https://api.laterredumilieu.fr${game.attributes.replay.data.attributes.url}`" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 mx-2 rounded inline-flex items-center">
                                                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                                        <span>{{game.attributes.replay.data.attributes.name}}</span>
                                                    </a>
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap" v-else>
                                                <div class="text-lg text-justify text-white">
                                                    -
                                                </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap" v-if="game.attributes.date_end !== null && game.attributes.date_start !== null">
                                                 <div class="text-lg text-right text-white">
                                                    {{ Math.ceil($moment.duration($moment(game.attributes.date_end).diff($moment(game.attributes.date_start))).asMinutes()) }} Minutes
                                                 </div>
                                            </td>
                                            <td class="p-2 whitespace-nowrap" v-else>
                                                <div class="text-lg text-right text-white">
                                                    -
                                                </div>
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
            sortType: false,
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
            page: 1
        }
    },
    async asyncData({ $axios }) {
        const query = qs.stringify({
            sort: ['createdAt:desc'],
            fields: ['date_start', 'date_end', 'createdAt'],
            populate: {
                faction_lose: {
                    fields: ['name'],
                },
                faction_win: {
                    fields: ['name'],
                },
                player_win: {
                    fields: ['name'],
                },
                player_lose: {
                    fields: ['name'],
                },
                replay: {
                    fields: ['url', 'name'],
                },
                map: {
                    fields: ['name']
                }
            },
            pagination: {
                page: 1,
                pageSize: 5000
            },
        }, {
        encodeValuesOnly: true,
        });

        const { data } = await $axios.$get(`https://api.laterredumilieu.fr/api/games?${query}`); 
        let games = data;
        let sortType = false;
        return { games, sortType }
    },
        methods: {  
            async paginationHandle(p){
                if(this.page == 1 && p == -1){
                    return true;
                } else {
                    const query = qs.stringify({
                        sort: ['createdAt:desc'],
                        fields: ['date_start', 'date_end', 'createdAt'],
                        populate: {
                            faction_lose: {
                                fields: ['name'],
                            },
                            faction_win: {
                                fields: ['name'],
                            },
                            player_win: {
                                fields: ['name'],
                            },
                            player_lose: {
                                fields: ['name'],
                            },
                            replay: {
                                fields: ['url'],
                            },
                            map: {
                                fields: ['name']
                            }
                        },
                        pagination: {
                            page: this.page + p,
                            pageSize: 20,
                        },
                }, {
                encodeValuesOnly: true,
                }); 

                const { data } = await this.$axios.$get(`https://api.laterredumilieu.fr/api/games?${query}`); 
                this.games = data;
                this.page += p;
                }
                
            },
            showReplays(id){
                if(!this.ids.includes(id)){          //checking weather array contain the id
                    this.ids.push(id);               //adding to array because value doesnt exists
                }else{
                    this.ids.splice(this.ids.indexOf(id), 1);  //deleting
                }
            },
            sortGames() {
                let sortyu = this.sortType;

                let test = this.games.sort(function(a,b){
                    if(sortyu){
                        return new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt);
                    } else {
                        return new Date(a.attributes.createdAt) - new Date(b.attributes.createdAt);
                    }
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                });
                this.sortType = !sortyu
                this.games = test

            },
        },
}
</script>
<style>

</style>