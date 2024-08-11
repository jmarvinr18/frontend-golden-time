import { defineStore } from "pinia";
import GApiAuth from "~/services/GApiAuth";
import { useGeneralStore as generalStore } from "./GStoreGeneral";
import type { Supplement } from "./GStoreSupplement";
import type { Blog } from "./GStoreBlog";
import type { Follows } from "./GStoreFollow";
import { i18n } from "~/plugins/i18n";

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
    is_following_me?: boolean
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

                generalStore().setSuccess(true, i18n.global.t("WelcomeBack"), true);

                const route = useRoute();

                if (route.query.ref) {
                    useRouter().push(`${route.query.ref}`);
                } else {
                    useRouter().push("/me/profile");
                }

            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, i18n.global.t("PasswordDontMatch"));
            });
        },
        async verifyEmail(data: any, token:any, id:any) {
            return GApiAuth.verifyEmail(data, token, id).then((res: any) => {
                useRouter().push(`/account/verified`);
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

        async updateProfile(data: any) {
            generalStore().setIsLoading(true);
            return GApiAuth.updateProfile(data, this.userData.id).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, i18n.global.t("ProfileSubmittedMsg"));

                setTimeout(() => {
                    window.location.href = "/me/profile";
                }, 3000)
                return res.data;
            }).catch((err: any) => {
                var status = err.response.status
                var errorMsg

                if (status == 401) {
                    errorMsg = i18n.global.t("Unauthenticated")
                } else {
                    errorMsg = i18n.global.t("ProblemOccured")
                }
                generalStore().setError(true, errorMsg);
            });
        },
        async getProfile(id: any) {
            generalStore().setIsLoading(true);
            return GApiAuth.getProfile(id).then((res: any) => {
                generalStore().setIsLoading(false);
                this.userData = res.data;
            }).catch((err: any) => {
                var status = err.response.status
                var errorMsg

                if (status == 401) {
                    errorMsg = i18n.global.t("Unauthenticated")
                } else {
                    errorMsg = i18n.global.t("ProblemOccured")
                }
                generalStore().setError(true, errorMsg);
            });
        },
        async sendForgotPasswordRequest(payload: any) {
            generalStore().setIsLoading(true);
            return GApiAuth.forgotPassword({ email: payload }).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, i18n.global.t("ResetPasswordSent"));
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async resetPassword(payload: any) {
            generalStore().setIsLoading(true);
            return GApiAuth.resetPassword(payload).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, i18n.global.t("PasswordChanged"));
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