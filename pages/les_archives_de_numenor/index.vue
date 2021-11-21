<template>
  <section class="text-gray-400 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-orange-500 rounded-lg overflow-hidden bg">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="~assets/wars/arene_opti.jpg" alt="blog">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">ROTWK</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Arène d'Arda ⚔️</h1>
            <p class="leading-relaxed mb-3">Affrontement de clans au sein de la Terre du Milieu</p>
            <div class="flex items-center flex-wrap ">
              <nuxt-link title="L'Arène d'Arda"  to="/les_archives_de_numenor/arenedarda" class="text-purple-400 inline-flex items-center md:mb-2 lg:mb-0">En découvrir plus
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </nuxt-link>
              <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-orange-500">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                12 Juillet 2021
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-orange-500 rounded-lg overflow-hidden bg">
          <NuxtImg
              src="img/map_gda.webp"
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              alt="La Guerre de l'Anneau"
              loading="lazy"
            />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">ROTWK</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">La Guerre de l'Anneau ⛰️</h1>
            <p class="leading-relaxed mb-3">Terminé le 21 Août 2021</p>
            <div class="flex items-center flex-wrap">
              <nuxt-link title="La Guerre de l'Anneau" to="/gda" class="text-purple-400 inline-flex items-center md:mb-2 lg:mb-0">En découvrir plus
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </nuxt-link>
              <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-orange-500">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                21 Août 2021
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-orange-500 rounded-lg overflow-hidden bg">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="~assets/third_age/map.webp" alt="blog">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">THIRD AGE</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Event Third Age Total War</h1>
            <p class="leading-relaxed mb-3">Organisé par Kado, l'évent est Terminé depuis le 23 Mai 2021</p>
            <div class="flex items-center flex-wrap ">
              <nuxt-link title="Third Age Total War"  to="/les_archives_de_numenor/third_age" class="text-purple-400 inline-flex items-center md:mb-2 lg:mb-0">En découvrir plus
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </nuxt-link>
              <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-orange-500">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                12 Juillet 2021
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-orange-500 rounded-lg overflow-hidden bg">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="~assets/tournois/tournoi_mystere_2_02.webp" alt="blog">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">ROTWK</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">Tournoi Mystère ✨</h1>
            <p class="leading-relaxed mb-3">Organisé par Diablo qui va vous proposez un tournoi orienté sur des maps personnalisés</p>
            <div class="flex items-center flex-wrap ">
              <nuxt-link title="Tournoi Mystère"  to="/les_archives_de_numenor/tournois/tournoi_mystere_2_02" class="text-purple-400 inline-flex items-center md:mb-2 lg:mb-0">En découvrir plus
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </nuxt-link>
              <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-orange-500">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                15 Novembre 2021
              </span>
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

<style scoped>

.bg {
  background-color: #18191c;
}

</style>