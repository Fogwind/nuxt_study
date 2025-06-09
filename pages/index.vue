<template>
    <div class="flex items-center flex-col gap-2">
        <h1>Index Page{{ isLogin }}</h1>
        <div>
            <NButton
                text
                tag="a"
                href="/hello"
                type="primary"
            >hello</NButton>
        </div>
        <NuxtLink class="text-lg" to="/login">
                登录
            </NuxtLink>
        <!--处理请求错误-->
        <div v-if="error" class="text-red-300">{{ error.message }}</div>
        <!--处理加载状态-->
        <div v-if="pending">加载中...</div>
        <div v-else>
            <div v-for="post in posts" :key="post.id">
                <NuxtLink class="text-lg" :to="`/detail/${post.name}`">
                    {{ post.title }}
                </NuxtLink>
                <p class="text-slate-500">发布于：{{ post.date }}</p>
            </div>
        </div>

        <NButton @click="prev">Prev</NButton>
        <NButton @click="next">Next</NButton>
    </div>
</template>
<script setup lang="ts">
const isLogin = useLogin();
// const posts = await $fetch("/api/posts");
const page = ref(1);
/**
 * 我们可以使用useFetch()等 API 返回的refresh()刷新数据。
 * 需要注意，如果请求的 key 参数没有发生变化，我们实际上拿到的还是之前缓存的结果。
 * 而想要获取最新数据，就要在 url 中添加一个参数，并作为函数返回值传给useFetch。
 */
const {data: posts, pending, error, refresh} = await useFetch(() => {
    return `/api/posts?page=${page.value}&size=2`;
});

function prev() {
    page.value--;
    refresh();
}
function next() {
    page.value++;
    refresh();
}
</script>
