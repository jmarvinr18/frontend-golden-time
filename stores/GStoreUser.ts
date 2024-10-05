import { useGeneralStore as generalStore } from "./GStoreGeneral";
import GApiUser from "~/services/GApiUser";
import { defineStore } from "pinia";
import type { User } from "./GStoreAuth";

export const useUserStore = defineStore("userStore", {
    state() {
        return {
            userData: <User>{
                profile_details: <ProfileData>{
                    social_media: { instagram: "" },
                    image: ""
                }
            },
        }
    },
    actions: {
        async getUser(id: any) {
            // generalStore().setIsLoading(true);
            return GApiUser.getUser(id).then((res: any) => {
                generalStore().setIsLoading(false);
                this.userData = res.data;
            });
        },
    }

})