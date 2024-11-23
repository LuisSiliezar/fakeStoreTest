import React, { useContext } from 'react';
import { Formatter } from '@config/helpers/formatter';
import { Product } from '@domain/entities';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { type NavigationProp, ThemeContext, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '@presentation/navigator/StackNavigator';

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const theme = useContext(ThemeContext);
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <Pressable style={[styles.card, { backgroundColor: theme?.dark ? '#2d2d2d' : 'white', shadowColor: theme?.dark ? 'white' : '#ccc' }]}
            onPress={() => navigation.navigate('ProductDetailScreen', { productId: product.id })}
        >
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: theme?.dark ? 'white' : 'black' }]}>{product.title}</Text>
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
