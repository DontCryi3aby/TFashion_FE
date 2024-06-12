import { ListParams, ListResponse } from 'models';
import { Category, Product } from 'models/product';
import axiosClient from './axiosClient';

const categoriesApi = {
    getAll(params?: Partial<ListParams>): Promise<ListResponse<Category>> {
        const url = '/categories';
        return axiosClient.get(url, { params });
    },

    getDetail(id: string | number): Promise<Category> {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },

    add(data: Product): Promise<Category> {
        const url = '/categories';
        return axiosClient.post(url, data);
    },

    update(id: string | number, data: Partial<Category>): Promise<Category> {
        const url = `/categories/${id}`;
        return axiosClient.patch(url, data);
    },

    remove(id: string | number): Promise<any> {
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    },
};

export default categoriesApi;
