import { StyleSheet } from 'react-native';

export interface ThemeColors {
    primary: string;
    text: string;
    background: string;
    cardBackground: string;
    buttonTextColor: string;
}

export const colors: ThemeColors = {
    primary: '#004494',
    text: 'black',
    background: '#F3F2F7',
    cardBackground: 'white',
    buttonTextColor: 'white',
};

export const lightColors: ThemeColors = {
    primary: '#004494',
    text: 'black',
    background: '#e6ecff',
    cardBackground: 'white',
    buttonTextColor: 'white',
};

export const darkColors: ThemeColors = {
    primary: '#5856D6',
    text: 'white',
    background: '#11122c',
    cardBackground: '#2d2d2d',
    buttonTextColor: 'white',
};

export const globalStyles = StyleSheet.create({
});
