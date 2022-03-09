import axiosLocal from "./axiosLocal";

const userApi = {
    signup: (email: string, password: string) => {
        const url = "/users";
        return axiosLocal.post(url, { email, password });
    },

    signin: (email: string, password: string) => {
        const url = "/auth";
        return axiosLocal.post(url, { email, password });
    },
};

export default userApi;
