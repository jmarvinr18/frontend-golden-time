import { defineStore } from "pinia";
import GApiSupplement from "~/services/GApiSupplement";
import { useGeneralStore as generalStore } from "./GStoreGeneral";


export interface Supplement {
    id: string
    user_id: string
    name: string
    brand: string
    image: string
    kind: string
    protein_content: string
    protein_type: string
    taste: string
    price: string
    component: string
    shape: string
    url: string
    features: string
    ratings: Rating
    comments: Comment[]
}

export interface Comment {
    user_id: string
    comment: string
    is_reply: boolean
    reply_to: string
    sender: object
    replies: Comment[]
}

export interface Rating {
    avg_effect: number
    avg_taste: number
}
export const useSupplementStore = defineStore("supplementStore", {
    state: () => {
        return {
            allSupplements: <Array<Supplement>>[],
            supplement: <Supplement>{}
        }
    },
    actions: {
        async getAllSupplement(query: any = "") {
            generalStore().setIsLoading(true);
            return GApiSupplement.getAllSupplements(query).then((res: any) => {
                generalStore().setIsLoading(false);
                this.allSupplements = res.data.data
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
    }
})