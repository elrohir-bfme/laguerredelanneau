<template>
  <section class="text-gray-600 body-font">
     <SocialHead
      title="Inscription: La Guerre de l'Eriador 🏔️"
      description="L'heure de l'affrontement pour le contrôle de l'Eriador est arrivé ! Que vous soyez novice, chevronné ou vétéran des guerres précédentes, l'heure est venue pour vous, guerriers, de retourner vous battre au nom de votre faction !"
      image="https://events.laterredumilieu.fr/gde.webp"
    />
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src="https://cdn-longterm.mee6.xyz/plugins/reaction_roles/images/646686225737973770/9a7539ae39ada2acc4a0470d71fb62edd4e0968928a924fd2f0f26dafc2d74da.gif">
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bg p-4 rounded-2xl">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{{ $t('inscription.title') }}
          <br class="hidden lg:inline-block">{{ $t('inscription.info') }}
        </h1>
        <p class="mb-8 leading-loose text-gray-300">{{ $t('inscription.description') }}</p>
        <p class="mb-8 leading-relaxed text-gray-200">{{ $t('inscription.attention') }}</p>
        <div class="flex justify-center">
          <a href="https://forms.gle/4ks9wa8th6zV44yR7" target="_blank" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{{ $t('inscription.formulaire') }}</a>
        </div>
      </div>
    </div>
    
    <div class="container mx-auto flex flex-col px-5 py-4 justify-center items-center">
      <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{{ $t('inscription.prerequis') }}</h1>
      <p class="mb-8 leading-relaxed text-teal-500">{{ $t('inscription.need') }}</p>
       <a href="https://www.laterredumilieu.fr/tuto/bfme2" target="_blank" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{{ $t('inscription.tutoBFME') }}</a>
       <br><br>
       <a href="https://www.laterredumilieu.fr/tuto/rotwk" target="_blank" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{{ $t('inscription.tutoROTWK') }}</a>
      <p class="mb-8 leading-relaxed text-teal-600">{{ $t('inscription.gdn') }}</p>
       <a href="https://www.laterredumilieu.fr/mods/lesguerresdunord" target="_blank" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{{ $t('inscription.tutoGDN') }}</a>
    </div>
    <img class="w-full mb-10 object-cover object-center rounded" alt="hero" src="~assets/gde/fond.webp">
    
  </div>
  </section>
  
</template>

<script>
export default {
  layout: "gde",
  
  head() {
    return {
      title: "Inscription: La Guerre de l'Eriador 🏔️",
      meta: [
        {
          hid: "description",
          name: "description",
          content:"L'heure de l'affrontement pour le contrôle de l'Eriador est arrivé ! Que vous soyez novice, chevronné ou vétéran des guerres précédentes, l'heure est venue pour vous, guerriers, de retourner vous battre au nom de votre faction !",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "La Guerre de l'Eriador, GDE, Mordor, Elfe, Nain, Rohan, Gondor, Isengard, Gobelin, Angmar, Arnor, Rohan, bfme, bfme2, rotwk, elrohir",
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: "https://events.laterredumilieu.fr/gde/inscription"
        }
      ],
    }
  }
}

</script>

<style scoped>

.bg {
    background-color: #18191c;
}

</style>