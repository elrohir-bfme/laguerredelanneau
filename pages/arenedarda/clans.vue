<template>
<div>
    <p class="text-center text-3xl font-bold text-white">
        Liste des clans de la Terre du Milieu
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        <div v-for="clan in clans" :key="clan.id" class="p-4 relative mb-14">
            <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
                <img v-if="clan.img" alt="profil" title="profil" :src="`https://api.laterredumilieu.fr${clan.img.url}`" 
                class="mx-auto object-cover rounded-lg h-40 w-40 dark:border-gray-800"/>
            </div>
            <div class="bg-gradient-to-r from-gray-800 to-gray-900  hover:from-gray-900  hover:to-gray-800 rounded-lg shadow px-8 py-4 pt-24">
                <div class="text-center">
                    <p class="text-2xl text-white">
                        {{clan.name}}
                    </p>
                    <p class="text-xl text-gray-200 dark:text-gray-200 font-light mb-4">
                        <img  class="inline-block rounded-full w-10" src="~assets/wars/point.jpg" title="Points" alt="Points">
                        {{clan.points}} {{clan.points > 0 ? "points" : "point"}}
                    </p>
                        <div class="grid grid-cols-3 gap-4 text-white text-center">
                            <div>
                                <span class="text-green-500  inline-block">
                                    BFME 2 1.09
                                    <img class="inline-block w-8" src="~assets/wars/bfme2.png" title="bfme2" alt="bfme2">
                                </span>
                            </div>
                            <div>
                            </div>
                            <div>
                                <span class="text-blue-500 inline-block">
                                    ROTWK 2.02
                                    <img class="inline-block w-8" src="~assets/wars/rotwk.png" title="rotwk" alt="rotwk">
                                </span>
                            </div>
                        </div> 
                        <div class="mx-auto m-2" v-for="player in clan.players" :key="player.name" >
                            <div class="grid grid-cols-3 gap-4 text-white text-center">
                                <div class="bg-green-600 rounded-lg">
                                    <p class="mt-2">
                                    {{player.grade109}}
                                    
                                    <img v-if="player.grade109 == 'general'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeGeneral.svg"  title="general" alt="general">
                                    <img v-if="player.grade109 == 'lieutenant'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeLieutenant.svg" title="lieutenant" alt="lieutenant">  
                                    <img v-if="player.grade109 == 'soldat'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeSoldat.svg" title="soldat" alt="soldat"> 
                                    </p>  
                                </div>
                                <div class="bg-purple-600 hover:bg-purple-700 uppercase px-2 py-1 text-xs font-bold mr-3 rounded-lg">

                                {{(player.name)}}
                                    <span class="block text-center text-xs font-normal">
                                    
                                    {{player.victory}} <img alt="Victoire" class="w-8 h-4 inline-block" src="~assets/trophy.svg" title="Victoire">
                                    
                                    {{player.defeat}} <img alt="Défaite" class="w-8 h-4 inline-block" src="~assets/skull.svg" title="Défaite">
                                
                                    </span>    
                                </div>
                                <div class="bg-blue-600 rounded-lg">
                                    <p class="mt-2">
                                    {{player.grade202}}
                                    
                                    <img v-if="player.grade202 == 'general'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeGeneral.svg" title="general" alt="general">
                                    <img v-if="player.grade202 == 'lieutenant'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeLieutenant.svg" title="lieutenant" alt="lieutenant">  
                                    <img v-if="player.grade202 == 'soldat'"  class="w-8 h-4 inline-block" src="~assets/wars/gradeSoldat.svg" title="soldat" alt="soldat"> 
                                    </p> 
                                </div>
                            </div> 
                        </div>
                </div>
                <div class="rounded-lg bg-gray-900 dark:bg-white p-2 w-full">
                      <div class="grid grid-cols-3 gap-4 text-white text-center">
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
      this.clans =  await this.$strapi.find('clans')
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
    },
    head() {
    return {
      title: 'Clans ⚔️',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Retrouvez la liste des clans de l'évènement de l'Arène d'Arda, leurs joueurs et leurs titres dans cette terrible combat !",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'clans, bfme2, rotwk, elrohir',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Clans ⚔️',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Retrouvez la liste des clans de l'évènement de l'Arène d'Arda, leurs joueurs et leurs titres dans cette terrible combat !",
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@Elrohir_BFME',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://events.laterredumilieu.fr/arena/arene.jpg',
        },
        { hid: 'og:title', name: 'og:title', content: 'Clans ⚔️' },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://events.laterredumilieu.fr/arenedarda/clans',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://events.laterredumilieu.fr/arena/arene.jpg',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            "Retrouvez la liste des clans de l'évènement de l'Arène d'Arda, leurs joueurs et leurs titres dans cette terrible combat !",
        },
      ],
    }
  },
}
</script>

<style>

</style>