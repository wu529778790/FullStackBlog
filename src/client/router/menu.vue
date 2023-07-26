<template>
    <el-menu :default-active="defaultActive" mode="horizontal" :router="true">
        <el-menu-item
            v-for="item in menuItems"
            :key="item.path"
            :index="item.path"
        >
            {{ item.name }}
        </el-menu-item>
    </el-menu>
</template>

<script setup>
import { ref } from 'vue';

const defaultActive = ref('/');
const menuItems = ref([
    {
        name: '鸟纸',
        path: '/birdpaper',
    },
    {
        name: '分类',
        path: '/categories',
    },
    {
        name: '最新列表',
        path: '/newestList',
    },
    {
        name: '必应图像存档',
        path: '/bingImageArchive',
    },
    {
        name: '搜索',
        path: '/search',
    },
]);
</script>

<style scoped>

</style>
