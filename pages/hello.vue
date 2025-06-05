<script setup lang="ts">
// const {message} = await $fetch('/api/hello')
const { data,pending, status, error, refresh } = await useFetch('/api/hello');
</script>
<template>
    <div v-if="pending">
        pending
    </div>
    <div v-if="status === 'pending'">status pending</div>
    <div v-if="status === 'success'">
        {{ data?.message }}
    </div>
</template>
