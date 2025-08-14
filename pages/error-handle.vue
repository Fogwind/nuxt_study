<template>
    <!--练习NuxtErrorBoundary的用法-->
    <NuxtErrorBoundary>
        <ThrowError></ThrowError>
        <template #error="{ error }">
            <p class="my-4 text-xl text-gray-500">
                 {{ error.message }}
            </p>
            <NButton @click="() => clearError({ redirect: '/' })">返回首页</NButton>
        </template>
    </NuxtErrorBoundary>
</template>
