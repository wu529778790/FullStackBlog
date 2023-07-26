<template>
    <Waterfall :list="list" :gutter="0" :animationDelay="50" :width="300" :hasAroundGutter="false" :delay="50">
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
</script>

<style>
</style>
