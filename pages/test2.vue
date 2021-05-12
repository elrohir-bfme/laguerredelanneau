<template>
<section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
  
  <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

  <div v-if="error">
    {{ error }}
  </div>
        
        <form v-else>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="username">Username</label>
                    <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                    <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
                    <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                </div>

                  <div>
                    <label class="text-gray-400 font-medium" for="password">Pink</label>
                    <input type="checkbox" name="toggle" id="Pink" class="checked:bg-pink-500 outline-none focus:outline-none checked:right-0 duration-200 ease-in block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                  </div>  
            </div>

            <div class="flex justify-end mt-6">
                <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
    </section>

  <!-- <form id="form" v-on:submit="handleSubmit" v-else>
    <h3>Matchs</h3>
    <br>

    <label for="match">Match</label>
    <input class="text-gray-600" id="match" v-model="modifiedData.match" type="text" name="match">

    <label for="replay">Replay</label>
    <input class="text-gray-600" id="replay" v-model="modifiedData.replay" type="text" name="replay">
    <div>
      <br />
      <b>Select categories</b>
      <br>
      <div v-for="match in matchs" :key="match.id">
        <label>{{ match.name }}</label>
        <input
          type="checkbox"
          :value="match.actif"
          v-model="modifiedData.actif"
          name="categories"
          :id="match.id"
        />
      </div>
    </div>
    <br>

    <input class="text-gray-600" type="submit" value="Submit">
  </form>

</div> -->
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      matchs: [],
      modifiedData: {
        match: '',
        replay: '',
        actif: '',
      },
      error: null
    }
  },
  async mounted() {
    try {
      this.matchs = await this.$strapi.$matchs.find()
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    handleSubmit: async function(e) {
      e.preventDefault();

      try {
        await this.$strapi.$matchs.create(this.modifiedData)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>