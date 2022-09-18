import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://my-wallet-api-mj.herokuapp.com'
})

export default axiosInstance;