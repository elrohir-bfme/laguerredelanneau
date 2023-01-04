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
                            <tr v-for="(player, index) in sortedPlayers" v-bind:key="player._id" class="hover:opacity-80 hover:cursor-pointer" @click="infoPlayer(player)">
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
  layout: "league",
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
        }
    },
    async asyncData({ $axios }) {
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

        const { data } = await $axios.$get(`https://api.laterredumilieu.fr/api/games?${query}`); 
        console.log(data, "data")
        let games = data 

        const queryPlayer = qs.stringify({
            fields: ['name', 'elo'],
            populate: {
                img: {
                    fields:  ['url']
                }
            },
            pagination: {
                page: 1,
                pageSize: 5000,
            },
        }, {
        encodeValuesOnly: true,
        });

        const dataPlayer = await $axios.$get(`https://api.laterredumilieu.fr/api/players?${queryPlayer}`); 
        let players = dataPlayer.data

        return { players, games }
    },
    methods: {  
        infoPlayer(player){
            this.$router.push(this.localeLocation(`/league/players/${player.id}`))
        },
        close(){
            this.info = false
            this.player = []
        },
    },
    computed:{
        sortedPlayers() {
            if(this.players){
                let newPlayers= this.players.map(f => {
                    let newObject = {
                        statsFactionWin: {},
                        statsFactionLose: {},
                        wins: 0,
                        loses: 0,
                        date: null
                    }

                    this.games.map((g,i) => {

                        if(g.attributes.player_win?.data?.attributes?.name === f.attributes?.name){
                            if(!newObject.date){
                                newObject.date = g.attributes?.date;
                            }
                            let faction = g.attributes.faction_win?.data?.attributes?.name;
                            typeof newObject.statsFactionWin[faction] === 'undefined' ? 
                            newObject.statsFactionWin[faction] = 1 : 
                            newObject.statsFactionWin[faction]++;
                            newObject.wins++;
                        }

                        if(g.attributes.player_lose?.data?.attributes?.name === f.attributes?.name){
                            if(!newObject.date){
                                newObject.date = g.attributes?.date;
                            }
                            let faction = g.attributes.faction_lose?.data?.attributes?.name;
                            typeof newObject.statsFactionLose[faction] === 'undefined' ? 
                            newObject.statsFactionLose[faction] = 1 : 
                            newObject.statsFactionLose[faction]++;
                            newObject.loses++;
                        }

                        // if(g.attributes?.replays && g.attributes?.replays?.length > 0){
                        //     g.attributes?.replays.map(r => {
                        //         if(r.player_win?.data?.attributes?.name === f.attributes?.name){
                        //             if(!newObject.date){
                        //                 newObject.date = g.attributes?.date;
                        //             }
                        //             let faction = r.faction_win?.data?.attributes?.name;
                        //             typeof newObject.statsFactionWin[faction] === 'undefined' ? 
                        //             newObject.statsFactionWin[faction] = 1 : 
                        //             newObject.statsFactionWin[faction]++;
                        //             newObject.wins++;
                        //         }

                        //         if(r.player_lose?.data?.attributes?.name === f.attributes?.name){
                        //             if(!newObject.date){
                        //                 newObject.date = g.attributes?.date;
                        //             }
                        //             let faction = r.faction_lose?.data?.attributes?.name;
                        //             typeof newObject.statsFactionLose[faction] === 'undefined' ? 
                        //             newObject.statsFactionLose[faction] = 1 : 
                        //             newObject.statsFactionLose[faction]++;
                        //             newObject.loses++;
                        //         }
                        //     })
                        // }
                    })

                    return Object.assign(f, newObject)
                })

                return newPlayers.sort((a, b) => { return b.attributes?.elo - a.attributes?.elo; });
            }  
        },
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