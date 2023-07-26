<template>
  <div v-loading="state.isFetching" ref="scrollContainer">
    <Waterfall :list="state.list" />
    <div v-if="state.isFetching">加载中...</div>
    <div v-else-if="state.list.length === 0">暂无数据</div>
  </div>
</template>

<script setup>
import request from '@/utils/request'
import { onBeforeMount, onMounted, onUnmounted, reactive, ref } from 'vue';
import Waterfall from '@/components/Waterfall.vue';

const state = reactive({
    isFetching: false,
    list: [],
    currentPage: 0,
    totalPages: 0
})

const scrollContainer = ref(null);
const pageSize = 10; // 每页显示的数据量

onBeforeMount(fetchData)
onMounted(() => {
    console.log(scrollContainer.value)
    scrollContainer.value.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    scrollContainer.value.removeEventListener('scroll', handleScroll)
})

async function fetchData() {
    state.isFetching = true
    const { data } = await request(`/image/newestList?pageno=1&count=${pageSize}`)
    state.isFetching = false
    state.list = data.list
    state.currentPage = 1
    state.totalPages = Math.ceil(data.total / pageSize)
}

async function loadMore() {
    if (state.currentPage >= state.totalPages || state.isFetching) {
        return
    }

    state.isFetching = true
    const nextPage = state.currentPage + 1
    const { data } = await request(`/image/newestList?pageno=${nextPage}&count=${pageSize}`)
    state.isFetching = false
    state.list = [...state.list, ...data.list]
    state.currentPage = nextPage
}

function handleScroll() {
    console.log("Scroll event triggered");
    const scrollPosition = scrollContainer.value.scrollTop + scrollContainer.value.clientHeight
    const documentHeight = scrollContainer.value.scrollHeight

    if (scrollPosition >= documentHeight && !state.isFetching) {
        loadMore()
    }
}
</script>
