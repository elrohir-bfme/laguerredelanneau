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
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-700"
              >
                <img
                  alt="..."
                  src="~/assets/gde/gildor.png"
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
                      class="text-green-700 fill-current"
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
      <section class="relative block colorA pb-40">
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
                src="~/assets/gde/gda.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="relative block colorD pb-20">
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
                src="~/assets/gde/tour9.png"
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


            <section class="relative block colorA pb-40">
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
                <h3 class="text-3xl font-semibold text-white">Act 4</h3>
                <p class="mt-4 text-lg leading-relaxed text-white italic">
                   Puis ce fut la chute de Dol Amroth qui scella le destin du royaume numénoréen en exil. Dans le même temps, le Rohan prit la forteresse d’Isengard, mais la Main Blanche résista longtemps en Eriador et dans la Forêt Noire depuis Dol Guldur avant de s’effondrer. Les Gobelins se sont alliés aux forces du Bien dans l’espoir d’être épargnés et sortirent rarement de la Moria. Les Nains tentèrent plusieurs assauts contre le Mordor sans jamais parvenir à Barad-dûr. Ce fut d’ailleurs le peuple de Durin qui chuta suite au changement d’alliance de notre peuple. Les attaques conjointes du Mordor et des Eldar ont poussé les Nains à disparaître dans les profondeurs des montagnes du nord. 
                </p>
              </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4 pt-8">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="~/assets/gde/tour17.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="relative block bg-gray-600 pb-20">
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
              class="bg-gray-600 fill-current"
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
                src="~/assets/gde/tour33.png"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold text-white">Act 5</h3>
                <p class="mt-4 text-lg leading-relaxed text-white italic">
                   Avec la disparition des Nains, les Gobelins se retrouvaient sans alliés pouvant soutenir leurs défenses, le Rohan étant aux prises entre les Elfes et le Mordor. Nous avons réussi à ouvrir les portes ouest de la Moria et à en déloger les Gobelins qui ont à leur tour disparu sans laisser des traces. Les cavaliers rohirrims ont résisté sans relâche pendant un bon moment avant d’être dispersés après la chute du Gouffre de Helm. Dès lors, il ne restait que notre peuple et les serviteurs du Sombre Ennemi. Avec nos possessions sur tout l’ouest, nous pensions que les Valar étaient avec nous dans cette lutte finale contre l’Ennemi. Mais le destin nous fut une fois de plus cruel avec notre défaite à Minhiriath qui nous obligea à nous replier plus loin en Eriador, mais où l’Ennemi a également accusé beaucoup de pertes dans sa propre armée et fut obligé à se retirer à l’est des Monts Brumeux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section class="relative block colorC pt-20 pb-5">
      <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <p class="leading-relaxed text-lg text-white text-left">C’est donc en cette année 3019 de notre Age, que doit se décider le destin de bien des êtres en Terre du Milieu. Nul ne pourra y échapper, nous devrons vaincre ou être vaincu. Après notre défaite en Minhiriath, nous avons fait route vers Mithlond afin de nous regrouper et de décider de la marche à suivre, mais nous savons désormais que nous ne pourrons vaincre les ténèbres seuls. Au nord, les nains sont réapparus dans les Halls de Thorin, reconstituant leurs forces défenses. Après des délibérations entre nos peuples, il fut convenu d’une nouvelle alliance, contre l’Ennemi. Dans le reste de l’Eriador, les Hommes se sont rassemblés en différents endroits. Dans le Cardolan, les rohirrims, exilés de leurs terres, se sont rassemblés près de la tour fortifiée de Dol Tinereb afin de préparer une contre offensive. Plus au nord, les Dunedains du Gondor ayant fui les destructions à Minas Tirith et de Dol Amroth se sont réfugiés dans les ruines de Fornost, l’ancienne capitale d’Arthedain. Les afflux de réfugiés ont poussé les Dunedains du Nord à se rassembler et à reconstruire leurs anciens foyers à Annuminas et Fornost. L’ancien royaume d’Arnor fondé par Elendil, renaît de nouveau pour contrer une nouvelle fois la menace du Mordor. Si les arnoriens ont repris leur capitale à Annuminas, ils ont confié au reste du Gondor la gestion de Fornost. Tous ont décidé de rejoindre la coalition afin de repousser les prochaines vagues du Mal qui déferleront sur cette terre.</p>
      <span class="inline-block h-1 w-40 rounded bg-yellow-500 mt-8 mb-6 text-center"></span>
      </div>
    </section>

    <section class="relative block colorA pb-15 pt-10">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <img
        alt="La Guerre de l'Eriador"
        class="max-w-full shadow-lg py-10"
        src="~/assets/gde/commencement.png"
      />
      <p class="leading-relaxed text-lg text-white text-left">Car vers les Monts Brumeux, les forces de Sauron se rassemblent. Ses forces décimées à Minhiriath se sont reconstituées et ont établi un camp dans les montagnes. Les Gobelins que l'on pensait disparu, sont réapparu dans Gobelinville, et prêtent désormais allégeance au Seigneur des Ténèbres qui leur a promis vengeance contre les peuples les ayant trahis. Au nord, Angmar est de nouveau régénéré par le Roi-Sorcier qui entend mettre à bas les Dunedains une bonne fois pour toute. Au sud, Saroumane refait fonctionner les forges d’Isengard et prépare de nouvelles armées à la guerre, bien décidé d’en finir contre le Rohan afin de mettre une main blanche définitive sur ses terres.</p>
      <span class="inline-block h-1 w-20 rounded bg-orange-500 mt-8 mb-6"></span>
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
            <div class="w-full lg:w-4/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/angmar.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                 Angmar
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Terrassé après seulement quelques semaines de combats contre les Nains et les Elfes, Sauron renvoya son serviteur le plus fidèle, le Roi-Sorcier, afin de régénérer le royaume glacial d’Angmar. Après leur défaite, les numénoréens noirs se cachèrent dans les montagnes, craignant le courroux des Eldar. Les trolls et orques purent se réfugier dans les immensités du Forodwaith où nul ne serait venu les chercher. Comme par le passé, le Roi-Sorcier dû rassembler ses forces et rebâtir Carn Dûm. Les maîtres d’esclaves servent à nouveau la Couronne de Fer, les numénoréens jurent à nouveau fidélité aux ténèbres, et les orques, trolls et loups se rallient au Roi-Sorcier. L’heure est bientôt à la revanche pour ses serviteurs, qui ont désormais l’occasion de briser les Peuples Libres. Ne craignant aucun adversaire, ils seraient ravis d’investir les Havres Gris afin d'assouvir leur vengeance. Mais les Elfes ne seront pas seuls, les Nains et les Hommes seront prêts à défendre férocement l’Eriador, d’autant qu’Arnor a pu lui aussi renaître de ses cendres. Une occasion pour le Roi-Sorcier d’Angmar d’en finir une bonne fois pour toute avec les Dunedains et de balayer une bonne fois pour tout être ne se soumettant pas au Seigneur Sauron.
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/arnor.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Arnor
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Les Dunedains du Nord participèrent sporadiquement à la Guerre de l’Anneau, la grande majorité préférant rester aux abords de la Comté et de Bree qu’ils avaient juré de protéger. La défaite rapide d’Angmar leur a permis d’agir plus efficacement contre les bandits d’Eriador. Mais les défaites du Gondor, des Nains, du Rohan puis des Elfes à Minhiriath ont eu de grandes conséquences sur le pays. Des réfugiés affluèrent en nombre en Eriador, provenant de presque toute la Terre du Milieu. Devant un tel afflux, les Dunedains du nord ne pouvaient plus utiliser les mêmes méthodes afin de protéger les populations. Dès lors, ils recrutèrent parmi les réfugiés. Troquant leurs manteaux de rôdeurs contre des armures, des boucliers, des épées et des lances, ils se réunirent autour de la bannière des Septs Étoiles. Leurs forces nouvellement constituées, les dunedains du Nord reconstruisent Annuminas, la capitale du royaume d’Elendil, Arnor. Se réunissant avec les Elfes à Mithlond, il fut proposé la création d’une Grande Alliance comme celle que fonda Elendil et Gil-Galad au Second Age contre Sauron. Ainsi fut fondée la Grande Alliance des Elfes, des Hommes et des Nains à nouveau contre le Seigneur Ténébreux. Le royaume est restauré, l’épée brisée est reforgée et les Dunedains entendent bien chasser le Mal de ses terres jusqu’à porter la guerre à Barad-dûr.
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/elfe.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Elfe
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Aussi loin que l’on s’en souvienne, les premiers Enfants d’Iluvatar, ont toujours vécu sur Arda. Au Troisième  Age, le monde vieillissait et pour beaucoup parmi les Eldar commençaient à regarder vers l’ouest, vers Valinor. Le retour de Sauron précipita le départ de nombre d’entre eux, épuisé par des siècles de lutte. Mais il en fut qui restèrent en Terre du Milieu, beaucoup combattirent afin de renverser le Seigneur Ténébreux. Leur défaite à Minhiriath les a poussés à se retrancher et à changer de stratégie. Réunissant les factions des Hommes et des Nains, une nouvelle Grande Alliance qui sera leur ultime espoir de repousser les Ténèbres d’Eriador puis de la Terre du Milieu une bonne fois pour toute. Car si Sauron venait à s’emparer de l’Eriador, il n’y aurait d’autre choix pour les Eldar que de partir vers l’Ouest pour ne jamais revenir.
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/gobelin.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Gobelin
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Défaits par l’alliance des Elfes et du Mordor, abandonnés de tous, les Gobelins se sont terrés dans les immensités obscures de la Moria, attendant leur heure. Lorsque la Guerre de l’Anneau prit fin, ils se déversèrent à nouveau dans les Monts Brumeux, cherchant à connaître le vainqueur. Mais ce fut Sauron qui les trouva le premier, et clamant être le vainqueur il força les Gobelins à la soumission. Devant désormais courber l’échine devant le Seigneur Ténébreux, ils n’eurent d’autres choix que de se préparer à la guerre en Eriador. S’ils n’avaient pas un grand désir de servir le Seigneur du Mordor, ils rêvent néanmoins de vengeance. Une vengeance contre les Peuples Libres qui les ont abandonnés. Les Elfes qui ont failli les condamner à l’extermination, les nains, les rohirrims, tous doivent payer pour leur trahison. Cette haine est bien sûr exploitée par Sauron qui en prime leur jura de leur offrir les richesses des Monts Bleus que gardent jalousement les Nains. Des tambours tonnent dans les profondeurs, la machine de guerre se met en marche, les gobelins se rassemblent, des trolls sortent des cavernes, les géants descendent de leurs montagnes, les araignées veulent se joindre au festin à venir. La vengeance est en marche !
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/gondor.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Gondor
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                La perte de la cité Blanche fut un coup terrible pour les Dunedains. Les orques ont ravagé les rues, investi le palais et brûlé l’Arbre Blanc. Fort heureusement, une graine a pu être sauvée et mise en lieu sûr où lorsque le jour sera venu, les Dunedains iront réclamer leurs terres et libéreront le Gondor de la mainmise de Sauron. Se réfugiant en Eriador, les Gondoriens furent accueillis par les Elfes et les Dunedains du Nord qui les aidèrent à s’installer dans l’ancienne forteresse du royaume d’Arthedain : Fornost. Rebaptisant la forteresse de fond en comble, les gondoriens purent se rassembler autour de leurs capitaines, se restaurer et préparer de nouvelles forces en vue de la nouvelle guerre qui se prépare en Eriador. Ils sont conscients de la nécessité de défendre à tout prix cette terre, c’est pourquoi ils rejoignirent sans hésiter la nouvelle Grande Alliance des Elfes, des Hommes et des Nains, en espérant que dès que le Mal sera chassé d’Eriador, ils pourront se tourner rapidement vers le sud.
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/isengard.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Isengard
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Pensant avoir eu le Rohan sous sa coupe, Saroumane fut surpris par la trahison du Rohan à son encontre, la perte rapide d’Orthanc mis à mal ses propres projets de domination de la Terre du Milieu. Il a néanmoins tenté de mener la Guerre de l’Anneau depuis Imladris puis Dol Guldur, mais le manque de moyens l'a contraint à partir en exil au Mordor. Depuis, le magicien Blanc dû se soumettre lui aussi au Seigneur Ténébreux. La victoire de ce dernier à la Guerre de l’Anneau, permit à Saroumane de recouvrer Isengard et de prendre possession d’une partie du Rohan. Mais bien sûr, il ne pouvait se satisfaire de la situation. Il fut toutefois surpris par la résistance acharnée des Peuples Libres qui poussèrent Sauron à se retirer d’Eriador. Mais cela était temporaire, et il avait désormais la tâche de préparer une nouvelle armée en vue de détruire les forces du Bien. Cette nouvelle guerre est une nouvelle opportunité pour le Magicien Blanc de corriger ses créations. Les fournaises et les forges d’Isengard fonctionnent jour et nuit. Des fosses sortent de nouvelles générations d’uruk-haï, plus puissantes et terribles que les précédentes. La guerre qui sera portée en Eriador sera l’occasion de tester la solidité de ses nouveaux orques, de détruire ce qui reste du Rohan et des autres peuples après tout. La Main Blanche peut bien servir les ambitions du Seigneur Ténébreux pour l’instant. Mais peut-être que le moment venu, il sera temps pour Saroumane de réaliser de plus grandes ambitions car Sauron n’a toujours pas recouvré l’Unique et les espions du Magicien sont toujours au aguets, épiant les moindres gestes en Terre du Milieu. Et si la guerre en Eriador permettait la montée d’un nouveau pouvoir ?
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/mordor.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Mordor
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                Depuis son retour en Terre du Milieu lors du Troisième Age, Sauron n’a eu de cesse de consolider son pouvoir au Mordor et de renforcer ses effectifs. Réunissant sous sa bannière des orques, trolls et hommes, il a remporté la Guerre de l’Anneau et placé les factions du Bien dans une position extrêmement délicate en les rejetant vers l’Eriador. Mais tout aussi grande fut sa victoire, le Seigneur Ténébreux n’était pas satisfait, il avait espéré une victoire totale. Sa victoire à Minhiriath lui a permit de remporter la majeure partie de la Terre du Milieu, mais elle a eu un coût. Les elfes furent battus mais se replièrent en bon ordre vers Mithlond, les autres factions du Bien ont pu également se réfugier dans tout l’Eriador, prêt à se battre jusqu’au bout. Son armée fut décimée et il fut obligé de battre en retraite, et malgré le fait que la Guerre de l’Anneau fut remportée, l’Unique échappa encore à Sauron, ne sachant où il se trouve actuellement. Ces contretemps ont permis au Bien de se réorganiser et de reconstituer ses forces. Le Seigneur du Mordor fit de même et construisit un campement dans les Monts Brumeux afin de préparer une invasion générale. Le Seigneur Ténébreux rassemble autour de lui d’autres serviteurs afin de se débarrasser une bonne fois pour toute des Peuples Libres et ainsi plonger la Terre du Milieu dans les Ténèbres.
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/nain.webp" alt="">
              <h5 class="text-xl mt-5 font-semibold text-white">
                Nain
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Secoué après la perte d’Erebor, ce peuple fier et robuste, descendant de Durin a erré durant des mois afin de se trouver une endroit hors de portée des Ténèbres du Mordor. Le destin a voulu qu’ils se réunissent dans le Palais de Thorin où ce roi légendaire connut également l’exil. Lorsque les émissaires elfes les approchèrent, ils eurent une grande hésitation, se remémorant la trahison des elfes durant la Guerre de l’Anneau. Mais devant la nécessité de repousser les forces du Mal et sachant qu’ils ne pouvaient indéfiniment se barricader dans les montagnes, ils rejoignirent la Grande Alliance rassemblant Elfes, Nains et Hommes. Depuis les Monts Bleus, les Nains construisent mines et forges afin de préparer armes et armures pour la guerre qui s’annonce. 
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/rohan.webp" alt="">
              <h5 class="text-xl mt-5 font-semibold text-white">
                Rohan
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                Les Seigneurs des Chevaux eurent fort à faire durant la Guerre de l’Anneau et furent les victimes les plus tragiques. Pris en sandwich entre le Mordor et les Eldar, ils perdirent leurs terres et leurs rares places fortes, contraints à l’exil comme leurs ancêtres nomades Eotheod. Ils avaient néanmoins fait suffisamment de dégâts sur leur passage pour que les forces de Sauron soient ralenties et contraintes de se replier malgré leur victoire à Minhiriath. Protégés par les cavaliers, le peuple rohirrim parti à l’ouest, vers l’Eriador, en prenant soin de ne pas trop s’approcher des Elfes auxquels il vouaient un très fort ressentiment. Ils se sont installés au Cardolan près d’une ancienne tour fortifiée qu’ils rebaptirent à leur guise. De là, ils lancèrent des raids contre de petits campements d’orques s'amassant de plus en plus près d’Eriador. Mais ils se rendirent rapidement compte qu’ils ne pouvaient combattre seuls contre la tempête qui s’annonce. C’est pourquoi ils ont finalement rejoint la Grande Alliance des Elfes, des Hommes et des Nains.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section class="py-10 relative block colorD">
      <div class="flex flex-wrap">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="~assets/gde/img/gde_2.webp">
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="~assets/gde/img/gde_3.webp">
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="~assets/gde/img/gde_4.webp">
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="~assets/gde/img/gde_5.webp">
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="~assets/gde/img/gde_8.webp">
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="~assets/gde/img/gde.png">
        </div>
      </div>
    </div>
      </section>


    </main>
    <footer class="relative colorD pt-8 pb-6">
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
        <div class="text-center">
        <span class="inline-block h-1 w-40 rounded bg-yellow-500 mt-8 mb-6 text-center"></span>
        </div>
        <div
          class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          
            <div class="text-sm text-gray-900 font-semibold py-1">
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
  background-color: #da7a62;
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