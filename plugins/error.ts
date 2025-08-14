import type { NuxtError } from "#app";

/** doc: https://nuxt.zhcndoc.com/docs/getting-started/error-handling */
export default defineNuxtPlugin((nuxtApp) => {
     // 通过nuxtApp.vueApp 获取Vue实例 https://vue.zhcndoc.com/api/application.html#app-config-errorhandler
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        // 处理错误，例如发送报告到服务
        console.log('======vue error handler=======');
    }
    /**
     * showError 会调用 app:error 钩子,显示全屏错误页面error.vue。
     * 如果在启动 Nuxt 应用时出现任何错误，Nuxt 会调用 app:error 钩子。

        这包括：

        运行 Nuxt 插件
        处理 app:created 和 app:beforeMount 钩子
        将 Vue 应用渲染为 HTML （进行 SSR 时）
        挂载应用（客户端），不过你应该通过 onErrorCaptured 或 vue:error 来处理此情况
        处理 app:mounted 钩子
     */
    nuxtApp.hook('app:error', (error) => {
        console.log('hello from app:error hook');
        console.log(error);
    });
    // vue:error 基于 onErrorCaptured 生命周期钩子
    nuxtApp.hook('vue:error', (err, target, info) => {
        console.log('hello from vue:error hook',err, target, info);
        // let e: any = err;
        // for(let key in e) {
        //     console.log(key,e[key]);
        // }
    });
    
})