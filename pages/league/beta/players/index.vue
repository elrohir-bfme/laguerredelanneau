    <template>
  <section class="text-white body-font">
  <div class="lg:container sm:m-0 lg:mx-auto lg:px-5 py-4 mx-auto">
    <div class="flex flex-col text-center w-full mb-5">
      <h1 class="font-medium mb-4 text-red-500 text-8xl">{{ $t('league.players') }}</h1>
    </div>

    <div class="flex">
    <div class="flex-grow">

    <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div class="w-full  mx-auto bg-gray-900 shadow-lg rounded-sm border border-orange-600">
            <header class="px-5 py-4 border-b border-orange-500 flex">
                <div class="flex-grow">
                    <h2 class="font-semibold text-white">{{ $t('league.players') }}</h2>
                </div>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full border-2 border-gray-800 rounded-xl">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.rang') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.elo') }}</div>
                                </th>
                                <!-- <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.main') }}</div>
                                </th> -->
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.players') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.lastDate') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.win') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.lose') }}</div>
                                </th>
                                <th class="p-2">
                                    <div class="font-semibold text-left">{{ $t('league.winRatio') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.games') }}</div>
                                </th>
                                <th class="hidden md:table-cell p-2 whitespace-nowrap" v-for="fac in factionList" v-bind:key="fac.name">
                                    <div  class="font-semibold text-left">{{$t(`league.${fac.name}`)}}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-orange-500">
                            <tr v-for="(player, index) in sortedPlayersLasted" v-bind:key="player._id" class="hover:opacity-80 hover:cursor-pointer">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-center text-gray-100">{{index + 1}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{player.attributes.elo}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img v-if="player.attributes.img && player.attributes.img.data" class="rounded-full" :src="`https://api.laterredumilieu.fr${player.attributes.img.data.attributes.url}`" width="40" height="40" :alt="player.attributes.name">
                                        </div>
                                        <div class="font-medium text-white">{{player.attributes.name}}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.date ? $moment(player.date).lang($i18n.locale).fromNow() : "-"}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.wins}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.loses}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.wins > 0 || player.loses > 0 ? `${((player.wins / (player.loses + player.wins)) * 100).toFixed(0)}%`  : $t(`league.noMatch`)}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.wins + player.loses}}</div>
                                </td>
                                <td v-for="fac in factionList" v-bind:key="fac.name" class="hidden md:table-cell p-2 w-1/12 whitespace-nowrap border-t" :class="`bg-${fac.color}-${fac.color == 'gray' ? 800 : fac.color == 'yellow' ? 400 : 900} border-${fac.color}-600`">
                                    <div v-if="player.statsFactionWin[fac.name] || player.statsFactionLose[fac.name]" class="flex items-center justify-center text-sm text-center" :class="fac.color == 'yellow' ? 'text-gray-800' : 'text-white'">
                                        <p>
                                            {{`${(player.statsFactionWin[fac.name] >= 0 || player.statsFactionLose[fac.name] >= 0) ? ((((player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0) / ((player.statsFactionLose[fac.name] ? player.statsFactionLose[fac.name] : 0) + (player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0))) * 100).toFixed(0)) : "0"}%`}}
                                        </p>
                                    </div>
                                    <div v-if="player.statsFactionWin[fac.name] || player.statsFactionLose[fac.name]" class="w-full h-2 bg-indigo-100 rounded-full mb-2" :class="fac.color == 'yellow' ? 'ring-1 ring-gray-900' : 'border-0'">
                                        <div 
                                            :style="`width: ${Object.keys(player.statsFactionLose).length > 0 || Object.keys(player.statsFactionWin).length > 0 ? (((player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0) / ((player.statsFactionLose[fac.name] ? player.statsFactionLose[fac.name] : 0) + (player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0))) * 100).toFixed(0) : 0}%;`" 
                                            class="h-full text-center text-xs rounded-full"
                                            :class="`from-${fac.color}-${fac.color == 'yellow' ? '300' : '500'} to-${fac.color}-${fac.color == 'yellow' ? '500' : '700'} ${(Object.keys(player.statsFactionLose).length > 0 || Object.keys(player.statsFactionWin).length > 0) && (player.statsFactionLose[fac.name] || player.statsFactionWin[fac.name]) ? 'bg-gradient-to-r' : ''}`"
                                        >
                                        </div>
                                    </div>
                                    <div v-if="player.statsFactionWin[fac.name] || player.statsFactionLose[fac.name]" class="flex items-center justify-around text-xs" :class="fac.color == 'yellow' ? 'text-gray-700' : 'text-gray-200'">
                                        <p>
                                            {{player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0}}
                                        </p>
                                        <p>
                                            {{player.statsFactionLose[fac.name] ? player.statsFactionLose[fac.name] : 0}}
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
            players: [],
            player: [],
            info: false,
            factionList: [
                {name: "Men", color: "blue"}, 
                {name: "Elves", color: "green"}, 
                {name: "Dwarves", color: "yellow"}, 
                {name: "Mordor", color: "red"},
                {name: "Isengard", color: "gray"},
                {name: "Goblins", color: "orange"},
                {name: "Angmar", color: "purple"}
            ],
            sortedPlayersLasted: [{"id":35,"attributes":{"name":"Solas","elo":1590,"img":{"data":null}},"statsFactionWin":{"Mordor":26,"Goblins":20,"Men":17,"Angmar":20,"Isengard":25,"Elves":24,"Dwarves":28},"statsFactionLose":{"Isengard":4,"Dwarves":5,"Men":7,"Goblins":4,"Elves":3,"Angmar":5,"Mordor":3},"wins":160,"loses":31,"date":"2022-11-27T15:27:00.000Z"},{"id":78,"attributes":{"name":"Zireael","elo":1446,"img":{"data":{"id":1798,"attributes":{"url":"/uploads/tog5pq_4ac18b3c11.jpg"}}}},"statsFactionWin":{"Elves":25,"Men":12,"Angmar":20,"Isengard":20,"Mordor":12,"Dwarves":13,"Goblins":21},"statsFactionLose":{"Dwarves":20,"Elves":16,"Men":18,"Goblins":22,"Mordor":13,"Isengard":11,"Angmar":9},"wins":123,"loses":109,"date":"2022-11-28T13:44:00.000Z"},{"id":32,"attributes":{"name":"Mr.SmoKkkk","elo":1360,"img":{"data":null}},"statsFactionWin":{"Elves":47,"Isengard":51,"Mordor":38,"Goblins":43,"Men":27,"Dwarves":44,"Angmar":57},"statsFactionLose":{"Angmar":37,"Dwarves":38,"Mordor":26,"Isengard":25,"Goblins":30,"Elves":30,"Men":30},"wins":307,"loses":216,"date":"2022-11-28T13:44:00.000Z"},{"id":29,"attributes":{"name":"Eternal","elo":1351,"img":{"data":{"id":344,"attributes":{"url":"/uploads/s3phoq_4c6915d8bb.png"}}}},"statsFactionWin":{"Isengard":8,"Dwarves":40,"Elves":15,"Angmar":11,"Men":13,"Goblins":11,"Mordor":9},"statsFactionLose":{"Dwarves":21,"Men":7,"Mordor":10,"Isengard":15,"Angmar":15,"Goblins":20,"Elves":8},"wins":107,"loses":96,"date":"2022-11-24T23:46:00.000Z"},{"id":49,"attributes":{"name":"K.MUSTAFA","elo":1340,"img":{"data":null}},"statsFactionWin":{"Elves":35,"Goblins":33,"Angmar":32,"Isengard":40,"Mordor":34,"Men":54,"Dwarves":27},"statsFactionLose":{"Men":42,"Dwarves":41,"Goblins":45,"Isengard":44,"Angmar":32,"Elves":27,"Mordor":30},"wins":255,"loses":261,"date":"2022-11-24T23:46:00.000Z"},{"id":91,"attributes":{"name":"Ahwehawe","elo":1330,"img":{"data":null}},"statsFactionWin":{"Men":2,"Dwarves":5,"Mordor":5,"Goblins":3,"Isengard":2,"Angmar":1},"statsFactionLose":{"Dwarves":2,"Men":2,"Mordor":2},"wins":18,"loses":6,"date":"2022-10-29T16:49:00.000Z"},{"id":42,"attributes":{"name":"Maru","elo":1260,"img":{"data":{"id":368,"attributes":{"url":"/uploads/3_F_3_F_3_F_3_F_3_F_3_F_3_F_df146bfa19.webp"}}}},"statsFactionWin":{"Angmar":26,"Goblins":39,"Isengard":26,"Elves":18,"Mordor":22,"Men":19,"Dwarves":14},"statsFactionLose":{"Angmar":24,"Goblins":62,"Mordor":10,"Dwarves":18,"Elves":9,"Isengard":15,"Men":16,"undefined":1},"wins":164,"loses":155,"date":"2022-11-08T01:43:00.000Z"},{"id":31,"attributes":{"name":"WiLD.plummie","elo":1238,"img":{"data":{"id":345,"attributes":{"url":"/uploads/n0fcir_58b2eb1fb4.jpg"}}}},"statsFactionWin":{"Elves":3,"Isengard":6,"Angmar":4,"Goblins":15,"Mordor":5,"Dwarves":5,"Men":4},"statsFactionLose":{"Dwarves":4,"Isengard":2,"Goblins":3,"Mordor":2,"Men":1},"wins":42,"loses":12,"date":"2022-11-05T19:14:00.000Z"},{"id":48,"attributes":{"name":"Smaug","elo":1231,"img":{"data":{"id":402,"attributes":{"url":"/uploads/tp7u4y_3d84fe7ce9.jpg"}}}},"statsFactionWin":{"Men":72,"Mordor":38,"Dwarves":23,"Isengard":34,"Elves":57,"Angmar":12,"Goblins":14},"statsFactionLose":{"Men":70,"Dwarves":20,"Elves":34,"Mordor":38,"Isengard":23,"Angmar":6,"Goblins":7},"wins":250,"loses":198,"date":"2022-11-25T15:55:00.000Z"},{"id":50,"attributes":{"name":"MayShadowFax","elo":1214,"img":{"data":null}},"statsFactionWin":{"Isengard":18,"Elves":21,"Dwarves":7,"Men":24,"Angmar":19,"Mordor":23,"Goblins":14},"statsFactionLose":{"Dwarves":21,"Elves":19,"Angmar":20,"Isengard":24,"Men":16,"Mordor":27,"Goblins":22},"wins":126,"loses":149,"date":"2022-11-26T19:50:00.000Z"},{"id":37,"attributes":{"name":"Gimli fils de Gloin","elo":1202,"img":{"data":{"id":349,"attributes":{"url":"/uploads/7vtbpe_8a4e0e2e83.png"}}}},"statsFactionWin":{"Goblins":7,"Mordor":7,"Dwarves":13,"Men":12,"Isengard":13,"Angmar":9,"Elves":8},"statsFactionLose":{"Angmar":3,"Men":4,"Mordor":2,"Dwarves":1,"Goblins":2,"Isengard":2,"Elves":1},"wins":69,"loses":15,"date":"2022-11-23T14:30:00.000Z"},{"id":43,"attributes":{"name":"Talos","elo":1189,"img":{"data":null}},"statsFactionWin":{"Elves":5,"Goblins":2,"Mordor":2,"Dwarves":6,"Isengard":4,"Men":1,"Angmar":1},"statsFactionLose":{"Isengard":2,"Elves":2,"Angmar":5,"Mordor":1,"Goblins":3},"wins":21,"loses":13,"date":"2022-10-27T14:41:00.000Z"},{"id":90,"attributes":{"name":"Trucky","elo":1145,"img":{"data":{"id":2181,"attributes":{"url":"/uploads/1kijtu_82cd66c4dd.jpg"}}}},"statsFactionWin":{"Dwarves":2,"Isengard":5,"Goblins":3,"Men":1,"Mordor":3,"Elves":3},"statsFactionLose":{"Angmar":4,"Dwarves":2,"Elves":1,"Men":1,"Goblins":1,"Isengard":1},"wins":17,"loses":10,"date":"2022-11-07T02:19:00.000Z"},{"id":71,"attributes":{"name":"JLS","elo":1105,"img":{"data":{"id":1630,"attributes":{"url":"/uploads/Icon_JLS_d15222f7fe.jpg"}}}},"statsFactionWin":{"Men":8,"Dwarves":1},"statsFactionLose":{},"wins":9,"loses":0,"date":"2022-09-21T20:06:00.000Z"},{"id":59,"attributes":{"name":"Musicc","elo":1101,"img":{"data":null}},"statsFactionWin":{"Angmar":1,"Goblins":1,"Mordor":3,"Dwarves":1,"Men":6,"Isengard":1},"statsFactionLose":{"Men":3,"Goblins":1,"Isengard":1,"Dwarves":1,"Elves":3,"Mordor":1},"wins":13,"loses":10,"date":"2022-08-13T18:40:00.000Z"},{"id":88,"attributes":{"name":"LowLier","elo":1093,"img":{"data":null}},"statsFactionWin":{"Elves":19,"Mordor":5,"Men":6,"Angmar":4,"Goblins":1,"Isengard":5,"Dwarves":1},"statsFactionLose":{"Men":5,"Dwarves":12,"Goblins":5,"Angmar":5,"Mordor":5,"Isengard":4,"Elves":9},"wins":41,"loses":45,"date":"2022-11-26T18:03:00.000Z"},{"id":39,"attributes":{"name":"Wyrdan","elo":1087,"img":{"data":{"id":350,"attributes":{"url":"/uploads/wib3gy_c35f7e4f25.png"}}}},"statsFactionWin":{"Dwarves":24,"Isengard":24,"Elves":20,"Mordor":21,"Angmar":18,"Goblins":14,"Men":23},"statsFactionLose":{"Men":29,"Goblins":25,"Elves":19,"Isengard":19,"Dwarves":29,"Angmar":27,"Mordor":25},"wins":144,"loses":173,"date":"2022-11-27T12:50:00.000Z"},{"id":77,"attributes":{"name":"PBR","elo":1084,"img":{"data":null}},"statsFactionWin":{"Angmar":19,"Mordor":16,"Men":9,"Elves":19,"Goblins":14,"Isengard":10,"Dwarves":5},"statsFactionLose":{"Goblins":23,"Dwarves":13,"Angmar":13,"Men":10,"Isengard":10,"Elves":10,"Mordor":13},"wins":92,"loses":92,"date":"2022-11-26T18:03:00.000Z"},{"id":72,"attributes":{"name":"DJP","elo":1078,"img":{"data":{"id":1441,"attributes":{"url":"/uploads/274_2748820_futurama_bender_with_gun_9959ceb7c8.png"}}}},"statsFactionWin":{"Mordor":1,"Goblins":2,"Elves":1},"statsFactionLose":{"Mordor":1,"Angmar":2,"Dwarves":1,"Isengard":1,"Men":1},"wins":4,"loses":6,"date":"2022-09-11T00:41:00.000Z"},{"id":87,"attributes":{"name":"HeadDown","elo":1074,"img":{"data":{"id":1944,"attributes":{"url":"/uploads/5su65g_04327f3374.jpg"}}}},"statsFactionWin":{"Isengard":2,"Men":5,"Mordor":6,"Goblins":1,"Elves":1,"Angmar":4,"Dwarves":2},"statsFactionLose":{"Goblins":3,"Isengard":2,"Dwarves":2,"Angmar":4,"Elves":2,"Men":2},"wins":21,"loses":15,"date":"2022-11-27T12:50:00.000Z"},{"id":34,"attributes":{"name":"Kyagara","elo":1053,"img":{"data":{"id":346,"attributes":{"url":"/uploads/pf7pjn_1e2c528729.png"}}}},"statsFactionWin":{"Isengard":3,"Men":1,"Mordor":1,"Goblins":13},"statsFactionLose":{"Goblins":22,"Dwarves":1,"Isengard":1,"Mordor":1,"Men":1},"wins":18,"loses":26,"date":"2022-11-20T22:53:00.000Z"},{"id":60,"attributes":{"name":"Andy San","elo":1027,"img":{"data":null}},"statsFactionWin":{"Dwarves":2},"statsFactionLose":{"Dwarves":1},"wins":2,"loses":1,"date":"2022-11-07T18:12:00.000Z"},{"id":64,"attributes":{"name":"Prowned","elo":1022,"img":{"data":null}},"statsFactionWin":{"Dwarves":1},"statsFactionLose":{},"wins":1,"loses":0,"date":"2022-08-09T08:15:00.000Z"},{"id":94,"attributes":{"name":"Khamul","elo":1021,"img":{"data":{"id":2658,"attributes":{"url":"/uploads/tmb_310600_939132_68c1b823d2.jpg"}}}},"statsFactionWin":{"Isengard":4,"Elves":4,"Men":4,"Dwarves":3,"Mordor":2,"Goblins":1},"statsFactionLose":{"Isengard":5,"Men":2,"Elves":4,"Dwarves":2,"Angmar":4,"Mordor":3,"Goblins":3},"wins":18,"loses":23,"date":"2022-11-13T18:21:00.000Z"},{"id":97,"attributes":{"name":"DeimaN","elo":1014,"img":{"data":null}},"statsFactionWin":{"Angmar":4,"Men":1},"statsFactionLose":{"Angmar":8,"Mordor":2},"wins":5,"loses":10,"date":"2022-11-15T20:50:00.000Z"},{"id":25,"attributes":{"name":"Excelsior","elo":1000,"img":{"data":{"id":342,"attributes":{"url":"/uploads/lexpns_b33c42196d.png"}}}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":33,"attributes":{"name":"indica","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":44,"attributes":{"name":"KD","elo":1000,"img":{"data":{"id":390,"attributes":{"url":"/uploads/k5bavv_0eccf1bbea.jpg"}}}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":56,"attributes":{"name":"Tarik","elo":1000,"img":{"data":{"id":774,"attributes":{"url":"/uploads/mh0qrf_739de526ae.jpg"}}}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":57,"attributes":{"name":"Urby","elo":1000,"img":{"data":{"id":775,"attributes":{"url":"/uploads/g27yzl_ae78e6b39a.jpg"}}}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":66,"attributes":{"name":"KLU","elo":1000,"img":{"data":{"id":984,"attributes":{"url":"/uploads/ogu03p_4b749e94be.png"}}}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":67,"attributes":{"name":"Panda","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":69,"attributes":{"name":"VVaRRioR","elo":1000,"img":{"data":{"id":1240,"attributes":{"url":"/uploads/iafp8b_0d6ae1ca0f.jpg"}}}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":73,"attributes":{"name":"Berkayyy","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":74,"attributes":{"name":"[Lukas]","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":75,"attributes":{"name":"Menelaos","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":76,"attributes":{"name":"PawkedPL","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":81,"attributes":{"name":"Anektaranektaar","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":82,"attributes":{"name":"Kara Varg","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":84,"attributes":{"name":"Mr.Valentin","elo":1000,"img":{"data":{"id":1942,"attributes":{"url":"/uploads/opnp7f_8975f7a09b.jpg"}}}},"statsFactionWin":{"Men":4,"Dwarves":4,"Elves":3,"Mordor":3,"Isengard":5,"Angmar":1},"statsFactionLose":{"Goblins":8,"Isengard":1,"Men":6,"Dwarves":4,"Elves":4,"Angmar":2,"Mordor":1},"wins":20,"loses":26,"date":"2022-11-03T10:56:00.000Z"},{"id":86,"attributes":{"name":"Wiflyone","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":92,"attributes":{"name":"Duck Empire","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":93,"attributes":{"name":"DutchCactus","elo":1000,"img":{"data":{"id":2376,"attributes":{"url":"/uploads/ld0aul_b0d5f4637e.png"}}}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":95,"attributes":{"name":"Jaberwaukee","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":96,"attributes":{"name":"Mimoun","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":98,"attributes":{"name":"Ratatoskr","elo":1000,"img":{"data":{"id":2884,"attributes":{"url":"/uploads/oyvt2z_398fa793f2.jpg"}}}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":100,"attributes":{"name":"Gréhelfe","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":101,"attributes":{"name":"Ragzus-","elo":1000,"img":{"data":{"id":2990,"attributes":{"url":"/uploads/rgf30d_ff01bc1c05.png"}}}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":102,"attributes":{"name":"siberia","elo":1000,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{},"wins":0,"loses":0,"date":null},{"id":65,"attributes":{"name":"Machiaveli","elo":994,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{"Isengard":1,"Elves":1},"wins":0,"loses":2,"date":"2022-09-14T14:50:00.000Z"},{"id":68,"attributes":{"name":"Artanis","elo":994,"img":{"data":null}},"statsFactionWin":{"Isengard":36,"Goblins":2,"Angmar":2,"Mordor":1,"Elves":3,"Men":3,"Dwarves":1},"statsFactionLose":{"Isengard":85,"Mordor":6,"Angmar":4,"Elves":3,"Goblins":4,"Dwarves":6,"Men":3},"wins":48,"loses":111,"date":"2022-11-18T18:00:00.000Z"},{"id":63,"attributes":{"name":"GuoLozZz","elo":982,"img":{"data":{"id":913,"attributes":{"url":"/uploads/wpgxr9_df5edf6997.jpg"}}}},"statsFactionWin":{},"statsFactionLose":{"Dwarves":1},"wins":0,"loses":1,"date":"2022-08-09T12:27:00.000Z"},{"id":58,"attributes":{"name":"SonGoku","elo":979,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{"Angmar":1,"Dwarves":1},"wins":0,"loses":2,"date":"2022-09-18T11:26:00.000Z"},{"id":79,"attributes":{"name":"Zeh Piquenu","elo":977,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{"Goblins":1},"wins":0,"loses":1,"date":"2022-10-08T02:41:00.000Z"},{"id":62,"attributes":{"name":"Pico","elo":972,"img":{"data":null}},"statsFactionWin":{"Dwarves":1},"statsFactionLose":{"Elves":1,"Dwarves":1},"wins":1,"loses":2,"date":"2022-08-19T17:18:00.000Z"},{"id":99,"attributes":{"name":"Jornev","elo":971,"img":{"data":null}},"statsFactionWin":{"Elves":2,"Angmar":1,"Goblins":1,"Isengard":1,"Men":1},"statsFactionLose":{"Elves":2,"Men":2,"Dwarves":2,"Isengard":1},"wins":6,"loses":7,"date":"2022-11-26T19:50:00.000Z"},{"id":52,"attributes":{"name":"Pony","elo":970,"img":{"data":null}},"statsFactionWin":{"Dwarves":3,"Mordor":3,"Isengard":1,"Elves":4,"Goblins":1,"Angmar":1},"statsFactionLose":{"Elves":2,"Mordor":3,"Goblins":6,"Isengard":4,"Men":5,"Dwarves":2},"wins":13,"loses":22,"date":"2022-07-25T18:33:00.000Z"},{"id":80,"attributes":{"name":"MARCEL","elo":958,"img":{"data":null}},"statsFactionWin":{"Isengard":2,"Mordor":2},"statsFactionLose":{"Mordor":9,"Isengard":8,"Goblins":2},"wins":4,"loses":19,"date":"2022-10-29T22:37:00.000Z"},{"id":85,"attributes":{"name":"Lelouch","elo":955,"img":{"data":{"id":1943,"attributes":{"url":"/uploads/bfa194e150cd523c91a29c5b3d3c80da_d6d649e156.png"}}}},"statsFactionWin":{"Elves":2,"Angmar":2,"Mordor":2,"Men":2,"Dwarves":2,"Isengard":1},"statsFactionLose":{"Dwarves":7,"Angmar":4,"Isengard":2,"Men":5,"Goblins":1,"Mordor":2},"wins":11,"loses":21,"date":"2022-11-13T18:20:00.000Z"},{"id":47,"attributes":{"name":"Delicious Nuts","elo":951,"img":{"data":null}},"statsFactionWin":{"Men":2,"Dwarves":1,"Mordor":1},"statsFactionLose":{"Elves":4,"Goblins":4,"Mordor":6,"Angmar":1,"Men":2,"Dwarves":1},"wins":4,"loses":18,"date":"2022-11-17T15:50:00.000Z"},{"id":28,"attributes":{"name":"Aupif","elo":950,"img":{"data":null}},"statsFactionWin":{"Isengard":12,"Goblins":10,"Mordor":22,"Men":16,"Angmar":18,"Elves":13,"Dwarves":11},"statsFactionLose":{"Dwarves":6,"Elves":11,"Mordor":19,"Goblins":17,"Isengard":21,"Men":21,"Angmar":12},"wins":102,"loses":107,"date":"2022-10-13T13:43:00.000Z"},{"id":89,"attributes":{"name":"Articoul","elo":947,"img":{"data":null}},"statsFactionWin":{"Dwarves":4,"Mordor":3,"Goblins":5,"Angmar":2,"Isengard":5,"Elves":3,"Men":2},"statsFactionLose":{"Mordor":5,"Angmar":7,"Elves":2,"Goblins":6,"Isengard":4,"Dwarves":4,"Men":3},"wins":24,"loses":31,"date":"2022-11-15T17:19:00.000Z"},{"id":27,"attributes":{"name":"Diablo","elo":938,"img":{"data":{"id":343,"attributes":{"url":"/uploads/gopnnj_bef8f5091a.jpg"}}}},"statsFactionWin":{"Angmar":3,"Men":2,"Isengard":1,"Elves":2},"statsFactionLose":{"Mordor":3,"Dwarves":1,"Men":2,"Angmar":1,"Elves":1},"wins":8,"loses":8,"date":"2022-11-07T17:00:00.000Z"},{"id":55,"attributes":{"name":"hamzali","elo":927,"img":{"data":null}},"statsFactionWin":{"Mordor":1},"statsFactionLose":{"Elves":1,"Dwarves":1,"Angmar":1,"Goblins":1},"wins":1,"loses":4,"date":"2022-07-21T16:29:00.000Z"},{"id":38,"attributes":{"name":"Mr.Balin","elo":886,"img":{"data":null}},"statsFactionWin":{"Elves":5,"Isengard":4,"Mordor":3,"Dwarves":6,"Angmar":5,"Men":3,"Goblins":6},"statsFactionLose":{"Mordor":2,"Dwarves":2,"Isengard":6,"Elves":2,"Goblins":5,"Men":5,"Angmar":3},"wins":32,"loses":25,"date":"2022-11-16T14:33:00.000Z"},{"id":70,"attributes":{"name":"Mex Flaxtz","elo":885,"img":{"data":null}},"statsFactionWin":{"Goblins":24,"Dwarves":1,"Men":1,"Angmar":1,"Mordor":6,"Elves":1},"statsFactionLose":{"Goblins":54,"Men":1,"Isengard":2,"Mordor":5,"Dwarves":1},"wins":34,"loses":63,"date":"2022-11-10T23:25:00.000Z"},{"id":61,"attributes":{"name":"Anubis_PD","elo":884,"img":{"data":{"id":912,"attributes":{"url":"/uploads/aavk2a_d6ebbdb6ce.jpg"}}}},"statsFactionWin":{"Isengard":1,"Mordor":1},"statsFactionLose":{"Isengard":10,"Angmar":1,"Mordor":6,"Dwarves":1,"Elves":1},"wins":2,"loses":19,"date":"2022-08-13T21:07:00.000Z"},{"id":36,"attributes":{"name":"illünt","elo":878,"img":{"data":{"id":210,"attributes":{"url":"/uploads/hf1ooa_1f2ec18b9e.png"}}}},"statsFactionWin":{"Angmar":1},"statsFactionLose":{"Isengard":1,"Mordor":2,"Elves":1,"Dwarves":2},"wins":1,"loses":6,"date":"2022-09-04T15:45:00.000Z"},{"id":51,"attributes":{"name":"Invictus_Rotwk","elo":874,"img":{"data":null}},"statsFactionWin":{"Dwarves":1},"statsFactionLose":{"Dwarves":5,"Isengard":1,"Goblins":1},"wins":1,"loses":7,"date":"2022-09-15T20:45:00.000Z"},{"id":26,"attributes":{"name":"Gammaction","elo":872,"img":{"data":null}},"statsFactionWin":{"Elves":1,"Men":1},"statsFactionLose":{"Goblins":1,"Elves":1,"Isengard":4,"Dwarves":2},"wins":2,"loses":8,"date":"2022-07-11T18:39:00.000Z"},{"id":40,"attributes":{"name":"Edvald","elo":835,"img":{"data":{"id":353,"attributes":{"url":"/uploads/edvald_86ac5b7ec6.png"}}}},"statsFactionWin":{"Dwarves":14,"Mordor":1},"statsFactionLose":{"Isengard":3,"Dwarves":32,"Angmar":2,"Mordor":3},"wins":15,"loses":40,"date":"2022-11-20T22:53:00.000Z"},{"id":41,"attributes":{"name":"Doigbite","elo":829,"img":{"data":{"id":354,"attributes":{"url":"/uploads/6wn6rv_dfd738b77b.png"}}}},"statsFactionWin":{"Men":1},"statsFactionLose":{"Mordor":9,"Men":2,"Elves":3},"wins":1,"loses":14,"date":"2022-08-12T13:35:00.000Z"},{"id":53,"attributes":{"name":"ptynat","elo":811,"img":{"data":null}},"statsFactionWin":{"Isengard":2},"statsFactionLose":{"Isengard":39},"wins":2,"loses":39,"date":"2022-08-08T09:45:00.000Z"},{"id":54,"attributes":{"name":"THANTH D","elo":776,"img":{"data":null}},"statsFactionWin":{"Angmar":16,"Goblins":2,"Mordor":3},"statsFactionLose":{"Angmar":52,"Isengard":6,"Dwarves":5,"Mordor":8,"Goblins":2,"Elves":7,"Men":1},"wins":21,"loses":81,"date":"2022-11-25T21:34:00.000Z"},{"id":83,"attributes":{"name":"Xui","elo":621,"img":{"data":null}},"statsFactionWin":{},"statsFactionLose":{"Elves":28,"Men":3,"Goblins":4,"Angmar":1,"Mordor":3,"Dwarves":1,"Isengard":1},"wins":0,"loses":41,"date":"2022-11-15T21:18:00.000Z"}]
        }
    },
}
</script>

<style>

.bg-blue-900 {
    --tw-bg-opacity: 1;
    background-color: rgba(30, 58, 138, var(--tw-bg-opacity));
}

.bg-green-900 {
    --tw-bg-opacity: 1;
    background-color: rgba(6, 78, 59, var(--tw-bg-opacity));
}

.bg-yellow-900 {
    --tw-bg-opacity: 1;
    background-color: rgba(120, 53, 15, var(--tw-bg-opacity));
}

.bg-red-900 {
    --tw-bg-opacity: 1;
    background-color: rgba(127, 29, 29, var(--tw-bg-opacity));
}

.bg-gray-800 {
    --tw-bg-opacity: 1;
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}

.bg-orange-900 {
    --tw-bg-opacity: 1;
    background-color: rgba(124, 45, 18, var(--tw-bg-opacity));
}

.bg-purple-900 {
    --tw-bg-opacity: 1;
    background-color: rgba(76, 29, 149, var(--tw-bg-opacity));
}

.to-green-700 {
    --tw-gradient-to: #047857;
}

.from-green-500 {
    --tw-gradient-from: #10b981;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(16, 185, 129, 0));
}

.from-yellow-500 {
    --tw-gradient-from: #f59e0b;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(245, 158, 11, 0));
}

.to-yellow-700 {
    --tw-gradient-to: #b45309;
}

.to-red-700 {
    --tw-gradient-to: #b91c1c;
}

.from-red-500 {
    --tw-gradient-from: #ef4444;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(239, 68, 68, 0));
}

.to-gray-700 {
    --tw-gradient-to: #374151;
}

.from-gray-500 {
    --tw-gradient-from: #6b7280;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(107, 114, 128, 0));
}

.to-orange-700 {
    --tw-gradient-to: #c2410c;
}

.from-orange-500 {
    --tw-gradient-from: #f97316;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(249, 115, 22, 0));
}

.to-purple-700 {
    --tw-gradient-to: #6d28d9;
}

.from-purple-500 {
    --tw-gradient-from: #8b5cf6;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(139, 92, 246, 0));
}

.to-yellow-500 {
    --tw-gradient-to: #f59e0b;
}

.from-yellow-300 {
    --tw-gradient-from: #fcd34d;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(252, 211, 77, 0));
}
</style>