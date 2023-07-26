import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/birdpaper'
    },
    {
        path: '/birdpaper',
        name: 'Birdpaper',
        components: {
            menu: () => import('./menu.vue'),
            default: () => import('@/views/Birdpaper.vue'),
        },
    },
    {
        path: '/newestList',
        name: 'NewestList',
        components: {
            menu: () => import('./menu.vue'),
            default: () => import('@/views/NewestList.vue'),
        },
    },
    {
        path: '/categories',
        name: 'Categories',
        components: {
            menu: () => import('./menu.vue'),
            default: () => import('@/views/Categories.vue'),
        },
    },
    {
        path: '/bingImageArchive',
        name: 'BingImageArchive',
        components: {
            menu: () => import('./menu.vue'),
            default: () => import('@/views/BingImageArchive.vue'),
        },
    },
    {
        path: '/search',
        name: 'Search',
        components: {
            menu: () => import('./menu.vue'),
            default: () => import('@/views/Search.vue'),
        },
    },
    // Add more routes here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
