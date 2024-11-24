import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export const Loader = () => {
    const theme = useTheme();
    const purpleColor = theme.dark ? 'rgb(120, 69, 172)' : 'rgb(220, 184, 255)';

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={purpleColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
