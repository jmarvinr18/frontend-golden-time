import ApiService from "~/services/ApiService";

export default {
    async getAllSupplements(query: any) {
        return ApiService.get(`/api/v1/supplement${query}`);
    },
    async getDetailSupplement(id: any) {
        return ApiService.get(`/api/v1/supplement/${id}`);
    },
    async deleteSupplement(id: any) {
        return ApiService.delete(`/api/v1/supplement/${id}`);
    },
    async createSupplement(data: any) {
        return ApiService.post('/api/v1/supplement', data);
    },
    async updateSupplement(data: any) {
        return ApiService.put(`/api/v1/supplement/${data?.id}`, data);
    },
    async ratingSupplement(data: any) {
        return ApiService.post(`/api/v1/supplement/rating/${data?.id}`, data);
    }
}