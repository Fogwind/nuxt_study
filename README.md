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


> 这个项目里主要是练习了路由，布局，和css的基本用法