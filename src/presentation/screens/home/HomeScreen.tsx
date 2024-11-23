import { ProductsList } from '@presentation/components/home/ProductsList';
import { useProducts } from '@presentation/hooks';
import { ThemeContext } from '@react-navigation/native';
import React, { useContext, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

export const HomeScreen = () => {
    const theme = useContext(ThemeContext);
    const { loading, products } = useProducts();
    const [_searchValue, _setSearchValue] = useState('');

    const filterProducts = useMemo(() => {
        return products.filter((product) => product.title.toLowerCase().includes(_searchValue.toLowerCase()));
    }, [products, _searchValue]);

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
            <TextInput
                placeholder="Search"
                value={_searchValue}
                onChangeText={_setSearchValue}
                style={[styles.input, { color: theme?.colors.text }]}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <ProductsList products={filterProducts} />
        </View >
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderRadius: 3,
        padding: 0,
        margin: 16,
    },
});
