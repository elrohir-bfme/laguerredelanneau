<template>
<section class="text-gray-500 container mx-auto bg-lotr rounded-lg body-font overflow-hidden border-2 border-red-500">
  <div class="container px-5 py-24 mx-auto">


    <div v-if="tour ? false : true" class="mb-20 align-middle text-center items-center text-white">
    <label class="block text-white-500 font-bold">
      <input v-model="combats" class="mr-2 leading-tight" type="checkbox">
      <span class="text-2xl">
        Afficher les combats du tour
      </span>
    </label>
    </div>


    <div v-for="(match, index) in matchs" :key="index" class="-my-8">
      <div v-if="combats ? Boolean(match.turn === matchs.length-1) : false || tour ? Boolean(match.turn === tour) : true" class="p-8 flex flex-wrap md:flex-no-wrap border-b-2 border-gray-800  hover:bg-gray-900">
        <div class="md:w-32 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="tracking-widest font-medium title-font text-white">{{ $t('matchs.tour') }} {{match.turn}}</span>
          <span class="mt-1 text-gray-600 text-sm">{{match.date}}</span>
          <span  class="mt-1 text-gray-600 text-sm">{{match.matches.length}} {{ $t('matchs.matchs') }}</span>
        </div>
        <div v-if="match.matches && match.matches.length > 0" class="flex flex-grow flex-wrap -m-2">
              <div v-for="(game, index) in match.matches" :key="index" class="p-2 m-4 flex-auto border-gray-800 border rounded-lg hover:bg-gray-800 hover:border-gray-900">
                <div class="flex items-center">

                  <div class="flex flex-col flex-1 self-start">
                    <div class="flex flex-row justify-center">
                      <img v-for="(team1, index) in game.team1" :key="index" :alt="team1" class="w-10 h-10 object-cover object-center flex-shrink-0 rounded-full mr-4 ml-2"  :src="require(`~/assets/new_gda/factions/${team1}.webp`)">
                    </div>
                    <div class="flex justify-center my-4">
                      <p>Slots:&nbsp</p><p v-for="(slots1, index) in game.slots1" :key="index">{{slots1}}<span v-if="(game.slots1.length-1) !== index">,&nbsp</span></p>
                    </div>

                    <div class="flex justify-center mt-2">
                      <table class="table-auto w-full border-2 border-gray-700">
                        <thead class="text-xs font-semibold uppercase text-gray-50 bg-gray-500">
                        <tr class="border-gray-800 border-b-2">
                          <th class="p-2 whitespace-nowrap">
                              <div class="font-semibold text-center">{{ $t('matchs.joueurs') }}</div>
                          </th>
                        </tr>
                      </thead>
                        <tbody class="text-sm divide-y divide-gray-400 text-gray-400 bg-gray-800">
                        <tr v-for="(players1, index) in game.players1" :key="index"  >
                          <td class="p-2 whitespace-nowrap" :class="players1 && players1.won ? 'bg-green-600' : (players1 && players1.died) && 'bg-red-500'">
                              <div class="flex items-center">
                                  <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" :src="require(`~/assets/new_gda/factions/${players1.faction}.webp`)" width="40" height="40" :alt="players1.faction"></div>
                                  <div class="font-medium text-gray-200">{{players1.name}}</div>
                                  <div class="w-10 h-10 flex-shrink-0 ml-2 sm:ml-3"><img class="rounded-full w-10 h-10 object-cover" :src="players1.img ? players1.img : require(`~/assets/new_gda/icons/${players1.faction}.png`)" width="40" height="40" :alt="players1.name"></div>
                                  <!-- <div 
                                    v-if="(players1 && players1.won) || (players1 && players1.died)" 
                                    class="font-medium ml-2" 
                                    :class="players1 && players1.won ? 'text-green-400' : 'text-red-400'">
                                    {{players1 && players1.won ? "Victorieux" : "Mort"}}
                                  </div> -->
                              </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    </div>

                  </div>

                  

                  <div class="flex-1">
                    <p class="text-white title-font font-medium text-center">{{game.territory}}</p>
                    <div class="justify-center flex">
                        <img alt="minimap" class="w-auto mr-4 ml-2 transform transition duration-500 hover:scale-110"  :src="game.minimap">
                    </div>
                    <p class="text-white title-font font-medium text-center mt-*">{{ $t('matchs.resulat') }}</p>
                    <div class="justify-center flex">
                      <span class="text-center" v-if="game.team1Won">Equipe des <br>Dauphins 🐬</span>
                      <span class="text-center" v-if="game.team2Won">Alliance des <br>Flamants roses 🦩</span>
                    </div>
                    
                  </div>

                  <div class="flex flex-col flex-1 self-start">
                    <div class="flex flex-row justify-center">
                      <img v-for="(team2, index) in game.team2" :key="index" :alt="team2" class="w-10 h-10 object-cover object-center flex-shrink-0 rounded-full mr-4 ml-2"  :src="require(`~/assets/new_gda/factions/${team2}.webp`)">
                    </div>

                    <div class="flex justify-center my-4">
                      <p>Slots:&nbsp</p><p v-for="(slots2, index) in game.slots2" :key="index">{{slots2}}<span v-if="(game.slots2.length-1) !== index">,&nbsp</span></p>
                    </div>

                     <div class="flex justify-center mt-2">
                      <table class="table-auto w-full border-2 border-gray-700">
                        <thead class="text-xs font-semibold uppercase text-gray-50 bg-gray-500">
                        <tr class="border-gray-800 border-b-2">
                          <th class="p-2 whitespace-nowrap">
                              <div class="font-semibold text-center">{{ $t('matchs.joueurs') }}</div>
                          </th>
                        </tr>
                      </thead>
                        <tbody class="text-sm divide-y divide-gray-400 text-gray-400 bg-gray-800">
                        <tr v-for="(players2, index) in game.players2" :key="index"  >
                          <td class="p-2 whitespace-nowrap" :class="players2 && players2.won ? 'bg-green-600' : (players2 && players2.died) && 'bg-red-500'">
                              <div class="flex items-center">
                                  <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" :src="require(`~/assets/new_gda/factions/${players2.faction}.webp`)" width="40" height="40" :alt="players2.faction"></div>
                                  <div class="font-medium text-base text-gray-200">{{players2.name}}</div>
                                  <div class="w-10 h-10 flex-shrink-0 ml-2 sm:ml-3"><img class="rounded-full w-10 h-10 object-cover" :src="players2.img ? players2.img : require(`~/assets/new_gda/icons/${players2.faction}.png`)" width="40" height="40" :alt="players2.name"></div>
                                  <!-- <div 
                                    v-if="(players2 && players2.won) || (players2 && players2.died)" 
                                    class="font-medium ml-2" 
                                    :class="players2 && players2.won ? 'text-green-400' : 'text-red-400'">
                                    {{players2 && players2.won ? "Victorieux" : "Mort"}}
                                  </div> -->
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
         <div v-else class="md:flex-grow">
          <h2 class="text-2xl font-medium text-white title-font mb-2">{{ $t('matchs.aucun') }}</h2>
          <p class="leading-relaxed">{{ $t('matchs.participer') }}</p>
          <a class="text-indigo-500 hover:text-indigo-600 inline-flex items-center mt-4" target="_blank" href="http://bit.ly/LaTerreduMilieu">Discord la Terre du Milieu
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      </div>
  </div>
</section>
</template>

<script>
export default {
    data() {
    return {
      matchs: [],
      combats: true,
    }
  },
  props: {
        tour: {
            type: Number,
            required: false
        },
    },
  async fetch() {
	  this.matchs = await this.$http.$get(
      "https://api.npoint.io/eb3c4e4f5efb9610e414"
    );
	},
}
</script>

<style scoped>

.bg-lotr {
  background-color: #18191c;
}

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>