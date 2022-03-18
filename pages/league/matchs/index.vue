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
                    <h2 class="font-semibold text-white">Matchs</h2>
                </div>
            </header>

            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Nom</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Description</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Image</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Nombres de Matchs</div>
                                </th>
                                <th class="p-2 whitespace-nowrap" v-for="fac in factionList" v-bind:key="fac.name">
                                    <div class="font-semibold text-left">{{fac.name}}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-orange-500">
                            <tr v-for="map in sortedMaps" v-bind:key="map._id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{map.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{map.description}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <!-- <div class="text-left font-medium text-green-500"> -->
                                        <img class="object-contain" :src="map.minimap && `https://api.laterredumilieu.fr${map.minimap.url}`">
                                    <!-- </div> -->
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{map.league_matches.length}}</div>
                                </td>
                                <td v-for="fac in factionList" v-bind:key="fac" class="p-2 whitespace-nowrap border-t" :class="`bg-${fac.color}-${fac.color == 'gray' ? 800 : 900} border-${fac.color}-600`">
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
                                            : map.statsFactionLose[fac.name] ? `${map.statsFactionLose[fac.name]} Défaite${map.statsFactionLose[fac.name] == 1 ? '' : 's'}` : map.statsFactionWin[fac.name] ? `${map.statsFactionWin[fac.name]} Victoire${map.statsFactionWin[fac.name] == 1 ? '' : 's'}` : ""
                                        : ""
                                        }}
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
export default {
  layout: "league",
    data() {
        return {
            loading: false,
            matchs: [],
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
    async fetch() {
      this.loading = false;
      this.matchs =  await this.$strapi.find('league-matchs')
      this.loading = true;
    },
        computed:{
            sortedMaps() {
                if(this.maps){

                    let newMaps = this.maps.map(f => {
                        let newObject = {
                            statsFactionWin: {},
                            statsFactionLose: {}
                        }

                        if(f.league_matches.length > 0){
                            f.league_matches.map(m => {
                                typeof newObject.statsFactionWin[this.factions.find(x => x._id === m.faction_win).name] === 'undefined' ? 
                                newObject.statsFactionWin[this.factions.find(x => x._id === m.faction_win).name] = 1 : 
                                newObject.statsFactionWin[this.factions.find(x => x._id === m.faction_win).name]++;

                                typeof newObject.statsFactionLose[this.factions.find(x => x._id === m.faction_lose).name] === 'undefined' ? 
                                newObject.statsFactionLose[this.factions.find(x => x._id === m.faction_lose).name] = 1 : 
                                newObject.statsFactionLose[this.factions.find(x => x._id === m.faction_lose).name]++;
                            })
                        }

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