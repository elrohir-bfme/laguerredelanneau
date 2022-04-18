<template>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-700">Loup Garou en Terre du Milieu</h1>
        <div class="h-1 w-20 bg-purple-900 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-purple-500">Description d'un Loup Garou en Terre du Milieu</p>
    </div>
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-500">Liste des cartes</h1>
    <div v-if="loading" class="flex flex-wrap -m-4">
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
}
</script>

<style>

</style>