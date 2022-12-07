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
                            <tr v-for="map in sortedMapsLast" v-bind:key="map._id">
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
  layout: "leaguealpha",
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
        sortedMapsLast: [{"id":1,"attributes":{"name":"Jungles of Far Harad","description":"A region in the far south of Harad densely forested with tropical trees and bushes. It is supplied with water by rivers which eventually flow into the Great Sea.\n\nSize : 380 x 400\nLairs : x4 Wargs 2x Trolls\nNeutral structures : 2 signal fires. ","minimap":{"data":{"id":112,"attributes":{"url":"/uploads/jungles_map_1288c12d6a.jpg"}}}},"statsFactionWin":{"Men":31,"Angmar":15,"Goblins":16,"Dwarves":13,"Mordor":21,"Isengard":21,"Elves":13},"statsFactionLose":{"Elves":15,"Isengard":16,"Angmar":16,"Dwarves":18,"Goblins":21,"Men":21,"Mordor":22,"undefined":1},"wins":130,"loses":130},{"id":2,"attributes":{"name":"Sakura Forest","description":"A sacred forest north of the Sea of Rhûn. It is a place filled with temples, which were built to cultivate and shelter the rare sakura trees.\n\nSize :  400x360\nLairs : 4x Wargs","minimap":{"data":{"id":113,"attributes":{"url":"/uploads/Sakura_map_ab131caa63.jpg"}}}},"statsFactionWin":{"Mordor":13,"Elves":18,"Isengard":20,"Angmar":16,"Goblins":14,"Dwarves":14,"Men":13},"statsFactionLose":{"Angmar":15,"Goblins":23,"Men":16,"Isengard":12,"Mordor":13,"Dwarves":17,"Elves":12},"wins":108,"loses":108},{"id":3,"attributes":{"name":"Westfold","description":"A rocky region, dotted with forests in the western region of Rohan.\n\nSize : 375x325\nLairs : 4x Wargs 1x Troll\nNeutral structures : 2 SIgnal Fires. ","minimap":{"data":{"id":114,"attributes":{"url":"/uploads/westfold_map_c787c6055b.jpg"}}}},"statsFactionWin":{"Mordor":23,"Angmar":16,"Dwarves":24,"Isengard":37,"Elves":26,"Goblins":23,"Men":18},"statsFactionLose":{"Dwarves":31,"Angmar":29,"Men":17,"Goblins":30,"Mordor":14,"Elves":17,"Isengard":29},"wins":167,"loses":167},{"id":4,"attributes":{"name":"Ettenmoors","description":"Lairs : x2 Wights 2x Goblin lairs 2x Trolls. Ettenmoors, also known as Troll Mountain, was a mountainous region of Eriador, which was west of the Misty Mountains. The land was wild, and many evil creatures lived there.","minimap":{"data":{"id":341,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_05_04_47_52_47_b2cf72f7d6.png"}}}},"statsFactionWin":{"Isengard":6,"Dwarves":3,"Angmar":2,"Men":8,"Mordor":6,"Elves":2,"Goblins":4},"statsFactionLose":{"Goblins":9,"Angmar":4,"Men":5,"Isengard":3,"Mordor":6,"Dwarves":4},"wins":31,"loses":31},{"id":5,"attributes":{"name":"Brandy Hills ","description":"Lairs : 4x Wargs 2x Trolls. This is an area north of buckland along the eastern shores of Brandywine river until the Brandywood. Girdley island is the only point of interest os these hills though they are dotted by small Arnorian ruins. ","minimap":{"data":{"id":212,"attributes":{"url":"/uploads/minimappp_8d097d5a6d.png"}}}},"statsFactionWin":{"Men":13,"Goblins":8,"Elves":10,"Mordor":9,"Dwarves":9,"Isengard":13,"Angmar":8},"statsFactionLose":{"Goblins":10,"Men":9,"Mordor":6,"Angmar":10,"Isengard":18,"Dwarves":9,"Elves":8},"wins":70,"loses":70},{"id":6,"attributes":{"name":"Chetwood","description":"Lairs : x2 trolls x2 Wargs. This forest situated east of Bree was bordered by midgewater marshes to the east, and the great eastern road to the south. Aragorn led the hobbits through this forest on their way to Rivendell. ","minimap":{"data":{"id":213,"attributes":{"url":"/uploads/fore_836b20e750.png"}}}},"statsFactionWin":{"Mordor":4,"Angmar":10,"Dwarves":6,"Elves":7,"Isengard":3,"Men":4},"statsFactionLose":{"Elves":3,"Angmar":3,"Dwarves":2,"Men":8,"Isengard":7,"Goblins":5,"Mordor":6},"wins":34,"loses":34},{"id":7,"attributes":{"name":"Sorow Isles","description":"Lairs : 2x Goblin lairs 2x Trolls 2x custom Corsairs. A group of islands in the Belfalas Sea. It is said to be host to two malevolent spirits who drive naive visitors to madness.","minimap":{"data":{"id":234,"attributes":{"url":"/uploads/Screenshot_12_06_2022_21_25_15_e444c3abde.jpg"}}}},"statsFactionWin":{"Mordor":3,"Elves":7,"Isengard":3,"Dwarves":2,"Goblins":2,"Men":2,"Angmar":1},"statsFactionLose":{"Goblins":5,"Angmar":4,"Mordor":2,"Men":2,"Dwarves":3,"Isengard":2,"Elves":2},"wins":20,"loses":20},{"id":8,"attributes":{"name":"Belfalas Abyss","description":"Lairs : 2x Spiders 2x Wights. The wonderful depth of the Sea of Belfalas.","minimap":{"data":{"id":243,"attributes":{"url":"/uploads/Screenshot_13_06_2022_14_31_14_26d95ba696.jpg"}}}},"statsFactionWin":{"Isengard":8,"Elves":5,"Angmar":9,"Men":5,"Dwarves":3,"Mordor":4,"Goblins":1},"statsFactionLose":{"Men":6,"Dwarves":6,"Mordor":11,"Goblins":6,"Isengard":2,"Elves":2,"Angmar":2},"wins":35,"loses":35},{"id":9,"attributes":{"name":"Eastfold II","description":"Lairs : 4x Wargs 2x Trolls. A region of Rohan which bordered the Westfold via the Snowbourn river on the west and Anorien in Gondor to the East. ","minimap":{"data":{"id":1051,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_08_14_17_55_21_34_68cea8ca1e.png"}}}},"statsFactionWin":{"Men":8,"Mordor":21,"Isengard":18,"Elves":21,"Goblins":22,"Angmar":8,"Dwarves":15},"statsFactionLose":{"Dwarves":14,"Isengard":20,"Men":13,"Angmar":15,"Mordor":17,"Elves":20,"Goblins":14},"wins":113,"loses":113},{"id":10,"attributes":{"name":"Rhun Shore","description":"Lairs : x3 Trolls 4x Wargs.\nNeutral structure : 1 Inn, 1 Outpost","minimap":{"data":{"id":340,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_17_53_18_66_facc3684e0.png"}}}},"statsFactionWin":{"Isengard":2},"statsFactionLose":{"Goblins":2},"wins":2,"loses":2},{"id":12,"attributes":{"name":"Blood Gulch","description":"Lairs : 4x Wargs 2x Trolls\nNeutral Structure : 2x Signal Fire.","minimap":{"data":{"id":316,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_02_21_25_43_27_cf46968758.png"}}}},"statsFactionWin":{"Mordor":1,"Goblins":2,"Men":4,"Isengard":2,"Dwarves":4,"Elves":4,"Angmar":1},"statsFactionLose":{"Isengard":6,"Angmar":1,"Dwarves":1,"Elves":3,"Goblins":4,"Men":2,"Mordor":1},"wins":18,"loses":18},{"id":13,"attributes":{"name":"Cirdan's Cove","description":"Lairs : 4x Goblins lair.\nNeutral Structures : 2 Signal Fires. ","minimap":{"data":{"id":320,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_39_55_18_efc39cff5f.png"}}}},"statsFactionWin":{"Dwarves":1,"Mordor":1,"Angmar":2,"Men":1,"Isengard":1,"Elves":2},"statsFactionLose":{"Goblins":1,"Angmar":3,"Men":1,"Isengard":1,"Elves":1,"Mordor":1},"wins":8,"loses":8},{"id":14,"attributes":{"name":"Dunland II","description":"Lairs : 2x Goblins lair 2x Wargs 2x Trolls","minimap":{"data":{"id":338,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_43_26_20_d7d5d43f42.png"}}}},"statsFactionWin":{"Men":1,"Angmar":7,"Dwarves":2,"Mordor":1,"Isengard":1,"Elves":4},"statsFactionLose":{"Men":6,"Elves":3,"Isengard":3,"Angmar":3,"Dwarves":1},"wins":16,"loses":16},{"id":15,"attributes":{"name":"Erech 4th Age","description":"Lairs : 2x Goblins Lair 2x Wargs 2x Spiders 2x Trolls. ","minimap":{"data":{"id":322,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_43_41_87_3705652a03.png"}}}},"statsFactionWin":{"Goblins":7,"Isengard":10,"Dwarves":5,"Angmar":2,"Elves":4,"Mordor":5,"Men":7},"statsFactionLose":{"Isengard":9,"Men":6,"Goblins":7,"Angmar":9,"Elves":4,"Dwarves":3,"Mordor":2},"wins":40,"loses":40},{"id":16,"attributes":{"name":"Eryn Laer","description":"Lairs : 4x Wargs 2x Trolls\nNeutral Structures : 2 Singal Fires.","minimap":{"data":{"id":319,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_43_50_18_2240c98e4f.png"}}}},"statsFactionWin":{"Angmar":7,"Elves":5,"Men":5,"Dwarves":6,"Isengard":5,"Mordor":8,"Goblins":3},"statsFactionLose":{"Dwarves":7,"Isengard":12,"Men":4,"Elves":8,"Mordor":2,"Goblins":4,"Angmar":2},"wins":39,"loses":39},{"id":17,"attributes":{"name":"Fangorn","description":"Lairs : 2x Wights 2x Goblins Lair. \nNeutral Structures : 2 Inns. ","minimap":{"data":{"id":321,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_43_57_33_5a29cb7b90.png"}}}},"statsFactionWin":{"Dwarves":1},"statsFactionLose":{"Goblins":1},"wins":1,"loses":1},{"id":18,"attributes":{"name":"Firien Dale","description":"Lairs : 2x Trolls 4x Wargs\nNeutral Structures : 2 Inns. ","minimap":{"data":{"id":318,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_44_03_59_90c87470a9.png"}}}},"statsFactionWin":{"Isengard":21,"Mordor":9,"Goblins":13,"Dwarves":8,"Men":12,"Elves":12,"Angmar":14},"statsFactionLose":{"Elves":7,"Goblins":16,"Angmar":18,"Isengard":11,"Mordor":5,"Men":18,"Dwarves":14},"wins":89,"loses":89},{"id":19,"attributes":{"name":"Fords Of Bruinen","description":"Lairs : 2x Trolls 4x Wargs.\nNeutral Structures : 2 Inns.","minimap":{"data":{"id":328,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_44_16_70_5327b729e5.png"}}}},"statsFactionWin":{"Isengard":6,"Men":5,"Dwarves":4,"Goblins":7,"Angmar":5,"Mordor":2,"Elves":2},"statsFactionLose":{"Men":3,"Isengard":5,"Dwarves":5,"Mordor":2,"Angmar":5,"Goblins":6,"Elves":5},"wins":31,"loses":31},{"id":20,"attributes":{"name":"Fords Of Isen","description":"Lairs : 2x Trolls 4x Wargs\nNeutral Structures : 2 Inns.","minimap":{"data":{"id":323,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_44_26_59_fa26fe314e.png"}}}},"statsFactionWin":{"Elves":102,"Isengard":75,"Angmar":81,"Men":108,"Mordor":84,"Goblins":74,"Dwarves":75},"statsFactionLose":{"Dwarves":83,"Angmar":79,"Men":88,"Isengard":92,"Elves":76,"Goblins":86,"Mordor":95},"wins":599,"loses":599},{"id":21,"attributes":{"name":"Gap of Rohan","description":"Lairs : 2x Trolls 4x Wargs\nNeutral Structures : 2 Signal Fires.","minimap":{"data":{"id":327,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_44_34_12_be3a77d2e5.png"}}}},"statsFactionWin":{"Mordor":1},"statsFactionLose":{"Elves":1},"wins":1,"loses":1},{"id":22,"attributes":{"name":"Glenford","description":"Lairs : 4x Wargs 2x Trolls\nNeutral Structures : 1 Inn. ","minimap":{"data":{"id":326,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_44_38_08_efdf407680.png"}}}},"statsFactionWin":{"Dwarves":4,"Elves":3,"Isengard":3,"Mordor":2,"Men":1,"Angmar":1,"Goblins":2},"statsFactionLose":{"Angmar":2,"Elves":2,"Dwarves":3,"Goblins":5,"Men":2,"Isengard":2},"wins":16,"loses":16},{"id":23,"attributes":{"name":"Hollin","description":"Lairs : 4x Wargs 2x Trolls.\nNeutral Structures : 2 Inns.","minimap":{"data":{"id":324,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_44_46_13_afd32b527f.png"}}}},"statsFactionWin":{"Goblins":13,"Men":14,"Isengard":16,"Elves":16,"Mordor":16,"Dwarves":15,"Angmar":14},"statsFactionLose":{"Men":13,"Angmar":14,"Mordor":8,"Isengard":24,"Dwarves":16,"Elves":10,"Goblins":19},"wins":104,"loses":104},{"id":24,"attributes":{"name":"Last Bridge","description":"Lairs : x4 Wargs 2x Trolls.\nNeutral Structures : 2 Inns. ","minimap":{"data":{"id":329,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_45_03_60_70db3f6343.png"}}}},"statsFactionWin":{"Mordor":5,"Elves":5,"Angmar":5,"Isengard":7,"Dwarves":2,"Men":2},"statsFactionLose":{"Elves":3,"Goblins":5,"Angmar":4,"Mordor":4,"Dwarves":3,"Men":2,"Isengard":5},"wins":26,"loses":26},{"id":25,"attributes":{"name":"Lossarnach","description":"Lairs : 2x Goblins Lair 2x Wargs 2x Trolls.\nNeutral Structures : None.","minimap":{"data":{"id":330,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_45_57_94_711a85db23.png"}}}},"statsFactionWin":{"Mordor":3,"Goblins":4,"Men":2,"Isengard":3,"Angmar":4,"Dwarves":3,"Elves":1},"statsFactionLose":{"Dwarves":2,"Goblins":4,"Elves":2,"Isengard":2,"Angmar":4,"Mordor":1,"Men":5},"wins":20,"loses":20},{"id":26,"attributes":{"name":"Mering Stream","description":"Lairs : 4x Wargs 2x Trolls\nNeutral Structures : 2 Inns.","minimap":{"data":{"id":336,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_46_11_68_af51e6ccad.png"}}}},"statsFactionWin":{"Elves":9,"Isengard":12,"Dwarves":3,"Mordor":5,"Goblins":6,"Angmar":7,"Men":5},"statsFactionLose":{"Dwarves":5,"Goblins":6,"Men":5,"Isengard":14,"Elves":8,"Angmar":4,"Mordor":5},"wins":47,"loses":47},{"id":27,"attributes":{"name":"Mirkwood II ","description":"Lairs : 4x Wargs 2x Trolls.\nNeutral Structures : 2 Inns.","minimap":{"data":{"id":334,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_46_21_37_8c0a1d55a8.png"}}}},"statsFactionWin":{"Goblins":4,"Mordor":1,"Isengard":1,"Elves":1,"Angmar":1},"statsFactionLose":{"Angmar":1,"Men":3,"Goblins":4},"wins":8,"loses":8},{"id":28,"attributes":{"name":"Plains of Lindon","description":"Lairs : 4x Wargs 2 Trolls.\nNeutral Structures : 2 Inns.","minimap":{"data":{"id":333,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_46_27_24_4c6dacad71.png"}}}},"statsFactionWin":{"Men":12,"Goblins":15,"Isengard":9,"Elves":9,"Mordor":6,"Angmar":9,"Dwarves":7},"statsFactionLose":{"Mordor":10,"Isengard":9,"Elves":11,"Men":10,"Angmar":8,"Dwarves":12,"Goblins":7},"wins":67,"loses":67},{"id":29,"attributes":{"name":"Sirannon","description":"Lairs : 4x Wargs 2 Trolls.\nNeutral Structures : 1 inn.","minimap":{"data":{"id":331,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_46_08_86_b6b6d69f43.png"}}}},"statsFactionWin":{"Mordor":1,"Men":4,"Angmar":1,"Goblins":1,"Isengard":3,"Elves":2},"statsFactionLose":{"Goblins":5,"Mordor":1,"Angmar":1,"Dwarves":2,"Isengard":1,"Men":1,"Elves":1},"wins":12,"loses":12},{"id":30,"attributes":{"name":"The Iron Hills","description":"Lairs : 2x Trolls 2x Spiders.\nNeutral Structures : 2 Signal Fires.","minimap":{"data":{"id":332,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_46_40_83_5b791142dd.png"}}}},"statsFactionWin":{"Elves":2,"Angmar":2,"Men":1,"Mordor":3,"Goblins":1,"Isengard":1},"statsFactionLose":{"Elves":4,"Men":1,"Angmar":1,"Goblins":2,"Isengard":1,"Dwarves":1},"wins":10,"loses":10},{"id":31,"attributes":{"name":"Tombs of Karna","description":"Lairs : 2x Goblins lair 2x Trolls 2x Wargs.\nNeutral Structures : 2 Inns, 1 Signal Fire.","minimap":{"data":{"id":335,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_46_48_97_9332f12681.png"}}}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0},{"id":32,"attributes":{"name":"Tyrn Gorthad","description":"Lairs : 7x Wights.\nNeutral Structures : 2 Inns.","minimap":{"data":{"id":337,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_03_16_46_55_03_ab57523e15.png"}}}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0},{"id":33,"attributes":{"name":"Ettenmoors II","description":"Lairs : 2x Wargs 2x Trolls Neutral Structures : 2 Inns.","minimap":{"data":{"id":608,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_07_17_23_34_31_15_eb0c7152c1.png"}}}},"statsFactionWin":{"Angmar":7,"Mordor":5,"Goblins":7,"Elves":4,"Isengard":5,"Men":5,"Dwarves":6},"statsFactionLose":{"Angmar":2,"Isengard":8,"Elves":5,"Goblins":14,"Mordor":2,"Dwarves":5,"Men":3},"wins":39,"loses":39},{"id":34,"attributes":{"name":"Rhudaur","description":"Rhudaur was the eastern Kingdom of Arnor and mostly populated by the native Hill-men. Under their leader Hwaldar they joined the Witch-king in his war against the Dunedain.","minimap":{"data":{"id":1053,"attributes":{"url":"/uploads/unknown_225c34ac96.png"}}}},"statsFactionWin":{"Men":7,"Goblins":20,"Elves":14,"Isengard":15,"Dwarves":7,"Angmar":9,"Mordor":9},"statsFactionLose":{"Goblins":22,"Men":8,"Dwarves":12,"Angmar":16,"Isengard":11,"Elves":9,"Mordor":3},"wins":81,"loses":81},{"id":35,"attributes":{"name":"Midgewater","description":"An Area within Bree-Land in the south-eastern region. It is known for its treacherous bogs that extend as far as the Weather Hills. \n\nSize : 370x310\nLairs : 2x Spiders Lair, 2x Trolls Lair, 2x Barrow Wights.\nNeutral Structure : 2x Inns, 1 signal Fire. ","minimap":{"data":{"id":2182,"attributes":{"url":"/uploads/Most_EA_Strategy_Games_Screenshot_2022_10_22_16_17_30_25_2_0ef0e83286.png"}}}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0}]
        }
    }
}
</script>
<style>

</style>