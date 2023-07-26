<template>
  <div v-loading="state.isFetching" class="app">
    <Waterfall :list="state.list" />
  </div>
</template>

<script setup>
import request from '@/utils/request'
import { reactive, watch } from 'vue';
import Waterfall from '@/components/Waterfall.vue';
import { useRoute } from 'vue-router';

const state = reactive({
    isFetching: false,
    list: []
})

const route = useRoute();
watch(
    () => route.query.content,
    (value) => {
        fetchData(value);
    },
    {
        immediate: true,
        deep: true
    }
);

async function fetchData(content) {
    state.isFetching = true;
    const data = await request(`/image/search?content=${content}`);
    state.isFetching = false;
    state.list = data.data.list;
}
</script>

<style scoped>
.app {
  height: 100vh;
  overflow: auto;
}
</style>
