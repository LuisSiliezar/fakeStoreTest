import { API_URL } from '@env';
import { AxiosAdapter } from './axios-adapter';

export const userDbfetcher = new AxiosAdapter({
    baseURL: API_URL,
});
