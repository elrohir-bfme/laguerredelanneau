<template>
<div class="container mx-auto text-center text-white text-4xl">
  <div v-if="error">
    {{ error }}
  </div>

  

  <form v-for="match in matchs" :key="match.id" id="form" v-on:submit="handleSubmit" v-else>
    <h3>Matchs</h3>
    <br>

    <label for="match">Match</label>
    <input class="text-gray-600" id="match" v-model="match.match" type="text" name="match">

    <label for="replay">Replay</label>
    <input class="text-gray-600" id="replay" v-model="modifiedData.actif" type="text" name="replay">
    <input
      type="checkbox"
      :value="match.actif"
      v-model="modifiedData.actif"
      name="categories"
      :id="match.id"
    />
    <input class="text-gray-600" type="submit" value="Submit">
  </form>

</div>
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
      console.log(e)

      try {
        await this.$strapi.$matchs.update("609bd6b43c84964c8474e116", this.modifiedData)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>