<template>
  <section class="text-yellow-200 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-10">
      <h1 class="font-medium title-font mb-4 text-green-200 text-8xl">Manuel de jeu</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-2xl">Présentation de la Campagne des Gobelins</p>

      <div class="mt-8 w-full max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
    	<div class="videoWrapper">
      <iframe src="https://drive.google.com/file/d/1cQOqsZjywrrRznjmFkllQA2Q4eRx9Cd2/preview"></iframe>

      </div>
    </div>
    </div>
    
  </div>

  <ModalCard v-if="isShowModal" @close="toggleModal" :data="data"/>
</section>
</template>

<script>
export default {
  layout: "gobelin",
    data() {
        return {
        loading: false,
        cards: [],
        isShowModal: false,
        data: []
        }
    },
    async fetch() {
      this.loading = false;
      this.cards =  await this.$strapi.find('cards')
      this.loading = true;
    },
    methods: {
      toggleModal(value) {
        this.data = value;
        this.isShowModal = !this.isShowModal;
      },
    },
    head() {
    return {
      title: "La Campagne des Gobelins",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "La Campagne des Gobelins est une nouvelle forme d’événement pour le STR BFME2, L'Avènement du Roi Sorcier. Basée sur des mécaniques empruntées à la fois aux jeux de plateau et aux jeux de cartes, la Campagne se veut un outil ludique permettant de modifier en profondeur le Gamplay des joueurs, et ainsi avoir l'impression de jouer à un tout nouveau jeu !",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Utharlok, La campagne des gobelins, gobelins",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "La Campagne des Gobelins",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "La Campagne des Gobelins est une nouvelle forme d’événement pour le STR BFME2, L'Avènement du Roi Sorcier. Basée sur des mécaniques empruntées à la fois aux jeux de plateau et aux jeux de cartes, la Campagne se veut un outil ludique permettant de modifier en profondeur le Gamplay des joueurs, et ainsi avoir l'impression de jouer à un tout nouveau jeu !",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@Elrohir_BFME",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://events.laterredumilieu.fr/img/CdG.jpg",
        },
        {
          hid: "image",
          property: "image",
          content: "https://events.laterredumilieu.fr/img/CdG.jpg",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "La Campagne des Gobelins",
        },
        { hid: "og:type", name: "og:type", content: "website" },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://events.laterredumilieu.fr/la-campagne-des-gobelins",
        },
        {
          hid: "og:image",
          name: "og:image",
          content: "https://events.laterredumilieu.fr/img/CdG.jpg",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "La Campagne des Gobelins est une nouvelle forme d’événement pour le STR BFME2, L'Avènement du Roi Sorcier. Basée sur des mécaniques empruntées à la fois aux jeux de plateau et aux jeux de cartes, la Campagne se veut un outil ludique permettant de modifier en profondeur le Gamplay des joueurs, et ainsi avoir l'impression de jouer à un tout nouveau jeu !",
        },
      ],
    };
  },
}
</script>
<style scoped>

h1, h2, ul {
  font-family: 'GIGI';
}

.yellow {
  color: "#efff96";
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