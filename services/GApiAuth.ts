import ApiService from "~/services/ApiService";


export default {
    async login(params: any) {
        return ApiService.post('/auth/login', params)
    },
    async signUp(params: any) {
        return ApiService.post('/auth/register', params)
    },
    async updateProfile(params: any) {
        return ApiService.put(`/api/v1/me/${params?.id}`, params)
    },
    async getProfile(id: any) {
        return ApiService.get(`/api/v1/me/${id}`);
    },
    async forgotPassword(data: any) {
        return ApiService.post('/auth/forgot-password', data)
    },
    async resetPassword(data: any) {
        return ApiService.post('/auth/reset-password', data)
    },
    async logout() {
        return ApiService.post('/auth/logout')
    },
}