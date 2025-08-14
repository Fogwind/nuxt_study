<script setup lang="ts">
const props = defineProps({
  error: Object,
})
console.log('error.vue -- ',props.error);
const router = useRouter();
const retry = () => window.location.href = props.error!.url;
const handlerErro = () => clearError({ redirect: '/' });

</script>

<template>

    <div class="pt-10 text-center">
      
        <h1>出了点错 - {{ props.error?.statusCode }}</h1>
        
        <NEmpty><!--NEmpty是Naiva-ui的组件，用于显示错误信息-->
            <template #default>
                <p class="text-red-500">{{ props.error?.data.statusMessage }}</p>
            </template>
            <template #extra>
                <NButton @click="retry">重试</NButton>
                <NButton @click="handlerErro">返回首页</NButton>
            </template>
        </NEmpty>

        
    </div>

</template>
