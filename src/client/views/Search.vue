<template>
    <Waterfall :list="state.list" />
</template>

<script setup>
import request from '@/utils/request'
import { reactive, watch } from 'vue';
import Waterfall from '@/components/Waterfall.vue';
import { useRoute } from 'vue-router';

const state = reactive({
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
    const data = await request(`/image/search?content=${content}`);
    state.list = data.data.list;
}
</script>
