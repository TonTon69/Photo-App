import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import queryString from "query-string";

// set up default config
const axiosLocal = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

const token = localStorage.getItem("access_token");

axiosLocal.interceptors.request.use(async (config: AxiosRequestConfig) => {
    // Handle token here ...
    config.headers = { Authorization: `Bearer ${token}` };
    return config;
});

axiosLocal.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    }
);

export default axiosLocal;
