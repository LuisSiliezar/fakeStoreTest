import { ProductsList } from '@presentation/components/home/ProductsList';
import { useProducts } from '@presentation/hooks';
import { ThemeContext } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export const HomeScreen = () => {

    const theme = useContext(ThemeContext);
    const { loading, products } = useProducts();

    if (loading) {
        return (
            <View
                style={{ backgroundColor: theme?.colors.background }}>
                <Text style={{ color: theme?.colors.text }}>Loading...</Text>
            </View >
        );
    }

    return (
        <View
            style={{ backgroundColor: theme?.colors.background }}>
            <ProductsList products={products} />
        </View >
    );
};
