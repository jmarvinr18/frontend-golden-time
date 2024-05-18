import { defineStore } from "pinia";
import GApiBlog from "~/services/GApiBlog";
import { useGeneralStore as generalStore } from "./GStoreGeneral";
import type { Comment } from './GStoreSupplement';
import type { User } from './GStoreAuth';
import { i18n } from "~/plugins/i18n";

export interface Blog {
    id?: string
    title: string
    content: string
    feature_image: string
    meta: Meta[] | null
    visibility: string
    type: string
    status: string
    user: User
    created_at?: string
    likes: Like[]
    comments: Comment[]
    is_user_like_the_blog?: boolean
    related_blog: Blog
    related_news: Blog
}
export interface Like {
    blog_id: string
    created_at: string
    id?: string
    ip?: string
    user_id: string
    updated_at: string
}
export interface Replies {
    id?: string
    comment: string
    is_reply: boolean
    reply_to?: string
}
export interface Meta {
    type: string
    key: string
    value: string
}

export const useBlogStore = defineStore("blogStore", {
    state: () => {
        return {
            blogList: <Array<Blog>>[],
            blog: <Blog>{},
            blogForm: <Blog>{
                meta: [{
                    type: "text",
                    key: "",
                    value: "",
                }]
            }
        }
    },
    actions: {
        async getAllBlogs() {
            generalStore().setIsLoading(true);
            return GApiBlog.getAllBlogs('').then((res: any) => {
                generalStore().setIsLoading(false);
                this.blogList = res.data.data
                return res.data;
            });
        },
        async getBlog(id: any) {
            generalStore().setIsLoading(true);
            return GApiBlog.getBlog(id).then((res: any) => {
                generalStore().setIsLoading(false);
                this.blog = {
                    ...res.data,
                    meta: JSON.parse(res.data.meta)
                }
                return res.data;
            })
        },
        async createBlog(data: any) {
            generalStore().setIsLoading(true);
            return GApiBlog.createBlog(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, i18n.global.t("BlogCreated"));
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
        async updateBlog(data: any) {
            generalStore().setIsLoading(true);
            return GApiBlog.updateBlog(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, i18n.global.t("BlogUpdated"));
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
        async deleteBlog(id: any) {
            generalStore().setIsLoading(true);
            return GApiBlog.deleteBlog(id).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, i18n.global.t("BlogRemoved"));
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
        async likeBlog(id: any) {
            return GApiBlog.likeBlog(id).then(() => {
                this.blog.is_user_like_the_blog = this.blog.is_user_like_the_blog ? false : true;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async createBlogComment(data: any) {
            generalStore().setIsLoading(true);
            return GApiBlog.createBlogComment(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, i18n.global.t("BlogCommentCreated"));
                this.getBlog(this.blog.id);
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
        async updateBlogComment(data: any) {
            generalStore().setIsLoading(true);
            return GApiBlog.updateBlogComment(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, i18n.global.t("BlogCommentUpdated"));
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
        async deleteBlogComment(id: any) {
            generalStore().setIsLoading(true);
            return GApiBlog.deleteBlogComment(id).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, i18n.global.t("BlogCommentDeleted"));
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
    }
}) 
