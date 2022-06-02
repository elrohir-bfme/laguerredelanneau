<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="font-medium mb-4 text-green-200 text-8xl">Deck des tunnels</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-2xl text-yellow-200">Voici l'ensemble des cartes de la Campagne des Gobelins</p>
    </div>
    

  <v-select class="mb-12" multiple :options="options" @input="setSelected" />

    <div class="flex flex-wrap -m-4" v-if="loading">
      <div v-for="card in cards" v-bind:key="card.id" @click="toggleModal(card)" class="p-4 lg:w-1/4 md:w-1/2 transform transition duration-500 hover:scale-110 hover:drop-shadow-xl">
        <div class="h-full flex flex-col items-center text-center">
          <img :alt="card.attributes.card_title" class="flex-shrink-0 rounded-lg w-full h-full object-cover object-center mb-4" :src="`https://api.laterredumilieu.fr${card.attributes.card_img.data.attributes.url}`" >    
        </div>
      </div>
    </div>
  </div>

  <ModalCard v-if="isShowModal" @close="toggleModal" :data="data"/>

</section>
</template>

<script>
const qs = require('qs');
export default {
  layout: "gobelin",
    data() {
      return {
        loading: false,
        cards: [],
        isShowModal: false,
        data: [],
        cardsdefault: [],
        options: [
          'Artefact',
          'Trahison',
          'Invocation',
          'Quête',
          'Métamorphe',
          'Observation',
          'Duel'
        ]
      }
    },
    async asyncData({ $axios  }) {
      let loading = false;

      const query = qs.stringify({
        populate: '*',
        pagination: {
          page: 1,
          pageSize: 65,
        },
      }, {
        encodeValuesOnly: true,
      });

      const { data } = await $axios.$get(`https://api.laterredumilieu.fr/api/card-gobelines?${query}`); 
      console.log(data)

      let cards;
      let cardsdefault;
      cards = data
      cardsdefault = data
      loading = true;
      return { cards, loading, cardsdefault }
    },
    methods: {
      toggleModal(value) {
        this.data = value;
        this.isShowModal = !this.isShowModal;
      },
      setSelected(value)
      {
          console.log(value, "SET SELECTED")
          this.cards = this.cardsdefault.filter(c => c.attributes.card_category.includes(value));
      }
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
<style>

</style>