import { RootStackParams } from '@presentation/navigator/StackNavigator';
import { useAuthStore } from '@presentation/store/auth';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { PropsWithChildren, useEffect } from 'react';

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);


    useEffect(() => {
        if (isLoggedIn) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }],
            });
        } else {
            navigation.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }],
            });
        }
    });

    return (
        <>{children}</>
    );
};
