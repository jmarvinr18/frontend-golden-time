import { defineStore } from "pinia";
import GApiAuth from "~/services/GApiAuth";
import { useGeneralStore as generalStore } from "./GStoreGeneral";
import { useRoute as route, useRouter as router } from "vue-router";

const ACCESS_TOKEN = "access_token";
const PROFILE = "profile";

export const useAuthStore = defineStore("authStore", {
    state: () => {
        return {
            token: "",
            profile: {},
            mode:"",
            routesSecured:[
                "/blog/post", "/blog/edit", "/profile", "/supplement/add", 
                "/me/profile", "/me/edit-profile","/me/following","/me/followers"
            ],
            routesAuth: [
                "/signup", "/login", "/account/forgot", "/account/reset-password"
            ]
        }
    },
    actions: {
        async setToken() {
            if (this.token === "") {
                if (localStorage.getItem(ACCESS_TOKEN)) {
                    this.token = localStorage.access_token;
    
                    // if (this.routesAuth.includes(route().path)) {
                    //     await router().push("/");
                    // }
                }
            }
        },
        async login(data:any) {
            generalStore().setIsLoading(true);
            return GApiAuth.login(data).then((res:any) => {
                generalStore().setIsLoading(false);
                localStorage.setItem(ACCESS_TOKEN, res.data.token);
                localStorage.setItem(PROFILE, JSON.stringify(res.data.user));
                generalStore().setSuccess(true, "Welcome back!");
                router().push("/");
            })
        },
        async registrationStepOne(data:any) {
            generalStore().setIsLoading(true);
            return GApiAuth.signUp(data).then((res:any) => {
                generalStore().setIsLoading(false);
                this.mode = "signup";
                data.id = res.data.data.id;
                generalStore().setSuccess(true, "User has been registered succesfully! Please check your email to verify your account.");

                setTimeout(() => {
                    window.location.href="/login";
                },5000)
                return res.data;
            }).catch((err:any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async registrationStepTwo(data:any) {
            generalStore().setIsLoading(true);
            return GApiAuth.updateProfile(data).then((res:any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "User has been registered succesfully! Please check your email to verify your account.");
                return res.data;
            })
        },
        async updateProfile(data:any) {
            generalStore().setIsLoading(true);
            return GApiAuth.updateProfile(data).then((res:any) => {
                generalStore().setIsLoading(false);
                data.id = res.data.data.id;
                generalStore().setSuccess(true, "Your profile has been updated succesfully!");

                setTimeout(() => {
                    window.location.href="/me/profile";
                },5000)
                return res.data;
            }).catch((err:any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async getProfile(id:any) {
            generalStore().setIsLoading(true);
            return GApiAuth.getProfile(id).then((res:any) => {
                generalStore().setIsLoading(false);
                return res.data;
            }).catch((err:any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        }
    }
})