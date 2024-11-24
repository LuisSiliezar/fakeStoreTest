import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
interface CategoryProps {
    title: string;
}

export const Category = ({ title }: CategoryProps) => {
    const theme = useTheme();
    const color = theme.dark ? 'rgb(120, 69, 172)' : 'rgb(220, 184, 255)';
    return (
        <View style={[styles.container, { borderColor: color }]}>
            <Text style={[styles.textStyle, { color }]}
                numberOfLines={1} ellipsizeMode="tail"
            >{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.2,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 150,
        borderRadius: 6,
        marginVertical: 8,
    },
    textStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
});
