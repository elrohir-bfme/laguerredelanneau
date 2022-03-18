<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-4 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="font-medium mb-4 text-red-500 text-8xl">{{ $t('league.maps') }}</h1>
    </div>

    <div class="flex">
    <div class="flex-grow">

    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full  mx-auto bg-gray-900 shadow-lg rounded-sm border border-orange-600">
            <header class="px-5 py-4 border-b border-orange-500 flex">
                <div class="flex-grow">
                    <h2 class="font-semibold text-white">Maps</h2>
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
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Homme</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Elfe</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Nain</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Mordor</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Isengard</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Gobelin</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Angmar</div>
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
                                <td class="p-2 whitespace-nowrap border-t border-blue-600">
                                    <div class="text-sm text-left">
                                        {{Object.keys(map.statsFactionLose).length > 0 && Object.keys(map.statsFactionWin).length > 0 ?
                                            map.statsFactionLose.Homme || map.statsFactionWin.Homme ?
                                            `(${map.statsFactionWin.Homme ? map.statsFactionWin.Homme : 0}
                                            /
                                            ${map.statsFactionLose.Homme ? map.statsFactionLose.Homme : 0}) 
                                            ${(((map.statsFactionWin.Homme ? map.statsFactionWin.Homme : 0) / ((map.statsFactionLose.Homme ? map.statsFactionLose.Homme : 0 )+ (map.statsFactionWin.Homme ? map.statsFactionWin.Homme : 0))) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(map.statsFactionLose).length > 0 ? 
                                            map.statsFactionLose.Homme ?
                                            `${map.statsFactionLose.Homme ? map.statsFactionLose.Homme : 0}
                                            Victoire${map.statsFactionLose.Homme && map.statsFactionLose.Homme.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(map.statsFactionWin).length > 0 ? 
                                            map.statsFactionLose.Homme ?
                                            `${map.statsFactionWin.Homme ? map.statsFactionWin.Homme : 0}
                                            Défaite${map.statsFactionWin.Homme && map.statsFactionWin.Homme.length > 1 ? 's' : ''}`
                                            :
                                            ""

                                        : ""
                                        }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap border-t border-green-600">
                                    <div class="text-sm text-left">
                                        {{Object.keys(map.statsFactionLose).length > 0 && Object.keys(map.statsFactionWin).length > 0 ?
                                            map.statsFactionLose.Elfe || map.statsFactionWin.Elfe ?
                                            `(${map.statsFactionWin.Elfe ? map.statsFactionWin.Elfe : 0}
                                            /
                                            ${map.statsFactionLose.Elfe ? map.statsFactionLose.Elfe : 0}) 
                                            ${(((map.statsFactionWin.Elfe ? map.statsFactionWin.Elfe : 0) / ((map.statsFactionLose.Elfe ? map.statsFactionLose.Elfe : 0) + (map.statsFactionWin.Elfe ? map.statsFactionWin.Elfe : 0))) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(map.statsFactionLose).length > 0 ? 
                                            map.statsFactionLose.Elfe ?
                                            `${map.statsFactionLose.Elfe ? map.statsFactionLose.Elfe : 0}
                                            Victoire${map.statsFactionLose.Elfe && map.statsFactionLose.Elfe.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(map.statsFactionWin).length > 0 ? 
                                            map.statsFactionLose.Elfe ?
                                            `${map.statsFactionWin.Elfe ? map.statsFactionWin.Elfe : 0}
                                            Défaite${map.statsFactionWin.Elfe && map.statsFactionWin.Elfe.length > 1 ? 's' : ''}`
                                            :
                                            ""

                                        : ""
                                        }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap border-t border-yellow-300">
                                    <div class="text-sm text-left">
                                        {{Object.keys(map.statsFactionLose).length > 0 && Object.keys(map.statsFactionWin).length > 0 ?
                                            map.statsFactionLose.Nain || map.statsFactionWin.Nain ?
                                            `(${map.statsFactionWin.Nain ? map.statsFactionWin.Nain : 0}
                                            /
                                            ${map.statsFactionLose.Nain ? map.statsFactionLose.Nain : 0}) 
                                            ${(((map.statsFactionWin.Nain ? map.statsFactionWin.Nain : 0) / ((map.statsFactionLose.Nain ? map.statsFactionLose.Nain : 0) + (map.statsFactionWin.Nain ? map.statsFactionWin.Nain : 0))) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(map.statsFactionLose).length > 0 ? 
                                            map.statsFactionLose.Nain ?
                                            `${map.statsFactionLose.Nain ? map.statsFactionLose.Nain : 0}
                                            Victoire${map.statsFactionLose.Nain && map.statsFactionLose.Nain.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(map.statsFactionWin).length > 0 ? 
                                            map.statsFactionLose.Nain ?
                                            `${map.statsFactionWin.Nain ? map.statsFactionWin.Nain : 0}
                                            Défaite${map.statsFactionWin.Nain && map.statsFactionWin.Nain.length > 1 ? 's' : ''}`
                                            :
                                            ""

                                        : ""
                                        }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap border-t border-red-600">
                                    <div class="text-sm text-left">
                                        {{Object.keys(map.statsFactionLose).length > 0 && Object.keys(map.statsFactionWin).length > 0 ?
                                            map.statsFactionLose.Mordor || map.statsFactionWin.Mordor ?
                                            `(${map.statsFactionWin.Mordor ? map.statsFactionWin.Mordor : 0}
                                            /
                                            ${map.statsFactionLose.Mordor ? map.statsFactionLose.Mordor : 0}) 
                                            ${(((map.statsFactionWin.Mordor ? map.statsFactionWin.Mordor : 0) / ((map.statsFactionLose.Mordor ? map.statsFactionLose.Mordor : 0) + (map.statsFactionWin.Mordor ? map.statsFactionWin.Mordor : 0))) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(map.statsFactionLose).length > 0 ? 
                                            map.statsFactionLose.Mordor ?
                                            `${map.statsFactionLose.Mordor ? map.statsFactionLose.Mordor : 0}
                                            Victoire${map.statsFactionLose.Mordor && map.statsFactionLose.Mordor.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(map.statsFactionWin).length > 0 ? 
                                            map.statsFactionLose.Mordor ?
                                            `${map.statsFactionWin.Mordor ? map.statsFactionWin.Mordor : 0}
                                            Défaite${map.statsFactionWin.Mordor && map.statsFactionWin.Mordor.length > 1 ? 's' : ''}`
                                            :
                                            ""

                                        : ""
                                        }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap border-t border-white">
                                    <div class="text-sm text-left">
                                        {{Object.keys(map.statsFactionLose).length > 0 && Object.keys(map.statsFactionWin).length > 0 ?
                                            map.statsFactionLose.Isengard || map.statsFactionWin.Isengard ?
                                            `(${map.statsFactionWin.Isengard ? map.statsFactionWin.Isengard : 0}
                                            /
                                            ${map.statsFactionLose.Isengard ? map.statsFactionLose.Isengard : 0}) 
                                            ${(((map.statsFactionWin.Isengard ? map.statsFactionWin.Isengard : 0) / ((map.statsFactionLose.Isengard ? map.statsFactionLose.Isengard : 0) + (map.statsFactionWin.Isengard ? map.statsFactionWin.Isengard : 0))) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(map.statsFactionLose).length > 0 ? 
                                            map.statsFactionLose.Isengard ?
                                            `${map.statsFactionLose.Isengard ? map.statsFactionLose.Isengard : 0}
                                            Victoire${map.statsFactionLose.Isengard && map.statsFactionLose.Isengard.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(map.statsFactionWin).length > 0 ? 
                                            map.statsFactionLose.Isengard ?
                                            `${map.statsFactionWin.Isengard ? map.statsFactionWin.Isengard : 0}
                                            Défaite${map.statsFactionWin.Isengard && map.statsFactionWin.Isengard.length > 1 ? 's' : ''}`
                                            :
                                            ""

                                        : ""
                                        }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap border-t border-orange-600">
                                    <div class="text-sm text-left">
                                        {{Object.keys(map.statsFactionLose).length > 0 && Object.keys(map.statsFactionWin).length > 0 ?
                                            map.statsFactionLose.Gobelin || map.statsFactionWin.Gobelin ?
                                            `(${map.statsFactionWin.Gobelin ? map.statsFactionWin.Gobelin : 0}
                                            /
                                            ${map.statsFactionLose.Gobelin ? map.statsFactionLose.Gobelin : 0}) 
                                            ${(((map.statsFactionWin.Gobelin ? map.statsFactionWin.Gobelin : 0) / ((map.statsFactionLose.Gobelin ? map.statsFactionLose.Gobelin : 0) + (map.statsFactionWin.Gobelin ? map.statsFactionWin.Gobelin : 0))) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(map.statsFactionLose).length > 0 ? 
                                            map.statsFactionLose.Gobelin ?
                                            `${map.statsFactionLose.Gobelin ? map.statsFactionLose.Gobelin : 0}
                                            Victoire${map.statsFactionLose.Gobelin && map.statsFactionLose.Gobelin.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(map.statsFactionWin).length > 0 ? 
                                            map.statsFactionLose.Gobelin ?
                                            `${map.statsFactionWin.Gobelin ? map.statsFactionWin.Gobelin : 0}
                                            Défaite${map.statsFactionWin.Gobelin && map.statsFactionWin.Gobelin.length > 1 ? 's' : ''}`
                                            :
                                            ""

                                        : ""
                                        }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap border-t border-purple-600">
                                    <div class="text-sm text-left">
                                        {{Object.keys(map.statsFactionLose).length > 0 && Object.keys(map.statsFactionWin).length > 0 ?
                                            map.statsFactionLose.Angmar || map.statsFactionWin.Angmar ?
                                            `(${map.statsFactionWin.Angmar ? map.statsFactionWin.Angmar : 0}
                                            /
                                            ${map.statsFactionLose.Angmar ? map.statsFactionLose.Angmar : 0}) 
                                            ${(((map.statsFactionWin.Angmar ? map.statsFactionWin.Angmar : 0) / ((map.statsFactionLose.Angmar ? map.statsFactionLose.Angmar : 0) + (map.statsFactionWin.Angmar ? map.statsFactionWin.Angmar : 0))) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(map.statsFactionLose).length > 0 ? 
                                            map.statsFactionLose.Angmar ?
                                            `${map.statsFactionLose.Angmar ? map.statsFactionLose.Angmar : 0}
                                            Victoire${map.statsFactionLose.Angmar && map.statsFactionLose.Angmar.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(map.statsFactionWin).length > 0 ? 
                                            map.statsFactionLose.Angmar ?
                                            `${map.statsFactionWin.Angmar ? map.statsFactionWin.Angmar : 0}
                                            Défaite${map.statsFactionWin.Angmar && map.statsFactionWin.Angmar.length > 1 ? 's' : ''}`
                                            :
                                            ""

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
        maps: [],
        factions: []
        }
    },
    async fetch() {
      this.loading = false;
      this.factions =  await this.$strapi.find('league-factions')
      this.maps =  await this.$strapi.find('league-maps')
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