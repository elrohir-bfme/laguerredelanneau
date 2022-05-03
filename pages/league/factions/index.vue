<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-4 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="font-medium mb-4 text-red-500 text-8xl">{{ $t('league.title') }}</h1>
    </div>

    <div class="flex">
    <div class="flex-grow">

    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full  mx-auto bg-gray-900 shadow-lg rounded-sm border border-orange-600">
            <header class="px-5 py-4 border-b border-orange-500 flex">
                <div class="flex-grow">
                    <h2 class="font-semibold text-white">Factions</h2>
                </div>
            </header>

            <div class="p-3" >
                <div class="overflow-x-auto">
                    <table class="table-auto w-full border-2 border-gray-800 rounded-xl">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.faction') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.win') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.lose') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.winRatio') }}</div>
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
                            <tr v-for="faction in sortedFactions" v-bind:key="faction._id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img class="rounded-full" :src="`https://api.laterredumilieu.fr${faction.attributes.img.data.attributes.url}`" width="40" height="40" :alt="faction.name">
                                        </div>
                                        <div class="font-medium text-white">{{faction.attributes.name}} </div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
y                                    <div class="text-left font-medium">{{faction.wins}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{faction.loses}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{faction.wins > 0 || faction.loses > 0 ? `${((faction.wins / (faction.loses + faction.wins)) * 100).toFixed(0)}%`  : "Aucun Match"}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{faction.wins + faction.loses}}</div>
                                </td>
                                <td v-for="fac in factionList" v-bind:key="fac.name" class="p-2 whitespace-nowrap border-t" :class="`bg-${fac.color}-${fac.color == 'gray' ? 800 : 900} border-${fac.color}-600`">
                                    <div class="text-lg text-left  text-gray-100 p-2 m-1" 
                                    :style="`width: ${Object.keys(faction.statsFactionLose).length > 0 || Object.keys(faction.statsFactionWin).length > 0 ? (((faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0) / ((faction.statsFactionLose[fac.name] ? faction.statsFactionLose[fac.name] : 0) + (faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0))) * 100).toFixed(0) : 0}%;`"
                                    :class="`from-${fac.color}-500 to-${fac.color}-700 ${(Object.keys(faction.statsFactionLose).length > 0 || Object.keys(faction.statsFactionWin).length > 0) && (faction.statsFactionLose[fac.name] || faction.statsFactionWin[fac.name]) ? 'bg-gradient-to-r' : ''}`"
                                    >
                                        {{Object.keys(faction.statsFactionLose).length > 0 || Object.keys(faction.statsFactionWin).length > 0 ?
                                            faction.statsFactionLose[fac.name] && faction.statsFactionWin[fac.name] ?
                                            `(${faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0}
                                            /
                                            ${faction.statsFactionLose[fac.name] ? faction.statsFactionLose[fac.name] : 0}) 
                                            ${(((faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0) / ((faction.statsFactionLose[fac.name] ? faction.statsFactionLose[fac.name] : 0) + (faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0))) * 100).toFixed(0)}%
                                            `
                                            : faction.statsFactionLose[fac.name] ? `${faction.statsFactionLose[fac.name]} ${$t('league.lose')}${faction.statsFactionLose[fac.name] == 1 ? '' : 's'}` : faction.statsFactionWin[fac.name] ? `${faction.statsFactionWin[fac.name]} ${$t('league.win')}${faction.statsFactionWin[fac.name] == 1 ? '' : 's'}` : ""
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
    async asyncData({ $strapi, $axios }) {
        let factions = await $strapi.find('factions', { populate: '*'})
        // let games = await $strapi.find('games', { populate: '*'})

                const query = qs.stringify({
            // populate: '*',
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
        // console.log(data)

        let games = data
        // maps = await JSON.parse(JSON.stringify(this.maps))
        // factions = await JSON.parse(JSON.stringify(this.factions))

        return { factions, games }
    },
    computed:{
        sortedFactions() {
            if(this.factions){

                let NewFaction = this.factions.data.map(f => {
                    let newObject = {
                        statsFactionWin: {},
                        statsFactionLose: {},
                        wins: 0,
                        loses: 0
                    }

                    this.games.map(g => {
                        console.log(g, "g")
                        if(g.attributes.replays && g.attributes.replays.length > 0){
                            console.log(g.attributes.replays)
                            g.attributes.replays.map(r => {
                                // console.log(r, "r", r.faction_win.data)
                                if(r.faction_win.data && r.faction_win.data.attributes && r.faction_win.data.attributes.name === f.attributes.name) {
                                    let faction = r.faction_lose.data.attributes.name;
                                    typeof newObject.statsFactionWin[faction] === 'undefined' ? 
                                    newObject.statsFactionWin[faction] = 1 : 
                                    newObject.statsFactionWin[faction]++;
                                    newObject.wins++;
                                }

                                if(r.faction_lose.data && r.faction_lose.data.attributes && r.faction_lose.data.attributes.name === f.attributes.name) {
                                    let faction = r.faction_win.data.attributes.name;
                                    typeof newObject.statsFactionLose[faction] === 'undefined' ? 
                                    newObject.statsFactionLose[faction] = 1 : 
                                    newObject.statsFactionLose[faction]++;
                                    newObject.loses++;
                                }

                                // if(r.faction_win.data && r.faction_win.data.attributes){
                                //     console.log(r, "R")
                                //     let faction = r.faction_win.data.attributes.name 
                                //     typeof newObject.statsFactionWin[faction] === 'undefined' ? 
                                //     newObject.statsFactionWin[faction] = 1 : 
                                //     newObject.statsFactionWin[faction]++;
                                // }
                                // if(r.faction_lose.data && r.faction_lose.data.attributes){
                                //     let faction = r.faction_win.data.attributes.name 
                                //     typeof newObject.statsFactionLose[faction] === 'undefined' ? 
                                //     newObject.statsFactionLose[faction] = 1 : 
                                //     newObject.statsFactionLose[faction]++;
                                // }
                            })
                        }
                    })

                    if(f.attributes.games_lose.data.length > 0){
                        f.attributes.games_lose.data.map(m => {
                            // let faction = this.games.data.find(x => x.id === m.id).attributes.faction_win.data.attributes.name
                            // typeof newObject.statsFactionLose[faction] === 'undefined' ? 
                            // newObject.statsFactionLose[faction] = 1 : 
                            // newObject.statsFactionLose[faction]++;
                        })
                    }

                    if(f.attributes.games_win.data.length > 0){
                        f.attributes.games_win.data.map(m => {
                            // console.log(this.games)
                            // let faction = this.games.data.find(x => x.id === m.id).attributes.faction_lose.data.attributes.name
                            // typeof newObject.statsFactionWin[faction] === 'undefined' ? 
                            // newObject.statsFactionWin[faction] = 1 : 
                            // newObject.statsFactionWin[faction]++;
                        })
                    }
                    return Object.assign(f, newObject)
                })

                return NewFaction;
            }
        },
    },
}
</script>
<style>

</style>