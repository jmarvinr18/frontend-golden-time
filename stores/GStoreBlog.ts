import { defineStore } from "pinia";
import GApiBlog from "~/services/GApiBlog";
import { useGeneralStore as generalStore } from "./GStoreGeneral";


export const useBlogStore = defineStore("blogStore", {
    state: () => {
        return {
            blogList:[]
        }
    },
    actions: {
        async getAllBlogs() {
            generalStore().setIsLoading(true);
            return GApiBlog.getAllBlogs('').then((res:any) => {
                generalStore().setIsLoading(false);
                return res.data;
            });
        },
        async getBlog(id:any) {
            generalStore().setIsLoading(true);
            return GApiBlog.getBlog(id).then((res:any) => {
                generalStore().setIsLoading(false);
                return res.data;
            })
        },
        async createBlog(data:any) {
            generalStore().setIsLoading(true);
            return GApiBlog.createBlog(data).then((res:any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your blog has been successfully created!");
                return res.data;
            }).catch((err:any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async updateBlog(data:any) {
            generalStore().setIsLoading(true);
            return GApiBlog.updateBlog(data).then((res:any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your blog has been successfully updated!");
                return res.data;
            }).catch((err:any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async deleteBlog(id:any) {
            generalStore().setIsLoading(true);
            return GApiBlog.deleteBlog(id).then((res:any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your blog has been successfully removed!");
                return res.data;
            }).catch((err:any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async likeBlog(id:any) {
            generalStore().setIsLoading(true);
            return GApiBlog.likeBlog(id).then((res:any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your blog has been successfully removed!");
                return res.data;
            }).catch((err:any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async createBlogComment(data:any) {
            generalStore().setIsLoading(true);
            return GApiBlog.createBlogComment(data).then((res:any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your blog has been successfully created!");
                return res.data;
            }).catch((err:any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async updateBlogComment(data:any) {
            generalStore().setIsLoading(true);
            return GApiBlog.updateBlogComment(data).then((res:any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your blog has been successfully updated!");
                return res.data;
            }).catch((err:any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
        async deleteBlogComment(id:any) {
            generalStore().setIsLoading(true);
            return GApiBlog.deleteBlogComment(id).then((res:any) => {
                generalStore().setIsLoading(false);
                generalStore().setSuccess(true, "Your blog has been successfully removed!");
                return res.data;
            }).catch((err:any) => {
                const msg = err.response.data.message;
                generalStore().setError(true, msg);
            });
        },
    }
}) 
