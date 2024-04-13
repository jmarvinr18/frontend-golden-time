import { defineStore } from "pinia";
import GApiSupplement from "~/services/GApiSupplement";
import { useGeneralStore as generalStore } from "./GStoreGeneral";
import type { User } from "./GStoreAuth";


export interface Supplement {
    id: string
    user_id: string
    name: string
    brand: string
    image: string
    supplement_type: string
    flavor: string
    price: string
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
            return GApiSupplement.getAllSupplements(query).then((res: any) => {
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
            generalStore().setIsLoading(true);
            return GApiSupplement.getDetailSupplement(id).then((res: any) => {
                generalStore().setIsLoading(false);
                this.supplement = res.data
                return res.data;
            });
        },
        async createSupplement(data: any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.createSupplement(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your supplement has been successfully created!");
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async updateSupplement(data: any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.updateSupplement(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your supplement has been successfully updated!");
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async deleteSupplement(id: any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.deleteSupplement(id).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your supplement has been successfully removed!");
                return res.data;
            });
        },
        async ratingSupplement(data: any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.ratingSupplement(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your rating has been successfully submitted!");
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async createCommentSupplement(data: any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.createCommentSupplement(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your comment has been successfully added!");
                this.getSupplement(data?.supplement_id);
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },

        async purgeFormContent() {
            this.supplement = <Supplement>{}
            this.supplementForm = <Supplement>{}
        }
    }
})