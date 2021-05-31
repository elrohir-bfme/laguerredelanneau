<template>
<!-- <div class="container border-4 border-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900  hover:from-gray-900 hover:via-gray-700  hover:to-gray-600 rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-72 md:my-48 lg:my-32"> -->
    <!-- <div v-for="clan in clans" :key="clan.id">
      <div class="shadow-lg rounded-2xl w-80 p-4  dark:bg-gray-800">
          <div class="flex flex-row items-start gap-4">
              <img src="~assets/wars/carre.png" class="w-48 h-48 rounded-lg">
              <div class="h-48 w-full flex flex-col justify-between">
                  <div>
                      <p class="text-gray-800 text-xl ttw font-medium">
                          {{clan.name}}
                      </p>
                      <p class="text-gray-400 text-xs">
                          chef de clan 
                      </p>
                  </div>
                  <div class="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
                      <div class="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                          <p class="flex flex-col">
                              Victoire
                              <span class="text-black dark:text-indigo-500 font-bold">
                                  {{ clan.win}}
                              </span>
                          </p>
                          <p class="flex flex-col">
                              Défaite
                              <span class="text-black dark:text-indigo-500 font-bold">
                                  {{ clan.lose}}
                              </span>
                          </p>
                          <p class="flex flex-col">
                              Rating
                              <span class="text-black dark:text-indigo-500 font-bold">
                                  9.3
                              </span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div> -->
    
<div>
    <p class="text-center text-3xl font-bold text-white">
        Liste des clans de la Terre du Milieu
    </p>
    <p class="text-center  text-xl font-normal text-gray-500">
        Meat the best team in wolrd
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20"
        >
        <div v-for="clan in clans" :key="clan.id" class="p-4 relative mb-14">
            <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                <img v-if="clan.img" alt="profil" :src="`http://localhost:1337${clan.img.url}`" 
                class="mx-auto object-cover rounded-lg h-40 w-40 dark:border-gray-800"/>
            </div>
            <div class="bg-gradient-to-r from-gray-800 to-gray-900  hover:from-gray-900  hover:to-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                <div class="text-center">
                    <p class="text-2xl text-white">
                        {{clan.name}}
                    </p>
                    <p class="text-xl text-gray-200 dark:text-gray-200 font-light">
                        {{clan.points}}
                    </p>
                    <p class="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
                        Description
                    </p>
                    <p>
                        <div class="mx-auto m-2" v-for="player in clan.players" :key="player.name" > 
                            <div class="rounded-lg uppercase px-2 py-1 text-xs font-bold mr-3 text-white text-center"
                                :class="`bg-indigo-900 hover:bg-purple-700`"
                                >

                                {{(player.name)}}
                                <span class="block text-center text-xs font-normal">

                                <img v-if="player.grade == 'general'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeGeneral.svg">
                                <img v-if="player.grade == 'lieutenant'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeLieutenant.svg">  
                                <img v-if="player.grade == 'soldat'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeSoldat.svg">  
                                
                                {{player.victory}} <img alt="Victoire" class="w-8 h-4 inline-block" src="~assets/trophy.svg">
                                
                                {{player.defeat}} <img alt="Défaite" class="w-8 h-4 inline-block" src="~assets/skull.svg">
                            
                                </span>
                            </div>
                        </div>
                    </p>

                </div>
                <div class="rounded-lg bg-gray-900 dark:bg-white p-2 w-full">
                      <div class="flex items-center justify-between text-3xs text-white dark:text-white">
                          <p class="flex flex-col">
                              Victoire
                              <span class="text-white dark:text-indigo-500 font-bold">
                                  {{ clan.win}}
                              </span>
                          </p>
                          <p class="flex flex-col">
                              Défaite
                              <span class="text-white dark:text-indigo-500 font-bold">
                                  {{ clan.defeat}}
                              </span>
                          </p>
                          <p class="flex flex-col">
                              Matchs
                              <span class="text-white dark:text-indigo-500 font-bold">
                                  {{ clan.matchs}}
                              </span>
                          </p>
                      </div>
                  </div>
            </div>
        </div>
    </div>
</div>

<!-- </div> -->


</template>

<script>
export default {
    layout: "wars",
    data() {
        return {
        loading: false,
        clans: []
        }
    },
    async fetch() {
      this.loading = true;
      this.clans =  await this.$strapi.$clans.find()
      this.loading = false;
    },
    methods: {
        test() {
            const months = ["5", "10", "15", "20"];
            const randomMonth = months[Math.floor(Math.random() * months.length)];

            console.log("random month =>", randomMonth);
            console.log(randomMonth)
            return randomMonth
        }
    }
}
</script>

<style>

</style>