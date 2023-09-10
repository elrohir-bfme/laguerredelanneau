<template>
<div>
  <div class="bg-gray-900 dark:bg-gray-800 ">
    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-gray-200 dark:text-white sm:text-4xl">
            <span class="block">
                Le Réveil des Héros
            </span>
            <span class="block text-xl text-orange-500 mt-4 mb-4">
                Organisé par Elrohir sur le discord de la Terre du Milieu
            </span>
        </h2>
        <div class="lg:mt-0 lg:flex-shrink-0 mb-4">
            <div class="mt-12 inline-flex rounded-md shadow">
                <a href="https://laterredumilieu.fr/Discord" type="button" class="py-4 px-6  bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Suivre la progression sur le Discord
                </a>
            </div>
        </div>

        <iframe src="https://challonge.com/fr/hc44n5v5/module" width="100%" height="600" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
    </div>
</div>

<div class="relative bg-gray-900 p-4">
    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div class="lg:col-start-2 md:pl-20">
            <h4 class="text-2xl leading-8 font-extrabold text-white dark:text-white tracking-tight sm:leading-9">
                informations sur le Discord
            </h4>
        </div>
        <div class="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 p-10">
            <NuxtImg
              src="tournois/tournoi-aotr-reveil-heros.jpg"
              class="relative mx-auto shadow-lg rounded w-auto"
              alt="Le Réveil des Héros"
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
      title: "Le Réveil des Héros",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Organisé par Elrohir sur le discord de la Terre du Milieu",
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
          content: "Le Réveil des Héros",
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Organisé par Elrohir sur le discord de la Terre du Milieu",
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
            'https://laguerredelanneau.vercel.app/tournois/tournoi-aotr-reveil-heros.png',
        },
        { hid: 'og:title', name: 'og:title', content: "Le Réveil des Héros" },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://laguerredelanneau.vercel.app/tournois/tournoi-aotr-reveil-heros',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://laguerredelanneau.vercel.app/tournois/tournoi-aotr-reveil-heros.png',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            "Organisé par Elrohir sur le discord de la Terre du Milieu",
        },
      ],
    }
    }
}
</script>