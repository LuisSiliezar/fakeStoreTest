import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Product } from '@domain/entities';
import { ProductCard } from './ProductCard';
import { StyleSheet, View } from 'react-native';

interface ProductsListProps {
    products: Product[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
    return (
        <View>
            <FlatList
                data={products}
                contentContainerStyle={styles.containerList}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item, index) => `${index} - ${item}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerList: {
        paddingBottom: 200,
    },
});
