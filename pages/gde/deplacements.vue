<template>
  <div>
    <h1 class="text-center my-5 text-white">Bienvenue {{ $strapi.user.username}}</h1>
    <h2 class="text-center my-5 text-white">{{ $strapi.user.email}}</h2>
    <div
      v-show="error !== ''"
      class="sticky z-100 border p-5 m-3 top-0 bg-black text-white text-center mx-auto w-4/5 sm:w-4/5 md:w-4/5 lg:w-1/2"
    >
      <p class="m-1 sm:m-3">{{ error }}</p>
      <button class="button--grey" @click="resetError()">Ok</button>
    </div>

    <div v-if="data && data.length > 0" class="container mx-auto px-4 sm:px-8 max-w-3xl">
    <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                User
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Role
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                Created at
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                status
                            </th>
                            <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(player, i) in data" :key="i">
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <a href="#" class="block relative">
                                            <img v-if="player.img" alt="profil" :src="`https://api.laterredumilieu.fr${player.img.url}`" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                    </div>
                                    <div class="ml-3">
                                        <p v-if="player.name" class="text-gray-900 whitespace-no-wrap">
                                            {{player.name}}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p v-if="player.faction"  class="text-gray-900 whitespace-no-wrap">
                                    {{player.faction.name}}
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p v-if="player.win" class="text-gray-900 whitespace-no-wrap">
                                    {{player.win}}
                                </p>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <span v-if="player.region" class="relative">
                                        {{player.region.name}}
                                    </span>
                                </span>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <select class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                                      <option v-for="region in regions" :key="region.id" :value="region.name">
                                          {{region.name}}
                                      </option>
                                  </select>
                                </span>
                            </td>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Valider
                              </button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

    <!-- <div
      v-for="(article, i) in data"
      :key="i"
      class="sm:flex sm:space-x-5 my-5 shadow-lg mx-auto w-4/5 sm:w-4/5 md:w-4/5 lg:w-1/2"
    >
      <img
        :src="`http://localhost:1337${article.image.url}`"
        class="max-h-screen sm:h-48"
      />
      <div class="px-2 sm:pr-2 sm:text-left text-center">
        <h3 class="font-bold my-3">{{ article.Title }}</h3>
        <p class="my-3">{{ article.description }}</p>
        <button class="button--green mb-4 sm:mb-0" @click="readPost(article)">
          Read more
        </button>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  layout: "gde",
  async asyncData({ $strapi }) {
    console.log($strapi.user)
    const faction = await $strapi.find('factions', { id: $strapi.user.faction })
    const data = await $strapi.find('players', { faction: $strapi.user.faction })
    const regions = await $strapi.find('regions')
    return { data, faction, regions }
  },
  data() {
    return {
      error: '',
    }
  },
  methods: {
    readPost(article) {
      if (this.$strapi.user) {
        this.error = ''
        // await this.$strapi.update('products', 1, { title: '' })
        // this.$nuxt.$router.push(`/article/${article.id}`)
      } else {
        this.error = 'Please Login to read articles'
      }
    },
    resetError() {
      this.error = ''
    },
  },
}
</script>
<style></style>