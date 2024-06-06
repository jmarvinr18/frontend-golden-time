import ApiService from "~/services/ApiService";


const header = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}


export default {
    async getUser(id: any) {
        return ApiService.get(`/api/v1/user/${id}`);
    },
}