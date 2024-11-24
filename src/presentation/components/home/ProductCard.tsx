import React from 'react';
import { Formatter } from '@config/helpers/formatter';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Product } from '@domain/entities';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '@presentation/navigator/StackNavigator';
import { useTheme } from 'react-native-paper';

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    const theme = useTheme();
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const cardBackgroundColor = theme.dark ? 'white' : '#2d2d2d';
    const shadowColor = theme.dark ? 'white' : '#ccc';
    const titleColor = theme.dark ? 'black' : 'white';
    const priceColor = theme.dark ? 'rgb(120, 69, 172)' : 'rgb(220, 184, 255)';

    const handlePress = () => {
        navigation.navigate('ProductDetailScreen', { productId: product.id });
    };

    return (
        <Pressable
            style={[styles.card, { backgroundColor: cardBackgroundColor, shadowColor }]}
            onPress={handlePress}
        >
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: titleColor }]}>{product.title}</Text>
                <Text style={[styles.price, { color: priceColor }]}>
                    {Formatter.currency(product.price)}
                </Text>
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
        marginVertical: 5,
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold',
    },
});
