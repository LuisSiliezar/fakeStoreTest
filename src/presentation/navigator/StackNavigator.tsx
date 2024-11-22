import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@presentation/screens/auth/LoginScreen';
import { HomeScreen } from '@presentation/screens/home/HomeScreen';
import { LoadingScreen } from '@presentation/screens/loading/LoadingScreen';

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Loading: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen}
             options={{ headerShown: false }}
             />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Loading" component={LoadingScreen} />
        </Stack.Navigator>
    );
};

