import ApiService from "~/services/ApiService";

const header = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

export default {
    async getFollows(data: any) {
        return ApiService.post(`/api/v1/blog?${query}`)
    },
}