import { ThemeContext } from '@react-navigation/native';
import React, { PropsWithChildren, useContext } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

export const GenericLayout = ({ children }: PropsWithChildren) => {
    const theme = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme?.colors.background }]}>
            <StatusBar barStyle={theme?.dark ? 'light-content' : 'dark-content'} />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
});
