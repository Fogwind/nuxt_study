<template>
    <div class="py-4">
        Count: {{ count }} Count2: {{ count2 }}
        <div class="mt-2">
            <NButton @click="count++;count2++;">+</NButton>
            <NButton @click="count--;count2--;">-</NButton>
        </div>
    </div>
</template>
<script setup lang="ts">

const count = useCounter();
const count2 = ref(1);
</script>