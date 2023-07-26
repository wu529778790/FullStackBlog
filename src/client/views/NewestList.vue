<template>
  <div v-loading="state.isFetching">
    <Waterfall :list="state.list" />
  </div>
</template>

<script setup>
import request from '@/utils/request'
import { onBeforeMount, reactive } from 'vue';
import Waterfall from '@/components/Waterfall.vue';

const state = reactive({
    isFetching: false,
    list: []
})

onBeforeMount(async () => {
    state.isFetching = true
    // const data = await request(`/image/newestList?pageno=${start}&count=${count}`)
    const data = await request(`/image/newestList`)
    state.isFetching = false
    state.list = data.data.list
})
</script>