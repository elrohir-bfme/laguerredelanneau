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
                            <tr v-for="faction in sortedLast" v-bind:key="faction._id">
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
                                    <div v-if="faction.statsFactionWin[fac.name] || faction.statsFactionWin[fac.name]" class="flex items-center justify-center text-sm text-center" :class="fac.color == 'yellow' ? 'text-gray-800' : 'text-white'">
                                        <p>
                                            {{`${(faction.statsFactionWin[fac.name] >= 0 || faction.statsFactionLose[fac.name] >= 0) ? ((((faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0) / ((faction.statsFactionLose[fac.name] ? faction.statsFactionLose[fac.name] : 0) + (faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0))) * 100).toFixed(0)) : "0"}%`}}
                                        </p>
                                    </div>
                                    <div v-if="faction.statsFactionWin[fac.name] || faction.statsFactionWin[fac.name]" class="w-full h-2 bg-indigo-100 rounded-full mb-2" :class="fac.color == 'yellow' ? 'ring-1 ring-gray-900' : 'border-0'">
                                        <div 
                                            :style="`width: ${Object.keys(faction.statsFactionLose).length > 0 || Object.keys(faction.statsFactionWin).length > 0 ? (((faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0) / ((faction.statsFactionLose[fac.name] ? faction.statsFactionLose[fac.name] : 0) + (faction.statsFactionWin[fac.name] ? faction.statsFactionWin[fac.name] : 0))) * 100).toFixed(0) : 0}%;`" 
                                            class="h-full text-center text-xs rounded-full"
                                            :class="`from-${fac.color}-500 to-${fac.color}-700 ${(Object.keys(faction.statsFactionLose).length > 0 || Object.keys(faction.statsFactionWin).length > 0) && (faction.statsFactionLose[fac.name] || faction.statsFactionWin[fac.name]) ? 'bg-gradient-to-r' : ''}`"
                                        >
                                        </div>
                                    </div>
                                    <div v-if="faction.statsFactionWin[fac.name] || faction.statsFactionWin[fac.name]" class="flex items-center justify-around text-xs" :class="fac.color == 'yellow' ? 'text-gray-700' : 'text-gray-200'">
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
  layout: "leaguebeta",
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
            sortedLast: [{"id":1,"attributes":{"name":"Men","createdAt":"2022-03-20T22:07:46.894Z","updatedAt":"2022-03-23T14:58:59.255Z","img":{"data":{"id":5,"attributes":{"name":"gondor.webp","alternativeText":"gondor.webp","caption":"gondor.webp","width":128,"height":127,"formats":null,"hash":"gondor_f04a690126","ext":".webp","mime":"image/webp","size":3.75,"url":"/uploads/gondor_f04a690126.webp","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-03-23T14:58:57.387Z","updatedAt":"2022-03-23T14:58:57.387Z"}}}},"statsFactionWin":{"Goblins":3,"Dwarves":3,"Mordor":1,"Isengard":1,"Men":1},"statsFactionLose":{"Elves":2,"Isengard":5,"Goblins":2,"Mordor":2,"Angmar":2,"Men":1,"Dwarves":1},"wins":9,"loses":15},{"id":2,"attributes":{"name":"Isengard","createdAt":"2022-03-23T14:59:17.165Z","updatedAt":"2022-03-23T14:59:17.165Z","img":{"data":{"id":6,"attributes":{"name":"isengard.webp","alternativeText":"isengard.webp","caption":"isengard.webp","width":128,"height":127,"formats":null,"hash":"isengard_03228d89ba","ext":".webp","mime":"image/webp","size":3.33,"url":"/uploads/isengard_03228d89ba.webp","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-03-23T14:59:15.508Z","updatedAt":"2022-03-23T14:59:15.508Z"}}}},"statsFactionWin":{"Dwarves":3,"Angmar":1,"Men":5,"Goblins":2,"Elves":3},"statsFactionLose":{"Angmar":4,"Mordor":3,"Dwarves":2,"Elves":5,"Men":1},"wins":14,"loses":15},{"id":3,"attributes":{"name":"Angmar","createdAt":"2022-03-23T15:04:26.249Z","updatedAt":"2022-03-23T15:04:26.249Z","img":{"data":{"id":9,"attributes":{"name":"angmar.webp","alternativeText":"angmar.webp","caption":"angmar.webp","width":128,"height":127,"formats":null,"hash":"angmar_2c3a7ab387","ext":".webp","mime":"image/webp","size":6.47,"url":"/uploads/angmar_2c3a7ab387.webp","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-03-23T15:04:19.699Z","updatedAt":"2022-03-23T15:04:19.699Z"}}}},"statsFactionWin":{"Isengard":4,"Angmar":1,"Men":2,"Mordor":1,"Goblins":1},"statsFactionLose":{"Isengard":1,"Elves":2,"Mordor":1,"Angmar":1,"Dwarves":1,"Goblins":1},"wins":9,"loses":7},{"id":4,"attributes":{"name":"Mordor","createdAt":"2022-03-23T15:04:37.168Z","updatedAt":"2022-03-23T15:04:37.168Z","img":{"data":{"id":12,"attributes":{"name":"mordor.webp","alternativeText":"mordor.webp","caption":"mordor.webp","width":568,"height":568,"formats":{"thumbnail":{"name":"thumbnail_mordor.webp","hash":"thumbnail_mordor_3929756c58","ext":".webp","mime":"image/webp","path":null,"width":156,"height":156,"size":4.93,"url":"/uploads/thumbnail_mordor_3929756c58.webp"},"small":{"name":"small_mordor.webp","hash":"small_mordor_3929756c58","ext":".webp","mime":"image/webp","path":null,"width":500,"height":500,"size":21.81,"url":"/uploads/small_mordor_3929756c58.webp"}},"hash":"mordor_3929756c58","ext":".webp","mime":"image/webp","size":27.01,"url":"/uploads/mordor_3929756c58.webp","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-03-23T15:04:20.277Z","updatedAt":"2022-03-23T15:04:20.277Z"}}}},"statsFactionWin":{"Mordor":3,"Isengard":3,"Angmar":1,"Goblins":1,"Men":2,"Dwarves":2},"statsFactionLose":{"Dwarves":3,"Mordor":3,"Goblins":1,"Men":1,"Elves":1,"Angmar":1},"wins":12,"loses":10},{"id":5,"attributes":{"name":"Elves","createdAt":"2022-03-23T15:07:22.479Z","updatedAt":"2022-03-23T15:07:22.479Z","img":{"data":{"id":13,"attributes":{"name":"elfe.webp","alternativeText":"elfe.webp","caption":"elfe.webp","width":600,"height":600,"formats":{"thumbnail":{"name":"thumbnail_elfe.webp","hash":"thumbnail_elfe_6a46c36140","ext":".webp","mime":"image/webp","path":null,"width":156,"height":156,"size":8.28,"url":"/uploads/thumbnail_elfe_6a46c36140.webp"},"small":{"name":"small_elfe.webp","hash":"small_elfe_6a46c36140","ext":".webp","mime":"image/webp","path":null,"width":500,"height":500,"size":54.92,"url":"/uploads/small_elfe_6a46c36140.webp"}},"hash":"elfe_6a46c36140","ext":".webp","mime":"image/webp","size":77.67,"url":"/uploads/elfe_6a46c36140.webp","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-03-23T15:04:20.467Z","updatedAt":"2022-03-23T15:04:20.467Z"}}}},"statsFactionWin":{"Men":2,"Angmar":2,"Elves":3,"Goblins":1,"Isengard":5,"Dwarves":2,"Mordor":1},"statsFactionLose":{"Elves":3,"Dwarves":4,"Goblins":1,"Isengard":3},"wins":16,"loses":11},{"id":6,"attributes":{"name":"Goblins","createdAt":"2022-03-23T15:07:34.679Z","updatedAt":"2022-03-23T15:07:34.679Z","img":{"data":{"id":10,"attributes":{"name":"gobelin.webp","alternativeText":"gobelin.webp","caption":"gobelin.webp","width":128,"height":127,"formats":null,"hash":"gobelin_5e66da73c5","ext":".webp","mime":"image/webp","size":4.03,"url":"/uploads/gobelin_5e66da73c5.webp","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-03-23T15:04:19.720Z","updatedAt":"2022-03-23T15:04:19.720Z"}}}},"statsFactionWin":{"Mordor":1,"Men":2,"Elves":1,"Dwarves":1,"Angmar":1,"Goblins":1},"statsFactionLose":{"Men":3,"Isengard":2,"Dwarves":5,"Elves":1,"Mordor":1,"Goblins":1,"Angmar":1},"wins":7,"loses":14},{"id":7,"attributes":{"name":"Dwarves","createdAt":"2022-03-23T15:07:43.396Z","updatedAt":"2022-03-23T15:07:43.396Z","img":{"data":{"id":11,"attributes":{"name":"nain.webp","alternativeText":"nain.webp","caption":"nain.webp","width":128,"height":127,"formats":null,"hash":"nain_79d01be98c","ext":".webp","mime":"image/webp","size":4.27,"url":"/uploads/nain_79d01be98c.webp","previewUrl":null,"provider":"local","provider_metadata":null,"createdAt":"2022-03-23T15:04:19.793Z","updatedAt":"2022-03-23T15:04:19.793Z"}}}},"statsFactionWin":{"Mordor":3,"Goblins":5,"Isengard":2,"Elves":4,"Angmar":1,"Men":1},"statsFactionLose":{"Isengard":3,"Men":3,"Elves":2,"Mordor":2,"Goblins":1},"wins":16,"loses":11}]
        }
    },
}
</script>
<style>

</style>