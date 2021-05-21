<template>
<div class="container mx-auto">
    <label class="text-gray-700" for="animals">
        Animals
        <select 
        v-model="selectedFaction"
        id="factions" 
        class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" 
        name="factions">
            <option v-for="faction in factions" :key="faction.name" v-bind="faction.name">
                {{faction.name}}
            </option>
        </select>
    </label>
</div>
</template>

<script>

import getFactions from '~/apollo/queries/faction/factions'
import getPlayers from '~/apollo/queries/player/players'

export default {
    data() {
      return {
        factions: [],
        players: [],
        selectedFaction: null,
      }
    },
    apollo: {
      factions: {
        query: getFactions
      },
      players: {
          query: getPlayers
      }
    },
}
</script>

<style>

</style>