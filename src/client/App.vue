

<template>
  <div v-loading="isFetching" class="app">
    {{ data }}
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useFetch } from '@vueuse/core';

const url = computed(() => {
  return '/api/birdpaper';
})
const { isFetching, data, error } = useFetch(url, {
    refetch: true
  });
</script>

<style scoped>
.app {
  height: 100vh;
  overflow: auto;
}
</style>
