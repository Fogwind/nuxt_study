<template>
    <div class="p-4">
        Count: {{ count }} <br/>
        Counter: {{ counter }} <br/>
        CounterRef: {{ counterRef }}
        <div class="mt-2">
            <NButton @click="counter++;counterRef++;">+</NButton>
            <NButton @click="counter--;counterRef--;">_</NButton>
        </div>


        <Counter></Counter>
        <Counter></Counter>
    </div>
</template>
<script setup lang="ts">
/**
 * useState 创建的counter 在水合时的值与在服务端渲染时的值是一致的；
 * ref 创建的counterRef 在服务端渲染时和水合时的值是各自独立的，不保证一致；
 */
const counter = useState("counter", () => Math.round(Math.random() * 1000));
const counterRef = ref(Math.round(Math.random()*1000));

const count = useCounter();
</script>