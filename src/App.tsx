import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { useFonts, Nunito_600SemiBold, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Routes } from './routes';
import { ThemeProvider } from 'styled-components/native';
import theme from './styles/theme';

const App = () =>{

  const [fontsLoaded] = useFonts({
    Nunito_400Regular, 
    Nunito_600SemiBold,
    Nunito_700Bold
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Carregando fontes</Text>
      </View>
    );
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
export { App }
