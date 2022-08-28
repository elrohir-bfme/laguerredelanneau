<template>
<div>
  <div class="bg-gray-900 dark:bg-gray-800 ">
    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-gray-200 dark:text-white sm:text-4xl">
            <span class="block">
                Tournoi Mystère 2vs2
            </span>
            <span class="block text-xl text-blue-500 mt-4 mb-4">
                Organisé par Diablo sur le Discord de la Terre du Milieu
            </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0 mb-4">
            <div class="mt-12 inline-flex rounded-md shadow">
                <a href="https://laterredumilieu.fr/Discord" type="button" class="py-4 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Suivre la progression sur le Discord
                </a>
            </div>
        </div>

        <!-- <iframe src="https://challonge.com/fr/2a9oong0/module" width="100%" height="600" frameborder="0" scrolling="auto" allowtransparency="true"></iframe> -->
    </div>
</div>

<div class="relative bg-gray-900 p-4">
    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div class="lg:col-start-2 md:pl-20">
            <h4 class="text-2xl leading-8 font-extrabold text-white dark:text-white tracking-tight sm:leading-9">
                informations
            </h4>
            <ul class="mt-10">
                <li>
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md text-white">
                                <img class="inline-block w-8" src="~assets/wars/rotwk.png" title="rotwk" alt="rotwk">
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg leading-6 text-gray-100 dark:text-white font-bold">
                                Présentation
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-300 dark:text-gray-300">
                                Les règles spéciales seront données au moment de l'annonce des matchs pour garder un effet de surprise.
                                Les règles spéciales peuvent être des maps custom PVP.
                                Elles seront tirées au sort.
                            </p>
                        </div>
                    </div>
                </li>
                <li class="mt-10">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg leading-6 text-gray-100 dark:text-white font-bold">
                                Règles : 
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-300 dark:text-gray-300">
                                Pas de héros customs/héros de l'anneau
                                Faction au choix 		(sauf indiqué)
                                Start 1000 			(sauf indiqué)
                                Map au choix de l'host 	(sauf indiqué)

                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 p-10">
            <NuxtImg
              src="tournois/tournoi_rotwk_mystere_2vs2.jpg"
              class="relative mx-auto shadow-lg rounded w-auto"
              alt="L'Avènement du Roi Sorcier"
              loading="lazy"
            />
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  layout: "home",
  head() {
    return {
      title: "Tournoi Mystère 2vs2",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Organisé par Diablo sur le discord de la Terre du Milieu",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'elrohir, tournoi bfme, rotwk, maps customs, bfme2, rotwk 2.02 v8.5',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "Tournoi Mystère 2vs2",
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Organisé par Diablo sur le discord de la Terre du Milieu",
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
            'https://laguerredelanneau.vercel.app/tournois/tournoi_rotwk_mystere_2vs2.jpg',
        },
        { hid: 'og:title', name: 'og:title', content: "Tournoi Mystère 2vs2" },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://laguerredelanneau.vercel.app/tournois/tournoi_mystere_rotwk_2_02',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://laguerredelanneau.vercel.app/tournois/tournoi_rotwk_mystere_2vs2.jpg',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            "Organisé par Diablo sur le discord de la Terre du Milieun",
        },
      ],
    }
    }
}
</script>