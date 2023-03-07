import axios from 'axios'

const env = import.meta.env

const libraryApi = axios.create({
  baseURL: env.BASE_API_URL
})

libraryApi.interceptors.request.use(
	(config) => {
    // add auth header here
		// config.headers['Authorization']
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
