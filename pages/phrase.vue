<template>
  <div class="h-screen w-full flex bg-gray-800">
      <nav class="w-24 flex flex-col items-center bg-gray-900 py-4">
        <div class="text-lg font-semibold text-white">{{tours.Tour}}</div>
        <!-- nav content -->
        <ul class="mt-2 text-gray-300 font-semibold">
          <li v-for="(tour, nb) in tours.Tour" :key="nb" class="mt-3 t">
            <a href="#" class="flex flex-col items-center text-sm capitalize">
              <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                    17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                    8h-8v10h8V11m-10 4H3v6h8v-6z"
                ></path>
              </svg>
              <span>{{nb}}</span>
            </a>
          </li>
          <li class="mt-3 t">
            <a href="#" class="flex flex-col items-center text-sm capitalize">
              <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
                    17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
                    8h-8v10h8V11m-10 4H3v6h8v-6z"
                ></path>
              </svg>
              <span>Drink</span>
            </a>
          </li>
        </ul>
      </nav>
      <!-- main -->
      <main class="w-full overflow-y-auto">
        <div class="px-10 mt-5">
          <span class="uppercase font-bold text-2xl text-white underline"
            >TOUR 1</span
          >
        </div>
        <div class="px-10 grid grid-cols-4 gap-4">
          <div class="pl-5 pt-5 col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
            <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
              <div class="py-2 px-2">
                <span class="font-bold text-gray-800 text-2xl">Dagorlad</span>
                <span class="font-bold bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-full float-right">30 Août 2020</span>
                <div class="flex items-center justify-between py-2 px-2">
                  <div class="text-xl text-blue-600 font-bold">
                    Mordor
                  </div>
                  <div class="text-xl text-red-600 font-bold">
                    Gondor
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end cols -->
        </div>
      </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tours: []
        }
    },
	async fetch() {
	  this.tours = await this.$http.$get('https://api.npoint.io/30c5deeefc17427a8cd7');
    }
}
</script>

<style>
</style>