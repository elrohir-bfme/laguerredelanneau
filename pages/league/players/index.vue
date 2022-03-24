    <template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-4 mx-auto">
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
                                <!-- <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.rang') }}</div>
                                </th> -->
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.players') }}</div>
                                </th>
                                <!-- <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.main') }}</div>
                                </th> -->
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.winRatio') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.win') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.lose') }}</div>
                                </th>
                                <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">{{ $t('league.games') }}</div>
                                </th>
                                <th v-if="$device.isDesktopOrTablet" 
                                    class="p-2 whitespace-nowrap" v-for="fac in factionList" v-bind:key="fac.name">
                                    <div  class="font-semibold text-left">{{$t(`league.${fac.name}`)}}</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-orange-500">
                            <tr v-for="player in sortedPlayers" v-bind:key="player.id" class="hover-gray-800" @click="infoPlayer(player)">
                                <!-- <td class="p-2 whitespace-nowrap">
                                    <div class="text-left text-gray-100">{{player.attributes.rang}}</div>
                                </td> -->
                                <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"></div>
                                        <div class="font-medium text-white">{{player.attributes.name}}</div>
                                    </div>
                                </td>
                                
                                <!-- <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-gray-300">{{player.main}}</div>
                                </td> -->
                                <td class="p-2 whitespace-nowrap bg-gray-800">
                                    <div class="text-lg text-left from-blue-500 to-blue-700 text-gray-100 p-2 m-1" 
                                    :style="`width: ${player.attributes.games_wins.data.length > 0 || player.attributes.games_loses.data.length > 0 ? ((player.attributes.games_wins.data.length / (player.attributes.games_loses.data.length + player.attributes.games_wins.data.length)) * 100).toFixed(2) : 0}%;`"
                                    :class="player.attributes.games_wins.data.length > 0 || player.attributes.games_loses.data.length > 0 ? 'bg-gradient-to-r' : ''"
                                    >
                                        {{player.attributes.games_wins.data.length > 0 || player.attributes.games_loses.data.length > 0 ? `${((player.attributes.games_wins.data.length / (player.attributes.games_loses.data.length + player.attributes.games_wins.data.length)) * 100).toFixed(0)}%`  : "Aucun Match"}}
                                    </div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left text-green-400">{{player.attributes.games_wins.data.length}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left text-red-400">{{player.attributes.games_loses.data.length}}</div>
                                </td>
                                <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-left text-gray-400">{{player.attributes.games_wins.data.length + player.attributes.games_loses.data.length}}</div>
                                </td>
                                <td v-if="$device.isDesktopOrTablet" v-for="fac in factionList" v-bind:key="fac.name" class="p-2 whitespace-nowrap border-t" :class="`bg-${fac.color}-${fac.color == 'gray' ? 800 : 900} border-${fac.color}-600`">
                                    <div class="text-lg text-left  text-gray-100 p-2 m-1" 
                                    :style="`width: ${Object.keys(player.statsFactionLose).length > 0 || Object.keys(player.statsFactionWin).length > 0 ? (((player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0) / ((player.statsFactionLose[fac.name] ? player.statsFactionLose[fac.name] : 0) + (player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0))) * 100).toFixed(0) : 0}%;`"
                                    :class="`from-${fac.color}-500 to-${fac.color}-700 ${(Object.keys(player.statsFactionLose).length > 0 || Object.keys(player.statsFactionWin).length > 0) && (player.statsFactionLose[fac.name] || player.statsFactionWin[fac.name]) ? 'bg-gradient-to-r' : ''}`"
                                    >
                                        {{Object.keys(player.statsFactionLose).length > 0 || Object.keys(player.statsFactionWin).length > 0 ?
                                            player.statsFactionLose[fac.name] && player.statsFactionWin[fac.name] ?
                                            `(${player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0}
                                            /
                                            ${player.statsFactionLose[fac.name] ? player.statsFactionLose[fac.name] : 0}) 
                                            ${(((player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0) / ((player.statsFactionLose[fac.name] ? player.statsFactionLose[fac.name] : 0) + (player.statsFactionWin[fac.name] ? player.statsFactionWin[fac.name] : 0))) * 100).toFixed(0)}%
                                            `
                                            : player.statsFactionLose[fac.name] ? `${player.statsFactionLose[fac.name]} ${$t('league.lose')}${player.statsFactionLose[fac.name] == 1 ? '' : 's'}` : player.statsFactionWin[fac.name] ? `${player.statsFactionWin[fac.name]} ${$t('league.win')}${player.statsFactionWin[fac.name] == 1 ? '' : 's'}` : ""
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
            maps: [],
            factions: [],
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
    async asyncData({ $strapi }) {
        let maps = await $strapi.find('maps', { populate: '*'})
        let factions = await $strapi.find('factions', { populate: '*'})
        let games = await $strapi.find('games', { populate: '*'})
        let players = await $strapi.find('players', { populate: '*'})

        // maps = await JSON.parse(JSON.stringify(this.maps))
        // factions = await JSON.parse(JSON.stringify(this.factions))

        return { maps, factions, games, players }
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
            if(this.players && this.factions){

                let newPlayers= this.players.data.map(f => {
                    let newObject = {
                        statsFactionWin: {},
                        statsFactionLose: {}
                    }


                    if(f.attributes.games_loses.data.length > 0){
                        f.attributes.games_loses.data.map(m => {
                            let faction = this.games.data.find(x => x.id === m.id).attributes.faction_lose.data.attributes.name
                            typeof newObject.statsFactionLose[faction] === 'undefined' ? 
                            newObject.statsFactionLose[faction] = 1 : 
                            newObject.statsFactionLose[faction]++;
                        })
                    }

                    if(f.attributes.games_wins.data.length > 0){
                        f.attributes.games_wins.data.map(m => {
                            let faction = this.games.data.find(x => x.id === m.id).attributes.faction_win.data.attributes.name
                            typeof newObject.statsFactionWin[faction] === 'undefined' ? 
                            newObject.statsFactionWin[faction] = 1 : 
                            newObject.statsFactionWin[faction]++;
                        })
                    }
                    return Object.assign(f, newObject)
                })
                return newPlayers
            }

            
        },
        sortedMatchPlayer() {
            if(this.player){
                console.log(this.player, "SORTED MATCHS PLAYER")

                let playerWin = this.player.attributes.games_wins.data.map(m=> {
                    let map = this.games.data.find(x => x.id === m.id)
                    return Object.assign(m, map)
                })

                let playerLose = this.player.attributes.games_loses.data.map(m=> {
                    let map = this.games.data.find(x => x.id === m.id)
                    return Object.assign(m, map)
                })

                // let playerLose = this.player.lose.map(p=> {
                //     console.log(p, "diejdiej")
                //     let object = {
                //         mapUp: this.maps.find(x => x._id === p.map),
                //         playerWinUp: this.players.find(x => x._id === p.playerWin),
                //         playerLoseUp: this.players.find(x => x._id === p.playerLose),
                //         factionWinUp: this.factions.find(x => x._id === p.faction_win),
                //         factionLoseUp: this.factions.find(x => x._id === p.faction_lose),
                //     }
                //     return Object.assign(p, object)
                // })

            let Newmatchs = [...playerWin, ...playerLose]
            // return Newmatchs
            console.log(Newmatchs)

            return Newmatchs.map(game=>game.attributes).sort((a,b)=> a.updatedAt - b.updatedAt)
            }
        },
    },
}
</script>