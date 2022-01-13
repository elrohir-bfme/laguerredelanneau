<template>
<div>
  <div class="bg-gray-900 dark:bg-gray-800 ">
    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-gray-200 dark:text-white sm:text-4xl">
            <span class="block">
                Tournoi les Guerres du Nord en double élimination
            </span>
            <span class="block text-xl text-red-500 mt-4 mb-4">
                Organisé Elrohir sur le Discord de la Terre du Milieu
            </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0 mb-10">
            <div class="mt-12 inline-flex rounded-md shadow">
                <a href="https://discord.gg/XWdHgaVNca" type="button" class="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Suivre le tournoi sur le Discord
                </a>
            </div>
        </div>

        <iframe src="https://challonge.com/fr/bfmeduo/module" width="100%" height="600" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
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
                                <img class="inline-block w-12" src="~assets/tournois/bfme.png" title="bfme" alt="bfme">
                            </div>
                        </div>
                        <div class="ml-4">
                            <h5 class="text-lg leading-6 text-gray-100 dark:text-white font-bold">
                                Jeux/Version
                            </h5>
                            <p class="mt-2 text-base leading-6 text-white dark:text-gray-300">
                                La Bataille pour la Terre du Milieu 1 / Patch 1.08
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
                               Un très beau choix
                            </h5>
                            <p class="mt-2 text-base leading-6 text-gray-300 dark:text-gray-300">
                             Presque toutes les maps 2v2 sont disponibles pour le tournoi.
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
                                - Host neutre<br/>
                                - BO3<br/>
                                - Première partie, l'host choisit la carte et tout le monde en aléatoire.<br/>
                                - Seconde partie, l'équipe gagnante choisit la carte et l'équipe perdante commence à choisir une faction puis l'équipe gagnante, et ainsi de suite (pas de faction en double) <br/>
                                - Troisième partie : même raisonnement mais en fonction du résultat de la seconde partie.
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
                              A débuté le 13 Janvier 2022.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 p-10">
            <NuxtImg
                src="img/tournoi_duo.png"
                class="relative mx-auto shadow-lg rounded w-auto"
                alt="La Bataille pour la Terre des Duo"
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
      title: "La Bataille pour la Terre des Duo",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Tournoi sur la Bataille pour la Terre du Milieu 1 (Patch 1.08)",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'elrohir, tournoi bfme, bfme, bfme1, la bataille pour la terre du milieu',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "La Bataille pour la Terre des Duo",
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Tournoi sur la Bataille pour la Terre du Milieu 1 (Patch 1.08)",
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
            'https://laguerredelanneau.vercel.app/img/tournoi_duo.png',
        },
        { hid: 'og:title', name: 'og:title', content: "L'Arène d'Arda ⚔️" },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'events.laterredumilieu.fr/tournois/tournoi_la_bataille_des_duo',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://laguerredelanneau.vercel.app/img/tournoi_duo.png',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            "Tournoi sur la Bataille pour la Terre du Milieu 1 (Patch 1.08)",
        },
      ],
    }
    }
}
</script>