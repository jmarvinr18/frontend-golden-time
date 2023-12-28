import { defineStore } from "pinia";
import GApiBlog from "~/services/GApiBlog";
import { useGeneralStore as generalStore } from "./GStoreGeneral";
import GApiPublicContents from "~/services/GApiPublicContents";
import { type Supplement } from "./GStoreSupplement"

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
    created_at: string
}
export const usePublicContentStore = defineStore("publicContentStore", {
    state: () => {
        return {
            contents: <Contents>{},
            blog: <ContentDetails>{},
            supplement: <Supplement>{},
            allSupplements: <Array<Supplement>>[],
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

                res.data.event.forEach((element: any) => {
                    this.contents.event.push({
                        ...element,
                        meta: JSON.parse(element.meta)
                    })
                });
                return res.data;
            });
        },
        async getBlog(id: string | string[], query: any = "") {
            generalStore().setIsLoading(true);
            return GApiPublicContents.getBlog(id).then((res: any) => {
                generalStore().setIsLoading(false);
                this.blog = {
                    ...res.data,
                    meta: JSON.parse(res.data.meta)
                }
            });
        },

        async getAllSupplement(query: any = "") {
            generalStore().setIsLoading(true);
            return GApiPublicContents.getAllSupplement().then((res: any) => {
                generalStore().setIsLoading(false);
                this.allSupplements = res.data.data
            });
        },
        async getSupplement(id: string | string[], query: any = "") {
            generalStore().setIsLoading(true);
            return GApiPublicContents.getSupplement(id).then((res: any) => {
                generalStore().setIsLoading(false);
                this.supplement = res.data
            });
        },
    }
}) 
