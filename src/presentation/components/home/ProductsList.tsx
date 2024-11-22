import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { Product } from '@domain/entities';
import { ProductCard } from './ProductCard';

interface ProductsListProps {
    products: Product[];
}


export const ProductsList = ({ products }: ProductsListProps) => {
    return (
        <View>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCard product={item} />}
                keyExtractor={(item, index) => `${index} - ${item}`}
            />
        </View>
    );
};
