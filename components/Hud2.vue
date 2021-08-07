<template>
    <div class="fixed left-0 top-0 text-white text-center">
        <div v-if="map[region]" class="flex flex-col p-4">
            <div v-for="index in 8" :key="index">
                <div v-if="occurences(map[region].players, index) !== 0" class="m-1">
                    <span :class="colors(index)" class="px-2 py-1 text-lg font-bold leading-none text-white transform rounded-full">
                        {{occurences(map[region].players, index)}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
export default {
    name: 'Hud',
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
                    info = "bg-teal-600"
                break;
                case 2:
                    info = "bg-green-800"
                break;
                case 3:
                    info = "bg-green-800"
                break;
                case 4:
                    info = "bg-green-800"
                break;
                case 5:
                    info = "bg-red-800"
                break;
                case 6:
                    info = "bg-green-800"
                break;
                case 7:
                    info = "bg-green-800"
                break;
                case 8:
                    info = "bg-green-800"
                break;
            }
            return info
        }
    }
};
</script>