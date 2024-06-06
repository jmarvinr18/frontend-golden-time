import ApiService from "~/services/ApiService";

const header = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

export default {
    async getFollows(query: any) {
        return ApiService.get(`/api/v1/follow?${query}`)
    },
    async toggleFollow(data: any) {
        return ApiService.post(`/api/v1/follow`, data)
    },
    async deleteFollow(id: string) {
        return ApiService.delete(`/api/v1/follow/${id}`)
    },    
}