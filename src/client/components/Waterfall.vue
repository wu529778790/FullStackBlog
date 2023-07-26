<template>
    <Waterfall :list="list" v-bind="options">
        <template #item="{item}">
            <div class="card">
                <LazyImg :url="item.url" />
            </div>
        </template>
    </Waterfall>
</template>

<script setup>
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'

defineProps({
    list: {
        type: Array,
        default: () => [],
    }
})
const options = {
    gutter: 0,
    animationDelay: 50,
    width: 320,
    hasAroundGutter: false,
    delay: 50
}
</script>

<style>
</style>
