import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { CustomText } from '../shared/CustomText';
import { View } from 'react-native';
import { Products } from '@domain/entities';

interface ProductsListProps {
    products: Products[];
}


export const ProductsList = ({ products }: ProductsListProps) => {
    return (
        <View>
            <FlatList
                data={products}
                renderItem={({ item }) => <CustomText textType="title" title={item.title} />}
                keyExtractor={(item, index) => `${index} - ${item}`}
            />
        </View>
    );
};
