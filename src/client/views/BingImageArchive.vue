<template>
    <Waterfall :list="state.list" />
</template>

<script setup>
import request from '@/utils/request'
import { onBeforeMount, reactive } from 'vue';
import Waterfall from '@/components/Waterfall.vue';

const state = reactive({
    list: []
})

onBeforeMount(async () => {
    const data = await request('/image/bingImageArchive')
    state.list = data.images.map(item => {
        return {
            ...item,
            id: item.hsh,
            url: `https://www.bing.com${item.url}`
        }
    })
})
</script>