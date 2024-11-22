import React, { useState } from 'react';
import { useProductsById } from '@presentation/hooks';
import { RootStackParams } from '@presentation/navigator/StackNavigator';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';

export const ProductDetailScreen = () => {
    const route = useRoute<RouteProp<RootStackParams, 'ProductDetailScreen'>>();
    const { loading, product } = useProductsById(route.params.productId);
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    // Truncate the text if it's longer than maxLength
    const displayedText = isExpanded ? product?.description : `${product?.description.substring(0, 100)}...`;


    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View>
            <Image source={{ uri: product?.image }} style={styles.image} />
            <View style={{ paddingVertical: 10 }}>
                <Text style={[styles.title, { color: isDark ? 'white' : 'black' }]}>{product?.title}</Text>
                <Text style={[styles.title, { color: isDark ? 'white' : 'black' }]}>{product?.category}</Text>
                <Text style={[styles.description, { color: isDark ? 'white' : 'black' }]}>{displayedText}</Text>
                <TouchableOpacity onPress={toggleExpand}>
                    <Text style={styles.toggleText}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </Text>
                </TouchableOpacity>
                <Text style={[styles.description, { color: isDark ? 'white' : 'black' }]}>{product?.rating_value}</Text>
            </View>
        </View>
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
    description: {
        fontSize: 18,
        fontWeight: 'regular',
        marginBottom: 5,
        lineHeight: 24,
    },
    price: {
        fontSize: 14,
        color: '#4f6af3',
        fontWeight: 'bold',
    },

    text: {
        fontSize: 16,
        color: '#333',
    },
    toggleText: {
        marginTop: 5,
        color: '#007BFF',
        fontSize: 17,
    },
});
