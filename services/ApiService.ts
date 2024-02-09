import axios from "axios";

const ApiService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    timeout: 1000,
  },
});

ApiService.interceptors.request.use((config) => {
  var authStore = useAuthStore()
  var { token } = storeToRefs(authStore)
  config.headers.Authorization = `Bearer ${token.value}`
  return config
})

export default ApiService;