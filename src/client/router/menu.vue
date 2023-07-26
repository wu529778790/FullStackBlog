<template>
    <div class="menu_container">
        <el-menu
            :default-active="defaultActive"
            mode="horizontal"
            :router="true"
            class="menu"
            >
            <!-- Remove the search menu item -->
            <el-menu-item
                v-for="item in menuItems"
                :key="item.path"
                :index="item.path"
            >
                {{ item.name }}
            </el-menu-item>
        </el-menu>
        <div class="search">
            <el-input
                class="search-input"
                placeholder="Search"
                v-model="searchQuery"
                @keyup.enter="search"
            />
            <el-button class="search-btn" :icon="Search" @click="search">搜索</el-button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { Search } from '@element-plus/icons-vue';

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
    }
]);

const searchQuery = ref('');
function search() {
    router.push({
        path: '/search',
        query: {
            content: searchQuery.value
        }
    })
}
</script>

<style lang="scss" scoped>
.menu_container {
    display: flex;
    .menu {
        flex: 1;
    }
    .search {
        display: flex;
        align-items: center;
        padding-right: 20px;
        .search-input {
            width: 300px;
        }
        .search-btn {
            margin-left: 20px;
        }
    }
}
</style>
