<template>
    <div class="border-2 p-2 rounded mt-2">
        <div v-on:click="isOpen = !isOpen" class="bg-green-600 text-white p-4 font-bold rounded cursor-pointer">{{ title }}</div>
        <div class="mt-4 border-2 p-2 rounded" :class="isOpen ? 'd-block' : 'hidden'">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            isOpen: false
        }
    },
    name: 'Accordion',
    props: {
        title: String,
    }
}
</script>