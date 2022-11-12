<template>
<section class="text-gray-400 body-font">
  <h1 class="text-center text-white text-3xl">{{ $t('welcome') }} 📅</h1>
  <div class="px-8 py-4 mx-auto flex flex-wrap">
    <div class="lg:w-full mx-auto">
        <div class="flex flex-wrap -mx-2">


          <div class="w-full lg:mt-0 px-2 lg:w-1/2 mb-4">
          <nuxt-link title="La Guerre des chevaliers"  to="/tournois/guerre_des_chevaliers" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-blue-300 border-2 rounded-xl">
            <NuxtImg
              src="tournois/guerre_des_chevaliers.png"
              class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl"
              alt="La Guerre des apprentis"
              loading="lazy"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2  group-hover:bg-blue-500 inline p-2 rounded">La Guerre des Chevaliers</h2>
              <br>
              <br>
              <p class="text-2xl text-blue-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">Début 12 novembre 2022</p>
              <br>
              <br>
              <button style="font-family: 'Albertus'" to="/tournois/guerre_des_chevaliers" class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Le tournoi des médiums !</span>
              </button>
            </div>
          </nuxt-link>
          </div>

        <div class="w-full lg:mt-0 px-2 lg:w-1/2 mb-4">
          <nuxt-link title="La Guerre des apprentis"  to="/tournois/guerre_des_apprentis" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-blue-300 border-2 rounded-xl">
            <NuxtImg
              src="tournois/guerre_des_apprentis.png"
              class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl"
              alt="La Guerre des apprentis"
              loading="lazy"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2  group-hover:bg-blue-500 inline p-2 rounded">La Guerre des apprentis</h2>
              <br>
              <br>
              <p class="text-2xl text-blue-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">Début Novembre 2022</p>
              <br>
              <br>
              <button style="font-family: 'Albertus'" to="/la-campagne-des-gobelins" class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Le tournoi des débutants !</span>
              </button>
            </div>
          </nuxt-link>
          </div>
        
                <div class="w-full lg:mt-0 px-2 lg:w-1/2 mb-4">
          <nuxt-link title="La Campagne des Gobelins"  to="/la-campagne-des-gobelins" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-green-300 border-2 rounded-xl">
            <NuxtImg
              src="img/CdG.jpg"
              class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl"
              alt="La Campagne des Gobelins"
              loading="lazy"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2  group-hover:bg-green-500 inline p-2 rounded">La Campagne des Gobelins</h2>
              <br>
              <br>
              <p class="text-2xl text-green-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">Démarre début septembre 2022</p>
              <br>
              <br>
              <button style="font-family: 'Albertus'" to="/la-campagne-des-gobelins" class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md dark:bg-gray-800 hover:bg-green-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-green-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Préparez-vous au scénario de la Guerre des Slips</span>
              </button>
            </div>
          </nuxt-link>
          </div>



<div class="w-full mt-5 lg:mt-0 px-2 lg:w-1/2">
          <nuxt-link title="Ligue français de l'Avènement du Roi Sorcier"  to="/league" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-indigo-300 border-2 rounded-xl">
            <NuxtImg
              src="img/league.jpg"
              class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl"
              alt="La Bataille pour la Terre du Milieu 2"
              loading="lazy"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2  group-hover:bg-purple-500 inline p-2 rounded">Ligue français de l'Avènement du Roi Sorcier 🐲 (LFA)</h2>
              <br>
              <br>
              <p class="text-2xl text-purple-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">Joue pour être le meilleur de la Ligue !</p>
              <br>
              <br>
              <button style="font-family: 'Albertus'" to="/league" class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-600 rounded-md dark:bg-gray-800 hover:bg-purple-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-purple-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Hum hum hum</span>
              </button>
            </div>
          </nuxt-link>
          </div>


        <div class="w-full mt-5 lg:mt-0 px-2 lg:w-1/2">
          <nuxt-link title="Loup Garou en Terre du Milieu"  to="/loup-garou" class="group flex flex-wrap w-full bg-gray-800 sm:py-48 py-32 sm:px-10 px-6 relative border-purple-300 border-2 rounded-xl">
            <NuxtImg
              src="img/louphome.png"
              class="w-full object-cover h-full object-center block opacity-50 group-hover:opacity-100 absolute inset-0 rounded-xl"
              alt="Loup Garou en Terre du Milieu"
              loading="lazy"
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-3xl text-white font-medium title-font mb-2 group-hover:text-purple-500 group-hover:bg-white inline p-2 rounded">Loup Garou en Terre du Milieu 🐺</h2>
              <br>
              <br>
              <p class="text-2xl text-purple-300 leading-relaxed group-hover:text-white group-hover:bg-black inline p-2 rounded">40 rôles différents vous attendent dans votre aventure entre amis.</p>
              <br>
              <br>      
              <button style="font-family: 'Albertus'" to="/les_archives_de_numenor/arenedarda" class="inline-flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-600 rounded-md dark:bg-gray-800 hover:bg-purple-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-purple-500 dark:focus:bg-gray-700">
                <svg class="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <span class="mx-1">Je veux jouer !</span>
            </button>
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