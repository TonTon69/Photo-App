import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:3000/api/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};
const getUserBoard = () => {
    return axios.get(API_URL + "user", {
        headers: { Authorization: authHeader() },
    });
};
const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", {
        headers: { Authorization: authHeader() },
    });
};
const getAdminBoard = () => {
    return axios.get(API_URL + "admin", {
        headers: { Authorization: authHeader() },
    });
};

const userService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};

export default userService;
