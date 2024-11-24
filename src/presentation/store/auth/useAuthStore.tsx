import { AsyncStorageAdapter } from '@config/adapters/storage/async-storage.adapter';
import { authLogin } from '@actions/auth';
import { create } from 'zustand';
import { User } from '@domain/entities';

export interface AuthState {
    isLoggedIn: boolean;
    token?: string;
    user?: User;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => Promise<void>;
    storeUser: (user: User) => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set, _get) => ({
    isLoggedIn: false,
    token: undefined,
    user: undefined,
    login: async (username: string, password: string) => {
        const response = await authLogin(username, password);

        if (!response) {
            set({ isLoggedIn: false, token: undefined, user: undefined });
            return false;
        }

        await AsyncStorageAdapter.setItem('token', response);
        set({ isLoggedIn: true, token: response });

        return true;
    },
    logout: async () => {
        set({ isLoggedIn: false, token: undefined, user: undefined });
        await AsyncStorageAdapter.removeItem('token');
    },
    storeUser: async (user: User) => {
        set({ user: user });
    },
}));
