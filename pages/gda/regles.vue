<template>
  <section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-col px-5 justify-center items-center">
    <!-- <img class="w-full mb-10 object-cover object-center rounded" alt="hero" src="~assets/gde/fond.webp"> -->
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <!-- <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{{ $t('regles.title') }}</h1> -->
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Règles</h1>
    </div>
      <div class="mt-8 w-full max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <!-- Disponible le 9 décembre en soirée. -->
    	<div class="videoWrapper mb-24">
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vSxbzIOXYw5K4Bu4YvbZ0elnpqYEt_JRd6zCAlT-ApLalVKB54Un4sE0DGildVtoa4HsMWHMed0wYl1/pub?embedded=true"></iframe>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
    layout: "gda",
    head() {
    return {
      title: "Règles GDA",
      meta: [
        {
          hid: "description",
          name: "description",
          content:"Page contenant les règles de la Guerre de l'Anneau !",
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
          href: "https://events.laterredumilieu.fr/gda/regles"
        }
      ],
    }
  }

}
</script>

<style scoped>

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>