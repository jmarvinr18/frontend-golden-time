import axios from "axios";

const ApiService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    timeout: 1000,
  },
});

ApiService.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
  return config
})

export default ApiService;