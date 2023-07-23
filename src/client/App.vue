

<template>
    hello world
</template>
<script setup>
fetch('/api/test').then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
</script>
<style scoped>

</style>
