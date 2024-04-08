import { LoginPayload, TokenResponse, User } from 'models';
import axiosClient from './axiosClient';

const authApi = {
    login(data: LoginPayload): Promise<TokenResponse> {
        const url = '/auth/login';
        return axiosClient.post(url, data);
    },

    profile(): Promise<User> {
        const url = '/auth/profile';
        return axiosClient.get(url);
    },

    logout() {
        const url = '/auth/logout';
        return axiosClient.post(url);
    },

    refresh(refresh_token: string): Promise<TokenResponse> {
        const url = '/auth/refresh';
        return axiosClient.post(url, {
            refresh_token,
        });
    },
};

export default authApi;
