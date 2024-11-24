import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import { CustomText } from '@presentation/components/shared/CustomText';
import { GenericLayout } from '@presentation/components/layouts/GenericLayout';
import { ThemeContext } from '@react-navigation/native';
import { useAuthStore } from '@presentation/store/auth/useAuthStore';
import { userByIdUseCases } from '@core/use-cases/users';
import { userDbfetcher } from '@config/adapters/http';

export const LoginScreen = () => {
    const theme = useContext(ThemeContext);
    const [form, setForm] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const login = useAuthStore((state) => state.login);
    const storeUser = useAuthStore((state) => state.storeUser);

    const isFormInvalid = () => {
        return form.username === '' || form.password === '';
    };

    const showAlert = (title: string, message: string) => {
        Alert.alert(title, message);
    };

    const getUserData = async () => {
        try {
            return await userByIdUseCases(userDbfetcher);
        } catch (error) {
            console.error('Failed to fetch user data:', error);
            return null;
        }
    };

    const handleLoginError = (error: any) => {
        if (error.toString().includes('401')) {
            showAlert('Login Failed', 'Please check your credentials and try again.');
        } else {
            showAlert('API Failed', 'Please try again later.');
        }
    };

    const handleLogin = async () => {
        setLoading(true);

        try {
            if (isFormInvalid()) {
                showAlert('Invalid Credentials', 'Please enter your credentials.');
                return;
            }

            const response = await login(form.username, form.password);
            const userData = await getUserData();

            if (!response || !userData) {
                showAlert('Login Failed', 'Please check your credentials and try again.');
                return;
            }

            storeUser(userData);
        } catch (error: any) {
            handleLoginError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <GenericLayout>
            <CustomText textType="title" title="Login" />
            <CustomText textType="subTitle" title="Please enter your credentials" />
            <TextInput
                placeholder="Username"
                value={form.username}
                onChangeText={(username) => setForm({ ...form, username })}
                style={[styles.input, { color: theme?.colors.text, borderColor: theme?.colors.text }]}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput
                placeholder="Password"
                value={form.password}
                onChangeText={(password) => setForm({ ...form, password })}
                style={[styles.input, { color: theme?.colors.text, borderColor: theme?.colors.text }]}
                secureTextEntry
            />
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    onPress={handleLogin}
                    loading={loading}
                    disabled={loading}
                >
                    Login
                </Button>
            </View>

        </GenericLayout>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 24,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    input: {
        marginTop: 16,
        height: 40,
        borderBottomWidth: 0.4,
        borderRadius: 3,
        padding: 0,
    },
});
