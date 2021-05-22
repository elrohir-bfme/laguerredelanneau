<template>
<section class="text-gray-400 body-font">
  <h1 class="text-center text-white text-3xl">Bienvenue sur les évènements de la Terre du Milieu</h1>
  <div class="px-8 py-4 mx-auto flex flex-wrap">
    <div class="lg:w-full mx-auto">
      <div class="flex flex-wrap w-full bg-gray-800 py-64 px-10 relative mb-4 border-indigo-300 border-2 rounded-xl">
        <img alt="gallery" class="w-full object-cover h-full object-center block opacity-50 absolute inset-0 rounded-xl" src="~assets/wotr/bg.jpg">
        <div class="text-center relative z-10 w-full">
          <h2 class="text-3xl text-white font-medium title-font mb-2">La Guerre d'Arnor</h2>
          <p class="text-2xl leading-relaxed text-indigo-200">9 Factions pour la lutte de l'Arnor !</p>
          <nuxt-link style="font-family: 'Albertus'" to="/wotr" class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Prenez part au combat !</span>
            </nuxt-link>
        </div>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="w-1/2">
          <div class="flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-red-300 border-2 rounded-xl">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-50 absolute inset-0 rounded-xl" src="~assets/wars/bg.jpg">
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2">Gladiator Wars</h2>
              <p class="text-2xl leading-relaxed">Affrontement de clan au sein de la Terre du Milieu</p>
              <nuxt-link style="font-family: 'Albertus'" to="/le_seigneur_d_or" class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-red-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Découvrir !</span>
            </nuxt-link>
            </div>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-green-300 border-2 rounded-xl">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0 rounded-xl" src="~assets/third_age/map.jpg">
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2">Third Age Total War</h2>
              <p class="text-2xl leading-relaxed">Organiser par Kado !</p>
              <nuxt-link style="font-family: 'Albertus'" to="/third_age"  class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md dark:bg-gray-800 hover:bg-green-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-green-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Prenez part au combat !</span>
              </nuxt-link>
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
  layout: "home",
}
</script>

<style>

</style>