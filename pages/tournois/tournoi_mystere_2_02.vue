<template>
<div>
  <div class="bg-gray-900 dark:bg-gray-800 ">
    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-gray-200 dark:text-white sm:text-4xl">
            <span class="block">
                TOURNOI Mystère ✨
            </span>
            <span class="block text-xl text-blue-500 mt-4 mb-4">
                Organisé par Diablo qui va vous proposez un tournoi orienté sur des maps personnalisés
            </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
                <a href="https://discord.gg/JmpBwuq2dw" type="button" class="py-4 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Suivre le tournoi sur le Discord
                </a>
            </div>
        </div>

        <iframe src="https://challonge.com/fr/6aav36mu/module" width="100%" height="1500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
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
                                Jeux/Version
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                ROTWK 2.02 v8.4
                            </p>
                        </div>
                    </div>
                </li>
                <li class="mt-10">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md text-white">
                                <img class="inline-block w-12" src="~assets/tournois/map.png" title="map" alt="map">
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg leading-6 text-gray-100 dark:text-white font-bold">
                               Il y a un total de 7 maps disponible
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-300 dark:text-gray-300">
                                Vous trouverez le puzzlers, le league of lord, la course de chariot de Toinou, ainsi que 4 maps PVE du type shockwave qui peuvent se jouer en affrontement, 3 des 4 maps ont été modifié et testé par Diablo pour les rendre plus jouable.
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
                               Le principe du tournoi est simple, chaque équipe de 2 joueurs choisit la map sur laquelle elle souhaite jouer et un modo choisit la troisième map. 
                            </p>
                        </div>
                    </div>
                </li>
                <li class="mt-10">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <div class="flex items-center justify-center h-12 w-12 rounded-md text-white">
                                <img class="inline-block w-12" src="~assets/tournois/date.png" title="date" alt="date">
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg leading-6 text-gray-100 dark:text-white font-bold">
                                Date: 
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-300 dark:text-gray-300">
                              A débuté le 26 septembre au soir.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 p-10">
            <img src="~assets/tournois/tournoi_mystere_2_02.webp" alt="Tournoi mystère sur la 2.02 en équipe de deux" class="relative mx-auto shadow-lg rounded w-auto"/>
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
      title: "Tournoi Mystère ✨",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Tournoi organisé par Diablo sur ROTWK orienté sur des maps personnalisés en équipe de deux.",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'elrohir, tournoi bfme, rotwk, maps customs, bfme2',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "Tournoi Mystère ✨",
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Tournoi organisé par Diablo sur ROTWK orienté sur des maps personnalisés en équipe de deux.",
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
            'https://laguerredelanneau.vercel.app/tournois/tournoi_mystere_2_02.webp',
        },
        { hid: 'og:title', name: 'og:title', content: "L'Arène d'Arda ⚔️" },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://laguerredelanneau.vercel.app/tournois/tournoi_mystere_2_02',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://laguerredelanneau.vercel.app/tournois/tournoi_mystere_2_02.webp',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            "Tournoi organisé par Diablo sur ROTWK orienté sur des maps personnalisés en équipe de deux.",
        },
      ],
    }
    }
}
</script>