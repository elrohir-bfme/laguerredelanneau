<template>
  <section class="text-white body-font">
  <div class="lg:container sm:m-0 lg:mx-auto lg:px-5 py-4 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="font-medium mb-4 text-red-500 text-8xl">{{ $t('league.maps') }}</h1>
    </div>

    <div class="flex">
    <div class="flex-grow">

    <div class="flex flex-col justify-center h-full">
        <div class="w-full  mx-auto bg-gray-900 shadow-lg rounded-sm border border-orange-600">
            <header class="px-5 py-4 border-b border-orange-500 flex">
                <div class="flex-grow">
                    <h2 class="font-semibold text-white">{{ $t('league.maps') }}</h2>
                </div>
            </header>

            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full border-2 border-gray-800 rounded-xl">
                        <thead class="text-xs font-semibold uppercase text-white bg-gray-800">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.name') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.img') }}</div>
                                </th>
                                <!-- <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.nbMatchs') }}</div>
                                </th> -->
                                <th class="p-2 whitespace-nowrap hidden md:table-cell" v-for="fac in factionList" v-bind:key="fac.name">
                                    <div class="font-semibold text-center">{{$t(`league.${fac.name}`)}}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-orange-500">
                            <tr v-for="map in sortedMaps" v-bind:key="map._id">
                                <td class="p-2">
                                    <div class="text-left text-gray-100 ml-4">
                                    {{map.attributes.name}} ({{map.wins + map.loses}}) <br/><br/>
                                    <span class="hidden sm:inline m-4 text-xs text-gray-300">{{map.attributes.description}}</span>
                                    </div>
                                </td>
                                <!-- <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{map.attributes.description}}</div>
                                </td> -->
                                <td class="p-2">
                                    <img class="h-auto rounded-3xl" :src="`https://api.laterredumilieu.fr${map.attributes.minimap.data.attributes.url}`">
                                </td>
                                <td v-for="fac in factionList" v-bind:key="fac.name" class="hidden md:table-cell p-2 w-1/12 whitespace-nowrap border-t" :class="`bg-${fac.color}-${fac.color == 'gray' ? 800 : fac.color == 'yellow' ? 400 : 900} border-${fac.color}-600`">
                                    <div v-if="map.statsFactionWin[fac.name] || map.statsFactionWin[fac.name]" class="flex items-center justify-center text-sm text-center" :class="fac.color == 'yellow' ? 'text-gray-800' : 'text-white'">
                                        <p>
                                            {{`${(map.statsFactionWin[fac.name] >= 0 || map.statsFactionLose[fac.name] >= 0) ? ((((map.statsFactionWin[fac.name] ? map.statsFactionWin[fac.name] : 0) / ((map.statsFactionLose[fac.name] ? map.statsFactionLose[fac.name] : 0) + (map.statsFactionWin[fac.name] ? map.statsFactionWin[fac.name] : 0))) * 100).toFixed(0)) : "0"}%`}}
                                        </p>
                                    </div>
                                    <div v-if="map.statsFactionWin[fac.name] || map.statsFactionWin[fac.name]" class="w-full h-2 bg-indigo-100 rounded-full mb-2" :class="fac.color == 'yellow' ? 'ring-1 ring-gray-900' : 'border-0'">
                                        <div 
                                            :style="`width: ${Object.keys(map.statsFactionLose).length > 0 || Object.keys(map.statsFactionWin).length > 0 ? (((map.statsFactionWin[fac.name] ? map.statsFactionWin[fac.name] : 0) / ((map.statsFactionLose[fac.name] ? map.statsFactionLose[fac.name] : 0) + (map.statsFactionWin[fac.name] ? map.statsFactionWin[fac.name] : 0))) * 100).toFixed(0) : 0}%;`" 
                                            class="h-full text-center text-xs rounded-full"
                                            :class="`from-${fac.color}-500 to-${fac.color}-700 ${(Object.keys(map.statsFactionLose).length > 0 || Object.keys(map.statsFactionWin).length > 0) && (map.statsFactionLose[fac.name] || map.statsFactionWin[fac.name]) ? 'bg-gradient-to-r' : ''}`"
                                        >
                                        </div>
                                    </div>
                                    <div v-if="map.statsFactionWin[fac.name] || map.statsFactionWin[fac.name]" class="flex items-center justify-between text-sm" :class="fac.color == 'yellow' ? 'text-gray-700' : 'text-gray-200'">
                                        <p>
                                            {{map.statsFactionWin[fac.name] ? map.statsFactionWin[fac.name] : 0}}V
                                        </p>
                                        <p>
                                            {{map.statsFactionLose[fac.name] ? map.statsFactionLose[fac.name] : 0}}D
                                        </p>
                                    </div>
                                    <div v-else class="text-sm" :class="fac.color == 'yellow' ? 'text-gray-700' : 'text-white'">
                                        <p class="text-center">-</p>
                                    </div>
                                </td>
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
        maps: [],
        factions: [],
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
        
        const queryMap = qs.stringify({
            fields: ['name','description', 'id'],
            populate: {
                minimap: {
                    fields:  ['url']
                }
            },
            pagination: {
                page: 1,
                pageSize: 500,
            },
        }, {
        encodeValuesOnly: true,
        });

        const { data } = await $axios.$get(`https://api.laterredumilieu.fr/api/maps?${queryMap}`); 

        const query = qs.stringify({
            sort: ['date_start:desc'],
            fields: ['date_start', 'date_end'],
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
                page: 1,
                pageSize: 5000
            },
        }, {
        encodeValuesOnly: true,
        });

        const parties = await $axios.$get(`https://api.laterredumilieu.fr/api/games?${query}`); 
        let games = parties.data
        let maps = data
        return { maps, games }
    },
    computed:{
        sortedMaps() {
            if(this.maps){
                let newMaps = this.maps.map(f => {
                    let newObject = {
                        statsFactionWin: {},
                        statsFactionLose: {},
                        wins: 0,
                        loses: 0
                    }

                        this.games.map(g => {

                        if((g.attributes.map.data && g.attributes.map.data.id) === f.id) {
                            let faction = g.attributes.faction_win?.data?.attributes?.name;
                            typeof newObject.statsFactionWin[faction] === 'undefined' ? 
                            newObject.statsFactionWin[faction] = 1 : 
                            newObject.statsFactionWin[faction]++;
                            newObject.wins++;

                            let faction2 = g.attributes.faction_lose?.data?.attributes?.name;
                            typeof newObject.statsFactionLose[faction2] === 'undefined' ? 
                            newObject.statsFactionLose[faction2] = 1 : 
                            newObject.statsFactionLose[faction2]++;
                            newObject.loses++;
                        }

                        // if((g.attributes.faction_lose.data && g.attributes.faction_lose.data.attributes && g.attributes.faction_lose.data.attributes.name) === f.attributes.name) {
                        //     let faction = g.attributes.faction_win.data?.attributes?.name;
                        //     typeof newObject.statsFactionLose[faction] === 'undefined' ? 
                        //     newObject.statsFactionLose[faction] = 1 : 
                        //     newObject.statsFactionLose[faction]++;
                        //     newObject.loses++;
                        // }

                            // if(g.attributes.replays && g.attributes.replays.length > 0){
                            //     g.attributes.replays.map(r => {
                            //         if((r.map.data && r.map.data.id) === f.id) {
                            //             let faction = r.faction_win?.data?.attributes?.name;
                            //             typeof newObject.statsFactionWin[faction] === 'undefined' ? 
                            //             newObject.statsFactionWin[faction] = 1 : 
                            //             newObject.statsFactionWin[faction]++;
                            //             newObject.wins++;

                            //             let faction2 = r.faction_lose?.data?.attributes?.name;
                            //             typeof newObject.statsFactionLose[faction2] === 'undefined' ? 
                            //             newObject.statsFactionLose[faction2] = 1 : 
                            //             newObject.statsFactionLose[faction2]++;
                            //             newObject.loses++;
                            //         }
                            //     })
                            // }
                        })

                    return Object.assign(f, newObject)
                })
                return newMaps;
            }
        },
    },
}
</script>
<style>

</style>