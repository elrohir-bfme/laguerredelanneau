<template>
<div>
        <div class="z-10 fixed right-0 bottom-0 text-white text-center">
        <div v-if="map[region]" class="flex flex-col p-4">
            <div v-for="index in 9" :key="index">
                <div v-if="occurences(map[region].players, index) !== 0" class="m-4">
                    <span :class="colors(index)" class="px-4 py-2 text-lg font-bold leading-none text-white transform rounded-full">
                        {{occurences(map[region].players, index)}}
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div>
        
    <!-- <div class="fixed left-1/3 bottom-0 text-white text-center">
        <div v-if="map[region]" class="flex flex-row gap-4">
            <div v-for="(player, index) in map[region].players" :key="index">
                <img class="border-2 border-orange-400 rounded-full w-10 h-10" :src="player.img ? player.img : 'https://cdn.discordapp.com/attachments/646686225737973773/942209629990047784/buildingradialbuttons_050_04.png'" :alt="player.name">
                <span class="text-xs">{{player.name}}</span>
            </div>
        </div>
    </div> -->
    </div>
</div>
</template>

<script >
export default {
    props: {
        map: {
            type: Object,
            required: true
        },
        region: {
            type: String,
            required: true,
            default: "montagne"
        },
    },
    methods: {
        occurences(arr, val) {
            if(arr === undefined) return 0
            return arr.reduce((a, v) => (v.faction === val ? a + 1 : a), 0)
        },
        colors(value) {
            let info = "";
            switch(value) {
                case 1:
                    info = "border-purple-700"
                break;
                case 2:
                    info = "border-green-800"
                break;
                case 3:
                    info = "border-red-600"
                break;
                case 4:
                    info = "border-gray-700"
                break;
                case 5:
                    info = "border-blue-500"
                break;
                case 6:
                    info = "border-yellow-500"
                break;
                case 7:
                    info = "border-orange-800"
                break;
            }
            return info
        }
    }
};
</script>