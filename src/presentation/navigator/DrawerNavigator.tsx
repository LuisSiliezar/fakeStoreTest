import React from 'react';
import { HomeScreen } from '@presentation/screens/home/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '@presentation/screens/home/ProfileScreen';
import { useTheme } from 'react-native-paper';

const Drawer = createDrawerNavigator();

export const HomeDrawerNavigator = () => {
    const theme = useTheme();
    const purpleColor = theme.dark ? 'rgb(120, 69, 172)' : 'rgb(220, 184, 255)';

    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerTitle: '',
            headerShadowVisible: false,
            drawerActiveTintColor: purpleColor,
            headerTintColor: purpleColor,
            headerStyle: {
                backgroundColor: 'transparent',
            },
            drawerStyle: {
                backgroundColor: theme.dark ? 'white' : 'black',
            },
        }}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
};
