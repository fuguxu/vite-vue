import axios from 'axios';
const httpInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
    withCredentials: true,
})

httpInstance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

const http = {
    get(url, data, params={}){
        return httpInstance.get(url, {data, params})
    },
    post(url, data, params={}){
        return httpInstance.get(url, {data, params})
    }
}
export default http