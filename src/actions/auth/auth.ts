import { fakeStoreApi } from '@config/api/fakeStoreApi';
import { AuthResponse } from '@infrastructure/interfaces/auth.responses';

export const authLogin = async (username: string, password: string) => {
    try {
        const { data } = await fakeStoreApi.post<AuthResponse>('/auth/login', {
            username: username,
            password: password,
        });

        return data.token;

    } catch (error) {
        throw new Error(`Error logging in: ${error}`);
    }
};
