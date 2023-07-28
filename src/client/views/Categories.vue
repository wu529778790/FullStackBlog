<template>
    <Waterfall :list="state.list" />
</template>

<script setup>
import request from '@/utils/request'
import { onBeforeMount, reactive } from 'vue';
import Waterfall from '@/components/Waterfall.vue';

const state = reactive({
    list: []
})

onBeforeMount(async () => {
    const data = await request('/image/getCategory')
    state.list = data.data.map(item => {
        return {
            ...item,
            id: item.old_id,
            url: `/image/proxy/${item.icon.split('http://cdn-hw-cms.shanhutech.cn/')[1]}`
        }
    })
})
</script>