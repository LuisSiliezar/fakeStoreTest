import React from 'react';
import { useAuthStore } from '@presentation/store/auth';
import { Pressable, Text, View } from 'react-native';

export const ProfileScreen = () => {
    const user = useAuthStore((state) => state.user);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{user?.name}</Text>
            <Text>{user?.email}</Text>
            <Text>{user?.phone}</Text>
            <Text>{user?.city}</Text>
            <Text>{user?.street}</Text>
            <Text>{user?.zipcode}</Text>

            <Pressable onPress={() => console.log('logout')}>
                <Text>Logout</Text>
            </Pressable>
        </View>
    );
};
