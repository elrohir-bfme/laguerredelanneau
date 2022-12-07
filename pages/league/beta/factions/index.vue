<template>
  <section class="text-white body-font">
  <div class="lg:container sm:m-0 lg:mx-auto lg:px-5 py-4 mx-auto">
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
                                <th class="hidden md:table-cell p-2 whitespace-nowrap" v-for="fac in factionList" v-bind:key="fac.name">
                                    <div class="font-semibold text-center">{{$t(`league.${fac.name}`)}}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-orange-500">
                            <tr v-for="faction in sortedFactionsLast" v-bind:key="faction._id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img class="rounded-full" :src="`https://api.laterredumilieu.fr${faction.attributes.img.data.attributes.url}`" width="40" height="40" :alt="faction.name">
                                        </div>
                                        <div class="font-medium text-white">{{$t(`league.${faction.attributes.name}`)}}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{faction.wins}}</div>
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
                                <td v-for="fac in factionList" v-bind:key="fac.name" 
                                class="hidden md:table-cell p-2 w-1/12 whitespace-nowrap border-t" :class="`bg-${fac.color}-${fac.color == 'gray' ? 800 : fac.color == 'yellow' ? 400 : 900} border-${fac.color}-600`">
                                    <div v-if="faction.statsFactionWin[fac.name] || faction.statsFactionLose[fac.name]" class="flex items-center justify-center text-sm text-center" :class="fac.color == 'yellow' ? 'text-gray-800' : 'text-white'">
                                        <p>
                                            {{`${(faction.statsFactionWin[fac.name] >= 0 || faction.statsFactionLose[fac.name] >= 0) ? ((((faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0) / ((faction.statsFactionLose[fac.name] ? faction.statsFactionLose[fac.name] : 0) + (faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0))) * 100).toFixed(0)) : "0"}%`}}
                                        </p>
                                    </div>
                                    <div v-if="faction.statsFactionWin[fac.name] || faction.statsFactionLose[fac.name]" class="w-full h-2 bg-indigo-100 rounded-full mb-2" :class="fac.color == 'yellow' ? 'ring-1 ring-gray-900' : 'border-0'">
                                        <div 
                                            :style="`width: ${Object.keys(faction.statsFactionLose).length > 0 || Object.keys(faction.statsFactionWin).length > 0 ? (((faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0) / ((faction.statsFactionLose[fac.name] ? faction.statsFactionLose[fac.name] : 0) + (faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0))) * 100).toFixed(0) : 0}%;`" 
                                            class="h-full text-center text-xs rounded-full"
                                            :class="`from-${fac.color}-500 to-${fac.color}-700 ${(Object.keys(faction.statsFactionLose).length > 0 || Object.keys(faction.statsFactionWin).length > 0) && (faction.statsFactionLose[fac.name] || faction.statsFactionWin[fac.name]) ? 'bg-gradient-to-r' : ''}`"
                                        >
                                        </div>
                                    </div>
                                    <div v-if="faction.statsFactionWin[fac.name] || faction.statsFactionLose[fac.name]" class="flex items-center justify-around text-xs" :class="fac.color == 'yellow' ? 'text-gray-700' : 'text-gray-200'">
                                        <p>
                                            {{faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0}}V
                                        </p>
                                        <p>
                                            {{faction.statsFactionLose[fac.name] ? faction.statsFactionLose[fac.name] : 0}}D
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
  layout: "leaguealpha",
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
            sortedFactionsLast: [{"id":1,"attributes":{"name":"Men","img":{"data":{"id":5,"attributes":{"url":"/uploads/gondor_f04a690126.webp"}}}},"statsFactionWin":{"Dwarves":34,"Mordor":49,"Goblins":51,"Men":40,"Elves":32,"Isengard":57,"Angmar":35},"statsFactionLose":{"Isengard":47,"Goblins":32,"Mordor":45,"Men":40,"Elves":40,"Dwarves":37,"Angmar":37},"wins":298,"loses":278},{"id":2,"attributes":{"name":"Isengard","img":{"data":{"id":6,"attributes":{"url":"/uploads/isengard_03228d89ba.webp"}}}},"statsFactionWin":{"Elves":45,"Men":47,"Isengard":45,"Dwarves":50,"Mordor":30,"Angmar":54,"Goblins":56},"statsFactionLose":{"Isengard":45,"Men":57,"Goblins":44,"Mordor":45,"Angmar":48,"Elves":54,"Dwarves":32},"wins":327,"loses":325},{"id":3,"attributes":{"name":"Angmar","img":{"data":{"id":9,"attributes":{"url":"/uploads/angmar_2c3a7ab387.webp"}}}},"statsFactionWin":{"Dwarves":23,"Angmar":27,"Goblins":49,"Isengard":48,"Elves":50,"Mordor":29,"Men":37,"undefined":1},"statsFactionLose":{"Elves":45,"Mordor":34,"Dwarves":39,"Angmar":27,"Men":35,"Isengard":54,"Goblins":41},"wins":264,"loses":275},{"id":4,"attributes":{"name":"Mordor","img":{"data":{"id":12,"attributes":{"url":"/uploads/mordor_3929756c58.webp"}}}},"statsFactionWin":{"Goblins":46,"Dwarves":49,"Elves":33,"Angmar":34,"Men":45,"Isengard":45,"Mordor":21},"statsFactionLose":{"Men":49,"Goblins":33,"Elves":46,"Isengard":30,"Dwarves":31,"Mordor":21,"Angmar":29},"wins":273,"loses":239},{"id":5,"attributes":{"name":"Elves","img":{"data":{"id":13,"attributes":{"url":"/uploads/elfe_6a46c36140.webp"}}}},"statsFactionWin":{"Dwarves":51,"Angmar":45,"Goblins":56,"Elves":18,"Men":40,"Mordor":46,"Isengard":54},"statsFactionLose":{"Isengard":45,"Mordor":33,"Men":32,"Elves":18,"Goblins":39,"Angmar":50,"Dwarves":25},"wins":310,"loses":242},{"id":6,"attributes":{"name":"Goblins","img":{"data":{"id":10,"attributes":{"url":"/uploads/gobelin_5e66da73c5.webp"}}}},"statsFactionWin":{"Goblins":35,"Men":32,"Mordor":33,"Isengard":44,"Dwarves":45,"Elves":39,"Angmar":41},"statsFactionLose":{"Mordor":46,"Goblins":35,"Men":51,"Dwarves":51,"Elves":56,"Angmar":49,"Isengard":56},"wins":269,"loses":344},{"id":7,"attributes":{"name":"Dwarves","img":{"data":{"id":11,"attributes":{"url":"/uploads/nain_79d01be98c.webp"}}}},"statsFactionWin":{"Goblins":51,"Angmar":39,"Elves":25,"Mordor":31,"Dwarves":27,"Men":37,"Isengard":32},"statsFactionLose":{"Elves":51,"Men":34,"Angmar":23,"Mordor":49,"Isengard":50,"Goblins":45,"Dwarves":27},"wins":242,"loses":279}]
        }
    }
}
</script>
<style>

</style>