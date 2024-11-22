import { authLogin } from '@actions/auth';
import { create } from 'zustand';

export interface AuthState {
    isLoggedIn: boolean;
    token?: string;
    login: (email: string, password: string) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
    isLoggedIn: false,
    token: undefined,
    login: async (username: string, password: string) => {
        const response = await authLogin(username, password);

        console.log('🚀 ~ login: ~ response:', response);
        if (!response) {
            set({ isLoggedIn: false, token: undefined });
            return false;
        }

        set({ isLoggedIn: true, token: response });

        return true;
    },
}));
