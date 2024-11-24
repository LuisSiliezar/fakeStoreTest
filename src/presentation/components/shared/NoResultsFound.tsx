import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomText } from './CustomText';

export const NoResultsFound = () => {
    return (
        <View style={styles.container}>
            <CustomText textType="paragraph" title="No Results Found" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
