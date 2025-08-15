<template>
    <div class="p-5">
        <div v-if="error"> {{error.data.statusMessage}} </div>
        <div v-else-if="status === 'pending'">加载中...</div>
        <div v-else-if="data">
            <h1 class="text-2xl">{{ data.title }}</h1>
            <div v-html="data.content"></div>
            <!--评论区-->
            <div class="py-2">
                <NInput v-model:value="value" type="textarea" placeholder="输入评论" />
                <NButton @click="onSubmit">发送{{ isLogin }}</NButton>
            </div>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import type { NuxtError } from '#app';
import {useUser} from '~/store/user';
import type { ArticleDetail } from "~/types/api/detail";

definePageMeta({
    middleware: ['auth']
});

const route = useRoute();// 返回当前路由

const {data, status, error} = await useFetch<ArticleDetail>('/api/detail/'+route.params.id, {
    // onRequest({ request, options }) {
    //     // 设置请求头
    //     // 注意，这依赖于 ofetch >= 1.4.0 - 可能需要更新锁文件
    //     options.headers.set('tttt', '123123');
    //     console.log('---onRequest---');

    // },
    // onRequestError({ request, options, error }) {
    //     // 处理请求错误
    //     console.log('onRequestError',request, options, error);
    // },
    // onResponse({ request, response, options }) {
    //     // 处理响应数据
    //     console.log('onResponse',request, response, options);
    // },
    // onResponseError({ request, response, options }) {
    //     // 处理响应错误
    //     console.log('onResponseError',request,response, options);
    // }
});

if (error.value) {
  console.log(error.value.statusCode)
  console.log(error.value.message)   
  console.log(error.value.data)     
}
// 显示错误页面
watchEffect(() => {
    // 如果参数是 ref，则返回内部值，否则返回参数本身。这是 val = isRef(val) ? val.value : val 计算的一个语法糖。
    if(unref(error)) {
        showError(error.value as NuxtError);
    }
});

// 评论区
const value = useState('comment', () => '');
const store = useUser();
const {isLogin} = storeToRefs(store);
const router = useRouter(); // 返回Vue的路由实例，即vue-router: https://router.vuejs.org/zh/guide/
const onSubmit = () => {
    if(isLogin.value) {
        value.value = '';
    } else {
        router.push('/login?callback=' + route.path);
    }
}
</script>
