<template>
<div class="container rounded-lg mx-auto w-full  lg:w-4/5 items-center px-4 m-4">
    <div class="w-full flex flex-col items-center justify-between">
        <h1 class="flex flex-col items-center font-extrabold text-3xl text-center md:text-6xl text-white">
            Bienvenue dans l'Arène d'Arda ⚔️
        </h1>
        <h2 class="flex flex-col max-w-lg text-center items-center font-extrabold text-lg mt-6 text-white">
            Créer votre maison de 6 à 10 guerriers et affrontez les autres maisons pour devenir le numéro 1 d'Arda
        </h2>

        <div class="lg:grid grid-flow-col grid-cols-3 place-items-center">
            <div class="col-span-2">
                <img class="mx-auto p-4 rounded-xl"  src="~assets/wars/arene_opti.jpg" alt="Event Arène d'Arda" title="Event Arène d'Arda">
            </div>
            <div>
                <a href="http://laterredumilieu.fr/Discord" class="mx-auto rounded-lg block bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-900  hover:from-indigo-900 hover:via-indigo-700  hover:to-indigo-600  py-3 px-4 text-lg text-white font-bold uppercase mt-10">
                    <img class="inline-block ml-4"  src="~assets/wars/icons/banner.png" alt="banner" title="banner">
                    Inscription sur le Discord
                </a>
            </div>
        </div>
    </div>
  <div class="bg-lightblue pt-4 px-4 text-white">
    <div class="mx-auto max-w-6xl flex flex-col md:flex-row">
        <h2 class="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9 underline">
            Vos questions
            <img class="inline-block ml-4"  src="~assets/wars/icons/palentir.png" alt="Palentir" title="Palentir">
        </h2>
        
        <dl class="w-full md:w-2/3 bg-gray-700 p-4 rounded-lg">
            <dt class="mb-4">
                <h3 class="text-xl font-semibold">
                  C'est quoi le concept ?
                <img class="inline-block ml-4"  src="~assets/wars/icons/sword.png" alt="épée" title="épée">
                </h3>
            </dt>
            <dd class="mb-16">
                <p>
                    Vous devrez faire combattre les joueurs de votre équipe dans plusieurs "sous-événements"  différents (minis tournois à systèmes variés, phase de poule, autre)  et remplir un quota de 1v1 et 2v2 auprès des équipes différentes chaque mois. Tout cela peut se jouer sur la 2.02 comme sur la 1.09, une version sera légèrement plus demandée qu'une autre en fonction des saisons. 
                </p>
            </dd>
            <dt class="mb-4">
                <h3 class="text-xl font-semibold">
                  Combien de temps dure une saison ? 
                <img class="inline-block ml-4"  src="~assets/wars/icons/galgal.png" alt="galgal" title="galgal">
                </h3>
            </dt>
            <dd class="mb-16">
                <p>
                    Une saison dure environ 3 mois.
                </p>
            </dd>
            <dt class="mb-4">
                <h3 class="text-xl font-semibold">
                   Qui peut s'inscrire ?
                <img class="inline-block ml-4"  src="~assets/wars/icons/head.png" alt="tete" title="tete">
                </h3>
            </dt>
            <dd class="mb-2">
                <p>
                    L'inscription est déconseillée pour tout débutant. Nous demandons une connaissance des bases et une micro-gestion potable pour les joueurs de niveau B, ils pourront tout autant influencer le score de leur équipe que leurs coéquipiers plus expérimentés. Une fois que vous êtes engagés pour une saison il vous est impossible d'arrêter au milieu de celle-ci (sauf sous contexte exceptionnel).
                </p>
            </dd>
        </dl>
    </div>
</div>
</div>
</template>

<script>
export default {
  layout: "wars",
  head() {
    return {
      title: "L'Arène d'Arda ⚔️",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Créer votre maison de 6 à 10 guerriers et affrontez les autres maisons pour devenir le numéro 1 d'Arda. Affrontement de clans au sein de la Terre du Milieu",
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'arene arda, bfme2, rotwk, elrohir',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "L'Arène d'Arda ⚔️",
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Créer votre maison de 6 à 10 guerriers et affrontez les autres maisons pour devenir le numéro 1 d'Arda. Affrontement de clans au sein de la Terre du Milieu",
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
            'https://laguerredelanneau.vercel.app/arena/bg.webp',
        },
        { hid: 'og:title', name: 'og:title', content: "L'Arène d'Arda ⚔️" },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://laguerredelanneau.vercel.app/arenedarda',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://laguerredelanneau.vercel.app/arena/bg.webp',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            "Créer votre maison de 6 à 10 guerriers et affrontez les autres maisons pour devenir le numéro 1 d'Arda. Affrontement de clans au sein de la Terre du Milieu",
        },
      ],
    }
    }
}
</script>

<style>

</style>