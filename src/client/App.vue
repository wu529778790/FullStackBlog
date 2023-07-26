<template>
  <div class="app">
    <router-view name="menu" />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  overflow: hidden;
  .content{
    height: calc(100vh - 60px);
    overflow: auto;
  }
}
</style>
