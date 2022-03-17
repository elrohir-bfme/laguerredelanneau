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
                    <h2 class="font-semibold text-white">Joueurs</h2>
                </div>
                <div class="flex-none">
                    <button @click="hide('player')" class="text-red-100 ring-4 ring-red-800 bg-red-700 px-4 py-2 rounded-2xl">{{showPlayers ? "Cacher" : "Afficher"}}</button>
                </div>
            </header>
            <div class="p-3" v-if="showPlayers">
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
                                    <div class="font-semibold text-left">Ratio de victoires</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-orange-500">
                            <tr v-for="player in sortedPlayers" v-bind:key="player.name" class="hover-gray-800" @click="infoPlayer(player)">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{player.rang}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"></div>
                                        <div class="font-medium text-white">{{player.name}}</div>
                                    </div>
                                </td>
                                
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">{{player.main}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{player.win.length + player.lose.length}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{player.win.length > 0 || player.lose.length > 0 ? `${((player.win.length / (player.lose.length + player.win.length)) * 100).toFixed(0)}%`  : "Aucun Match"}}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <header class="px-5 py-4 border-b border-orange-500 flex">
                <div class="flex-grow">
                    <h2 class="font-semibold text-white">Matchs</h2>
                </div>
                <div class="flex-none">
                    <button @click="hide('match')" class="text-red-100 ring-4 ring-red-800 bg-red-700 px-4 py-2 rounded-2xl">{{showMatchs ? "Cacher" : "Afficher"}}</button>
                </div>
            </header>

            <div class="p-3" v-if="showMatchs">
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
                                    <div class="text-left font-medium text-orange-500">{{match.map.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{match.playerWin.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{match.playerLose.name}}</div>
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


            <header class="px-5 py-4 border-b border-orange-500 flex">
                <div class="flex-grow">
                    <h2 class="font-semibold text-white">Factions</h2>
                </div>
                <div class="flex-none">
                    <button @click="hide('faction')" class="text-red-100 ring-4 ring-red-800 bg-red-700 px-4 py-2 rounded-2xl">{{showFactions ? "Cacher" : "Afficher"}}</button>
                </div>
            </header>

            <div class="p-3" v-if="showFactions">
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
                            <tr v-for="faction in sortedFactions" v-bind:key="faction._id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img class="rounded-full" :src="`https://api.laterredumilieu.fr${faction.img.url}`" width="40" height="40" :alt="faction.name">
                                        </div>
                                        <div class="font-medium text-white">{{faction.name}} </div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium">{{faction.matchs_win.length}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{faction.matchs_lose.length}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{faction.matchs_win.length > 0 || faction.matchs_lose.length > 0 ? `${((faction.matchs_win.length / (faction.matchs_lose.length + faction.matchs_win.length)) * 100).toFixed(0)}%`  : "Aucun Match"}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{faction.matchs_win.length + faction.matchs_lose.length}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap border border-blue-600">
                                    <div class="text-sm text-left">
                                        {{Object.keys(faction.statsFactionLose).length > 0 && Object.keys(faction.statsFactionWin).length > 0 ?
                                            faction.statsFactionLose.Homme || faction.statsFactionWin.Homme ?
                                            `(${faction.statsFactionWin.Homme ? faction.statsFactionWin.Homme : 0}
                                            /
                                            ${faction.statsFactionLose.Homme ? faction.statsFactionLose.Homme : 0}) 
                                            ${((faction.statsFactionWin.Homme ? faction.statsFactionWin.Homme : 0 / (faction.statsFactionLose.Homme ? faction.statsFactionLose.Homme : 0 + faction.statsFactionWin.Homme ? faction.statsFactionWin.Homme : 0)) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(faction.statsFactionLose).length > 0 ? 
                                            faction.statsFactionLose.Homme ?
                                            `${faction.statsFactionLose.Homme ? faction.statsFactionLose.Homme : 0}
                                            Victoire${faction.statsFactionLose.Homme && faction.statsFactionLose.Homme.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(faction.statsFactionWin).length > 0 ? 
                                            faction.statsFactionLose.Homme ?
                                            `${faction.statsFactionWin.Homme ? faction.statsFactionWin.Homme : 0}
                                            Défaite${faction.statsFactionWin.Homme && faction.statsFactionWin.Homme.length > 1 ? 's' : ''}`
                                            :
                                            ""

                                        : ""
                                        }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap border border-green-600">
                                    <div class="text-sm text-left">
                                        {{Object.keys(faction.statsFactionLose).length > 0 && Object.keys(faction.statsFactionWin).length > 0 ?
                                            faction.statsFactionLose.Elfe || faction.statsFactionWin.Elfe ?
                                            `(${faction.statsFactionWin.Elfe ? faction.statsFactionWin.Elfe : 0}
                                            /
                                            ${faction.statsFactionLose.Elfe ? faction.statsFactionLose.Elfe : 0}) 
                                            ${((faction.statsFactionWin.Elfe ? faction.statsFactionWin.Elfe : 0 / (faction.statsFactionLose.Elfe ? faction.statsFactionLose.Elfe : 0 + faction.statsFactionWin.Elfe ? faction.statsFactionWin.Elfe : 0)) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(faction.statsFactionLose).length > 0 ? 
                                            faction.statsFactionLose.Elfe ?
                                            `${faction.statsFactionLose.Elfe ? faction.statsFactionLose.Elfe : 0}
                                            Victoire${faction.statsFactionLose.Elfe && faction.statsFactionLose.Elfe.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(faction.statsFactionWin).length > 0 ? 
                                            faction.statsFactionLose.Elfe ?
                                            `${faction.statsFactionWin.Elfe ? faction.statsFactionWin.Elfe : 0}
                                            Défaite${faction.statsFactionWin.Elfe && faction.statsFactionWin.Elfe.length > 1 ? 's' : ''}`
                                            :
                                            ""

                                        : ""
                                        }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap border border-yellow-300">
                                    <div class="text-sm text-left">
                                        {{Object.keys(faction.statsFactionLose).length > 0 && Object.keys(faction.statsFactionWin).length > 0 ?
                                            faction.statsFactionLose.Nain || faction.statsFactionWin.Nain ?
                                            `(${faction.statsFactionWin.Nain ? faction.statsFactionWin.Nain : 0}
                                            /
                                            ${faction.statsFactionLose.Nain ? faction.statsFactionLose.Nain : 0}) 
                                            ${((faction.statsFactionWin.Nain ? faction.statsFactionWin.Nain : 0 / (faction.statsFactionLose.Nain ? faction.statsFactionLose.Nain : 0 + faction.statsFactionWin.Nain ? faction.statsFactionWin.Nain : 0)) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(faction.statsFactionLose).length > 0 ? 
                                            faction.statsFactionLose.Nain ?
                                            `${faction.statsFactionLose.Nain ? faction.statsFactionLose.Nain : 0}
                                            Victoire${faction.statsFactionLose.Nain && faction.statsFactionLose.Nain.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(faction.statsFactionWin).length > 0 ? 
                                            faction.statsFactionLose.Nain ?
                                            `${faction.statsFactionWin.Nain ? faction.statsFactionWin.Nain : 0}
                                            Défaite${faction.statsFactionWin.Nain && faction.statsFactionWin.Nain.length > 1 ? 's' : ''}`
                                            :
                                            ""

                                        : ""
                                        }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap border border-red-600">
                                    <div class="text-sm text-left">
                                        {{Object.keys(faction.statsFactionLose).length > 0 && Object.keys(faction.statsFactionWin).length > 0 ?
                                            faction.statsFactionLose.Mordor || faction.statsFactionWin.Mordor ?
                                            `(${faction.statsFactionWin.Mordor ? faction.statsFactionWin.Mordor : 0}
                                            /
                                            ${faction.statsFactionLose.Mordor ? faction.statsFactionLose.Mordor : 0}) 
                                            ${((faction.statsFactionWin.Mordor ? faction.statsFactionWin.Mordor : 0 / (faction.statsFactionLose.Mordor ? faction.statsFactionLose.Mordor : 0 + faction.statsFactionWin.Mordor ? faction.statsFactionWin.Mordor : 0)) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(faction.statsFactionLose).length > 0 ? 
                                            faction.statsFactionLose.Mordor ?
                                            `${faction.statsFactionLose.Mordor ? faction.statsFactionLose.Mordor : 0}
                                            Victoire${faction.statsFactionLose.Mordor && faction.statsFactionLose.Mordor.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(faction.statsFactionWin).length > 0 ? 
                                            faction.statsFactionLose.Mordor ?
                                            `${faction.statsFactionWin.Mordor ? faction.statsFactionWin.Mordor : 0}
                                            Défaite${faction.statsFactionWin.Mordor && faction.statsFactionWin.Mordor.length > 1 ? 's' : ''}`
                                            :
                                            ""

                                        : ""
                                        }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap border border-white">
                                    <div class="text-sm text-left">
                                        {{Object.keys(faction.statsFactionLose).length > 0 && Object.keys(faction.statsFactionWin).length > 0 ?
                                            faction.statsFactionLose.Isengard || faction.statsFactionWin.Isengard ?
                                            `(${faction.statsFactionWin.Isengard ? faction.statsFactionWin.Isengard : 0}
                                            /
                                            ${faction.statsFactionLose.Isengard ? faction.statsFactionLose.Isengard : 0}) 
                                            ${((faction.statsFactionWin.Isengard ? faction.statsFactionWin.Isengard : 0 / (faction.statsFactionLose.Isengard ? faction.statsFactionLose.Isengard : 0 + faction.statsFactionWin.Isengard ? faction.statsFactionWin.Isengard : 0)) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(faction.statsFactionLose).length > 0 ? 
                                            faction.statsFactionLose.Isengard ?
                                            `${faction.statsFactionLose.Isengard ? faction.statsFactionLose.Isengard : 0}
                                            Victoire${faction.statsFactionLose.Isengard && faction.statsFactionLose.Isengard.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(faction.statsFactionWin).length > 0 ? 
                                            faction.statsFactionLose.Isengard ?
                                            `${faction.statsFactionWin.Isengard ? faction.statsFactionWin.Isengard : 0}
                                            Défaite${faction.statsFactionWin.Isengard && faction.statsFactionWin.Isengard.length > 1 ? 's' : ''}`
                                            :
                                            ""

                                        : ""
                                        }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap border border-orange-600">
                                    <div class="text-sm text-left">
                                        {{Object.keys(faction.statsFactionLose).length > 0 && Object.keys(faction.statsFactionWin).length > 0 ?
                                            faction.statsFactionLose.Gobelin || faction.statsFactionWin.Gobelin ?
                                            `(${faction.statsFactionWin.Gobelin ? faction.statsFactionWin.Gobelin : 0}
                                            /
                                            ${faction.statsFactionLose.Gobelin ? faction.statsFactionLose.Gobelin : 0}) 
                                            ${((faction.statsFactionWin.Gobelin ? faction.statsFactionWin.Gobelin : 0 / (faction.statsFactionLose.Gobelin ? faction.statsFactionLose.Gobelin : 0 + faction.statsFactionWin.Gobelin ? faction.statsFactionWin.Gobelin : 0)) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(faction.statsFactionLose).length > 0 ? 
                                            faction.statsFactionLose.Gobelin ?
                                            `${faction.statsFactionLose.Gobelin ? faction.statsFactionLose.Gobelin : 0}
                                            Victoire${faction.statsFactionLose.Gobelin && faction.statsFactionLose.Gobelin.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(faction.statsFactionWin).length > 0 ? 
                                            faction.statsFactionLose.Gobelin ?
                                            `${faction.statsFactionWin.Gobelin ? faction.statsFactionWin.Gobelin : 0}
                                            Défaite${faction.statsFactionWin.Gobelin && faction.statsFactionWin.Gobelin.length > 1 ? 's' : ''}`
                                            :
                                            ""

                                        : ""
                                        }}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap border border-purple-600">
                                    <div class="text-sm text-left">
                                        {{Object.keys(faction.statsFactionLose).length > 0 && Object.keys(faction.statsFactionWin).length > 0 ?
                                            faction.statsFactionLose.Angmar || faction.statsFactionWin.Angmar ?
                                            `(${faction.statsFactionWin.Angmar ? faction.statsFactionWin.Angmar : 0}
                                            /
                                            ${faction.statsFactionLose.Angmar ? faction.statsFactionLose.Angmar : 0}) 
                                            ${((faction.statsFactionWin.Angmar ? faction.statsFactionWin.Angmar : 0 / (faction.statsFactionLose.Angmar ? faction.statsFactionLose.Angmar : 0 + faction.statsFactionWin.Angmar ? faction.statsFactionWin.Angmar : 0)) * 100).toFixed(0)}%
                                            `
                                            : ""
                                        : 
                                        Object.keys(faction.statsFactionLose).length > 0 ? 
                                            faction.statsFactionLose.Angmar ?
                                            `${faction.statsFactionLose.Angmar ? faction.statsFactionLose.Angmar : 0}
                                            Victoire${faction.statsFactionLose.Angmar && faction.statsFactionLose.Angmar.length > 1 ? 's' : ''}
                                            `
                                            :
                                            ""
                                        :
                                        Object.keys(faction.statsFactionWin).length > 0 ? 
                                            faction.statsFactionLose.Angmar ?
                                            `${faction.statsFactionWin.Angmar ? faction.statsFactionWin.Angmar : 0}
                                            Défaite${faction.statsFactionWin.Angmar && faction.statsFactionWin.Angmar.length > 1 ? 's' : ''}`
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

            <header class="px-5 py-4 border-b border-orange-500 flex">
                <div class="flex-grow">
                    <h2 class="font-semibold text-white">Maps</h2>
                </div>
                <div class="flex-none">
                    <button @click="hide('map')" class="text-red-100 ring-4 ring-red-800 bg-red-700 px-4 py-2 rounded-2xl">{{showMaps ? "Cacher" : "Afficher"}}</button>
                </div>
            </header>

            <div class="p-3" v-if="showMaps">
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
                                <td class="p-2 whitespace-nowrap border border-blue-600">
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
                                <td class="p-2 whitespace-nowrap border border-green-600">
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
                                <td class="p-2 whitespace-nowrap border border-yellow-300">
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
                                <td class="p-2 whitespace-nowrap border border-red-600">
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
                                <td class="p-2 whitespace-nowrap border border-white">
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
                                <td class="p-2 whitespace-nowrap border border-orange-600">
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
                                <td class="p-2 whitespace-nowrap border border-purple-600">
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

    <div v-if="info" class="flex-grow">
            <div class="flex flex-col justify-top h-full">
        <!-- Table -->
        <div class="w-full max-w-3xl mx-auto bg-gray-900 shadow-lg rounded-sm border border-orange-600">
                    <header class="px-5 py-4 border-b border-orange-500 flex">
                <div class="flex-grow">
                    <h2 class="font-semibold text-white">{{player && player.name}}</h2>
                </div>
                <div class="flex-none">
                    <button @click="close" class="text-red-100 ring-4 ring-red-800 bg-red-700 px-4 py-2 rounded-2xl">Fermer</button>
                </div>
            </header>

            <div class="p-3" v-if="showMatchs">
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
                            <tr v-for="match in sortedMatchPlayer" v-bind:key="match._id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{match.date}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">{{match.mapUp && match.mapUp.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{match.playerWinUp && match.playerWinUp.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{match.playerLoseUp && match.playerLoseUp.name}}</div>
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
        players: [],
        matchs: [],
        maps: [],
        factions: [],
        isShowModal: false,
        data: [],
        showPlayers: true,
        showMatchs: true,
        showFactions: true,
        showMaps: true,
        player: [],
        info: false,
        block: [
            {
                id: 0, 
                data: 0}, {id: 1, data: 1}, {id: 3, data: 3}, {id: 4, data: 4}]
        }
    },
    async fetch() {
      this.loading = false;
      this.players =  await this.$strapi.find('leagues')
      this.matchs =  await this.$strapi.find('league-matchs')
      this.factions =  await this.$strapi.find('league-factions')
      this.maps =  await this.$strapi.find('league-maps')
      this.loading = true;
    },
    methods: {  
        hide(block){
            switch (block) {
                case "player":
                    this.showPlayers = !this.showPlayers
                    break;
                case "match":
                    this.showMatchs = !this.showMatchs
                    break;
                case "faction":
                    this.showFactions = !this.showFactions
                    break;
                case "map":
                    this.showMaps = !this.showMaps
                    break;
            }
        },
        infoPlayer(player){
            this.info = true
            this.player = player
        },
        close(){
            this.info = false
            this.player = []
        },
        onDrop(dropResult) {
            // console.log(dropResult, "dropRESULT")
        this.block = this.applyDrag(this.block, dropResult);
        }
    },
    computed:{
        sortedPlayers() {
            return this.players.map(item=>item).sort((a,b)=> a.rang - b.rang)
        },
        sortedFactions() {
            if(this.factions){

                let NewFaction = this.factions.map(f => {
                    let newObject = {
                        statsFactionWin: {},
                        statsFactionLose: {}
                    }

                    if(f.matchs_lose.length > 0){
                        f.matchs_lose.map(m => {
                            typeof newObject.statsFactionWin[this.factions.find(x => x._id === m.faction_win).name] === 'undefined' ? 
                            newObject.statsFactionWin[this.factions.find(x => x._id === m.faction_win).name] = 1 : 
                            newObject.statsFactionWin[this.factions.find(x => x._id === m.faction_win).name]++;
                        })
                    }

                    if(f.matchs_win.length > 0){
                        f.matchs_win.map(m => {
                            typeof newObject.statsFactionLose[this.factions.find(x => x._id === m.faction_lose).name] === 'undefined' ? 
                            newObject.statsFactionLose[this.factions.find(x => x._id === m.faction_lose).name] = 1 : 
                            newObject.statsFactionLose[this.factions.find(x => x._id === m.faction_lose).name]++;
                        })
                    }
                    return Object.assign(f, newObject)
                })
                return NewFaction;
            }
        },
        sortedMatchPlayer() {
            if(this.player){

                let playerWin = this.player.win.map(p=> {
                    console.log(p, "diejdiej")
                    let object = {
                        mapUp: this.maps.find(x => x._id === p.map),
                        playerWinUp: this.players.find(x => x._id === p.playerWin),
                        playerLoseUp: this.players.find(x => x._id === p.playerLose),
                        factionWinUp: this.factions.find(x => x._id === p.faction_win),
                        factionLoseUp: this.factions.find(x => x._id === p.faction_lose),
                    }

                    
                    return Object.assign(p, object)
                })

                let playerLose = this.player.lose.map(p=> {
                    console.log(p, "diejdiej")
                    let object = {
                        mapUp: this.maps.find(x => x._id === p.map),
                        playerWinUp: this.players.find(x => x._id === p.playerWin),
                        playerLoseUp: this.players.find(x => x._id === p.playerLose),
                        factionWinUp: this.factions.find(x => x._id === p.faction_win),
                        factionLoseUp: this.factions.find(x => x._id === p.faction_lose),
                    }
                    return Object.assign(p, object)
                })

            let Newmatchs = [...playerWin, ...playerLose]
            console.log(playerWin)

            return Newmatchs.map(match=>match).sort((a,b)=> a.updatedAt - b.updatedAt)
            }
        },
        sortedFaction() {

            return this.matchs.reduce(function(obj, v) {
                obj[v.factionLose] = { lose: (obj[v.factionLose] || 0) + 1};
                obj[v.factionWin] = { win: (obj[v.factionWin] || 0) + 1};
                return obj;
            }, {})
        },
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