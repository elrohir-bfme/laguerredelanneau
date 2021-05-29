<template>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4" v-if="!loading">
    <div v-for="clan in clans" :key="clan.id">
      <div class="shadow-lg rounded-2xl w-80 p-4  dark:bg-gray-800">
          <div class="flex flex-row items-start gap-4">
              <img src="~assets/wars/carre.png" class="w-48 h-48 rounded-lg">
              <div class="h-48 w-full flex flex-col justify-between">
                  <div>
                      <p class="text-gray-800 text-xl ttw font-medium">
                          {{clan.name}}
                      </p>
                      <p class="text-gray-400 text-xs">
                          chef de clan 
                      </p>
                  </div>
                  <div class="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
                      <div class="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                          <p class="flex flex-col">
                              Victoire
                              <span class="text-black dark:text-indigo-500 font-bold">
                                  {{ clan.win}}
                              </span>
                          </p>
                          <p class="flex flex-col">
                              Défaite
                              <span class="text-black dark:text-indigo-500 font-bold">
                                  {{ clan.lose}}
                              </span>
                          </p>
                          <p class="flex flex-col">
                              Rating
                              <span class="text-black dark:text-indigo-500 font-bold">
                                  9.3
                              </span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
</div>


</template>

<script>
export default {
  layout: "wars",
  data() {
    return {
      loading: false,
      clans: []
    }
  },
  async fetch() {
      this.loading = true;
      this.clans =  await this.$strapi.$clans.find()
      this.loading = false;
    }
}
</script>

<style>

</style>