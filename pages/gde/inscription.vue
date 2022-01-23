<template>
  <section class="text-gray-600 body-font">
     <SocialHead
      title="Inscription: La Guerre de l'Eriador 🏔️"
      description="L'heure de l'affrontement pour le contrôle de l'Eriador est arrivé ! Que vous soyez novice, chevronné ou vétéran des guerres précédentes, l'heure est venue pour vous, guerriers, de retourner vous battre au nom de votre faction !"
      image="https://events.laterredumilieu.fr/gde.webp"
    />
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img class="object-cover object-center rounded" alt="hero" src="https://cdn-longterm.mee6.xyz/plugins/reaction_roles/images/646686225737973770/9a7539ae39ada2acc4a0470d71fb62edd4e0968928a924fd2f0f26dafc2d74da.gif">
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center bg p-4 rounded-2xl">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Inscription pour la Guerre de l'Eriador
          <br class="hidden lg:inline-block">LE DIMANCHE 23 JANVIER à 18H SUR DISCORD
        </h1>
        <p class="mb-8 leading-loose text-gray-300">
          La Guerre de l'Anneau a fait des ravages. Les factions du Bien comme celles du Mal se sont détruites pour le contrôle de la Terre du Milieu.
          Le Mordor est sorti victorieux, mais pour combien de temps ?
          Dans le Nord, les factions du Bien autrefois divisées se réunissent pour combattre. 
          Les Elfes accueillent les Nains réfugiés, mettant leurs différends de côté. Les valeureux Hommes du Rohan, accompagnés du restant des Gondoriens, retrouvent de grands seigneurs de l'ancien royaume de l'Arnor, bien décidés à reprendre leur dû.

          Les armées de Sauron se rassemblent de l'autre côté pour les écraser. 
          L'Isengard chasse les Hommes du Rohan rescapés tandis que l'Angmar tient tête aux seigneurs d'Arnor. Les Gobelins ont pris possession des Monts Brumeux, et le Mordor entend bien soutenir ses alliés.

          L'heure de l'affrontement pour le contrôle de l'Eriador est arrivé ! 

          Que vous soyez novice, chevronné ou vétéran des guerres précédentes, l'heure est venue pour vous, guerriers, de retourner vous battre au nom de votre faction !
        </p>
        <p class="mb-8 leading-relaxed text-gray-200">
          Les Valar sont heureux de vous annoncer que les inscriptions pour la Guerre de l'Eriador pour les FACTIONS (GDE) seront ouvertes du 24 au 30 janvier ! Pour obtenir la priorité dans le futur choix de votre faction, il vous est impératif de vous inscrire avant cette date, en sélectionnant sous le message du BOT ci-dessous dans quel CAMP vous souhaiteriez participer. Les places seront limitées à 15 au départ, ainsi le premier arrivé sera le premier servi ! 
          Bien entendu ce maximum de places augmentera une fois toutes les factions complètes ! 
        </p>
        <div class="flex justify-center">
          <a href="https://discord.gg/yJ3JF29Fhx" target="_blank" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Lien vers le channel d'inscription</a>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    <img class="w-full mb-10 object-cover object-center rounded" alt="hero" src="~assets/gde/fond.webp">
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Réagissez avec l'emote adéquate pour rejoindre l'un des deux camps pour le contrôle de l'Eriador !</h1>
      <p class="mb-8 leading-relaxed text-teal-500">Vous ne pourrez en changer que lorsque votre future faction sera éliminée, alors réfléchissez-y à deux fois avant de choisir !</p>
      <p class="mb-8 leading-relaxed text-teal-600">Il faut bien sûr aller sur le discord pour voter !</p>
    </div>
  </div>
  </section>
  
</template>

<script>
export default {
  layout: "gde",
  
  head() {
    return {
      title: "Inscription: La Guerre de l'Eriador 🏔️",
      meta: [
        {
          hid: "description",
          name: "description",
          content:"L'heure de l'affrontement pour le contrôle de l'Eriador est arrivé ! Que vous soyez novice, chevronné ou vétéran des guerres précédentes, l'heure est venue pour vous, guerriers, de retourner vous battre au nom de votre faction !",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "La Guerre de l'Eriador, GDE, Mordor, Elfe, Nain, Rohan, Gondor, Isengard, Gobelin, Angmar, Arnor, Rohan, bfme, bfme2, rotwk, elrohir",
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: "https://events.laterredumilieu.fr/gde/inscription"
        }
      ],
    }
  }
}

</script>

<style scoped>

.bg {
    background-color: #18191c;
}

</style>