import axiosClient from "./axiosClient";

const productApi = {
    getAll: (params: { _page: number; _limit: number }) => {
        const url = "/products";
        return axiosClient.get(url, { params });
    },

    get: (id: number) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
};

export default productApi;
