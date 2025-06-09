<template>
    <div class="p-5">
        <div v-if="status === 'pending'">加载中...</div>
        <div v-else>
            <h1 class="text-2xl">{{ data?.title }}</h1>
            <div v-html="data?.content"></div>
            <!--评论区-->
            <div class="py-2">
                <NInput v-model:value="value" type="textarea" placeholder="输入评论" />
                <NButton @click="onSubmit">发送{{ isLogin }}</NButton>
            </div>
        </div>
        
    </div>
</template>
<script setup lang="ts">
const route = useRoute();// 返回当前路由
// const {title, content} = await $fetch(`/api/detail/${router.params.id}`);
const {data, status} = await useAsyncData(function() {
    return $fetch(`/api/detail/${route.params.id}`);
});

const value = useState('comment', () => '');
const isLogin = useLogin();
const router = useRouter(); // 返回Vue的路由实例，即vue-router: https://router.vuejs.org/zh/guide/
const onSubmit = () => {
    if(isLogin.value) {
        value.value = '';
    } else {
        router.push('/login?callback=' + route.path);
    }
}
</script>
<!-- <style lang="css">
p{
    color: var(--link-color);
}
</style> -->