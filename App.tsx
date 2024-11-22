import 'react-native-gesture-handler';
import React from 'react';
import { StackNavigator } from '@presentation/navigator/StackNavigator';
import { ThemeContextProvider } from '@presentation/context/ThemeContext';
import { AuthProvider } from '@presentation/provider/AuthProvider';

export const App = () => {

  return (
    <ThemeContextProvider>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </ThemeContextProvider>
  );
};

export default App;
