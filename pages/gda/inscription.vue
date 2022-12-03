<template>
  <section class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src="https://cdn-longterm.mee6.xyz/plugins/reaction_roles/images/646686225737973770/9a7539ae39ada2acc4a0470d71fb62edd4e0968928a924fd2f0f26dafc2d74da.gif">
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bg p-4 rounded-2xl">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">INSCRIPTION pour la Guerre de l'Anneau 2023
          <br class="hidden lg:inline-block">Bien lire les règles avant de s'inscrire
        </h1>
        <p class="mb-8 leading-loose text-gray-300">Votre jeu doit fonctionner "voir prérequis" et avec une connexion stable pour jouer en multijoueur.</p>
        <p class="mb-8 leading-relaxed text-gray-200">Avoir discord et être sur le serveur discord de la Terre du Milieu</p>
        <div class="flex justify-center">
          Disponible le 9 décembre dans la soirée.
          <!-- <a href="https://forms.gle/4ks9wa8th6zV44yR7" target="_blank" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{{ $t('inscription.formulaire') }}</a> -->
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
    </div>
    
  </div>
  </section>
  
</template>

<script>
export default {
  layout: "gda",
  
  head() {
    return {
      title: "Inscription: La Guerre de l'Anneau",
      meta: [
        {
          hid: "description",
          name: "description",
          content:"Page d'inscription pour l'évènement de la Guerre de l'Anneau !",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "GDA, Vidéos de la GDA, Homme, Elfe, Nain, Mordor, Isengard, Gobelin, Angmar",
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: "https://events.laterredumilieu.fr/gda/inscription"
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