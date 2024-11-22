import { GenericLayout } from '@presentation/components/layouts/GenericLayout';
import { CustomText } from '@presentation/components/shared/CustomText';
import { ThemeContext } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';

export const LoginScreen = () => {
    const theme = useContext(ThemeContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // TODO: Delete this
    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in both email and password');
            return;
        }

        setLoading(true);

        // Simulate an API call
        setTimeout(() => {
            setLoading(false);
            // In a real app, validate the email and password with an API
            Alert.alert('Success', 'Login successful!');
        }, 2000);
    };

    // TODO: Add validation for email and password

    return (
        <GenericLayout>
            <CustomText textType="title" title="Login" />
            <CustomText textType="subTitle" title="Please enter your credentials" />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={[styles.input, { color: theme?.colors.text, borderColor: theme?.colors.text }]}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
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
