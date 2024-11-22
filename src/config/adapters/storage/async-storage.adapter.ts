import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageAdapter {
    static async getItem(key: string): Promise<string | null> {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            throw new Error(`Error fetching data from storage: ${error}`);
        }
    }

    static async setItem(key: string, value: string): Promise<void> {
        try {
            return await AsyncStorage.setItem(key, value);
        } catch (error) {
            throw new Error(`Error setting data to storage: ${key} ${value}`);
        }
    }

    static async removeItem(key: string): Promise<void> {
        try {
            return await AsyncStorage.removeItem(key);
        } catch (error) {
            throw new Error(`Error deleting data to storage: ${key} `);
        }
    }
}
