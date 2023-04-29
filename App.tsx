import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }: any) => { // 1 Creamos el componente con el context y recibe los children (toda la app)
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => { // 2 Añadimos el componente con el context para que lo tenga todo el arbol de componentes
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/*<FadeScreen />*/}
      </AppState>
    </NavigationContainer>
  )
}

export default App;