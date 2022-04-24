<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/3 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-700">Loup Garou en Terre du Milieu 🐺</h1>
        <div class="h-1 w-20 bg-purple-900 rounded"></div>
      </div>
      <p class="lg:w-2/3 w-full leading-relaxed text-purple-400 bg-purple-900 p-4 rounded-3xl">Bienvenue dans l’univers du seigneur des loups garou de la Terre du Milieu. Peut-être avez-vous été appelé par les forces du bien qui cherchent à repousser les ténèbres qui rongent la Terre du Milieu. Peut-être avez-vous été appelé par les ténèbres elles-mêmes, qui cherchent à détruire le monde.</p>
    </div>
    <div class="flex flex-wrap w-full mb-20">
      <p class="lg:w-3/4 w-full leading-relaxed text-purple-300 bg-purple-800 p-4 rounded-3xl">Venez incarner des personnages importants de la Terre du Milieu qui possède chacun un rôle unique basé sur le très célèbre jeu loup garou de Thiercelieu et de toutes ses déclinaisons. 40 rôles différents vous attendent dans votre aventure entre amis. Chacun incarné par un personnage célèbre du Seigneur des Anneaux, qui continuent leur combat même dans un simple jeu de société d’ambiance.</p>
      <div class="lg:w-1/4 w-full mb-6 lg:mb-0 text-right">
        <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-800 underline">Présentation</h2>
      </div>
    </div>
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/3 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-800">Voici le contexte de votre périple :</h1>
        <div class="h-1 w-40 bg-purple-900 rounded"></div>
      </div>
      <p class="lg:w-2/3 w-full leading-relaxed text-purple-400 bg-purple-900 p-4 rounded-3xl">Dans la ville de Bree, au Poney Fringants de nombreuses figures emblématiques de la Terre du milieu, se donnent rendez-vous pour débattre au sujet du mal prolifèrent dans tous les royaumes elfes, nains et hommes. Mais la rumeur court que Sauron soit au courant de cette assemblée et que ses serviteurs soient déjà infiltrés parmi les gens se trouvant en ville. Le bien traque alors les infiltrés alors que les créatures liées à l'unique et tout autre monstruosités cherchent à bouleverser et détruire la bienveillante communauté. Et c’est à vous d’écrire cette histoire avec vos amis.</p>
    </div>
    <div class="flex flex-wrap w-full mb-20">
      <p class="lg:w-2/3 w-full leading-relaxed text-purple-400 bg-purple-900 p-4 rounded-3xl">Tous les joueurs recevront une carte/image d’un personnage de la Terre du Milieu qui lui indiquera dans quel camp il sera dans la partie et quelle(s) action(s) pourra-t-il mener. Vous serez le seul à connaître votre identité, vous ne saurez pas qui est dans votre camp, et donc en qui vous pouvez avoir confiance. Il existe 2 camps différents et opposé qui ont chacun un objectif commun à tous les membres et un 3e camp composé de membres pouvant avoir un but différent :</p>
      <div class="lg:w-1/3 w-full mb-6 lg:mb-0 text-right">
        <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-700 underline">Voici les règles du jeu :</h2>
      </div>
    </div>


    <div class="flex flex-wrap mb-4 -p-4 bg-gray-900 rounded-3xl">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-28 h-28 mb-8 object-cover object-center rounded-full inline-block" src="~/assets/loup-garou/bien.jpg">
          <p class="leading-relaxed text-indigo-400">Leur but est de trouver, démasquer  et bannir les Nazguls et d'éventuelles menaces extérieures cachés dans le village afin de triompher du Mal. Étant infiltrés par les Nazguls, les membres du Village ne savent plus qui fait parti de ce dernier ou non, ils sont donc totalement au dépourvu et devront réussir à se faire confiance et à trouver les intrus.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-indigo-600 uppercase font-medium title-font tracking-wider text-2xl">Le camp du Bien (Village)</h2>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-28 h-28 mb-8 object-cover object-center rounded-full inline-block" src="~/assets/loup-garou/mal.jpg">
          <p class="leading-relaxed text-indigo-400">Leur objectif est clair, tuer tous les membres du village afin d’entendre les ombres et les ténèbres sur la Terre du milieu. Ils devront se cacher parmi les innocents et les mener sur de fausses pistes afin de ne pas se faire bannir. Tous les membres se connaissent.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-indigo-600 uppercase font-medium title-font tracking-wider text-2xl">Le camp du Mal</h2>
        </div>
      </div>
      <div class="lg:w-1/3 lg:mb-0 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-28 h-28 mb-8 object-cover object-center rounded-full inline-block" src="~/assets/loup-garou/neutre.jpg">
          <p class="leading-relaxed text-indigo-400">Ceux-ci sont différents des autres, ils ne partagent pas l’envi et le même but que les 2 autres camps. Chacun de ces personnages possède un objectif qu’eux seuls peuvent et doivent accomplir. Parfois ils s’allieront aux autres camps afin de survivre et d’atteindre leur but, d'autres souhaiteront seulement le malheur de tous et seront donc un ennemi commun aux camps du Bien et du Mal.</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-indigo-600 uppercase font-medium title-font tracking-wider text-2xl">Les Solitaires</h2>
        </div>
      </div>
    </div>



    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-500 text-center underline my-4">Liste des cartes</h1>
    <div v-if="loading" class="flex flex-wrap m-4">
      <div v-for="carte in cartes.data" v-bind:key="carte.id" class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-900 hover:bg-gray-800 p-6 rounded-lg group">
            <img class="rounded w-full h-full mb-6" :src="`https://api.laterredumilieu.fr${carte.attributes.img.data.attributes.url}`" :alt="carte.attributes.title">
            <div class="flex mb-4">
                <span class="flex items-center">
                    <span class="tracking-widest text-indigo-500 group-hover:text-red-600 text-3xs font-medium title-font">{{carte.attributes.title}}</span>
                </span>
                <div class="flex ml-3 pl-3 py-1 border-l-2 border-indigo-900">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-500 text-gray-900 text-xs font-medium tracking-widest">
                        {{carte.attributes.category === "neutral" ? "Neutre" : carte.attributes.category === "good" ? "Bien" : "Mal"}}
                    </span>
                </div>
            </div>
            <p class="leading-relaxed text-base text-gray-400 border-b-2 border-purple-900 pb-2">{{carte.attributes.description}}</p>
            <p class="text-xm leading-snug text-gray-100 pt-2">{{carte.attributes.power}}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
    layout: "loup-garou",
    data() {
        return {
            loading: false,
            cartes: []
        }
    },
    async asyncData({ $strapi }) {
        let loading = false;
        let cartes = await $strapi.find('loup-garous', { populate: '*'})
        loading = true;
        return { cartes, loading }
    },
    head() {
      return {
        title: "Loup Garou en Terre du Milieu 🐺",
        meta: [
          {
            hid: "description",
            name: "description",
            content:
              "Bienvenue dans l’univers du seigneur des loups garou de la Terre du Milieu. Peut-être avez-vous été appelé par les forces du bien qui cherchent à repousser les ténèbres qui rongent la Terre du Milieu. Peut-être avez-vous été appelé par les ténèbres elles-mêmes, qui cherchent à détruire le monde.",
          },
          {
            hid: "keywords",
            name: "keywords",
            content:
              "Loup Garou lotr, Elrohir, Loup Garou",
          },
          {
            hid: "twitter:card",
            name: "twitter:card",
            content: "summary_large_image",
          },
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: "Loup Garou en Terre du Milieu 🐺",
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content:
              "Bienvenue dans l’univers du seigneur des loups garou de la Terre du Milieu. Peut-être avez-vous été appelé par les forces du bien qui cherchent à repousser les ténèbres qui rongent la Terre du Milieu. Peut-être avez-vous été appelé par les ténèbres elles-mêmes, qui cherchent à détruire le monde.",
          },
          {
            hid: "twitter:creator",
            name: "twitter:creator",
            content: "@Elrohir_BFME",
          },
          {
            hid: "twitter:image",
            name: "twitter:image",
            content: "https://events.laterredumilieu.fr/loupgarouenterredumilieu.jpg",
          },
          {
            hid: "image",
            property: "image",
            content: "https://events.laterredumilieu.fr/img/loupgarouenterredumilieu.jpg",
          },
          {
            hid: "og:title",
            name: "og:title",
            content: "La Guerre de l'Anneau ⛰️",
          },
          { hid: "og:type", name: "og:type", content: "website" },
          {
            hid: "og:url",
            name: "og:url",
            content: "https://events.laterredumilieu.fr/loup-garou",
          },
          {
            hid: "og:image",
            name: "og:image",
            content: "https://events.laterredumilieu.fr/img/loupgarouenterredumilieu.jpg",
          },
          {
            hid: "og:description",
            name: "og:description",
            content:
              "Bienvenue dans l’univers du seigneur des loups garou de la Terre du Milieu. Peut-être avez-vous été appelé par les forces du bien qui cherchent à repousser les ténèbres qui rongent la Terre du Milieu. Peut-être avez-vous été appelé par les ténèbres elles-mêmes, qui cherchent à détruire le monde.",
          },
        ],
      };
    },
}
</script>

<style>

</style>