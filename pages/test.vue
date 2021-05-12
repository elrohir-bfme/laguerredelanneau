<template>
  <div class="container">
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="faction in factions" :key="faction.id">
        {{ faction.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      factions: [],
      error: null
    }
  },
  async mounted () {
    try {
      this.factions = await this.$strapi.$factions.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script>