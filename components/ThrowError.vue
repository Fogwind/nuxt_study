<template>
    <div>
        <NButton @click="throwError">THROW ERROR</NButton>
    </div>
</template>
<script setup lang="ts">
const throwError = () => {
    throw new Error( '来自ThrowError组件的异常' )
}
</script>