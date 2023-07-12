import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Login } from "@screens/Login";

import { ThemeProvider } from 'styled-components';
import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? 
      (
        <>
          <StatusBar style="inverted" />
          <Login />
        </>
      )
      : (<ActivityIndicator />)
      }
    </ThemeProvider>
  );  
}
