import axios from "axios";

const axiosLocal = axios.create({
    baseURL: "http://localhost:8080",
});

export default axiosLocal;
