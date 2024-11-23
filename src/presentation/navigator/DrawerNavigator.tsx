import React from 'react';
import { HomeScreen } from '@presentation/screens/home/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '@presentation/screens/home/ProfileScreen';

const Drawer = createDrawerNavigator();

export const HomeDrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerTitle: '', headerShadowVisible: false }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
};
