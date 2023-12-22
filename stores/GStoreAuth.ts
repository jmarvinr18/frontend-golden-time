import { defineStore } from "pinia";
import GApiAuth from "~/services/GApiAuth";
import { useGeneralStore as generalStore } from "./GStoreGeneral";

const ACCESS_TOKEN = "access_token";
const PROFILE = "profile";

export interface User {
    id: string
    name: string
    role: string
    email: string
    token: string | undefined
}
export interface UserForm {
    name: string
    role: string
    email: string
    password: string
    password_confirmation: string
    profile_details: ProfileData
}

export interface ProfileData {
    id: string
    social_media: SocialMedia,
    description: string | string[] | number
    my_training: string | string[] | number
    height: string | null
    h_visibility: boolean
    body_weight: string | null
    bw_visibility: boolean
    body_fat_percentage: string | null
    bf_visibility: boolean
    age: 0,
    a_visibility: boolean
    sex: string,
    s_visibility: boolean
    year_attended_training: string | null
    bench_press: string | null
    deadlift: string | null
    squat: string | null
    respected_trainee: string | null
}

export interface SocialMedia {
    facebook: string | undefined
    instagram: string | undefined
}


export const useAuthStore = defineStore("authStore", {
    state: () => {
        return {
            userData: <User>{},
            registrationForm: <UserForm>{
                profile_details: <ProfileData>{
                    social_media: { instagram: "" }
                }
            },
            isAuthenticated: false,
            token: "",
            profile: {},
            mode: "",
            routesSecured: [
                "/blog/post", "/blog/edit", "/profile", "/supplement/add",
                "/me/profile", "/me/edit-profile", "/me/following", "/me/followers"
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
        async login(data: any) {
            generalStore().setIsLoading(true);
            return GApiAuth.login(data).then((res: any) => {
                generalStore().setIsLoading(false);
                localStorage.setItem(ACCESS_TOKEN, res.data.token);
                localStorage.setItem(PROFILE, JSON.stringify(res.data.user));
                this.userData = res.data.user
                this.isAuthenticated = true
                generalStore().setSuccess(true, "Welcome back!");

                console.log("ROUTE VP: ", useRoute().query.vp)
                if (useRoute().query.vp != undefined) {
                    this.verifyEmail(useRoute().query.vp)
                } else {
                    useRouter().push("/")
                }

            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async verifyEmail(data) {
            console.log("DATA: ", data)
            return GApiAuth.verifyEmail(data).then((res: any) => {
                useRouter().push("/account/verified")
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            })
        },

        async register() {
            generalStore().setIsLoading(true);

            console.log(this.registrationForm)
            return GApiAuth.signUp(this.registrationForm).then((res: any) => {
                generalStore().setIsLoading(false);
                this.mode = "signup";
                setTimeout(() => {
                    useRouter().push('/account/registration/successful');
                }, 3000)
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async registrationStepTwo(data: any) {
            generalStore().setIsLoading(true);
            return GApiAuth.updateProfile(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "User has been registered succesfully! Please check your email to verify your account.");
                return res.data;
            })
        },
        async updateProfile() {
            generalStore().setIsLoading(true);
            return GApiAuth.updateProfile(this.registrationForm).then((res: any) => {
                generalStore().setIsLoading(false);
                // data.id = res.data.data.id;
                generalStore().setSuccess(true, "Your profile has been updated succesfully!");

                setTimeout(() => {
                    window.location.href = "/me/profile";
                }, 5000)
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async getProfile(id: any) {
            generalStore().setIsLoading(true);
            return GApiAuth.getProfile(id).then((res: any) => {
                generalStore().setIsLoading(false);
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async sendForgotPasswordRequest(payload: any) {
            generalStore().setIsLoading(true);
            return GApiAuth.forgotPassword({ email: payload }).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Reset password link has been sent to your email.");
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async resetPassword(payload: any) {
            generalStore().setIsLoading(true);
            return GApiAuth.resetPassword(payload).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your password has been changed successfully.");
                setTimeout(() => {
                    window.location.href = "/login";
                }, 5000)
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },

        async userLogout() {
            return GApiAuth.logout().then((res: any) => {
                this.purgeUserData()
                setTimeout(() => {
                    window.location.href = "/login";
                }, 1000)
            });
        },

        async purgeUserData() {
            this.userData = <User>{}
            this.profile = {}
            this.isAuthenticated = false
            this.token = ""
        },
        async purgeRegistrationForm() {
            this.registrationForm = {
                name: "",
                role: "",
                email: "",
                password: "",
                password_confirmation: "",
                profile_details: <ProfileData>{
                    social_media: { instagram: "" }
                }
            }
        }
    },
    persist: true,
})