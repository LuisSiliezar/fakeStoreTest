import { API_URL } from '@env';
import { AxiosAdapter } from './axios-adapter';

export const productsDbfetcher = new AxiosAdapter({
    baseURL: API_URL,
});
