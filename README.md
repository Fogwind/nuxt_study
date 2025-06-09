# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## 通用渲染和水合（注水）

这一步类似于传统的 服务器端渲染，由 PHP 或 Ruby 应用程序执行。当浏览器请求启用了通用渲染的 URL 时，Nuxt 在服务器环境中运行 JavaScript（Vue.js）代码，并返回一个完全渲染的 HTML 页面给浏览器。如果页面之前已经生成，Nuxt 还可以从缓存中返回完全渲染的 HTML 页面。用户立即获得应用程序的全部初始内容，与客户端渲染相反。

一旦 HTML 文档被下载，浏览器将解释此文档，Vue.js 将控制该文档。之前在服务器上运行的相同 JavaScript 代码 再次 在客户端（浏览器）中运行，在后台现在启用交互性（因此称为 通用渲染），通过将其监听器绑定到 HTML。这称为 水合。当水合完成后，页面可以享受动态界面和页面过渡等好处。

通用渲染允许 Nuxt 应用程序提供快速的页面加载时间，同时保留客户端渲染的好处。此外，由于内容已经在 HTML 文档中存在，爬虫可以无开销地对其进行索引。



naive ui的引入参考了其官方文档：https://www.naiveui.com/zh-CN/dark/docs/nuxtjs。

nuxt版本3.16及以上引入naive ui会报错：https://github.com/tusen-ai/naive-ui/issues/6682。原因是在这个帖子里（juggle/resize-observer包的问题）：https://github.com/tusen-ai/naive-ui/issues/6804。

tailwindcss基础样式与naive ui 基础样式冲突问题，解决方案有好多：
1. naive ui给的方案：https://www.naiveui.com/en-US/dark/docs/style-conflict；
2. 社区的方案： https://github.com/becem-gharbi/nuxt-naiveui；
3. 添加tailwindcss配置，禁用tailwindcss的preflight样式；



## Nuxt 自动导入特性
Nuxt3 中会处理以下依赖的自动导入。

Nuxt 自动导入：数据访问 useFetch、状态管理 useState、App 上下文 useNuxtApp、运行时配置 useRuntimeConfig 等等。

Vue自动导入：ref、reactive、computed 等等。

基于路径自动导入：

- 组件目录：/components ；

- hooks目录：/composables ；

- 工具库目录：/utils 。

## api
Nuxt 项目下~/server/api目录下的文件会被注册为服务端 API，并约定在这些文件中导出一个默认函数defineEventHandler(handler)，handler 中可以直接返回 JSON 数据或 Promise。

> 关于markdown元数据：https://blog.51cto.com/ghostwritten/13854266

如果在 Vue 组件的设置函数中使用 $fetch 而不通过 useAsyncData 包裹它，会导致数据被请求两次：第一次在服务器上，然后在客户端双重渲染期间再次请求，因为 $fetch 不会将状态从服务器转移到客户端。因此，由于客户端必须再次获取数据，所以 $fetch 会在两个端执行。建议使用 useFetch 或 useAsyncData + $fetch 来防止在获取组件数据时重复请求。
```vue
<script setup lang="ts">
// 在 SSR 期间，数据会被请求两次，一次在服务器上，一次在客户端。
const dataTwice = await $fetch('/api/item')

// 在 SSR 期间，数据仅在服务器端获取并传输到客户端。
const { data } = await useAsyncData('item', () => $fetch('/api/item'))

// 您也可以将 useFetch 作为 useAsyncData + $fetch 的快捷方式
const { data } = await useFetch('/api/item')
</script>
```
[文档中详细说明了三个函数的不同之处](https://nuxt.zhcndoc.com/docs/getting-started/data-fetching)

- useFetch 组合函数旨在在设置方法中调用或直接在生命周期钩子的函数顶层调用，否则您应使用 $fetch 方法。
- useFetch 的返回值中关于请求状态，开始没有status字段，只有pending字段；status字段是后来加的。导致pending和status的作用有些重合了。为了不引起大的破坏，官方不打算在Nuxt3中删除pending，计划在Nuxt4中删除pending。