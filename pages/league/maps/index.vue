<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-4 mx-auto">
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
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.name') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.description') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.img') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.nbMatchs') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap" v-for="fac in factionList" v-bind:key="fac.name">
                                    <div class="font-semibold text-left">{{$t(`league.${fac.name}`)}}</div>
                                </th>
                            </tr>
                        </thead>
                        <!-- <tbody class="text-sm divide-y divide-orange-500">
                            <tr v-for="map in sortedMaps" v-bind:key="map._id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{map.attributes.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{map.attributes.description}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                        <img class="object-contain" :src="map.attributes.minimap && `https://api.laterredumilieu.fr${map.attributes.minimap.data.attributes.url}`">
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{map.attributes.games.data.length}}</div>
                                </td>
                                <td v-for="fac in factionList" v-bind:key="fac.name" class="p-2 whitespace-nowrap border-t" :class="`bg-${fac.color}-${fac.color == 'gray' ? 800 : 900} border-${fac.color}-600`">
                                    <div class="text-lg text-left  text-gray-100 p-2 m-1" 
                                    :style="`width: ${Object.keys(map.statsFactionLose).length > 0 || Object.keys(map.statsFactionWin).length > 0 ? (((map.statsFactionWin[fac.name] ? map.statsFactionWin[fac.name] : 0) / ((map.statsFactionLose[fac.name] ? map.statsFactionLose[fac.name] : 0) + (map.statsFactionWin[fac.name] ? map.statsFactionWin[fac.name] : 0))) * 100).toFixed(0) : 0}%;`"
                                    :class="`from-${fac.color}-500 to-${fac.color}-700 ${(Object.keys(map.statsFactionLose).length > 0 || Object.keys(map.statsFactionWin).length > 0) && (map.statsFactionLose[fac.name] || map.statsFactionWin[fac.name]) ? 'bg-gradient-to-r' : ''}`"
                                    >
                                        {{Object.keys(map.statsFactionLose).length > 0 || Object.keys(map.statsFactionWin).length > 0 ?
                                            map.statsFactionLose[fac.name] && map.statsFactionWin[fac.name] ?
                                            `(${map.statsFactionWin[fac.name] ? map.statsFactionWin[fac.name] : 0}
                                            /
                                            ${map.statsFactionLose[fac.name] ? map.statsFactionLose[fac.name] : 0}) 
                                            ${(((map.statsFactionWin[fac.name] ? map.statsFactionWin[fac.name] : 0) / ((map.statsFactionLose[fac.name] ? map.statsFactionLose[fac.name] : 0) + (map.statsFactionWin[fac.name] ? map.statsFactionWin[fac.name] : 0))) * 100).toFixed(0)}%
                                            `
                                            : map.statsFactionLose[fac.name] ? `${map.statsFactionLose[fac.name]} ${$t('league.lose')}${map.statsFactionLose[fac.name] == 1 ? '' : 's'}` : map.statsFactionWin[fac.name] ? `${map.statsFactionWin[fac.name]} ${$t('league.win')}${map.statsFactionWin[fac.name] == 1 ? '' : 's'}` : ""
                                        : ""
                                        }}
                                    </div>
                                </td>
                            </tr>
                        </tbody> -->
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
            {name: "Homme", color: "blue"}, 
            {name: "Elfe", color: "green"}, 
            {name: "Nain", color: "yellow"}, 
            {name: "Mordor", color: "red"},
            {name: "Isengard", color: "gray"},
            {name: "Gobelin", color: "orange"},
            {name: "Angmar", color: "purple"}
        ],
        }
    },
    async asyncData({ $strapi, $axios }) {
        let maps = await $strapi.find('maps', { populate: '*'})
        const query = qs.stringify({
            fields: '*',
            populate: {
                populate: '*',
                replays: {
                    populate: '*',
                    faction_win: {
                        populate: '*'
                    }
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
        return { maps, games }
    },
    computed:{
        sortedMaps() {
            if(this.maps){

                let NewFaction = this.factions.data.map(f => {
                    let newObject = {
                        statsFactionWin: {},
                        statsFactionLose: {},
                        wins: 0,
                        loses: 0
                    }

                    this.games.map(g => {
                        if(g.attributes.replays && g.attributes.replays.length > 0){
                            g.attributes.replays.map(r => {
                                if((r.map.data && r.map.data.id) === f.id) {
                                    let faction = r.faction_lose.data.attributes.name;
                                    typeof newObject.statsFactionWin[faction] === 'undefined' ? 
                                    newObject.statsFactionWin[faction] = 1 : 
                                    newObject.statsFactionWin[faction]++;
                                    newObject.wins++;

                                    let faction2 = r.faction_win.data.attributes.name;
                                    typeof newObject.statsFactionLose[faction2] === 'undefined' ? 
                                    newObject.statsFactionLose[faction2] = 1 : 
                                    newObject.statsFactionLose[faction2]++;
                                    newObject.loses++;
                                }
                            })
                        }
                    })

                    return Object.assign(f, newObject)
                })



                // let newMaps = this.maps.data.map(f => {
                //     let newObject = {
                //         statsFactionWin: {},
                //         statsFactionLose: {}
                //     }


                //     if(f.attributes.games.data.length > 0){
                //         f.attributes.games.data.map(m => {
                //             typeof newObject.statsFactionWin[this.games.data.find(x => x.id === m.id).attributes.faction_win.data.attributes.name] === 'undefined' ? 
                //             newObject.statsFactionWin[this.games.data.find(x => x.id === m.id).attributes.faction_win.data.attributes.name] = 1 : 
                //             newObject.statsFactionWin[this.games.data.find(x => x.id === m.id).attributes.faction_win.data.attributes.name]++;


                //             typeof newObject.statsFactionLose[this.games.data.find(x => x.id === m.id).attributes.faction_lose.data.attributes.name] === 'undefined' ? 
                //             newObject.statsFactionLose[this.games.data.find(x => x.id === m.id).attributes.faction_lose.data.attributes.name] = 1 : 
                //             newObject.statsFactionLose[this.games.data.find(x => x.id === m.id).attributes.faction_lose.data.attributes.name]++;
                //         })
                //     }

                //     return Object.assign(f, newObject)
                // })
                return newMaps;
            }
        },
    },
}
</script>
<style>

</style>