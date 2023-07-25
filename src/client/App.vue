

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
  const data = await request('/api/birdpaper')
  state.isFetching = false
  state.list = data.data.list
})
</script>

<style scoped>
.app {
  height: 100vh;
  overflow: auto;
}
</style>
