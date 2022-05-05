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
                  {{ $t('presentation.title') }}
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  {{ $t('presentation.desc') }}
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
                class="relative flex flex-col min-w-0 break-words bg-white hover:bg-gray-100 w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto transform transition duration-500 hover:scale-110">
                  <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/img/cloudbrake.png" alt="">
                  <h6 class="text-xl font-semibold">{{ $t('presentation.factions') }}</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    {{ $t('presentation.ralliez') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white hover:bg-gray-100 w-full mb-8 shadow-lg rounded-lg  transform transition duration-500 hover:scale-110"
              >
                <div class="px-4 py-5 flex-auto">
                  <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/img/blight.png" alt="">
                  <h6 class="text-xl font-semibold">{{ $t('presentation.semaine') }}</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    {{ $t('presentation.destin') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white hover:bg-gray-100 w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto transform transition duration-500 hover:scale-110">
                  <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/img/darkness.png" alt="">
                  <h6 class="text-xl font-semibold">{{ $t('presentation.regions') }}</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    {{ $t('presentation.guerre') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="aspect-w-16 aspect-h-9">
            <iframe src="https://www.youtube.com/embed/sfUly-xvu0A" title="La Guerre de l'Eriador" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="flex flex-wrap items-center mt-20">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 class="text-3xl mb-2 font-semibold leading-normal text-gray-900">
                {{ $t('presentation.participer') }}
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                {{ $t('presentation.mode') }}
              </p>
              <p
                class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                {{ $t('presentation.pres') }}
              </p>
              <div class="flex">
                <nuxt-link
                  to="/gde/inscription"
                  class=" transform transition duration-500 hover:scale-110 mx-auto hover:bg-green-600 bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-600 rounded text-3xl"
                  >{{ $t('presentation.inscription') }}
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
                  class="w-full align-middle rounded-t-lg transform transition duration-500 hover:-translate-y-6 hover:z-10"
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
                    {{ $t('presentation.act1') }}
                  </h4>
                  <p class="text-md font-light mt-2 text-white italic">
                    {{ $t('presentation.act1_info') }}
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
                <h3 class="text-3xl font-semibold text-white">{{ $t('presentation.act2') }}</h3>
                <p class="mt-4 text-lg leading-relaxed text-white italic">
                   {{ $t('presentation.act2_info') }}
                </p>
              </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4 pt-8">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg animate-pulse"
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
                class="max-w-full rounded-lg shadow-lg pt-10 transform transition duration-500 hover:scale-110"
                src="~/assets/gde/tour9.png"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold text-white">{{ $t('presentation.act3') }}</h3>
                <p class="mt-4 text-lg leading-relaxed text-white italic">
                   {{ $t('presentation.act3_info') }}
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
                <h3 class="text-3xl font-semibold text-white">{{ $t('presentation.act4') }}</h3>
                <p class="mt-4 text-lg leading-relaxed text-white italic">
                   {{ $t('presentation.act4_info') }}
                </p>
              </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4 pt-8">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-110"
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
                class="max-w-full rounded-lg shadow-lg pt-10 transform transition duration-500 hover:scale-110"
                src="~/assets/gde/tour33.png"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold text-white">{{ $t('presentation.act5') }}</h3>
                <p class="mt-4 text-lg leading-relaxed text-white italic">
                   {{ $t('presentation.act5_info') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section class="relative block colorC pt-20 pb-5">
      <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <p class="leading-relaxed text-lg text-white text-left">{{ $t('presentation.act6') }}</p>
      <span class="inline-block h-1 w-40 rounded bg-yellow-500 mt-8 mb-6 text-center"></span>
      </div>
    </section>

    <section class="relative block colorA pb-15 pt-10">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <img
        alt="La Guerre de l'Eriador"
        class="max-w-full shadow-lg py-10 transform transition duration-500 hover:scale-110"
        src="~/assets/gde/commencement.png"
      />
      <p class="leading-relaxed text-lg text-white text-left">{{ $t('presentation.act7') }}</p>
      <span class="inline-block h-1 w-20 rounded bg-orange-500 mt-8 mb-6"></span>
    </div>
    </section>
      
      <section class="pb-5 relative block bg-gray-900">
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">{{ $t('presentation.faction') }}</h2>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center">
            <div class="w-full lg:w-4/12 px-4 text-center transform transition duration-500 hover:scale-110">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/angmar.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                 Angmar
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                {{ $t('presentation.contact') }}
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center transform transition duration-500 hover:scale-110">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/arnor.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Arnor
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                {{ $t('presentation.contact') }}
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center transform transition duration-500 hover:scale-110">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/elfe.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                {{ $t('presentation.elfe') }}
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                {{ $t('presentation.elfe_desc') }}
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center transform transition duration-500 hover:scale-110">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/gobelin.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                {{ $t('presentation.gobelin') }}
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                {{ $t('presentation.gobelin_desc') }}
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center transform transition duration-500 hover:scale-110">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/gondor.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Gondor
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                {{ $t('presentation.gondor_desc') }}
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center transform transition duration-500 hover:scale-110">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/isengard.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Isengard
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
                {{ $t('presentation.isengard_desc') }}
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center transform transition duration-500 hover:scale-110">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/mordor.webp" alt="">
              <h6 class="text-xl mt-5 font-semibold text-white">
                Mordor
              </h6>
              <p class="mt-2 mb-4 text-gray-500">
               {{ $t('presentation.mordor_desc') }}
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center transform transition duration-500 hover:scale-110">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/nain.webp" alt="">
              <h5 class="text-xl mt-5 font-semibold text-white">
                {{ $t('presentation.nain') }}
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                {{ $t('presentation.nain_desc') }}
              </p>
            </div>
            <div class="w-full lg:w-4/12 px-4 text-center transform transition duration-500 hover:scale-110">
              <img class="w-20 h-20 inline-flex items-center justify-center" src="~assets/gde/factions/rohan.webp" alt="">
              <h5 class="text-xl mt-5 font-semibold text-white">
                Rohan
              </h5>
              <p class="mt-2 mb-4 text-gray-500">
                {{ $t('presentation.rohan_desc') }}
              </p>
            </div>
          </div>
        </div>
      </section>


      <section class="py-10 relative block colorD">
      <div class="flex flex-wrap">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block transform transition duration-500 hover:scale-110 hover:translate-x-4 hover:translate-y-4" src="~assets/gde/img/gde_2.webp">
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block transform transition duration-500 hover:scale-110" src="~assets/gde/img/gde_3.webp">
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block transform transition duration-500 hover:scale-110" src="~assets/gde/img/gde_4.webp">
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="~assets/gde/img/gde_5.webp">
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block transform transition duration-500 hover:scale-110" src="~assets/gde/img/gde_8.webp">
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block transform transition duration-500 hover:scale-110 hover:-translate-x-4 hover:translate-y-4" src="~assets/gde/img/gde.png">
        </div>
      </div>
    </div>
      </section>


    </main>
    <footer class="relative colorA pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl font-semibold text-white">{{ $t('presentation.contact') }}</h4>
            <h5 class="text-lg mt-0 mb-2 text-gray-100">
              {{ $t('presentation.information') }}
            </h5>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span
                  class="block uppercase text-gray-200 text-sm font-semibold mb-2"
                  >{{ $t('presentation.info_1') }}</span
                >
                <ul class="list-unstyled">
                  <li>
                    <nuxt-link
                      class="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                      to="/gde/">
                      {{ $t('presentation.info_2') }}
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      class="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                      to="/gde/inscription">
                      {{ $t('presentation.info_3') }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span
                  class="block uppercase text-gray-200 text-sm font-semibold mb-2"
                  >{{ $t('presentation.follow') }}</span
                >
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                      href="https://laterredumilieu.fr/Discord"
                      >Discord</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                      href="https://twitter.com/Elrohir_BFME"
                      >Twitter</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy"
                      >Instagram</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
                      href="https://www.youtube.com/channel/UC3v6035rOvbIdX23SnrdyNw"
                      >Youtube</a
                    >
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-gray-200 font-semibold block pb-2 text-sm"
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
        <span class="inline-block h-1 w-80 rounded bg-yellow-500 mt-8 mb-6 text-center"></span>
        </div>
        <div
          class="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          
            <div class="text-3xl text-white font-semibold py-1">
              Elrohir - {{ $t('presentation.tdm') }}
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