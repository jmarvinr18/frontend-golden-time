import ApiService from "~/services/ApiService";


export default {
    async getAllBlogs(query:any) {
        return ApiService.get(`/api/v1/blog?${query}`);
    },
    async getBlog(id:any) {
        return ApiService.get(`/api/v1/blog/${id}`);
    },
    async createBlog(data:any) {
        return ApiService.post(`/api/v1/blog`, data);
    },
    async updateBlog(data:any) {
        return ApiService.put(`/api/v1/blog/${data?.id}`, data);
    },
    async deleteBlog(id:any) {
        return ApiService.delete(`/api/v1/blog/${id}`);
    },
    async likeBlog(id:any) {
        return ApiService.put(`/api/v1/blog/like/${id}`)
    },

    // COMMENT
    async createBlogComment(data:any) {
        return ApiService.post(`/api/v1/blog/comment`, data);
    },
    async updateBlogComment(data:any) {
        return ApiService.put(`/api/v1/blog/comment/${data?.id}`, data);
    },
    async deleteBlogComment(id:any) {
        return ApiService.delete(`/api/v1/blog/comment/${id}`);
    },
}