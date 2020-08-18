<template>
    <div class="flex flex-wrap">
        <div v-for="player in players" :key="player.name" class="mx-auto rounded overflow-hidden shadow-2xl m-2 bg-white">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-gray-800">
                    {{ player.name }} 
                <span v-if="player.faction == 1" class="rounded-full bg-green-400 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-green-500">Rohan</span>
                <span v-else-if="player.faction == 2" class="rounded-full bg-green-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-green-900">Elfe</span>
                <span v-else-if="player.faction == 3" class="rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-blue-600">Gondor</span>
                <span v-else-if="player.faction == 4" class="rounded-full bg-yellow-600 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-yellow-700">Nain</span>
                <span v-else-if="player.faction == 5" class="rounded-full bg-red-700 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-red-800">Mordor</span>
                <span v-else-if="player.faction == 6" class="rounded-full bg-gray-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-gray-900">Isengard</span>
                <span v-else-if="player.faction == 7" class="rounded-full bg-orange-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-orange-900">Gobelin</span>
                <span v-else class="rounded-full bg-purple-800 uppercase px-2 py-1 text-xs font-bold mr-3 text-white hover:bg-purple-900">Angmar</span>
                </div>
                <p class="text-gray-700 text-sx text-center">
                    <svg viewBox="0 0 20 20" class="inline-block fill-current text-blue-500 w-6 h-6"><path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd"></path></svg>
                    {{player.region}}
                </p>
            </div>
            <div class="inline-flex">
                <div class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 rounded-l">
                    <svg viewBox="0 0 20 20" class="fill-current text-green-500 w-6 h-6"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    {{ player.win }}
                </div>
                <div class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 rounded-r">
                    <svg viewBox="0 0 20 20" class="fill-current text-red-500 w-6 h-6"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    {{ player.lose }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        players: {
            type: Array,
            required: true
        },
    },
}
</script>

<style>

</style>