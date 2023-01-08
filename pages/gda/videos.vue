<template>

<div class="flex flex-wrap">
  <div
    v-for="(link, i) in videos"
    :key="i"
    class="lg:w-1/4 md:w-1/2 p-4 w-full"
  >
    <a
      :href="`https://www.youtube.com/watch?v=${link}`"
      target="_blank"
      class="block relative h-48"
    >
      <img
        alt="video"
        class="object-cover object-center w-full h-full block hover:border-blue-600 border-2 border-blue-200 rounded-2xl"
        :src="`https://i.ytimg.com/vi/${link}/sddefault.jpg`" 
      />
    </a>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        "4cx3KqqCtPU",
        "9sobkQ_17pE",
        "psWjKmhdv9g",
        "GK7HXx3EeQA",
        "kPqzKQuJTTk",
        "pcjg4mFOado",
        "OJot_GqhUU0",
        "xLAW9Zr8kMs",
        "LtUsinz48Ao",
        "iz48pzIo41Q",
        "5rbSZhEc7b8",
        "s9YbczL4NXg",
        "MTow5ZLX_-M",
      ]
    }
  },
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
