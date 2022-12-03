<template>
    <div class="mt-8 bg-lotr container mx-auto rounded-3xl text-white">
    <h1 class="text-3xl sm:text-4xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">Annonce GDA 2023 💙</h1>
    <!-- <h2 class="text-3xl sm:text-4xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">Incroyable réalisation d'Eternal !</h2> -->

    <div class="videoWrapper m-8 z-0">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9sobkQ_17pE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">{{ $t('videos.angmar') }}</h3>
    <div class="videoWrapper m-8 z-0">
     <iframe src="https://drive.google.com/file/d/1Rq_INEqVf9sU6QOo22eoStnvmB-h83gW/preview" width="640" height="480" allow="autoplay"></iframe>
    </div>

        <h3 class="text-2xl sm:text-3xl  text-white p-8 antialiased sm:subpixel-antialiased md:antialiased text-center">Présentation d'une GDA par Elessar</h3>
    <div class="videoWrapper m-8 z-0">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/4cx3KqqCtPU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

        

    </div>
</template>

<script>
export default {
  layout: "gda",
  head() {
    return {
      title: "Vidéos de la GDA",
      description: "Evènement multijoueur se déroulant en Terre du Milieu ! 7 factions s'affrontent sur le jeu Bataille pour la Terre du Milieu 2 : l'Avènement du Roi Sorcier",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Evènement multijoueur se déroulant en Terre du Milieu ! 7 factions s'affrontent sur le jeu Bataille pour la Terre du Milieu 2 : l'Avènement du Roi Sorcier",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "GDA, Vidéos de la GDA, Homme, Elfe, Nain, Mordor, Isengard, Gobelin, Angmar",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Vidéos de la GDA",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Evènement multijoueur se déroulant en Terre du Milieu ! 7 factions s'affrontent sur le jeu Bataille pour la Terre du Milieu 2 : l'Avènement du Roi Sorcier",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@Elrohir_BFME",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://events.laterredumilieu.fr/gda/gdav3.png",
        },
        {
          hid: "image",
          property: "image",
          content: "https://events.laterredumilieu.fr/gda/gdav3.png",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Vidéos de la GDA",
        },
        { hid: "og:type", name: "og:type", content: "website" },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://events.laterredumilieu.fr/gda",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "https://events.laterredumilieu.fr/gda/gdav3.png",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Evènement multijoueur se déroulant en Terre du Milieu ! 7 factions s'affrontent sur le jeu Bataille pour la Terre du Milieu 2 : l'Avènement du Roi Sorcier",
        },
      ],
    };
  },
}
</script>

<style scoped>

.bg-lotr {
  background-color: #18191c;
}

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
