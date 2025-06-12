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
import { useCounter } from '~/store/counter';
const store = useCounter();
const {value: count} = storeToRefs(store);
const count2 = ref(1);
</script>