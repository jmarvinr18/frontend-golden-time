import { defineStore } from "pinia";
import GApiSupplement from "~/services/GApiSupplement";
import { useGeneralStore as generalStore } from "./GStoreGeneral";
import type { User } from "./GStoreAuth";
import { i18n } from "~/plugins/i18n";

export interface Supplement {
    id: string
    user_id: string
    name: string
    brand: string
    image: string
    supplement_type: string
    flavor: string
    price: number
    ingredients: string
    serving_type: string
    url: string
    description: string
    ratings: Rating
    comments: Comment[]
    user: User
    on_users_wishlist?: boolean
    user_supplement_wish_count: number
    has_user_drank_the_supplement?: boolean
    users_who_drank_the_supplement_count: number
    supplement_details?: Supplement

}

export interface Comment {
    user_id: string
    comment: string
    is_reply: boolean
    reply_to: string
    sender: object
    replies: Comment[]
    view_replies?: boolean
}

export interface Rating {
    avg_effect: number
    avg_taste: number
}
export const useSupplementStore = defineStore("supplementStore", {
    state: () => {
        return {
            allSupplements: <Array<Supplement>>[],
            supplement: <Supplement>{
                user_supplement_wish_count: 0,
                users_who_drank_the_supplement_count: 0
            },
            supplementForm: <Supplement>{}
        }
    },
    actions: {

        async removeDrinkWish(supplement_id: string, type: string){
            switch (type) {
                case "drink_wish":
                    await GApiSupplement.removeDrinkWish(supplement_id)
                    break;
                case "my_supplement":
                    break;
            }
        },

        async toggleDrinkWish(supplement_id: string, is_list = true) {
            await GApiSupplement.addOrRemoveFromDrinkWish(supplement_id).then(() => {
                var sup = is_list ? this.allSupplements.find(({ id }) => id == supplement_id) : this.supplement
                if (sup != undefined) {
                    sup.on_users_wishlist = sup?.on_users_wishlist ? false : true
                    if (sup.on_users_wishlist) {
                        sup.user_supplement_wish_count += 1
                    } else {
                        sup.user_supplement_wish_count -= 1
                    }
                }
            }).catch(() => {
                console.log("ERROR!")
            })
        },
        async toggleHasDrank(supplement_id: string, is_list = true) {
            await GApiSupplement.addOrRemoveFromHasDranklist(supplement_id).then(() => {
                var sup = is_list ? this.allSupplements.find(({ id }) => id == supplement_id) : this.supplement
                if (sup != undefined) {
                    sup.has_user_drank_the_supplement = sup?.has_user_drank_the_supplement ? false : true
                    if (sup.has_user_drank_the_supplement) {
                        sup.users_who_drank_the_supplement_count += 1
                    } else {
                        sup.users_who_drank_the_supplement_count -= 1
                    }
                }
            })
        },
        async getAllSupplement(query: any = "") {
            generalStore().setIsLoading(true);
            return GApiSupplement.getAllSupplements(query).then((res: any): Supplement => {
                generalStore().setIsLoading(false);
                this.allSupplements = res.data.data
                return res.data;
            });
        },
        async searchSupplement(query: any = "") {
            generalStore().setIsLoading(true);
            return GApiSupplement.SearchSupplements(query).then((res: any) => {
                generalStore().setIsLoading(false);
                this.allSupplements = res.data.data;
                return res.data;
            });
        },
        async getSupplement(id: any) {
            return GApiSupplement.getDetailSupplement(id).then((res: any) => {
                this.supplement = res.data
                return res.data;
            });
        },
        async createSupplement(data: any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.createSupplement(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true,  i18n.global.t("SupplementCreatedMsg"));
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
        async updateSupplement(data: any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.updateSupplement(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, i18n.global.t("SupplementUpdatedMsg"));
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
        async deleteSupplement(id: any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.deleteSupplement(id).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, i18n.global.t("SupplemenRemovedMsg"));
                return res.data;
            });
        },
        async ratingSupplement(data: any) {
            return GApiSupplement.ratingSupplement(data).then((res: any) => {
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
        async createCommentSupplement(data: any) {
            return GApiSupplement.createCommentSupplement(data).then((res: any) => {
                this.getSupplement(data?.supplement_id);
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

        async purgeFormContent() {
            this.supplement = <Supplement>{}
            this.supplementForm = <Supplement>{}
        }
    }
})