import React, { useContext, useEffect, useState } from 'react';
import { useProductsById } from '@presentation/hooks';
import { RootStackParams } from '@presentation/navigator/StackNavigator';
import { useRoute, RouteProp, ThemeContext, useNavigation } from '@react-navigation/native';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Category } from '@presentation/components/shared/Category';

export const ProductDetailScreen = () => {
    const route = useRoute<RouteProp<RootStackParams, 'ProductDetailScreen'>>();
    const navigator = useNavigation();
    const { loading, product } = useProductsById(route.params.productId);
    const [isExpanded, setIsExpanded] = useState(false);
    const theme = useContext(ThemeContext);
    const purpleColor = !theme?.dark ? 'rgb(120, 69, 172)' : 'rgb(220, 184, 255)';
    const displayedText = isExpanded ? product?.description : `${product?.description.substring(0, 100)}...`;
    const textColor = theme?.dark ? 'white' : 'black';

    const toggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    useEffect(() => {
        navigator.setOptions({
            headerTintColor: purpleColor,
            headerShown: true,
            headerTitle: '',
            headerShadowVisible: false,
            headerBackTitle: 'Back to home',
            headerStyle: {
                backgroundColor: 'transparent',
            },
        });

    });

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <Image source={{ uri: product?.image }} style={styles.image} />
            <View style={styles.container}>
                <Text style={[styles.title, { color: textColor }]}>{product?.title}</Text>
                <View style={styles.categoryContainer}>
                    <Category title={product!.category} />
                    <Category title={`Avg Rating: ${product!.rating_value}`} />
                </View>
                <Text style={[styles.description, { color: textColor }]}>{displayedText}</Text>
                <TouchableOpacity onPress={toggleExpand}>
                    <Text style={styles.toggleText}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        marginBottom: 35,
    },
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
        height: 400,
        resizeMode: 'contain',
        marginBottom: 16,
        marginTop: 16,
    },
    textContainer: {
        paddingHorizontal: 10,
        paddingBottom: 12,
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
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
    categoryContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        marginBottom: 8,
    },
});
