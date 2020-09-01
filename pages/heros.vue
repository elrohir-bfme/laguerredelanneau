<template>
<section class="text-gray-500 bg-gray-900 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Voici les fiches des héros crées</h1>
      <h2 class="lg:w-2/3 mx-auto leading-relaxed text-base">Si votre héros de la Terre du Milieu n'apparaît pas ici, il faut demander sur le discord pour l'avoir ici :)</h2>
    </div>
    <div class="flex flex-wrap -m-4">
      <div v-for="hero in heros" :key="hero.name" class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" :src="hero.img">
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <p class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{{hero.name}}</p>
            <p class="title-font text-lg font-medium text-white mb-3">{{hero.race}}</p>
            <p class="leading-relaxed">{{hero.description}}</p>
          </div>
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
      heros: []
    }
  },
  async fetch() {
	  this.heros = await this.$http.$get("https://api.npoint.io/5e8e7f3200df7a910c0f")
	}
}
</script>

<style>

</style>