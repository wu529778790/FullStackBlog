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
    const data = await request('/image/birdpaper', {
        loading: true
    })
    state.list = data.data.list
})
</script>