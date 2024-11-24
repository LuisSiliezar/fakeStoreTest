import React, { useContext, useMemo, useState } from 'react';
import { ProductsList } from '@presentation/components/home/ProductsList';
import { StyleSheet, TextInput, View } from 'react-native';
import { Text } from 'react-native-paper';
import { ThemeContext } from '@react-navigation/native';
import { useProducts } from '@presentation/hooks';
import { NoResultsFound } from '@presentation/components/shared/NoResultsFound';

export const HomeScreen = () => {
    const theme = useContext(ThemeContext);
    const { loading, products } = useProducts();
    const [searchValue, setSearchValue] = useState('');
    const titleColor = theme?.dark ? 'white' : 'black';
    const purpleColor = theme?.dark ? 'rgb(220, 184, 255)' : 'rgb(220, 184, 255)';

    const filterProducts = useMemo(() => {
        return products.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()));
    }, [products, searchValue]);


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
                value={searchValue}
                onChangeText={setSearchValue}
                style={[styles.input, { color: titleColor, borderBottomColor: purpleColor }]}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {
                filterProducts.length > 0 ? <ProductsList products={filterProducts} /> : <NoResultsFound />
            }
        </View >
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderRadius: 3,
        padding: 0,
        margin: 16,
        fontSize: 18,
        borderBottomWidth: 1,
    },
});
