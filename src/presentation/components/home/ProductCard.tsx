import { Formatter } from '@config/helpers/formatter';
import { Product } from '@domain/entities';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <Pressable style={[styles.card, { backgroundColor: isDark ? '#2d2d2d' : 'white', shadowColor: isDark ? 'white' : '#ccc' }]}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: isDark ? 'white' : 'black' }]}>{product.title}</Text>
                <Text style={styles.price}>{Formatter.currency(product.price)}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        margin: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    textContainer: {
        paddingHorizontal: 10,
        paddingBottom: 12,
        paddingTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: '#4f6af3',
        fontWeight: 'bold',
    },
});
