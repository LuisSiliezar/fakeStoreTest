import React, { useState } from 'react';
import { useAuthStore } from '@presentation/store/auth';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { CustomText } from '@presentation/components/shared/CustomText';

export const ProfileScreen = () => {
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        try {
            await logout();
        } catch (error) {
            console.error('Failed to logout:', error);
        }
        setLoading(false);
    };

    // TODO: Check data here and add skeleton loaders
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="rgb(220, 184, 255)" />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.textContainer}>
                <CustomText textType="subTitle" title="Full name" />
                <CustomText textType="title" title={user?.name ?? ''} />
            </View>
            <View style={styles.textContainer}>
                <CustomText textType="subTitle" title="Email" />
                <CustomText textType="title" title={user?.email ?? ''} />
            </View>
            <View style={styles.textContainer}>
                <CustomText textType="subTitle" title="Phone" />
                <CustomText textType="title" title={user?.phone ?? ''} />
            </View>
            <View style={styles.textContainer}>
                <CustomText textType="subTitle" title="City" />
                <CustomText textType="title" title={user?.city ?? ''} />
            </View>
            <View style={styles.textContainer}>
                <CustomText textType="subTitle" title="Street" />
                <CustomText textType="title" title={user?.street ?? ''} />
            </View>
            <View style={styles.textContainer}>
                <CustomText textType="subTitle" title="ZipCode" />
                <CustomText textType="title" title={user?.zipcode ?? ''} />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    onPress={handleLogout}
                    loading={loading}
                    disabled={loading}
                >
                    Logout
                </Button>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    textContainer: {
        marginTop: 24,
        textAlign: 'left',
    },
    buttonContainer: {
        marginTop: 24,
    },
});
