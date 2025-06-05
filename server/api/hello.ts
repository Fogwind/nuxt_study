// 模拟请求响应时间长的情况
export default defineEventHandler(async (event) => {
    const tt = await delay();
    return {
        message: 'hello nuxt3!'
    }
})
function delay() {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(1);
        },4000);
    });
}