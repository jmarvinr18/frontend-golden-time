import ApiService from "~/services/ApiService";

const header = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

export default {
    async getAllSupplements(query: any) {
        return ApiService.get(`/api/v1/supplement${query}`);
    },
    async SearchSupplements(query: any) {
        return ApiService.get(`/api/v1${!useAuthStore().isAuthenticated ? '/public' : ""}/supplement${query}`);
    },
    async getDetailSupplement(id: any) {
        return ApiService.get(`/api/v1/supplement/${id}`);
    },
    async deleteSupplement(id: any) {
        return ApiService.delete(`/api/v1/supplement/${id}`);
    },
    async createSupplement(data: any) {
        return ApiService.post('/api/v1/supplement', data, header);
    },
    async updateSupplement(data: any) {
        return ApiService.post(`/api/v1/supplement/${data?.id}?_method=PUT`, data, header);
    },
    async ratingSupplement(data: any) {
        return ApiService.post(`/api/v1/supplement/rating/${data?.id}`, data);
    },
    async createCommentSupplement(data: any) {
        return ApiService.post(`/api/v1/supplement/user/comment`, data);
    },
    async addOrRemoveFromDrinkWish(supplement_id: string) {
        return ApiService.put(`/api/v1/user-supplement-wish/${supplement_id}`);
    },
    async addOrRemoveFromHasDranklist(supplement_id: string) {
        return ApiService.post(`/api/v1/user-supplement-drinking/${supplement_id}`);
    },
    async removeDrinkWish(supplement_id: string){
        return ApiService.delete(`/api/v1/user-supplement-wish/${supplement_id}`);
    }
}   