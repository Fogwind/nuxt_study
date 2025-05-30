// https://nuxt.com/docs/api/configuration/nuxt-config runtimeConfig
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    'assets/css/global.scss' // 引入全局样式
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_variable.scss" as *;' // 引入sass变量(sass 1.80版本以后不再支持@import语法，需要使用@use，变量的引入也必须使用as)
        }
      }
    }
  }
})
