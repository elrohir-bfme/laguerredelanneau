<template>
    <div class="mt-8 bg-lotr container mx-auto rounded-lg text-white">
    <h1 class="text-3xl sm:text-4xl  text-white p-2 antialiased sm:subpixel-antialiased md:antialiased text-center underline">Diplomatie</h1>
    <h2 class="text-2xl sm:text-3xl  text-white p-2 antialiased sm:subpixel-antialiased md:antialiased text-center">Tour Actuel : {{data.tour}}</h2>
    <table class="table-auto overflow-x-auto container">
        <thead>
            <tr>
            <th class="border border-gray-800 bg-gray-900 rounded-2xl"></th>
            <th class="border border-gray-800 text-center p-1">
                <img src="~assets/factions/rohan.png" alt="" class="hidden md:block h-16 w-auto mx-auto">
                <span class="block md:hidden text-xs lg:text-base">Rohan</span>
            </th>
            <th class="border border-gray-800">
                <img src="~assets/factions/elfe.png" alt="" class="hidden md:block h-16 w-auto mx-auto">
                <span class="block md:hidden text-xs lg:text-base">Elfe</span>
            </th>
            <th class="border border-gray-800">
                <img src="~assets/factions/mordor.png" alt="" class="hidden md:block h-16 w-auto mx-auto">
                <span class="block md:hidden text-xs lg:text-base">Mordor</span>
            </th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>
                <img src="~assets/factions/rohan.png" alt="" class="hidden md:block h-16 w-auto mx-auto">
                <span class="block md:hidden text-xs lg:text-base">Rohan</span>
            </td>
            <td class="border border-gray-800 bg-gray-900 rounded-2xl"/>
            <td class="border border-gray-800 text-center title-font text-red-600 font-bold text-xs lg:text-base">
                EN GUERRE
            </td>
            <td class="border border-gray-800 text-center title-font text-red-600 font-bold text-xs lg:text-base">
                EN GUERRE
            </td>
            <tr>
            <td>
                <img src="~assets/factions/elfe.png" alt="" class="hidden md:block h-16 w-auto mx-auto">
                <span class="block md:hidden text-xs lg:text-base">Elfe</span>
            </td>
            <td/>
            <td class="border border-gray-800 bg-gray-900 rounded-2xl"/>
            <td class="border border-gray-800 text-center title-font text-green-400 font-bold text-xs lg:text-base">
                ALLIANCE
            </td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script >
export default {
    name: 'Diplomatie',
    data() {
        return {
            data: []
        }
    },
    async fetch() {
        this.data = await this.$http.$get("https://api.npoint.io/38a2899b98818d89418c/time")
    },
};
</script>

<style scoped>

.bg-lotr {
  background-color: #18191c;
}
</style>
