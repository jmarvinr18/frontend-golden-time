import { defineStore } from "pinia";
import GApiFollow from "~/services/GApiFollow";
import { useGeneralStore as generalStore } from "./GStoreGeneral";

export interface Follows {
    id?: string
    user_id?: string
    following?: string
}

export const useFollowStore = defineStore("followStore", {
    state: () => {
        return {
            followers: <Array<Follows>>[],
            followings: <Array<Follows>>[],
            followData: <Follows>{}
        }
    },
    actions: {
        async getFollows(query: string = 'followers') {
            // generalStore().setIsLoading(true);
            return GApiFollow.getFollows(`q=${query}`).then((res: any) => {
                // generalStore().setIsLoading(false);
                switch (query) {
                    case 'followers':
                        this.followers = res.data
                        break;
                    case 'following':
                        this.followings = res.data
                        break;
                }

            });
        },

        async createFollow(data: Follows) {
            return GApiFollow.createFollow(data)
        },
        async toggleFollow(followingUserID: string){
            this.followings.map((val, item) => {
                if (val.user_id === followingUserID) {
                    GApiFollow.deleteFollow(followingUserID).then(() => {
                        this.followings.splice(item, 1)
                    })
                }

            })
        }
    }
}) 