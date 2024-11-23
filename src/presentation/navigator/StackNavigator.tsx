import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '@presentation/screens/auth/LoginScreen';
import { LoadingScreen } from '@presentation/screens/loading/LoadingScreen';
import { ProductDetailScreen } from '@presentation/screens/product/ProductDetailScreen';
import { HomeDrawerNavigator } from './DrawerNavigator';

export type RootStackParams = {
    LoginScreen: undefined;
    HomeDrawer: undefined;
    LoadingScreen: undefined;
    ProductDetailScreen: { productId: number };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="LoadingScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeDrawer" component={HomeDrawerNavigator} />
            <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ headerShown: true, headerTitle: '' }} />
        </Stack.Navigator>
    );
};

