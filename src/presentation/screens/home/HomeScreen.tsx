import { ThemeContext } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

export const HomeScreen = () => {

    const theme = useContext(ThemeContext);

    return (
        <View
            style={{ backgroundColor: theme?.colors.background }}>
            <Button>Click me</Button>
        </View >
    );
};
