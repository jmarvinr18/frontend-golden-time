import ApiService from "~/services/ApiService";

export default {
    async getHomepageDisplays(query: any) {
        return ApiService.get(`/api/v1/public/home${query}`);
    },
    async getBlog(id: any, query: any = "") {
        return ApiService.get(`/api/v1/public/blog/${id}${query}`);
    },
    async getAllBlog(query: any = "") {
        return ApiService.get(`/api/v1/public/blog${query}`);
    },
    async getSupplement(id: any, query: any = "") {
        return ApiService.get(`/api/v1/public/supplement/${id}${query}`);
    },
    async getAllSupplement(query: any = "") {
        return ApiService.get(`/api/v1/public/supplement${query}`);
    },
}