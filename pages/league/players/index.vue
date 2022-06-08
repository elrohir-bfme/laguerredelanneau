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
                            <tr v-for="(player, index) in sortedPlayers" v-bind:key="player._id" class="hover-gray-800" @click="infoPlayer(player)">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-center text-gray-100">{{index + 1}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{player.attributes.elo}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                            <img class="rounded-full" :src="`https://api.laterredumilieu.fr${player.attributes.img.data.attributes.url}`" width="40" height="40" :alt="player.attributes.name">
                                        </div>
                                        <div class="font-medium text-white">{{player.attributes.name}}</div>
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.wins}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.loses}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.wins > 0 || player.loses > 0 ? `${((player.wins / (player.loses + player.wins)) * 100).toFixed(0)}%`  : "Aucun Match"}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{{player.wins + player.loses}}</div>
                                </td>
                                <td v-for="fac in factionList" v-bind:key="fac.name" class="hidden md:table-cell p-2 w-1/12 whitespace-nowrap border-t" :class="`bg-${fac.color}-${fac.color == 'gray' ? 800 : 900} border-${fac.color}-600`">
                                    <div v-if="player.statsFactionWin[fac.name] || player.statsFactionWin[fac.name]" class="flex items-center justify-center text-white text-sm text-center">
                                        <p>
                                            {{`${(player.statsFactionWin[fac.name] >= 0 || player.statsFactionLose[fac.name] >= 0) ? ((((player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0) / ((player.statsFactionLose[fac.name] ? player.statsFactionLose[fac.name] : 0) + (player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0))) * 100).toFixed(0)) : "0"}%`}}
                                        </p>
                                    </div>
                                    <div v-if="player.statsFactionWin[fac.name] || player.statsFactionWin[fac.name]" class="w-full h-2 bg-indigo-100 rounded-full mb-4">
                                        <div 
                                            :style="`width: ${Object.keys(player.statsFactionLose).length > 0 || Object.keys(player.statsFactionWin).length > 0 ? (((player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0) / ((player.statsFactionLose[fac.name] ? player.statsFactionLose[fac.name] : 0) + (player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0))) * 100).toFixed(0) : 0}%;`" 
                                            class="h-full text-center text-xs rounded-full"
                                            :class="`from-${fac.color}-500 to-${fac.color}-700 ${(Object.keys(player.statsFactionLose).length > 0 || Object.keys(player.statsFactionWin).length > 0) && (player.statsFactionLose[fac.name] || player.statsFactionWin[fac.name]) ? 'bg-gradient-to-r' : ''}`"
                                        >
                                        </div>
                                    </div>
                                    <div v-if="player.statsFactionWin[fac.name] || player.statsFactionWin[fac.name]" class="flex items-center justify-between text-white text-sm">
                                        <p>
                                            {{player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0}}V
                                        </p>
                                        <p>
                                            {{player.statsFactionLose[fac.name] ? player.statsFactionLose[fac.name] : 0}}D
                                        </p>
                                    </div>
                                    <div v-else class=" text-white text-sm">
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

    <!-- <div v-if="info" class="flex-grow">
            <div class="flex flex-col justify-top h-full">
        <div class="w-full max-w-3xl mx-auto bg-gray-900 shadow-lg rounded-sm border border-orange-600">
                    <header class="px-5 py-4 border-b border-orange-500 flex">
                <div class="flex-grow">
                    <h2 class="font-semibold text-white">{{player && player.name}}</h2>
                </div>
                <div class="flex-none">
                    <button @click="close" class="text-red-100 ring-4 ring-red-800 bg-red-700 px-4 py-2 rounded-2xl">Fermer</button>
                </div>
            </header>

            <div class="p-3">
                <div class="overflow-x-auto">
                    <table class="table-auto w-full border-2 border-gray-800 rounded-xl">
                        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-800">
                            <tr>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.date') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.map') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.win') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.lose') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.replay') }}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-orange-500">
                            <tr v-for="game in sortedMatchPlayer" v-bind:key="game.id">
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">
                                        {{ $moment(game.date).lang($i18n.locale).format('MMMM Do YYYY, h:mm:ss a') }}
                                        ({{ $moment(game.date).lang($i18n.locale).fromNow()}})
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-orange-500">{{game.map.data.attributes.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{game.player_win.data.attributes.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left">{{game.player_lose.data.attributes.name}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <a target="_blank" :href="`https://api.laterredumilieu.fr${replay.attributes.url}`" v-for="(replay, index) in game.replay.data" v-bind:key="replay._id"  class="bg-orange-900 hover:bg-orange-800 text-white font-bold py-2 px-4 mx-2 rounded inline-flex items-center">
                                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                                        <span>{{ $t('league.replay') }} {{index +1}}</span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>   
                    </table>
                </div>
            </div> 
            </div> 
            </div> 
    </div> -->

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
    async asyncData({ $strapi, $axios }) {
        let players = await $strapi.find('players', { populate: '*'})
        const query = qs.stringify({
            fields: '*',
            sort: ['elo'],
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

        return { players, games }
    },
    methods: {  
        infoPlayer(player){
            this.info = true
            this.player = player
        },
        close(){
            this.info = false
            this.player = []
        },
    },
    computed:{
        sortedPlayers() {
            if(this.players){
                let newPlayers= this.players.data.map(f => {
                    let newObject = {
                        statsFactionWin: {},
                        statsFactionLose: {},
                        wins: 0,
                        loses: 0
                    }

                    this.games.map(g => {
                        if(g.attributes.replays && g.attributes.replays.length > 0){
                            g.attributes.replays.map(r => {
                                if(r.faction_lose && r.faction_lose.data?.attributes){
                                    if((r.player_win.data && r.player_win.data.attributes && r.player_win.data.attributes.name) === f.attributes.name) {
                                        let faction = r.faction_lose.data.attributes.name;
                                        typeof newObject.statsFactionWin[faction] === 'undefined' ? 
                                        newObject.statsFactionWin[faction] = 1 : 
                                        newObject.statsFactionWin[faction]++;
                                        newObject.wins++;
                                    }
                                }

                                if(r.faction_win && r.faction_win.data?.attributes){
                                    if((r.player_lose.data && r.player_lose.data.attributes && r.player_lose.data.attributes.name) === f.attributes.name) {
                                        if(r.faction_win.data.attributes !== null && r.faction_win.data.attributes.name){
                                            let faction = r.faction_win.data.attributes.name;
                                            typeof newObject.statsFactionLose[faction] === 'undefined' ? 
                                            newObject.statsFactionLose[faction] = 1 : 
                                            newObject.statsFactionLose[faction]++;
                                            newObject.loses++;
                                        }
                                    }
                                }
                            })
                        }
                    })

                    return Object.assign(f, newObject)
                })

                return newPlayers.sort((a, b) => { return a.attributes.elo - a.attributes.elo; });
            }

            
        },
        // sortedMatchPlayer() {
        //     if(this.player){
        //         console.log(this.player, "SORTED MATCHS PLAYER")

        //         let playerWin = this.player.attributes.games_wins.data.map(m=> {
        //             let map = this.games.data.find(x => x.id === m.id)
        //             return Object.assign(m, map)
        //         })

        //         let playerLose = this.player.attributes.games_loses.data.map(m=> {
        //             let map = this.games.data.find(x => x.id === m.id)
        //             return Object.assign(m, map)
        //         })

        //         // let playerLose = this.player.lose.map(p=> {
        //         //     console.log(p, "diejdiej")
        //         //     let object = {
        //         //         mapUp: this.maps.find(x => x._id === p.map),
        //         //         playerWinUp: this.players.find(x => x._id === p.playerWin),
        //         //         playerLoseUp: this.players.find(x => x._id === p.playerLose),
        //         //         factionWinUp: this.factions.find(x => x._id === p.faction_win),
        //         //         factionLoseUp: this.factions.find(x => x._id === p.faction_lose),
        //         //     }
        //         //     return Object.assign(p, object)
        //         // })

        //     let Newmatchs = [...playerWin, ...playerLose]
        //     // return Newmatchs
        //     console.log(Newmatchs)

        //     return Newmatchs.map(game=>game.attributes).sort((a,b)=> a.updatedAt - b.updatedAt)
        //     }
        // },
    },
}
</script>