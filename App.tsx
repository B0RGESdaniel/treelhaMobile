import { StatusBar } from 'expo-status-bar';
import { Loading } from '@components/Loading';

import { Routes } from './src/routes';

import { ThemeProvider } from 'styled-components';
import { 
  useFonts, 
  Montserrat_500Medium, 
  Montserrat_600SemiBold, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
       style="inverted" 
       translucent 
      />
      { fontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  );  
}
