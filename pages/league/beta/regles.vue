<template>
  <section class="text-gray-200 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="text-center mb-10">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-orange-500 mb-4">Règles de la Ligue</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Cette ligue est un test pour le proposer ensuite à l'équipe de la 2.02 pour rendre la ligue international 🧙</p>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div v-for="(information, index) in informations" v-bind:key="index" class="p-2 sm:w-1/2 w-full">
        <div class="border-orange-500 bg-gray-900 rounded flex p-4 h-full items-center">
          <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione mr-4" preserveAspectRatio="xMidYMid meet"><path d="M59.5 15.5c0-2.6-2.2-6.2-6.5-6.9c-3.6-.6-7.1.6-8 3.5c-.4-3.9-3.9-5.2-8.1-5.1c-4.1.1-7.5 2-7.9 5.7c-1-2.2-3.7-2.9-6.8-2.9h-.1c-3.1.2-5.7 1.2-6.7 3.5c-.9-.5-2.2-.6-4.2.1c-2.4.8-6.6 4.4-8.4 11.9C1.4 31 3.3 39 3.3 39c-.2 3.6 2.6 6.6 6.1 6.8c2.7.1 5.1-1.3 6.3-3.5v1.2c.1 4 3.4 7.1 7.4 7h.1c3.2-.1 5.8-2.2 6.7-5c.7 3.9 4.1 6.8 8.1 6.7c4.4-.1 7.9-3.8 7.8-8.2c.6 3.6 3.8 6.3 7.5 6.2h.1c4.1-.1 8.5-4.1 8.5-8.2c.1 0-2.2-11.8-2.4-26.5" fill="#fed0ac"></path><path d="M61.8 43.5c-1.3 1.6-3.3 2.8-5.6 2.8h-.1c-.4 0-.8 0-1.2-.1c-.2 0-.4-.1-.6-.1c-2.6-.4-5.5-1.7-7.1-3.6c.4-2.3.4-4.6.4-6.9c0-2.5-.2-4.9-.3-7.3c-.1-2.4-.2-4.8-.1-7.3c-.5 1.1-.9 2.3-1.1 3.6c-.3 1.2-.4 2.5-.5 3.7c-.2 2.5-.2 4.9-.2 7.4c0 2.4.1 4.8 0 7.2c-.1 1.2-.1 3-.5 3.8c-.8 1.7-3.2 2.1-5.2 2.1c-3.5.1-7.2-2-8.7-5.1v-.1c.1-1.1.3-2.1.4-3.2c.2-2.1.4-4.3.4-6.5s-.1-4.4-.4-6.5c-.1-1.1-.3-2.2-.6-3.2c-.3-1.1-.6-2.1-1-3.1c-.1 1.1-.1 2.2-.1 3.3c0 1.1 0 2.1-.1 3.2c0 2.1-.1 4.3-.1 6.4c0 2.1 0 4.3.1 6.4c0 .9.1 3.5.2 4.7c-1.3 1.3-3 2.1-5 2.1h-.1c-3.3.1-6.7-2.6-7.8-5.7v-.3c.1-1.9.3-3.7.4-5.6c.1-1.9.1-3.8 0-5.7c-.2-.9-.3-1.9-.5-2.9c-.1-.5-.2-1-.4-1.4c-.1-.2-.2-.5-.3-.7c-.1-.2-.3-.4-.4-.6c.1.2.1.5.1.7v.7c0 .5 0 .9-.1 1.4c-.1.9-.2 1.9-.3 2.8c-.2 1.9-.4 3.7-.5 5.6c-.1 1.9-.1 3.8.1 5.7v.2c-1.2.8-2.6 1.1-4.2 1.1C.9 42.5 3 27.8 4.4 22c.2-.9.5-1.8.8-2.6c-.9 1.4-1.7 3.3-2.3 5.9c-1.4 5.7-2 20.5 6.6 20.5c2.5 0 4.7-1.1 6-3c.1.4.3 7.7 7.7 7.7h.1a7.4 7.4 0 0 0 5.6-2.9c-.1.5-.2 1.2-.3 2.1c-.5 5.4 3.8 8.1 6.5 7.2c7.2-2.6 13.2-2.9 17.9-2.7c3.2.1 5.3-2.1 5.7-5.8c1.6-1.4 2.8-3.1 3.1-4.9" fill="#e0a372"></path></svg>
          <span class="title-font font-medium">{{information}}</span>
        </div>
      </div>

      <div v-for="(rule, index) in rules" v-bind:key="index" class="p-2 sm:w-1/2 w-full">
        <div class="border-orange-500 bg-gray-900 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">{{rule}}</span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  layout: "leaguealpha",
  data() {
      return {
          informations: [
            "La Ligue est basée sur un système de point (Elo).",
            "BO5 pour affronter le premier",
            "BO3 pour les 2 à 10 premiers",
            "BO1 à partir de la 11e place",
            "Chaque Replay doit être déposé dans le Channel 🎁replay [LFA-Nom_gagnant_faction-Nom_perdant_faction] (Pour les BO pensez à mettre tous les replays)",
            "il faut annoncer son défi ici 🎌défis",
            "On peut seulement défier que deux personnes au-dessus de votre rang"
          ],
          rules: [
            "💰 Ressources de départ : 1000",
            "👥 Point de commandement : X1",
            "🦸 Héro personnalisé : Interdit",
            "💍 L'Anneau : Interdit",
            "🔎 Host neutre : Obligatoire sauf si les deux joueurs s'accordent entre eux (à demander ici 🔎recherche-joueurs  avec le tag @Host Neutre )",
            "🔃 En cas de problème veuillez contacter les gérants de la ligue"
          ]
      }
    },
}
</script>

<style>

</style>