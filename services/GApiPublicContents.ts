import ApiService from "~/services/ApiService";

export default {
    async getHomepageDisplays(query: any) {
        return ApiService.get(`/api/v1/public/home${query}`);
    },
}