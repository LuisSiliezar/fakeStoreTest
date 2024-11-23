import { userDbfetcher } from '@config/adapters/http';
import { userByIdUseCases } from '@core/use-cases/users';
import { GenericLayout } from '@presentation/components/layouts/GenericLayout';
import { CustomText } from '@presentation/components/shared/CustomText';
import { useAuthStore } from '@presentation/store/auth/useAuthStore';
import { ThemeContext } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';

export const LoginScreen = () => {
    const theme = useContext(ThemeContext);
    const [form, setForm] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const login = useAuthStore((state) => state.login);
    const storeUser = useAuthStore((state) => state.storeUser);

    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await login(form.username, form.password);
            const userData = await userByIdUseCases(userDbfetcher);

            if (!response || !userData) {
                Alert.alert('Login Failed', 'Please check your credentials and try again.');
            }

            storeUser(userData);
        } catch (error: any) {

            if (error!.response?.status === 401) {
                Alert.alert('Login Failed', 'Please check your credentials and try again.');
            }

            Alert.alert('Login Failed', 'Please check your credentials and try again.');
        }
        setLoading(false);
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
    // TODO: add this to global styles
    input: {
        marginTop: 16,
        height: 40,
        borderBottomWidth: 0.4,
        borderRadius: 3,
        padding: 0,
    },
});
