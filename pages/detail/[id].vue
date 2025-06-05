<template>
    <div class="p-5">
        <div v-if="status === 'pending'">加载中...</div>
        <h1 class="text-2xl">{{ data?.title }}</h1>
        <div v-html="data?.content"></div>
    </div>
</template>
<script setup lang="ts">
const router = useRoute();
// const {title, content} = await $fetch(`/api/detail/${router.params.id}`);
const {data, status} = await useAsyncData(() => $fetch(`/api/detail/${router.params.id}`));
</script>
<!-- <style lang="css">
p{
    color: var(--link-color);
}
</style> -->