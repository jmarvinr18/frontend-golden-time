import { defineStore } from "pinia";
import GApiFollow from "~/services/GApiFollow";
import { useGeneralStore as generalStore } from "./GStoreGeneral";
import { useUserStore } from "./GStoreUser";

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
            generalStore().setIsLoading(true);
            return GApiFollow.getFollows(`q=${query}`).then((res: any) => {
                generalStore().setIsLoading(false);
                switch (query) {
                    case 'followers':
                        this.followers = res.data
                        break;
                    case 'followings':
                        this.followings = res.data
                        break;
                }

            });
        },

        async toggleFollow(data: Follows) {
            return GApiFollow.toggleFollow(data).then((response) => {
                var userStore = useUserStore()
                var { userData } = storeToRefs(userStore)
                userData.value.is_following_me = response.data.is_following_me
            })
        },
        async unFollow(followingUserID: string){
            this.followings.map((val, item) => {
                if (val.following === followingUserID) {
                    GApiFollow.deleteFollow(followingUserID).then(() => {
                        this.followings.splice(item, 1)
                    })
                }

            })
        }
    }
}) 