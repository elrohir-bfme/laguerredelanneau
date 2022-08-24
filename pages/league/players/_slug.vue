<template>
  <section class="text-white body-font">

    <div class="container px-5 py-10 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <NuxtImg
          src="img/league.jpg"
          class="object-cover object-center h-full w-full"
          alt="LFA"
          loading="lazy"
        />
        <!-- <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"> -->
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div v-if="newPlayer.img && newPlayer.img.data" class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img class="object-cover object-center w-auto h-auto rounded-full" :src="`https://api.laterredumilieu.fr${newPlayer.img.data.attributes.url}`" width="40" height="40" :alt="newPlayer.name">
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-white text-2xl">{{newPlayer.name}}</h2>
          <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium text-3xl text-indigo-600">{{newPlayer.elo}}</h2>
            <p class="leading-relaxed">ELO</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium text-3xl text-green-600">{{newPlayer.wins}}</h2>
            <p class="leading-relaxed">{{ $t('league.wins') }}</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium text-3xl text-red-600">{{newPlayer.lose}}</h2>
            <p class="leading-relaxed">{{ $t('league.loses') }}</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 class="title-font font-medium text-3xl text-yellow-600">{{newPlayer.wins + newPlayer.lose}}</h2>
            <p class="leading-relaxed">{{ $t('league.matchs') }}</p>
          </div>
        </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <highchart 
            v-if="loading"
            :options="chartOptions"
          />

          <highchart 
            v-if="loading"
            :options="chartOptions2"
          />
        </div>
      </div>
    </div>
  </div>





  <div v-if="replaysGame" class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center mb-5">
      <button @click="sortGames()" class="flex-shrink-0 text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg mt-10 sm:mt-0">{{ $t('league.sort') }}</button>
    </div>
    <div class="-my-8">
      <div v-for="(replays, index) in replaysGame" v-bind:key="index" class="py-8 flex flex-wrap md:flex-nowrap bg-gray-900 shadow-lg rounded-sm border border-orange-600">
        <div v-if="replays" class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col ml-2">
          <span class="font-semibold title-font text-white underline uppercase">{{ $t('league.match') }} {{index +1}}</span>
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
                        <span class="text-gray-100 pb-2 mb-2 border-b-2 border-gray-200">{{ $t('league.game') }}</span>
                        <span class="font-medium text-lg text-gray-200 title-font leading-none">{{index +1 }}</span>
                    </div>
                    <div class="flex-grow pl-6">
                        <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">{{replay.map.data ? replay.map.data.attributes.name : "Map inconnu"}}</h2>
                        <div class="text-lg text-left text-white">
                            {{ $t('league.win') }} : {{replay.player_win.data && replay.player_win.data.attributes.name}}
                            (<span :class="`text-${factionList.find(o => o.name === (replay.faction_win.data && replay.faction_win.data.attributes.name)).color}-500`">
                                {{replay.faction_win.data && replay.faction_win.data.attributes.name}}
                            </span>)
                        </div>

                        <div class="text-lg text-left text-white">
                            {{ $t('league.lose') }} : {{replay.player_lose.data && replay.player_lose.data.attributes.name}}
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
            sortType: true,
            player: [],
            replaysGame: [],
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
            ]
        }
    },
    methods: {  
        sortGames() {
          console.log("sort")

          // let test = this.games.sort(
          //     (objA, objB) => objA.attributes.date - objB.attributes.date
          // );

          console.log(this.sortType, "djeidjei")

          let sortyu = this.sortType;

          let test = this.replaysGame.sort(function(a,b){
              if(sortyu){
                  return new Date(b.date) - new Date(a.date);
              } else {
                  return new Date(a.date) - new Date(b.date);
              }
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          });

          console.log(test, "hdede")
          this.sortType = !sortyu
          this.replaysGame = test

      },
    },
    async asyncData({ $strapi, $axios, params,i18n }) {
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
        pageSize: 500,
      },
    }, {
      encodeValuesOnly: true, // prettify URL
    });

        

        const { data } = await $axios.$get(`https://api.laterredumilieu.fr/api/games?${query}`); 
        let games = data

        const slug = params.slug


        let p = player.data.attributes.name
        let newPlayer = player.data.attributes;
        newPlayer.replays = []
        newPlayer.wins = 0
        newPlayer.lose = 0
        newPlayer.statsFactionWin = {};
        newPlayer.statsFactionWin2 = {};
        newPlayer.statsFactionLose = {};
        newPlayer.statsFactionLose2 = {};
        newPlayer.factions = [];

        for (const [index, g] of games.entries()) {
          console.log(g, "djeidjeij")



                // newPlayer.lose += 1;
                // newPlayer.wins += 1;
                
                let test = false

                for (const m of g.attributes?.replays){
                  console.log(m, "????")
                  if(p == m.player_lose?.data?.attributes?.name || p == m.player_win?.data?.attributes?.name) {
                    console.log(m, "m")

                    test = true

                    let factionWin = m.faction_win?.data?.attributes?.name;
                    let factionLose = m.faction_lose?.data?.attributes?.name;

                    if(m.player_win.data?.attributes?.name == p) {
                        typeof newPlayer.statsFactionWin[factionWin] === 'undefined' ? 
                        newPlayer.statsFactionWin[factionWin] = 1 : 
                        newPlayer.statsFactionWin[factionWin]++;

                        typeof newPlayer.statsFactionWin2[factionLose] === 'undefined' ? 
                        newPlayer.statsFactionWin2[factionLose] = 1 : 
                        newPlayer.statsFactionWin2[factionLose]++;

                        newPlayer.wins++;
                    } else {
                        typeof newPlayer.statsFactionLose[factionLose] === 'undefined' ? 
                        newPlayer.statsFactionLose[factionLose] = 1 : 
                        newPlayer.statsFactionLose[factionLose]++;

                        typeof newPlayer.statsFactionLose2[factionWin] === 'undefined' ? 
                        newPlayer.statsFactionLose2[factionWin] = 1 : 
                        newPlayer.statsFactionLose2[factionWin]++;
                        newPlayer.lose++;
                    }
                    
                  }
                }

                if(test){
                  newPlayer.replays.push(g.attributes)
                }

                test = false;
                
                console.log(g.attributes)
        }

        
        let allFactions = ["Men", "Elves", "Dwarves", "Isengard", "Mordor", "Goblins", "Angmar"];

        let factions = []
        let victoires = []
        let victoires2 = []
        let defaites = []
        let defaites2 = []

        for (const f of allFactions) {
            console.log(f, "faction")

            factions.push(f)

            if(newPlayer.statsFactionWin[f] !== undefined){
              victoires.push(newPlayer.statsFactionWin[f]) 
            } else {
                  victoires.push(0) 
            }

            if(newPlayer.statsFactionLose[f] !== undefined){
              defaites.push(newPlayer.statsFactionLose[f]) 
            } else {
              defaites.push(0) 
            }

            if(newPlayer.statsFactionWin2[f] !== undefined){
              victoires2.push(newPlayer.statsFactionWin2[f]) 
            } else {
              victoires2.push(0) 
            }

            if(newPlayer.statsFactionLose2[f] !== undefined){
              defaites2.push(newPlayer.statsFactionLose2[f]) 
            } else {
              defaites2.push(0) 
            }


        }   


        



        const chartOptions = {
  chart: {
    type: 'bar',
    backgroundColor: '#18191c',
    borderColor: '#18191c'
  },
  labels: {
    style: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
  },
  title: {
    text: i18n.locale == 'en' ? 'Win rate with the factions played' : 'Informations sur les factions jouées',
    style: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
  },
  xAxis: {
    color: "#ffffff",
    labels: {
            style: {
                color: '#ffffff'
            }
        },
    gridLineColor: "red",
    categories: i18n.locale == 'en' ?
    ["Men", "Elves", "Dwarves", "Isengard", "Mordor", "Goblins", "Angmar"] :
    [`Homme`, 'Elfe', 'Nain', 'Isengard', 'Mordor', 'Gobelin', 'Angmar']
  },
  yAxis: {
    allowDecimals: false,
    gridLineColor: "gray",
    min: 0,
    title: {
      style: {
        color: "#ffffff"
      },
      text: i18n.locale == 'en' ? 'Number of matches' : 'Nombre de Match'
    },
    labels: {
            style: {
                color: '#ffffff'
            }
        }
  },
  legend: {
    reversed: true,
    itemStyle: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
    name: i18n.locale == 'en' ? 'Defeat' : 'Défaite',
    color: "red",
    data: defaites
  },{
    name: i18n.locale == 'en' ? 'Victory' : 'Victoire',
    color: "green",
    data: victoires
  }]
}

const chartOptions2 = {
  chart: {
    type: 'bar',
    backgroundColor: '#18191c',
    borderColor: '#18191c'
  },
  labels: {
    style: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
  },
  title: {
    text: i18n.locale == 'en' ? 'Win Rate against opponents factions' : 'Informations contre les factions auxquelles tu as joué',
    style: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
  },
  xAxis: {
    color: "#ffffff",
    labels: {
            style: {
                color: '#ffffff'
            }
        },
    gridLineColor: "red",
    categories: i18n.locale == 'en' ?
    ["Men", "Elves", "Dwarves", "Isengard", "Mordor", "Goblins", "Angmar"] :
    [`Homme`, 'Elfe', 'Nain', 'Isengard', 'Mordor', 'Gobelin', 'Angmar']
  },
  yAxis: {
    allowDecimals: false,
    gridLineColor: "gray",
    min: 0,
    title: {
      style: {
        color: "#ffffff"
      },
      text: i18n.locale == 'en' ? 'Number of matches' : 'Nombre de Match'
    },
    labels: {
            style: {
                color: '#ffffff'
            }
        }
  },
  legend: {
    reversed: true,
    itemStyle: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
    name: i18n.locale == 'en' ? 'Defeat' : 'Défaite',
    color: "red",
    data: defaites2
  },{
    name: i18n.locale == 'en' ? 'Victory' : 'Victoire',
    color: "green",
    data: victoires2
  }]
}
        
        let replaysGame = newPlayer.replays
        loading = true;
      return { slug, player, games, newPlayer, loading, chartOptions, chartOptions2, replaysGame }
    },
}
</script>