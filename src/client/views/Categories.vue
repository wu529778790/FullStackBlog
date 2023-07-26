<template>
  <div v-loading="state.isFetching" class="app">
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
    const data = await request('/image/getCategory')
    state.isFetching = false
    state.list = data.data.map(item => {
        return {
            ...item,
            id: item.old_id,
            url: `/image/proxy/${item.icon.split('http://cdn-hw-cms.shanhutech.cn/')[1]}`
        }
    })
})
</script>

<style scoped>
.app {
  height: 100vh;
  overflow: auto;
}
</style>