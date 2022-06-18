<template>
  <section class="text-white body-font">

  <div v-if="newPlayer" class="container px-5 py-12 mx-auto flex flex-wrap bg-gray-900 shadow-lg rounded-sm border border-orange-600">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
        <div class="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-indigo-600">{{newPlayer.elo}}</h2>
        <p class="leading-relaxed">ELO</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-green-600">{{newPlayer.wins}}</h2>
        <p class="leading-relaxed">Victoire</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-red-600">{{newPlayer.lose}}</h2>
        <p class="leading-relaxed">Défaite</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-yellow-600">{{newPlayer.wins + newPlayer.lose}}</h2>
        <p class="leading-relaxed">Matchs</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-yellow-600">{{newPlayer.statsFactionLose}}</h2>
        <p class="leading-relaxed">LOSEFACTIONS</p>
      </div>
      <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 class="title-font font-medium text-3xl text-yellow-600">{{newPlayer.statsFactionWin}}</h2>
        <p class="leading-relaxed">statsFactionWin</p>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img v-if="newPlayer.img && newPlayer.img.data" class="object-cover object-center w-auto h-auto" :src="`https://api.laterredumilieu.fr${newPlayer.img.data.attributes.url}`" width="40" height="40" :alt="newPlayer.name">
    </div>
  </div>

    <highchart 
    v-if="loading"
    :options="chartOptions" 
    />



  <div v-if="newPlayer" class="container px-5 py-24 mx-auto">
    <div class="-my-8">



      <div v-for="(replays, index) in newPlayer.replays" v-bind:key="index" class="py-8 flex flex-wrap md:flex-nowrap bg-gray-900 shadow-lg rounded-sm border border-orange-600">
        <div v-if="replays" class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col ml-2">
          <span class="font-semibold title-font text-white underline">PARTIE {{index +1}}</span>
          <span class="mt-1 text-gray-100 text-sm">
            {{ $moment(replays.date).lang($i18n.locale).format('MMMM Do YYYY, h:mm:ss a') }}
            <br/>
            ({{ $moment(replays.date).lang($i18n.locale).fromNow()}})</span>
          <span class="mt-1 text-orange-500 text-sm">BO{{replays.bo}}</span>
        </div>
        <div class="md:flex-grow">

            <div v-if="replays.replays" class="flex flex-wrap -mx-4 -my-8">
                <div v-for="(replay, index) in replays.replays" v-bind:key="replay.id" class="py-8 px-4 lg:w-1/3">
                    <div class="h-full flex items-start">
                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                        <span class="text-gray-100 pb-2 mb-2 border-b-2 border-gray-200">Match</span>
                        <span class="font-medium text-lg text-gray-200 title-font leading-none">{{index +1 }}</span>
                    </div>
                    <div class="flex-grow pl-6">
                        <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">{{replay.map.data ? replay.map.data.attributes.name : "Map inconnu"}}</h2>
                        <div class="text-lg text-left text-white">
                            Victoire : {{replay.player_win.data && replay.player_win.data.attributes.name}}
                            (<span :class="`text-${factionList.find(o => o.name === (replay.faction_win.data && replay.faction_win.data.attributes.name)).color}-500`">
                                {{replay.faction_win.data && replay.faction_win.data.attributes.name}}
                            </span>)
                        </div>

                        <div class="text-lg text-left text-white">
                            Défaite : {{replay.player_lose.data && replay.player_lose.data.attributes.name}}
                            (<span :class="`text-${factionList.find(o => o.name === (replay.faction_lose.data && replay.faction_lose.data.attributes.name)).color}-500`">
                            {{replay.faction_lose.data && replay.faction_lose.data.attributes.name}}
                            </span>)
                        </div>
                        
                        <div class="text-lg text-left text-white inline-block">
                            Replay : 
                            <a target="_blank" :href="`https://api.laterredumilieu.fr${replay.replay.data.attributes.url}`" class="bg-orange-900 hover:bg-orange-800 text-white font-bold py-2 px-2 rounded inline-flex items-center">
                            <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            </a>
                        </div>
                        
                        </div>
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
            player: [],
            newPlayer: null,
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
            chartOptions: {}
        }
    },
    async asyncData({ $strapi, $axios, params }) {
        let player = await $strapi.findOne('players', params.slug, { populate: '*'})
        let loading = false;
        const query = qs.stringify({
            fields: '*',
            populate: {
                populate: '*',
                replays: {
                    populate: '*'
                },
                elo: {
                    populate: '*'
                }
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

        const slug = params.slug


        let p = player.data.attributes.name
        let newPlayer = player.data.attributes;
        newPlayer.replays = []
        newPlayer.wins = 0
        newPlayer.lose = 0
        newPlayer.loses = 0
        newPlayer.statsFactionWin = {};
        newPlayer.statsFactionLose = {};
        newPlayer.factions = [];

        for (const g of games) {
            if(p == g.attributes.elo[0].player_lose.name || p == g.attributes.elo[0].player_win.name) {

                newPlayer.replays.push(g.attributes)
                newPlayer.lose += 1;
                newPlayer.wins += 1;

                for (const m of g.attributes.replays){
                    console.log(m, "m")

                    let faction = m.faction_win.data.attributes.name;
                    console.log(faction, "factions", m.player_win.data.attributes.name == p)
                    if(m.player_win.data.attributes.name == p) {
                        typeof newPlayer.statsFactionWin[faction] === 'undefined' ? 
                        newPlayer.statsFactionWin[faction] = 1 : 
                        newPlayer.statsFactionWin[faction]++;
                        newPlayer.wins++;
                    } else {
                        typeof newPlayer.statsFactionLose[faction] === 'undefined' ? 
                        newPlayer.statsFactionLose[faction] = 1 : 
                        newPlayer.statsFactionLose[faction]++;
                        newPlayer.loses++;
                    }
                    
                }
                
                console.log(g.attributes)

               

            }
        }

        let allFactions = ["Men", "Elves", "Dwarves", "Mordor", "Isengard", "Goblins", "Angmar"];

        let series = []

        for (const f of allFactions) {
            console.log(f, "faction")

            let serie = {
                name: "victoire"
            }

            for(let [key, value] of Object.entries(newPlayer.statsFactionWin)){
                console.log(`${key}: ${value}`);



                if(f == key){
                    
                }


            }


        }   
        



        const chartOptions = {
chart: {
    type: 'bar'
  },
  title: {
    text: 'Historic World Population by Region'
  },
  subtitle: {
    text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
  },
  xAxis: {
    categories: ['Homme', 'Nain', 'Elfe', 'Mordor', 'Isengard', 'Gobelin', 'Angmar'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Population (millions)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Year 1800',
    data: [107, 31, 635, 203, 2]
  }, {
    name: 'Year 1900',
    data: [133, 156, 947, 408, 6]
  }, {
    name: 'Year 2000',
    data: [814, 841, 3714, 727, 31]
  }, {
    name: 'Year 2016',
    data: [1216, 1001, 4436, 738, 40]
  }]
            }
        loading = true;
        return { slug, player, games, newPlayer, loading, chartOptions }
    },
    computed:{
        // sortedGames() {
        //     let p = this.player.data.attributes.name
        //     let newPlayer = this.player.data.attributes;
        //     newPlayer.replays = []

        //     for (const g of this.games) {
        //         if(p == g.attributes.elo[0].player_lose.name || 
        //         p == g.attributes.elo[0].player_win.name) {

        //             newPlayer.replays.push(g.attributes)
        //             console.log(g.attributes)
        //         }
        //     }

        //     return newPlayer
        // }
    },
}
</script>