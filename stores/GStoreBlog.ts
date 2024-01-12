import { defineStore } from "pinia";
import GApiBlog from "~/services/GApiBlog";
import { useGeneralStore as generalStore } from "./GStoreGeneral";
import type { Comment } from './GStoreSupplement';
import type { User } from './GStoreAuth';

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
                generalStore().setSuccess(true, "Your blog has been successfully created!");
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async updateBlog(data: any) {
            generalStore().setIsLoading(true);
            return GApiBlog.updateBlog(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your blog has been successfully updated!");
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async deleteBlog(id: any) {
            generalStore().setIsLoading(true);
            return GApiBlog.deleteBlog(id).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your blog has been successfully removed!");
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
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
                generalStore().setSuccess(true, "Your blog has been successfully created!");
                this.getBlog(this.blog.id);
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async updateBlogComment(data: any) {
            generalStore().setIsLoading(true);
            return GApiBlog.updateBlogComment(data).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your blog has been successfully updated!");
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async deleteBlogComment(id: any) {
            generalStore().setIsLoading(true);
            return GApiBlog.deleteBlogComment(id).then((res: any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your blog has been successfully removed!");
                return res.data;
            }).catch((err: any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
    }
}) 
