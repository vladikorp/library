import axios from 'axios'
import { useUserStore } from '../../store/userStore';

const env = import.meta.env
const userStore = useUserStore()

const libraryApi = axios.create({
  baseURL: env.VITE_BASE_API_URL
})

libraryApi.interceptors.request.use(
	(config) => {
		config.headers['Authorization'] = userStore.idToken
		return config
	},
  (error) => {
    return Promise.reject(error);
  }
);

libraryApi.interceptors.response.use(undefined, (error) => {
	return Promise.reject(error);
})

export default libraryApi
