import { defineStore } from "pinia";
import GApiBlog from "~/services/GApiBlog";
import { useGeneralStore as generalStore } from "./GStoreGeneral";

export interface Follows {
    id?: string
    user_id: string
    following: string
}

export const useFollowStore = defineStore("followStore", {
    state: () => {
        return {
            followers: <Array<Follows>>[],
            following: <Array<Follows>>[],
        }
    },
    actions: {
        async getFollows() {
            generalStore().setIsLoading(true);
            return GApiBlog.getAllBlogs('').then((res: any) => {
                generalStore().setIsLoading(false);
                return res.data;
            });
        },
    }
}) 
