import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@presentation/screens/auth/LoginScreen';
import { HomeScreen } from '@presentation/screens/home/HomeScreen';
import { LoadingScreen } from '@presentation/screens/loading/LoadingScreen';
import { ProductDetailScreen } from '@presentation/screens/product/ProductDetailScreen';

export type RootStackParams = {
    LoginScreen: undefined;
    HomeScreen: undefined;
    LoadingScreen: undefined;
    ProductDetailScreen: { productId: number };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen}
                options={{}}
            />
        </Stack.Navigator>
    );
};

