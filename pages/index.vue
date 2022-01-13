<template>
<section class="text-gray-400 body-font">
  <h1 class="text-center text-white text-3xl">Bienvenue sur les évènements de la Terre du Milieu 📅</h1>
  <div class="px-8 py-4 mx-auto flex flex-wrap">
    <div class="lg:w-full mx-auto">
        <div class="flex flex-wrap -mx-2">
        <div class="px-2 w-full lg:w-1/2">
          <nuxt-link title="Tournoi les Guerres du Nord"  to="/tournois/tournoi_les_guerres_du_nord" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-green-300 border-2 rounded-xl">
            <NuxtImg
              src="tournois/les_guerres_du_nord.webp"
              class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl"
              alt="Tournoi les Guerres du Nord"
              loading="lazy"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2 group-hover:text-blue-500 group-hover:bg-white inline p-2 rounded">Tournoi : Les Guerres du Nord</h2>
              <br>
              <br>
              <p class="text-2xl text-blue-300 leading-relaxed group-hover:text-white group-hover:bg-blue-500 inline p-2 rounded">Organisé par Elrohir qui a commencé le 19 Novembre 2021</p>
              <br>
              <br>
              <button style="font-family: 'Albertus'" to="/third_age"  class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-400 dark:focus:bg-blue-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Tournoi en cours</span>
              </button>
            </div>
          </nuxt-link>
        </div>

        <div class="w-full mt-5 lg:mt-0 lg:w-1/2">
          <nuxt-link title="La Guerre pour l'Eriador"  to="/gde" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-indigo-300 border-2 rounded-xl">
            <NuxtImg
              src="img/map_gde.webp"
              class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl"
              alt="La Guerre pour l'Eriador"
              loading="lazy"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2 group-hover:text-indigo-500 group-hover:bg-white inline p-2 rounded">La Guerre pour l'Eriador</h2>
              <br>
              <br>
              <p class="text-2xl text-indigo-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">9 Factions pour la lutte de l'Eriador !</p>
              <br>
              <br>
              <button
              class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-indigo-500 dark:focus:bg-gray-700">
                
                <Timer/>
              </button>
            </div>
          </nuxt-link>
        </div>

        <div class="w-full mt-5">
          <nuxt-link title="La Bataille pour la Terre des Duo"  to="/tournois/tournoi_la_bataille_des_duo" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-indigo-300 border-2 rounded-xl">
            <NuxtImg
              src="img/tournoi_duo.png"
              class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl"
              alt="La Bataille pour la Terre des Duo"
              loading="lazy"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2  group-hover:bg-orange-500 inline p-2 rounded">La Bataille pour la Terre des Duo</h2>
              <br>
              <br>
              <p class="text-2xl text-orange-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">Tournoi sur le 1 et lancé le 13 janvier 2022</p>
              <br>
              <br>
              <button
              class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-800 rounded-md dark:bg-gray-700 hover:bg-red-700 dark:hover:bg-gray-700 focus:outline-none focus:bg-red-500 dark:focus:bg-gray-700">
                <span class="mx-1">Information sur le tournoi</span>
              </button>
            </div>
          </nuxt-link>
        </div>

        <!-- <div class="w-full lg:w-1/2">
          <nuxt-link title="L'Arène d'Arda"  to="/les_archives_de_numenor/arenedarda" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-red-300 border-2 rounded-xl">
            <NuxtImg
              src="arena/bg.webp"
              class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl"
              alt="Arène d'Arda"
              loading="lazy"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2 group-hover:text-red-500 group-hover:bg-white inline p-2 rounded">Arène d'Arda ⚔️</h2>
              <br>
              <br>
              <p class="text-2xl text-red-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">Affrontement de clans au sein de la Terre du Milieu</p>
              <br>
              <br>      
              <button style="font-family: 'Albertus'" to="/les_archives_de_numenor/arenedarda" class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md dark:bg-gray-800 hover:bg-red-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-red-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Découvrir !</span>
            </button>
            </div>
          </nuxt-link>
        </div> -->
        
        
      </div>
      <!-- <div class="flex flex-wrap -mx-2 mt-4">
        <div class="px-2 w-full lg:w-1/2">
          <nuxt-link title="La Guerre pour l'Eriador"  to="/" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-indigo-300 border-2 rounded-xl">
            <NuxtImg
              src="img/map_gde.webp"
              class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl"
              alt="La Guerre pour l'Eriador"
              loading="lazy"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2 group-hover:text-indigo-500 group-hover:bg-white inline p-2 rounded">La Guerre pour l'Eriador</h2>
              <br>
              <br>
              <p class="text-2xl text-indigo-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">9 Factions pour la lutte de l'Eriador !</p>
              <br>
              <br>
              <button
              class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md dark:bg-gray-800 hover:bg-indigo-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-indigo-500 dark:focus:bg-gray-700">
                <span class="mx-1">Prochain évènement</span>
              </button>
            </div>
          </nuxt-link>
        </div>
        <div class="w-full lg:w-1/2">
          <nuxt-link title="La Guerre de l'Anneau" to="/gda" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-blue-300 border-2 rounded-xl">
            <NuxtImg
              src="img/map_gda.webp"
              class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl"
              alt="La Guerre de l'Anneau"
              loading="lazy"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2 group-hover:text-blue-500 group-hover:bg-white inline p-2 rounded">La Guerre de l'Anneau ⛰️</h2>
              <br>
              <br>
              <p class="text-2xl text-blue-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">Terminé le 21 Août 2021</p>
              <br>
              <br>      
              <button style="font-family: 'Albertus'" class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Voir la carte interactive !</span>
            </button>
            </div>
          </nuxt-link>
        </div> -->
        <!-- <div class="px-2 w-full lg:w-1/2">
          <nuxt-link title="Third Age Total War"  to="/third_age" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-green-300 border-2 rounded-xl">
            <img alt="Third Age Total War" title="Third Age Total War" class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl" src="~assets/third_age/map_opti.jpg">
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2 group-hover:text-green-500 group-hover:bg-white inline p-2 rounded">Third Age Total War</h2>
              <br>
              <br>
              <p class="text-2xl text-green-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">Organisé par Kado, l'évent est Terminé depuis le 23 Mai 2021</p>
              <br>
              <br>
              <button style="font-family: 'Albertus'" to="/third_age"  class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md dark:bg-gray-800 hover:bg-green-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-green-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Découvrir cet événement</span>
              </button>
            </div>
          </nuxt-link>
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</section>
</template>

<script>
export default {
  layout: "home",
      head() {
    return {
      title: "Events de la Terre du Milieu 📅",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Retrouvez les évènements de la Terre du Milieu, comme les Tournois, Guerre de l'Anneau sur les jeux la Bataille pour la Terre du Milieu mais pas seulement",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            "La Guerre de l'Anneau, Third Age Total War, Elrohir, GDE, Tournoi, GDA, Mordor, Elfe, Nain, Rohan, Gondor, Isengard, Gobelin, Angmar, bfme2, rotwk, elrohir",
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "Events de la Terre du Milieu 📅",
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
          "Retrouvez les évènements de la Terre du Milieu, comme les Tournois, Guerre de l'Anneau sur les jeux la Bataille pour la Terre du Milieu mais pas seulement",
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@Elrohir_BFME',
        },
        { name: "twitter:site", content: "@Elrohir_BFME" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://laguerredelanneau.vercel.app",
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://laguerredelanneau.vercel.app/eventsltdm.webp',
        },
        { hid: 'og:title', name: 'og:title', content: "Events de la Terre du Milieu 📅"},
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://laguerredelanneau.vercel.app',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://laguerredelanneau.vercel.app/eventsltdm.webp',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
             "Retrouvez les évènements de la Terre du Milieu, comme les Tournois, Guerre de l'Anneau sur les jeux la Bataille pour la Terre du Milieu mais pas seulement",
        },
      ],
    }
    },
}
</script>