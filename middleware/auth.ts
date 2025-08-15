import { useUser } from "~/store/user";

export default defineNuxtRouteMiddleware((to, from) => {
    const store = useUser();
    if(!store.isLogin) {
        return navigateTo('/login?callback=' + to.path);
    }
   
})
