// https://nuxt.com/docs/api/configuration/nuxt-config runtimeConfig
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  // // 自动导入扫描的文件夹
  // imports: {
  //   dirs: [
  //     // 扫描顶层目录中的模块
  //     'composables',
  //     // 扫描内嵌一层深度的模块，指定特定文件名和后缀名
  //     'composables/*/index.{ts,js,mjs,mts}',
  //     // 扫描给定目录中所有模块
  //     'composables/**'
  //   ]
  // },
  modules: ['@nuxtjs/tailwindcss',"@bg-dev/nuxt-naiveui"],
  css: [
    'assets/css/tailwind.css' // 引入全局样式
  ]
})