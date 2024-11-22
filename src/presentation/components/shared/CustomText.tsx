import { ThemeContext } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { Text } from 'react-native-paper';

interface CustomTextProps {
    title: string;
    textType: 'subTitle' | 'title' | 'paragraph';
}

export const CustomText = ({ title, textType }: CustomTextProps) => {
    const theme = useContext(ThemeContext);
    const textStyle: TextStyle = styles[textType];

    return (
        <Text
            theme={{ colors: { text: theme?.colors.text } }}
            style={[textStyle, { color: theme?.colors.text }]}
        >
            {title}
        </Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 3,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'semibold',
        paddingBottom: 2,
    },
    paragraph: {
        fontSize: 16,
        fontWeight: 'normal',
        paddingBottom: 1,
    },
});

