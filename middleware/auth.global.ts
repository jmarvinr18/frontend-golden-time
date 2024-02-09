import { useAuthStore as authStore } from "~/stores/GStoreAuth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    // if (authStore().token === '') {
    //     if (authStore().routesSecured.includes(to.path)) {
    //         // return navigateTo("/login");
    //     };
    // }

    return;
})