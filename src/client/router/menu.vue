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
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const defaultActive = ref('/');

watch(
    () => router.currentRoute.value.path,
    (newPath) => {
        defaultActive.value = newPath;
    },
    {
        immediate: true
    }
);

const menuItems = ref([
    {
        name: '推荐',
        path: '/birdpaper',
    },
    {
        name: '最新',
        path: '/newestList',
    },
    {
        name: '分类',
        path: '/categories',
    },
    {
        name: '必应',
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
