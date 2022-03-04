import axiosClient from "./axiosClient";
import { ListParams, ListResponse, Product } from "../models";

const productApi = {
    getAll: (params: ListParams): Promise<ListResponse<Product>> => {
        const url = "/products";
        return axiosClient.get(url, { params });
    },

    get: (id: number) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
};

export default productApi;
