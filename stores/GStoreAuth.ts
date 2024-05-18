import { defineStore } from "pinia";
import GApiAuth from "~/services/GApiAuth";
import { useGeneralStore as generalStore } from "./GStoreGeneral";
import type { Supplement } from "./GStoreSupplement";
import type { Blog } from "./GStoreBlog";
import type { Follows } from "./GStoreFollow";

const ACCESS_TOKEN = "access_token";
const PROFILE = "profile";


export interface User {
    id?: string
    name: string
    role: string
    email: string
    password?: string
    password_confirmation?: string
    profile_details: ProfileData
    supplements?: Supplement
    blogs?: Blog
    followings_count?: number
    followers_count?: number
    followers?: Follows[]
    followings?: Follows[]
    supplement_wishes: Supplement
}

export interface ProfileData {
    id?: string
    social_media: SocialMedia,
    description: string | string[] | number
    my_training: string | string[] | number
    height: string | null
    h_visibility: boolean
    body_weight: string | null
    bw_visibility: boolean
    body_fat_percentage: string | null
    bf_visibility: boolean
    birth_date: 0,
    a_visibility: boolean
    sex: string,
    s_visibility: boolean
    year_attended_training: string | null
    bench_press: string | null
    deadlift: string | null
    squat: string | null
    respected_trainee: string | null
    image: string
}

export interface SocialMedia {
    facebook: string | undefined
    instagram: string | undefined
}


export const useAuthStore = defineStore("authStore", {
    state: () => {
        return {
            userData: <User>{
                profile_details: <ProfileData>{
                    social_media: { instagram: "" },
                    image: ""
                }
            },
            registrationForm: <User>{
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
        async login(data: any) {

            generalStore().setIsLoading(true);
            return GApiAuth.login(data).then((res: any) => {

                generalStore().setIsLoading(false);

                this.userData = res.data.user
                this.isAuthenticated = true
                this.token = res.data.token

                generalStore().setSuccess(true, "Welcome back!");

                useRouter().push("/me/profile")

            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, "パスワードが一致します。再度ご入力ください");
            });
        },
        async verifyEmail(data: any) {
            return GApiAuth.verifyEmail(data).then((res: any) => {
                useRouter().push(`/auth/verify-email/${data?.request_id}/${data?.token}`)
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            })
        },

        async register() {
            generalStore().setIsLoading(true);
            return GApiAuth.signUp(this.registrationForm).then((res: any) => {
                generalStore().setIsLoading(false);
                setTimeout(() => {
                    useRouter().push('/account/registration/successful');
                }, 3000)
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },

        async updateProfile() {
            generalStore().setIsLoading(true);
            return GApiAuth.updateProfile(this.userData, this.userData.id).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true,"");

                setTimeout(() => {
                    window.location.href = "/me/profile";
                }, 3000)
                return res.data;
            }).catch((err: any) => {
                generalStore().setIsLoading(false);
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async getProfile(id: any) {
            generalStore().setIsLoading(true);
            return GApiAuth.getProfile(id).then((res: any) => {
                generalStore().setIsLoading(false);
                this.userData = res.data;
            }).catch((err: any) => {
                generalStore().setIsLoading(false);
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