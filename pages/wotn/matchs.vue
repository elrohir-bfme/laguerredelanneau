<template>
  <section class="text-white body-font overflow-hidden">
  <div v-for="(match, key) in matchs" :key="match.id" class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-100 tracking-widest">Match {{key + 1 }}</h2>
        <h1 class="text-white text-3xl title-font font-medium mb-4">{{match.match}}</h1>
        <div class="flex mb-4">
          <a 
            @click="selectItem(match.id + 1)"
            :class="{ 'border-blue-600': match.id + 1 === activeItem}"
            class="flex-grow text-blue-500 border-b-2  py-2 text-lg px-1"

            >Informations</a>
          <a 
            @click="selectItem(match.id + 2)"
            :class="{ 'border-blue-600': match.id + 2 === activeItem}"
            class="flex-grow text-blue-500 border-b-2 py-2 text-lg px-1">Joueurs</a>
        </div>
        <div :class="{ 'hidden': match.id + 2 === activeItem}">
        <p class="leading-relaxed mb-4">{{match.region.description}}</p>
        <div class="flex border-t border-gray-200 py-2">
          <span class="">Appartient</span>
          <span class="ml-auto ">{{match.region.faction.name}}</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
          <span class="">Type de Map</span>
          <span class="ml-auto ">{{match.region.map}}</span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
          <span class="">Nombre de Joueurs</span>
          <span class="ml-auto ">{{match.region.players.length}}</span>
        </div>
        </div>
        <div :class="{ 'hidden': match.id + 1 === activeItem}">
            <li v-for="player in match.region.players" :key="player.name">
                {{player.name}}
            </li>
        </div>
      </div>
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="match.region.img">
    </div>
  </div>
</section>
</template>

<script>

import getMatchs from '~/apollo/queries/match/matchs'

export default {
    layout: 'wotn',
    data() {
        return {
            matchs: [],
            activeItem: null,
        }
    },
    methods: {
        selectItem(i) {
            this.activeItem = i;
        },
    },

    apollo: {
        matchs: {
        query: getMatchs
        },
    }
}
</script>

<style>

</style>