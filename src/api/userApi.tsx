import { ROLES } from "../constants/roles";
import axiosLocal from "./axiosLocal";

const userApi = {
    signup: (email: string, password: string) => {
        const url = "/users";
        const roles = [ROLES.User];
        return axiosLocal.post(url, { email, password, roles });
    },

    signin: (params: { email: string; password: string }) => {
        const url = "/users";
        return axiosLocal.get(url, { params });
    },
};

export default userApi;
