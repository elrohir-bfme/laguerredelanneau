<template>
    <div class="text-gray-800 antialiased">
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center bg-black"
        style="min-height: 65vh;"
      >
        <img class="absolute top-0 w-full h-full bg-center bg-contain opacity-40" src="~assets/gde/img/gde.png" alt="">
        <!-- <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://cdn.discordapp.com/attachments/859099613222010890/920675909034463242/gde_7.png");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div> -->
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Un évènement à grande échelle !
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  Combattez dans l'Eridaor pour le BIEN ou le MAL pour remporter la victoire !
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white hover:bg-gray-50 w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/img/cloudbrake.png" alt="">
                  <h6 class="text-xl font-semibold">9 Factions</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Ralliez-vous votre de choix : Angmar, Arnor, Elfe, Gobelin, Gondor, Isengard, Mordor, Nain, Rohan.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white hover:bg-gray-50 w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/img/blight.png" alt="">
                  <h6 class="text-xl font-semibold">Un déplacement par semaine !</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Le destin de l'Eriador est entre vos mains. Chaque semaine vous allez vous déplacez sur une carte interactive.
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white hover:bg-gray-50 w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/img/darkness.png" alt="">
                  <h6 class="text-xl font-semibold">64 régions</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Une Guerre entre le BIEN et le MAL. Un objectif commun mais aussi des objectifs pour chaque faction unique !
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap items-center mt-20">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Comment participer à cette aventure ?
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                La Guerre de l'Eriador est le nom de la région ouest de la Terre du Milieu, une zone importante mais aussi méconnu du grand public.
                Le principe de cette évènement reprend le mode de jeu : "La Guerre de l'Anneau".
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                Ce nouveau mode combine des éléments de tour par tour à la manière du jeu de plateau Risk, avec des escarmouches en temps réel. 
                La carte est divisée en territoires. 
                À chaque tour, le joueur peut se déplacer sur la carte. 
                Soit sur des territoires qu'il a acquis, soit déplacer ses armées dans des territoires neutres qui passent sous son contrôle, soit attaquer des territoires ennemis. 
                Dans ce dernier cas, l'issue de l'affrontement doit être joué lors d'une partie en temps réel. 
                Le vainqueur de la bataille gagne le territoire et le perdant doit réaparaitre dans sa cité principal. 
                Pour gagner le jeu, les joueurs doivent, soit contrôler le territoire principal de l'ennemi, soit dominer un nombre déterminé de territoires. 
                Les conditions de victoire sont encore en réflexion.
              </p>
              <div class="flex">
                <nuxt-link
                  to="/gde/inscription"
                  class="mx-auto hover:bg-orange-600 bg-orange-500 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-600 rounded text-4xl"
                  >Inscription !
                </nuxt-link>
              </div>

            </div>
            <div class="w-full md:w-6/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg colorB"
              >
                <img
                  alt="..."
                  src="~/assets/gde/img/gde_2.webp"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="textB fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Act 1 : Récit de la Guerre d’Eriador par Gwildor, serviteur de la Maison d’Elrond de Fondcombe.
                  </h4>
                  <p class="text-md font-light mt-2 text-white italic">
                    En l'an 3019 du Troisième  Age, depuis que le Soleil et la Lune se sont élevés dans le ciel, la Terre du Milieu est proche du point de basculement définitif. 
                    Après les terribles conflits survenus lors de la Guerre de l’Anneau, ce qui existait de bon et pur en cette terre s’apprête à être détruit pour toujours.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-5 relative block colorA pb-40">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="textA fill-current"
              points="2560,100 0,100 0,0"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold text-white">Act 2</h3>
                <p class="mt-4 text-lg leading-relaxed text-white italic">
                   En l’an 3018, les peuples de la Terre du Milieu se sont livrés une guerre sans merci pour la domination totale. Les Elfes se sont unifiés, les Nains sont sortis de leurs montagnes, le Gondor a préparé ses défenses, le Rohan avait réuni ses cavaliers, l’Isengard s’était éveillé, les Gobelins infestaient les montagnes, l’Angmar renaissait de ses cendres glaciales, et le Mordor était prêt à la guerre.
                </p>
              </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4 pt-8">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="~/assets/gde/img/gde_4.webp"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="pb-5 relative block colorD pb-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="textD fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg pt-10"
                src="~/assets/gde/img/gde_3.webp"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold text-white">Act 3</h3>
                <p class="mt-4 text-lg leading-relaxed text-white italic">
                   En Eriador, la guerre fut rapide contre Angmar, le souvenir douloureux de ses méfaits il y a plusieurs siècles ont poussé Elfes et Nains à s’unir pour détruire à nouveau Carn Dûm.  Mais au sud, ce fut le Gondor qui chuta le premier. Les Dunedains s'avérèrent trop faibles face à la violence et la férocité des armées du Mordor. Minas Tirith tomba rapidement et ce malgré l’intervention du Rohan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="pb-5 relative block bg-gray-900">
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">Les factions de la Guerre de l'Eriador</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Une nouvelle histoire est en préparation qui sera une suite du premier grand évènement qui fut la Guerre de l'Anneau.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-3/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/angmar.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                 Angmar
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Angmar, terme sindarin signifiant « maison de fer », a été fondé en l'an 1300 du Troisième Âge, dans les confins nordiques des Monts Brumeux. C'est un royaume dirigé par le Roi-sorcier d'Angmar, où règnent le froid et la cruauté.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/arnor.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Arnor
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Le Royaume d'Arnor (nom sindarin pour "Pays des Rois") est l'un des deux Royaumes en Exil des Dúnedain. À son apogée, il fut le plus évolué et puissant royaume de la Terre du milieu, il s'étendait sur la moitié nord de l'Eriador, entre les fleuves Lhûn à l'ouest et Bruinen à l'est. Sa capitale était Annúminas.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/elfe.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Elfe
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Les Elfes, aussi appelés Quendi en Quenya sont les aînés des Enfants d'Ilúvatar, les cadets étant les Hommes. Ce sont des êtres immortels : vieillesse et maladies n'ont presque aucun effet sur eux. Seule une blessure grave ou une profonde mélancolie peuvent séparer leur âme de leur corps.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/gobelin.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Gobelin
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Les Gobelins sont tout simplement des Orques vivant dans des cavernes. En fait, la différence entre les deux races est si minime que peu de choses les différencient ; les gobelins ne sont réellement que des Orques qui se sont adaptés à leur milieu. Ils sont en effet capables de se mouvoir sur des murs lisses ou des plafonds, notamment dans les grandes salles naines de la Moria.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/gondor.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Gondor
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Issu du sindarin signifiant « terre de pierre », le royaume de Gondor a été fondé depuis les Númenoréens et il est aujourd'hui peuplé par leurs descendants.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/isengard.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Isengard
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Situé à la pointe sud-est des Monts Brumeux, Isengard est connu pour sa tour noire indestructible : Orthanc. Un magicien, appâté par le pouvoir de l'Anneau Unique, y a élu résidence.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/mordor.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Mordor
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Le Mordor (  Sindarin  Pays noir/sombre ) est le royaume de Sauron dès le Deuxième Âge lorsque son maître Morgoth est vaincu. C'était une terre très peu fertile, semi-désertique à son arrivée, mais elle devint un véritable enfer quand il commença à y régner.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/nain.webp" alt="">
              <h5 class="text-xl mt-5 font-semibold text-white">
                Nain
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Fiers, loyaux, débrouillards et surtout poilus les Nains, ou Naugrim ou Khazad (Dwarves en anglais), sont une des races de la Terre du milieu douées de la parole. Ils se distinguent par leur petite taille, leurs talents de forgeron et de bâtisseur, leur grande endurance, leur barbe abondante.
              </p>
            </div>
            <div class="w-full lg:w-3/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/rohan.webp" alt="">
              <h5 class="text-xl mt-5 font-semibold text-white">
                Rohan
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Royaume des Rohirrim, le Rohan (  Sindarin  Pays du Cheval ) était une ancienne province du Gondor, le Calenardhon, qui fut offerte aux Éothéod par l'Intendant Cirion en 2510 T.A. en échange de l'aide qu'ils apportèrent au Gondor dans la guerre contre les Balchoth, en particulier lors de la Bataille des Champs du Celebrant, et du Serment d'Eorl. Il s'étend de la trouée du Rohan à l'Anórien et est encadré par les Montagnes Blanches et les Monts Brumeux.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="relative bg-gray-300 pt-8 pb-6">
      <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 80px;"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl font-semibold">Restons en contact !</h4>
            <h5 class="text-lg mt-0 mb-2 text-gray-700">
              Toutes les informations pour suivre l'évènement
            </h5>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span
                  class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                  >La Guerre de l'Eriador</span
                >
                <ul class="list-unstyled">
                  <li>
                    <nuxt-link
                      class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      to="/gde/">
                      Carte interactive
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      to="/gde/inscription">
                      Inscription
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span
                  class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                  >Suivres les informations</span
                >
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://laterredumilieu.fr/Discord"
                      >Discord</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://twitter.com/Elrohir_BFME"
                      >Twitter</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy"
                      >Instagram</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.youtube.com/channel/UC3v6035rOvbIdX23SnrdyNw"
                      >Youtube</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.twitch.tv/elrohir_bfme"
                      >Twitch</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-400" />
        <div
          class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-gray-600 font-semibold py-1">
              Elrohir - La Terre du Milieu
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  layout: "gde",
  
  head() {
    return {
      title: "Présentation",
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
          href: "https://events.laterredumilieu.fr/gde/presentation"
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

.colorA {
  background-color: #242B35;
}

.colorB {
  background-color: #C8AF74;
}

.colorC {
  background-color: #6885AD;
}

.colorD {
  background-color: #899FBB;
}

.textA {
  color: #242B35;
}

.textB {
  color: #C8AF74;
}

.textC {
  color: #6885AD;
}

.textD {
  color: #899FBB;
}


</style>