import { ListParams, ListResponse } from 'models';
import { Product } from 'models/product';
import axiosClient from './axiosClient';

const productApi = {
    getAll(params?: Partial<ListParams>): Promise<ListResponse<Product>> {
        const url = '/products';
        return axiosClient.get(url, { params });
    },

    getDetail(id: string): Promise<Product> {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    add(data: Product): Promise<Product> {
        const url = '/products';
        return axiosClient.post(url, data);
    },

    update(id: string, data: Partial<Product>): Promise<Product> {
        const url = `/products/${id}`;
        return axiosClient.patch(url, data);
    },

    remove(id: string): Promise<any> {
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
};

export default productApi;
