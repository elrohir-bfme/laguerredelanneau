<template>
<div>
  <div class="bg-gray-900 dark:bg-gray-800 ">
    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-gray-200 dark:text-white sm:text-4xl">
            <span class="block">
              Tournoi PMR au bord de la plage
            </span>
            <span class="block text-xl text-orange-500 mt-4 mb-4">
                Organisé par qDR avec l'aide de Gimli fils de Gloin  et peut-être d'Elrohir si les cocktails ne lui rappellent pas trop son jacuzzi
            </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0 mb-4">
            <div class="mt-12 inline-flex rounded-md shadow">
                <a href="https://laterredumilieu.fr/Discord" type="button" class="py-4 px-6  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Inscription sur le Discord
                </a>
            </div>
        </div>

        <!-- <iframe src="https://challonge.com/fr/hc44n5v5/module" width="100%" height="600" frameborder="0" scrolling="auto" allowtransparency="true"></iframe> -->
    </div>
</div>

<div class="relative bg-gray-900 p-4">
    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div class="lg:col-start-2 md:pl-20">
            <h4 class="text-2xl leading-8 font-extrabold text-white dark:text-white tracking-tight sm:leading-9">
                informations sur le Discord
            </h4>
            <br/>
            <p class="text-white leading-8 text-xl">
              Hein ? Quoi ? Encore pour les débutants ?<br/>
              Et non, on parle ici d’un tournoi avec Paires Mixées de manière Randomisée !<br/>
              Oui c’est nul comme blague mais tu veux faire quoi avec des initiales comme BFME ou ROTWK ?<br/>
              Parler de LOTRie nationale ? (blague supplémentaire fournie gratuitement)<br/><br/>

              Suite à vos retours, on repart donc sur un tournoi 2v2, mais cette fois ci avec un nouveau concept !<br/>
              Comme c’est encore un peu l’été, on part sur un thème cocktails au bord de la plage, et on va “shaker” tout ça !<br/><br/>

              Format :<br/><br/>
              - 2v2<br/>
              - “Arbre” à double élimination où les joueurs passent d'un shaker à l'autre 🍹<br/>
              - Changement de partenaire à chaque tour<br/>
              - aléatoire "contrôlé" où on évite que les plus forts/faibles soient dans les mêmes paires<br/>
              - des explications plus précises seront fournies plus tard aux inscrits<br/>
              - BO1 pour chaque match sauf la finale en BO3<br/><br/>

              Règles :<br/><br/>
              - Faction aléatoire (à tous les tours et à chaque game)<br/>
              - Ressources de départ : 1000<br/>
              - Anneau et héros custom désactivés<br/>
              - Host neutre obligatoire (sauf accord des deux équipes)<br/><br/>

              Map pool : <br/>
              (Map tirée au sort par l'host neutre pour chaque game ; cliquez ici pour aller vers la roue permettant de faire le tirage)<br/><br/>

              - Anorien<br/>
              - Anorien II<br/>
              - Colline de la tour<br/>
              - Estemnet<br/>
              - Eregion II<br/>
              - Forêt de Firien<br/>
              - Gués du Rohan<br/>
              - Harad<br/>
              - Hobbitebourg<br/>
              - L'Extrême Harad<br/>
              - Mont Venteux<br/>
              - Nan Marillion<br/>
              - Ost-in-Edhil<br/>
              - Ouestmarch<br/>
              - Pays de Bouc<br/>
            </p>
        </div>
        <div class="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 p-10">
            <NuxtImg
              src="tournois/tournoi_pmr.jpeg"
              class="relative mx-auto shadow-lg rounded w-auto"
              alt="Tournoi PMR au bord de la plage"
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
      title: "PMR au bord de la plage",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Organisé par qDR avec l'aide de Gimli fils de Gloin  et peut-être d'Elrohir si les cocktails ne lui rappellent pas trop son jacuzzi",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'elrohir, tournoi aotr, age of the ring, aotr',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "PMR au bord de la plage",
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Organisé par qDR avec l'aide de Gimli fils de Gloin  et peut-être d'Elrohir si les cocktails ne lui rappellent pas trop son jacuzzi",
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
            'https://laguerredelanneau.vercel.app/tournois/tournoi_pmr.jpeg',
        },
        { hid: 'og:title', name: 'og:title', content: "PMR au bord de la plage" },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://laguerredelanneau.vercel.app/tournois/tournoi-pmr',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://laguerredelanneau.vercel.app/tournois/tournoi_pmr.jpeg',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            "Organisé par qDR avec l'aide de Gimli fils de Gloin  et peut-être d'Elrohir si les cocktails ne lui rappellent pas trop son jacuzzi",
        },
      ],
    }
    }
}
</script>