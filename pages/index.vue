<template>
<section class="text-gray-400 body-font">
  <h1 class="text-center text-white text-3xl">Bienvenue sur les évènements de la Terre du Milieu</h1>
  <div class="px-8 py-4 mx-auto flex flex-wrap">
    <div class="lg:w-full mx-auto">
      <nuxt-link to="/wotn" class="group flex flex-wrap w-full bg-gray-800 py-64 px-10 relative mb-4 border-indigo-300 border-2 rounded-xl">
        <img alt="gallery" class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl" src="~assets/wotr/bg.jpg">
        <div class="text-center relative z-10 w-full">
          <h2 class="text-3xl text-white font-medium title-font mb-2 group-hover:text-blue-500 group-hover:bg-white inline p-2 rounded">La Guerre d'Arnor</h2>
          <br>
          <br>
          <p class="text-2xl text-blue-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">9 Factions pour la lutte de l'Arnor !</p>
          <br>
          <br>
          <nuxt-link style="font-family: 'Albertus'" to="/wotn" 
          class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Prenez part au combat !</span>
            </nuxt-link>
        </div>
      </nuxt-link>
      <div class="flex flex-wrap -mx-2">
        <div class="w-1/2">
          <nuxt-link to="/le_seigneur_d_or" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-red-300 border-2 rounded-xl">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl" src="~assets/wars/bg.jpg">
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2 group-hover:text-red-500 group-hover:bg-white inline p-2 rounded">Arène d'Arda</h2>
              <br>
              <br>
              <p class="text-2xl text-red-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">Affrontement de clans au sein de la Terre du Milieu</p>
              <br>
              <br>      
              <nuxt-link style="font-family: 'Albertus'" to="/le_seigneur_d_or" class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-red-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Découvrir !</span>
            </nuxt-link>
            </div>
          </nuxt-link>
        </div>
        <div class="px-2 w-1/2">
          <nuxt-link to="/third_age" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-green-300 border-2 rounded-xl">
            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl" src="~assets/third_age/map.jpg">
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2 group-hover:text-green-500 group-hover:bg-white inline p-2 rounded">Third Age Total War</h2>
              <br>
              <br>
              <p class="text-2xl text-green-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">Organisé par Kado, l'évent est Terminé depuis le 23 Mai 2021</p>
              <br>
              <br>
              <nuxt-link style="font-family: 'Albertus'" to="/third_age"  class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md dark:bg-gray-800 hover:bg-green-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-green-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Découvrir cet événement</span>
              </nuxt-link>
            </div>
          </nuxt-link>
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