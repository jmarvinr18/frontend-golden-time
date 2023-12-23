import { defineStore } from "pinia";
import GApiBlog from "~/services/GApiBlog";
import { useGeneralStore as generalStore } from "./GStoreGeneral";
import GApiPublicContents from "~/services/GApiPublicContents";


export interface Contents {
    blog: ContentDetails[]
    event: ContentDetails[]
    news: ContentDetails[]
}
export interface ContentDetails {
    id: string
    title: string
    content: string
    feature_image: string
    meta: string
    visibility: string
    type: string
    status: string
    user_id: string
    author: string
    email: string
}
export const usePublicContentStore = defineStore("publicContentStore", {
    state: () => {
        return {
            contents: <Contents>{},
        }
    },
    actions: {
        async getHomeContents(query: any = "") {
            generalStore().setIsLoading(true);
            return GApiPublicContents.getHomepageDisplays(query).then((res: any) => {
                generalStore().setIsLoading(false);
                this.contents.blog = res.data.blog
                this.contents.news = res.data.news
                this.contents.event = []

                res.data.event.forEach(element => {
                    this.contents.event.push({
                        ...element,
                        meta: JSON.parse(element.meta)
                    })
                });
                // this.contents.event = {
                //     ...res.data,
                //     meta: JSON.parse(res.data.event.meta)
                // }
                return res.data;
            });
        },
    }
}) 
