import ApiService from "~/services/ApiService";

const header = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

export default {
    async login(data: any) {
        return ApiService.post('/auth/login', data)
    },
    async signUp(data: any) {
        return ApiService.post('/auth/register', data)
    },
    async updateProfile(data: object, id: any) {
        return ApiService.post(`/api/v1/me/${id}?_method=PUT`, data, header)
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
    async verifyEmail(data: object) {
        return ApiService.get(`/auth/verify-email/${data}`)
    },
}