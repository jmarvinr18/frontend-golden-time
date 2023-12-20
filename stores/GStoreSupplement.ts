import { defineStore } from "pinia";
import GApiSupplement from "~/services/GApiSupplement";
import { useGeneralStore as generalStore } from "./GStoreGeneral";


export const useSupplementStore = defineStore("supplementStore", {
    state: () => {
        return {
            list_supplement: []
        }
    },
    actions: {
        async getAllSupplement(query:any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.getAllSupplements(query).then((res:any) => {
                generalStore().setIsLoading(false);
                return res.data;
            });
        },
        async getSupplement(id:any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.getDetailSupplement(id).then((res:any) => {
                generalStore().setIsLoading(false);
                return res.data;
            });
        },
        async createSupplement(data:any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.createSupplement(data).then((res:any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your supplement has been successfully created!");
                return res.data;
            }).catch((err:any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async updateSupplement(data:any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.updateSupplement(data).then((res:any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your supplement has been successfully updated!");
                return res.data;
            }).catch((err:any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async deleteSupplement(id:any) {
            generalStore().setIsLoading(true);
            return GApiSupplement.deleteSupplement(id).then((res:any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your supplement has been successfully removed!");
                return res.data;
            });
        }
    }
})