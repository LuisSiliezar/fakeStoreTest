import { authLogin } from '@actions/auth';
import { AsyncStorageAdapter } from '@config/adapters/storage/async-storage.adapter';
import { create } from 'zustand';

export interface AuthState {
    isLoggedIn: boolean;
    token?: string;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set, _get) => ({
    isLoggedIn: false,
    token: undefined,
    login: async (username: string, password: string) => {
        const response = await authLogin(username, password);

        if (!response) {
            set({ isLoggedIn: false, token: undefined });
            return false;
        }

        await AsyncStorageAdapter.setItem('token', response);
        set({ isLoggedIn: true, token: response });

        return true;
    },
    logout: async () => {
        await AsyncStorageAdapter.removeItem('token');
        set({ isLoggedIn: false, token: undefined });
    },
}));
